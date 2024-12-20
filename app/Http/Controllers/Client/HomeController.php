<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\StoreSurveyRequest;
use App\Models\Khoa;
use App\Models\Question;

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
        $question = Question::query()->orderBy('id', 'desc')->where('khoa_id', $khoa->id)->get();

        $viewData = [
            'makhoa' => $makhoa,
            'question' => $question,
        ];

        return view('client.index', $viewData);
    }

    public function store(StoreSurveyRequest $request)
    {
        dd($request->all());
    }
}
