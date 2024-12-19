<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ddcc;
use App\Models\HeightChildren;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CongThucTangChieuCaoController extends Controller
{
    public $monthsConfig = [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240];
    public $oldChild = 0;

    public $addOn = 0;

    public function setAddOn($value) {
        $this->addOn = $value;
    }
    public function getAddOn() {
        return $this->addOn;
    }

    public function handleCongThucTangChieuCao(Request $request)
    {
        try {
            $params = request()->all();
            $createdAt = $params['created_at'];
            $height = $params['height'];
            $weight = $params['weight'];
            $monthsSubscribed = arrayGet(getAge(arrayGet($params, 'date_of_birth'), $createdAt), 'age');
            $gender = $params['gender'];

            $entity = HeightChildren::where('age', $monthsSubscribed)->where('type', $gender)->first(); // height
            $entityWeight = HeightChildren::where('age', $monthsSubscribed)
                ->where('type', $gender == getConstant('GENDER_BOY') ? HeightChildren::TYPE_WEIGHT_BOY : HeightChildren::TYPE_WEIGHT_GIRL)->first(); // weight

            $columnHeight = 'c1';
            if (!empty($entity)) {
                $tmpChenhLechHeight = $this->tinhChenhLechHeight($height, $entity);
                $mucdo = arrayGet($tmpChenhLechHeight, 'mucdo');
                $chenhlech = arrayGet($tmpChenhLechHeight, 'chenhlech');
                $columnHeight = arrayGet($tmpChenhLechHeight, 'columnHeight');
            }

            if (!empty($entityWeight)) {
                if ($weight < $entityWeight->c1) {
                    $mucdoWeight = 'Dưới chuẩn độ 4';
                    $chenhlechWeight = $weight - $entityWeight->c1;
                }
                if ($entityWeight->c1 <= $weight && $weight < $entityWeight->c2) {
                    $mucdoWeight = 'Dưới chuẩn độ 3';
                    $chenhlechWeight = $weight - $entityWeight->c2;
                }
                if ($entityWeight->c2 <= $weight && $weight < $entityWeight->c3) {
                    $mucdoWeight = 'Dưới chuẩn độ 2';
                    $chenhlechWeight = $weight - $entityWeight->c3;
                }
                if ($entityWeight->c3 <= $weight && $weight < $entityWeight->c4) {
                    $mucdoWeight = 'Dưới chuẩn độ 1';
                    $chenhlechWeight = $weight - $entityWeight->c4;
                }
                if ($entityWeight->c4 <= $weight && $weight < $entityWeight->c6) {
                    $mucdoWeight = 'Chuẩn';
                    $chenhlechWeight = $weight - $entityWeight->c5;
                }
                if ($entityWeight->c6 <= $weight && $weight < $entityWeight->c7) {
                    $mucdoWeight = 'Trên chuẩn độ 1';
                    $chenhlechWeight = $weight - $entityWeight->c6;
                }
                if ($entityWeight->c7 <= $weight && $weight < $entityWeight->c8) {
                    $mucdoWeight = 'Trên chuẩn độ 2';
                    $chenhlechWeight = $weight - $entityWeight->c7;
                }
                if ($entityWeight->c8 <= $weight && $weight < $entityWeight->c9) {
                    $mucdoWeight = 'Trên chuẩn độ 3';
                    $chenhlechWeight = $weight - $entityWeight->c8;
                }
                if ($entityWeight->c9 <= $weight) {
                    $mucdoWeight = 'Trên chuẩn độ 4';
                    $chenhlechWeight = $weight - $entityWeight->c9;
                }
            }

            $data = HeightChildren::select(['id', 'type', 'age', 'c1','c2', 'c3', 'c4', 'c5','c6', 'c7', 'c8', 'c9'])->where('type', $gender)->get()->toArray();

            $values = $this->getValueDDCC($data, $columnHeight, $height, $monthsSubscribed);

            if (arrayGet($params, 'store_db')) {
                $tmpMaPhacDo1 = 'WT' . date('y') . date('m') . date('d');
                $tmpEntity = Ddcc::where('ma_phac_do_1', $tmpMaPhacDo1)->orderBy('id', 'desc')->first();
                $params['ma_phac_do_1'] = $tmpMaPhacDo1;
                if (empty($tmpEntity)) {
                    $params['ma_phac_do_2'] = '001';
                } else {
                    $ma_phac_do_2 = (int)$tmpEntity->ma_phac_do_2 + 1;
                    switch (strlen($ma_phac_do_2)) {
                        case 1:
                            $params['ma_phac_do_2'] = '00' . $ma_phac_do_2;
                            break;
                        case 2:
                            $params['ma_phac_do_2'] = '0' . $ma_phac_do_2;
                            break;
                        case 3:
                            $params['ma_phac_do_2'] = $ma_phac_do_2;
                            break;
                    }
                }
                $params['ma_phac_do'] = $tmpMaPhacDo1 . $params['ma_phac_do_2'];
                Ddcc::create($params);
            }

            $data = [
                'chenhlech_height' => !empty($chenhlech) ? number_format($chenhlech, 2) : '',
                'mucdo_height' => !empty($mucdo) ? $mucdo : '',
                'chenhlech_weight' => !empty($chenhlechWeight) ? number_format($chenhlechWeight, 2) : '',
                'mucdo_weight' => !empty($mucdoWeight) ? $mucdoWeight : '',
                'yValues' => $values['mainValue'],
                'xValues' => array_keys($values['mainValue']),
                'values' => $values,
                'h20' => end($values['mainValue']),
                'maphacdo' => arrayGet($params, 'ma_phac_do'),
                'age' => arrayGet(getAge(arrayGet($params, 'date_of_birth')), 'text'),
            ];

            return response()->json($data, 201);
        } catch (\Exception $e) {
            Log::error($e);
            dd($e);
        }
    }

    function roundUp($n, $x=5) {
        return  round($n * 2) / 2;
    }
    public function upload(Request $request)
    {
        if ($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . $extension;

            $request->file('upload')->move(public_path('media'), $fileName);

            $url = asset('media/' . $fileName);

            return response()->json(['fileName' => $fileName, 'uploaded' => 1, 'url' => $url]);
        }
    }
}
