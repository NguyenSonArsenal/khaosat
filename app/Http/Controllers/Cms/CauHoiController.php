<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;
use App\Http\Requests\Cms\QuestionRequest;
use App\Models\History;
use App\Models\Khoa;
use App\Models\Question;
use App\Models\Survey;
use App\Models\SurveyOptions;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CauHoiController extends BaseCmsController
{
    public function index($id)
    {
        $dataList = Question::query()->with(['khoa', 'surveyOptions'])->where('khoa_id', $id)->orderBy('id', 'desc')->paginate(getCmsPagination());

        $viewData = [
            'dataList' => $dataList,
            'khoaId' => $id
        ];

        return view('cms.question.index', $viewData);
    }

    public function create($id)
    {
        $viewData = [
            'khoaId' => $id
        ];
        return view('cms.question.create', $viewData);
    }

    public function store(QuestionRequest $request, $khoaId)
    {
        DB::beginTransaction();
        try {
            // insert to `question` table
            $questionId = Question::insertGetId([
                'question' => request('question'),
                'khoa_id' => $khoaId,
            ]);

            // insert to `choices` table
            foreach (request('options', []) as $text) {
                if (empty($text)) {
                    continue;
                }
                SurveyOptions::create([
                    'question_id' => $questionId,
                    'text' => $text,
                ]);
            }

            DB::commit();
            return backRouteSuccess('cms.question.index', transMessage('create_success'), ['id' => $khoaId]);
        } catch (\Exception $e) {
            Log::error($e);
            DB::rollBack();
            return backSystemError();
        }
    }

    public function edit($khoaid, $questionId)
    {
        $entity = Question::with('surveyOptions')->where('id', $questionId)->first();
        if (empty($entity)) {
            return backRouteSuccess(cmsRouteName('question.index'), t('not_found'), ['id' => $entity->khoa_id]);
        }
        $da = explode(",", $entity->da);

        $viewData = [
            'data' => $entity,
            'da' => $da,
        ];

        return view('cms.question.edit', $viewData);
    }

    public function update(QuestionRequest $request, $questionId)
    {
        DB::beginTransaction();
        try {
            $entity = Question::where('id', $questionId)->first();


            // Duyệt qua mảng tùy chọn mới

            $idSurveyOld = SurveyOptions::query()->where('question_id', $questionId)->pluck('id')->toArray();

            $arrDel = array_diff($idSurveyOld, array_keys($request->input('options')));

            // delete
            SurveyOptions::whereIn('id', $arrDel)->delete();
            foreach ($request->input('options') as $index => $optionText) {
                if (in_array($index, $idSurveyOld)) {
                    SurveyOptions::where('id', $index)->update(['text' => $optionText]); // update
                } else {
                    // store
                    SurveyOptions::create([
                        'question_id' => $questionId,
                        'text' => $optionText
                    ]);
                }
            }

            $entity->question = $request->question;
            $entity->save();

            DB::commit();
            return backRouteSuccess(cmsRouteName('question.index'), t('update_success'), ['id' => $entity->khoa_id]);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e);
            return backSystemError();
        }
    }

    public function destroy($id)
    {
        try {
            $entity = Question::where('id', $id)->first();
            if (empty($entity)) {
                return backSystemError();
            }
            $entity->delete();
            $entity->surveyOptions()->delete();
            return backSuccess(t('delete_success'));
        } catch (\Exception $e) {
            Log::error($e);
            return backSystemError();
        }
    }

    public function ketqua($maKhoa)
    {
        try {
            $khoa = Khoa::where('makhoa', $maKhoa)->first();
            if (empty($khoa)) {
                abort(404); // @todo
            }

            $dataList = User::where('khoa_id', $khoa->id)->paginate(getCmsPagination());

            $viewData = [
                'dataList' => $dataList,
                'makhoa' => $maKhoa,
                'khoaId' => $khoa->id,
            ];

            return view('cms.result.index', $viewData);
        } catch (\Exception $e) {
            Log::error($e);
            return backSystemError();
        }
    }

    public function ketquaChiTiet($maKhoa, $userId)
    {
        try {
            $khoa = Khoa::where('makhoa', $maKhoa)->first();
            if (empty($khoa)) {
                abort(404); // @todo
            }

            $survey = Survey::where('user_id', $userId)->pluck('survey_options_id')->toArray();
            $question = Question::query()->with('surveyOptions')->orderBy('id', 'desc')->where('khoa_id', $khoa->id)->get();

            $viewData = [
                'survey' => $survey,
                'makhoa' => $maKhoa,
                'khoaId' => $khoa->id,
                'question' => $question,
            ];

            return view('cms.result.show', $viewData);
        } catch (\Exception $e) {
            Log::error($e);
            return backSystemError();
        }
    }

}
