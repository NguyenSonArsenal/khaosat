<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;
use App\Http\Requests\Cms\GvRequest;
use App\Http\Requests\Cms\QuestionRequest;
use App\Models\Admin;
use App\Models\Khoa;
use App\Models\Question;
use Illuminate\Support\Facades\Log;

class GvController extends BaseCmsController
{
    public function index($id)
    {
        $dataList = Admin::query()->where('khoa_id', $id)->orderBy('id', 'desc')->paginate(getCmsPagination());

        $khoa = Khoa::where('id', $id)->first();
        if (empty($khoa)) {
            return redirect()->route(cmsRouteName('not_found'));
        }

        $viewData = [
            'dataList' => $dataList,
            'khoaId' => $id,
            'khoa' => $khoa
        ];

        return view('cms.gv.index', $viewData);
    }

    public function create($id)
    {
        $khoa = Khoa::where('id', $id)->first();
        if (empty($khoa)) {
            return redirect()->route(cmsRouteName('not_found'));
        }
        if (!isCmsAdmin()) {
            return cmsNoPermission();
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
        if (!isCmsAdmin() && cmsCurrentUserId() != $gvId) {
            return cmsNoPermission();
        }
        $entity = Admin::where('id', $gvId)->first();
        if (empty($entity)) {
            return cmsNotFound();
        }
        $khoa = Khoa::where('id', $khoaId)->first();
        if (empty($khoa)) {
            return cmsNotFound();
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
