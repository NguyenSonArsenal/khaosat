<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\Ward;

class LocationController extends Controller
{
    public function getDistrict($id)
    {
        $data = District::where('province_id', $id)->get()->toArray();
        return response()->json($data, 201);
    }

    public function getWard($id)
    {
        $data = Ward::where('district_id', $id)->get()->toArray();
        return response()->json($data, 201);
    }
}
