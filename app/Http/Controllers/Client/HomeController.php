<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\StoreSurveyRequest;
use App\Models\History;
use App\Models\Khoa;
use App\Models\Question;
use App\Models\Survey;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    public function index($makhoa)
    {
        if (empty($makhoa)) {
            abort(404, "No book has been found.");
        }

        $khoa = Khoa::where('makhoa', $makhoa)->first();
        if (empty($khoa)) {
            abort(404);
        }
        $question = Question::query()->with('surveyOptions')->orderBy('id', 'desc')->where('khoa_id', $khoa->id)->get();

        $viewData = [
            'makhoa' => $makhoa,
            'question' => $question,
            'khoa' => $khoa
        ];

        return view('client.index', $viewData);
    }

    public function store(StoreSurveyRequest $request)
    {
        DB::beginTransaction();
        try {
            // insert to `user` table
            $userId = User::insertGetId([
                'name' => request('name'),
                'email' => request('email'),
                'phone' => request('phone'),
                'khoa_id' => request('khoa_id'),
                'created_at' => now(),
            ]);

            // insert to `history` table
            $answers = request('answer');

            foreach ($answers as $key => $answer) {
                foreach ($answer as $item) {
                    Survey::create([
                        'question_id' => $key,
                        'user_id' => $userId,
                        'survey_options_id' => $item,
                    ]);
                }
            }
            DB::commit();
            return redirect()->to(clientRoute('khaosat.success', ['makhoa' => request('makhoa')]))->with('success', 'your message,here');
        } catch (\Exception $e) {
            dd($e);
            Log::error($e);
            DB::rollBack();
            return backSystemError();
        }
    }

    public function checkDa($correctAnswers = [], $userSelectedAnswers = [])
    {
        return empty(array_diff($correctAnswers, $userSelectedAnswers)) && empty(array_diff($userSelectedAnswers, $correctAnswers)) ? 1: 2;
    }

    public function success($makhoa)
    {
        if (empty($makhoa)) {
            abort(404, "No book has been found.");
        }

        $khoa = Khoa::where('makhoa', $makhoa)->first();
        if (empty($khoa)) {
            abort(404);
        }

        if (session('success')) {
            return view('client.success');
        } else {
            abort(404);
        }
    }
}
