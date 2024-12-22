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

        $viewData = [
            'dataList' => $dataList
        ];

        return view('cms.khoa.index', $viewData);
    }

    public function create()
    {
        return view('cms.khoa.create');
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
        $entity = Khoa::where('id', $id)->first();
        if (empty($entity)) {
            return backRouteError(cmsRouteName('khoa.index'), transMessage('not_found'));
        }
        return view('cms.khoa.edit', ['entity' => $entity]);
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
            $entity->makhoa = createSlug(request('makhoa'));
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
