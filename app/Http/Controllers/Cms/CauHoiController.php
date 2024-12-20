<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;
use App\Http\Requests\Cms\QuestionRequest;
use App\Models\History;
use App\Models\Khoa;
use App\Models\Question;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class CauHoiController extends BaseCmsController
{
    public function index($id)
    {
        $dataList = Question::query()->with('khoa')->where('khoa_id', $id)->orderBy('id', 'desc')->paginate(getCmsPagination());

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
        $params = $request->all();
        $params['da'] = implode(',', $request->input('da', []));
        $params['khoa_id'] = $khoaId;
        $entity = new Question();
        $entity->fill($params);
        $entity->save();
        return backRouteSuccess('cms.question.index', transMessage('create_success'), ['id' => $khoaId]);
    }

    public function edit($questionId)
    {
        $entity = Question::where('id', $questionId)->first();
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
        try {
            $entity = Question::where('id', $questionId)->first();

            $entity->question = $request->question;
            $entity->da_a = $request->da_a;
            $entity->da_b = $request->da_b;
            $entity->da_c = $request->da_c;
            $entity->da_d = $request->da_d;
            $entity->da = implode(',', $request->input('da', []));

            $entity->save();

            return backRouteSuccess(cmsRouteName('question.index'), t('update_success'), ['id' => $entity->khoa_id]);
        } catch (\Exception $e) {
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

            $userIds = User::where('khoa_id', $khoa->id)->pluck('id')->toArray();
            $dataList = History::with('user')->whereIn('user_id', $userIds)->paginate(getCmsPagination());

            $viewData = [
                'dataList' => $dataList,
                'makhoa' => $maKhoa,
                'khoaId' => $khoa->id,
            ];

            return view('cms.result.index', $viewData);
        } catch (\Exception $e) {
            dd($e);
            Log::error($e);
            return backSystemError();
        }
    }

}
