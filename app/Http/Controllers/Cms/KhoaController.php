<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;
use App\Http\Requests\Cms\KhoaRequest;
use App\Models\CategoryNew;
use App\Models\Khoa;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class KhoaController extends BaseCmsController
{
    public function index()
    {
        $dataList = Khoa::query()->with(['user'])->orderBy('id', 'desc')->paginate(getCmsPagination());

        if (cmsCurrentUser()->khoa_id) {
            $dataList = Khoa::query()->with(['user'])->where('id', cmsCurrentUser()->khoa_id)->orderBy('id', 'desc')->paginate(getCmsPagination());
        }

        $viewData = [
            'dataList' => $dataList
        ];

        return view('cms.khoa.index', $viewData);
    }

    public function create()
    {
        if (empty(cmsCurrentUser()->khoa_id)) {
            return view('cms.khoa.create');
        }
        return cmsNoPermission();
    }

    public function store(KhoaRequest $request)
    {
        $params = $request->all();
        $params['slug'] = createSlug(request('name'));
        $entity = new Khoa();
        $entity->fill($params);
        $entity->save();
        return backRouteSuccess('cms.khoa.index', transMessage('create_success'));
    }

    public function edit($id)
    {
        if (cmsCurrentUser()->khoa_id && cmsCurrentUser()->khoa_id != $id) {
            return cmsNoPermission();
        }
        $entity = Khoa::where('id', $id)->first();
        if (empty($entity)) {
            return cmsNotFound();
        }

        $viewData = [
            'entity' => $entity,
        ];

        return view('cms.khoa.edit', $viewData);
    }

    public function update(KhoaRequest $request, $id)
    {
        try {
            $entity = Khoa::where('id', $id)->first();
            if (empty($entity)) {
                return backSystemError();
            }
            $entity->name = request('name');
            $entity->slug = createSlug(request('name'));
            $entity->makhoa = request('makhoa');
            $entity->save();
            return backRouteSuccess(cmsRouteName('khoa.index'), t('update_success'));
        } catch (\Exception $e) {
            Log::error($e);
            return backSystemError();
        }
    }

    public function destroy($id)
    {
        try {
            $entity = Khoa::where('id', $id)->first();
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
