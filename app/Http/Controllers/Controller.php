<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Pagination\LengthAwarePaginator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getValueDDCC($data, $columeActive, $height, $monthsSubscribed)
    {
        foreach ($data as $k => $item) {
            $age = $item['age'];
            if ($age < $monthsSubscribed) {
                $data[$k]['mainValue'] = 0;
            }
            if ($age == $monthsSubscribed) {
                $data[$k]['mainValue'] = $height;
            }
            if ($age > $monthsSubscribed) {
                $data[$k]['mainValue'] = $data[$k - 1]['mainValue'] * $data[$k][$columeActive] / $data[$k - 1][$columeActive];
            }
        }

        foreach ($data as $k => $item) {
            if ($k % 24 == 0) {
                $result['c1'][] = $item['c1'];
                $result['c2'][] = $item['c2'];
                $result['c3'][] = $item['c3'];
                $result['c4'][] = $item['c4'];
                $result['c5'][] = $item['c5'];
                $result['c6'][] = $item['c6'];
                $result['c7'][] = $item['c7'];
                $result['c8'][] = $item['c8'];
                $result['c9'][] = $item['c9'];
                $result['mainValue'][] = round($item['mainValue'], 2);
            }
        }

        return $result;
    }

    public function tinhChenhLechHeight($height, $entity)
    {
        $columnHeight = 'c1';
        if ($height < $entity->c1) {
            $mucdo = 'Dưới chuẩn độ 4';
            $chenhlech = $height - $entity->c1;
            $columnHeight = 'c1';
        }
        if ($entity->c1 <= $height && $height < $entity->c2) {
            $mucdo = 'Dưới chuẩn độ 3';
            $chenhlech = $height - $entity->c2;
            $columnHeight = abs($height - $entity->c1) - abs($height - $entity->c2) < 0 ? 'c1' : 'c2';
            $columnHeight = 'c1';
        }
        if ($entity->c2 <= $height && $height < $entity->c3) {
            $mucdo = 'Dưới chuẩn độ 2';
            $chenhlech = $height - $entity->c3;
            $columnHeight = abs($height - $entity->c2) - abs($height - $entity->c3) < 0 ? 'c2' : 'c3';
            $columnHeight = 'c2';
        }
        if ($entity->c3 <= $height && $height < $entity->c4) {
            $mucdo = 'Dưới chuẩn độ 1';
            $chenhlech = $height - $entity->c4;
            $columnHeight = abs($height - $entity->c3) - abs($height - $entity->c4) < 0 ? 'c3' : 'c4';
            $columnHeight = 'c3';
        }
        if ($entity->c4 <= $height && $height < $entity->c6) {
            $mucdo = 'Chuẩn';
            $chenhlech = $height - $entity->c5;
            if ($entity->c4 <= $height && $height < $entity->c5) {
                $columnHeight = 'c4';
            }
            if ($entity->c5 <= $height && $height < $entity->c6) {
                $columnHeight = 'c5';
            }
        }
        if ($entity->c6 <= $height && $height < $entity->c7) {
            $mucdo = 'Trên chuẩn độ 1';
            $chenhlech = $height - $entity->c6;
            $columnHeight = abs($height - $entity->c6) - abs($height - $entity->c7) < 0 ? 'c6' : 'c7';
            $columnHeight = 'c6';
        }
        if ($entity->c7 <= $height && $height < $entity->c8) {
            $mucdo = 'Trên chuẩn độ 2';
            $chenhlech = $height - $entity->c7;
            $columnHeight = abs($height - $entity->c7) - abs($height - $entity->c8) < 0 ? 'c7' : 'c8';
            $columnHeight = 'c7';
        }
        if ($entity->c8 <= $height && $height < $entity->c9) {
            $mucdo = 'Trên chuẩn độ 3';
            $chenhlech = $height - $entity->c8;
            $columnHeight = abs($height - $entity->c8) - abs($height - $entity->c9) < 0 ? 'c8' : 'c9';
            $columnHeight = 'c8';
        }
        if ($entity->c9 <= $height) {
            $mucdo = 'Trên chuẩn độ 4';
            $chenhlech = $height - $entity->c9;
            $columnHeight = 'c9';
        }
        return [
            'mucdo' => $mucdo,
            'chenhlech' => $chenhlech,
            'columnHeight' => $columnHeight,
        ];
    }

    /**
     * Paginate an array of items.
     *
     * @return LengthAwarePaginator         The paginated items.
     */
    public function paginate($items = [], $perPage = 5, $page = null, $options = [])
    {
        $page = $page ?: (LengthAwarePaginator::resolveCurrentPage() ?: 1);
        $items = collect($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
