<?php

use App\Http\Controllers\Api\CongThucTangChieuCaoController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Client\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('du-doan-chieu-cao', [CongThucTangChieuCaoController::class, 'handleCongThucTangChieuCao'])->name('du-doan-chieu-cao');
Route::post('upload', [CongThucTangChieuCaoController::class, 'upload'])->name('ckeditor.upload');
Route::post('du-doan-chieu-cao-1', [HomeController::class, 'ddcc'])->name('du-doan-chieu-cao-1');
Route::post('du-doan-chieu-cao-1', [HomeController::class, 'ddcc'])->name('du-doan-chieu-cao-1');

Route::get('district/{province_id}', [LocationController::class, 'getDistrict'])->name('get_province');
Route::get('ward/{district_id}', [LocationController::class, 'getWard'])->name('get_district');
