<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;
use App\Models\Khoa;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ThongKeController extends BaseCmsController
{
    public function index()
    {
        $dataList = User::query()->whereHas('khoa')->with(['khoa'])->select('*', DB::raw('count(khoa_id) as count'))
            ->groupBy('khoa_id')->orderBy('count', 'desc')->get();

        $khoa = [];
        $khoaIdTmp = [];
        $count = [];

        foreach ($dataList as $item) {
            $khoa[] = $item->khoa->makhoa;
            $khoaIdTmp[] = $item->khoa->id;
            $count[] = $item->count;
        }

        $listKhoa = Khoa::whereNotIn('id', $khoaIdTmp)->orderBy('id', 'desc')->get();
        foreach ($listKhoa as $item) {
            $khoa[] = $item->makhoa;
            $count[] = 0;
        }

        $listKhoa2 = Khoa::query()->orderBy('id', 'desc')->get();

        $viewData = [
//            'dataList' => json_encode($dataList),
            'khoa' => json_encode($khoa),
            'count' => json_encode($count),
            'listKhoa2' => $listKhoa2,
        ];


        return view('cms.thongke.index', $viewData);
    }
}
