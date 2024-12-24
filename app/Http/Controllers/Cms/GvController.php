<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;
use App\Http\Requests\Cms\GvRequest;
use App\Http\Requests\Cms\QuestionRequest;
use App\Models\Admin;
use App\Models\Question;
use Illuminate\Support\Facades\Log;

class GvController extends BaseCmsController
{
    public function index($id)
    {
        $dataList = Admin::query()->where('khoa_id', $id)->orderBy('id', 'desc')->paginate(getCmsPagination());

        $viewData = [
            'dataList' => $dataList,
            'khoaId' => $id
        ];

        return view('cms.gv.index', $viewData);
    }

    public function create($id)
    {
        if (!isCmsAdmin()) {
            abort(404);
        }
        $viewData = [
            'khoaId' => $id
        ];
        return view('cms.gv.create', $viewData);
    }

    public function store(GvRequest $request, $khoaId)
    {
        $params = $request->all();
        $params['khoa_id'] = $khoaId;
        $params['password'] = bcrypt($params['password']);
        $entity = new Admin();
        $entity->fill($params);
        $entity->save();
        return backRouteSuccess('cms.gv.index', transMessage('create_success'), ['khoaid' => $khoaId]);
    }

    public function edit($khoaId, $gvId)
    {
        if (!isCmsAdmin()) {
            abort(404);
        }
        $entity = Admin::where('id', $gvId)->first();
        if (empty($entity)) {
            abort(404);
        }
        $viewData = [
            'entity' => $entity,
            'khoaId' => $khoaId,
        ];
        return view('cms.gv.edit', $viewData);
    }

    public function update(GvRequest $request, $gvId)
    {
        try {
            $entity = Admin::where('id', $gvId)->first();

            if (request('password')) {
                $entity->password = bcrypt(request('password'));
            }

            $entity->email = request('email');
            $entity->save();

            return backRouteSuccess(cmsRouteName('gv.index'), t('update_success'), ['khoaid' => $entity->khoa_id]);
        } catch (\Exception $e) {
            Log::error($e);
            return backSystemError();
        }
    }

    public function destroy($id)
    {
        try {
            $entity = Admin::where('id', $id)->first();
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
}
