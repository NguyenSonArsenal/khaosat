<?php

use App\Http\Controllers\Cms\AuthController;
use App\Http\Controllers\Cms\Base\BaseCmsController;

Route::group(['as' => 'auth.'], function () {
    Route::get('/', [AuthController::class, 'showFormLogin']);
    Route::get('login', [AuthController::class, 'showFormLogin'])->name('login');
    Route::post('login', [AuthController::class, 'loginUser'])->name('login.post');
});

Route::group(['middleware' => ['authCms']], function() {
    Route::get('thong-ke', ['as' => 'thongke', 'uses' => 'ThongKeController@index']);

    Route::get('not-found', [BaseCmsController::class, 'notFound'])->name('not_found');
    Route::get('no-permission', [BaseCmsController::class, 'noPermission'])->name('no_permission');

    Route::resource('khoa', 'KhoaController');
//    Route::get('khoa/tao-cau-hoi/{slug}', 'KhoaController');

    Route::get('cau-hoi-khao-sat/{khoaid}', ['as' => 'question.index', 'uses' => 'CauHoiController@index']);
    Route::get('cau-hoi-khao-sat/{khoaid}/create', ['as' => 'question.create', 'uses' => 'CauHoiController@create']);
    Route::post('cau-hoi-khao-sat/{khoaid}/store', ['as' => 'question.store', 'uses' => 'CauHoiController@store']);
    Route::get('cau-hoi-khao-sat/{khoaid}/edit/{questionId}', ['as' => 'question.edit', 'uses' => 'CauHoiController@edit']);
    Route::put('cau-hoi-khao-sat/update/{questionId}', ['as' => 'question.update', 'uses' => 'CauHoiController@update']);
    Route::delete('cau-hoi-khao-sat/delete/{questionId}', ['as' => 'question.destroy', 'uses' => 'CauHoiController@destroy']);

    Route::get('ket-qua-khao-sat/{makhoa}', ['as' => 'khaosat.ketqua', 'uses' => 'CauHoiController@ketqua']);
    Route::get('ket-qua-khao-sat/{makhoa}/{userId}', ['as' => 'khaosat.ketqua.show', 'uses' => 'CauHoiController@ketquaChiTiet']);

    Route::get('gv/{khoaid}', ['as' => 'gv.index', 'uses' => 'GvController@index']);
    Route::get('gv/{khoaid}/create', ['as' => 'gv.create', 'uses' => 'GvController@create']);
    Route::post('gv/{id}/store', ['as' => 'gv.store', 'uses' => 'GvController@store']);
    Route::get('gv/{khoaid}/edit/{gvId}', ['as' => 'gv.edit', 'uses' => 'GvController@edit']);
    Route::put('gv/update/{gvId}', ['as' => 'gv.update', 'uses' => 'GvController@update']);
    Route::delete('gv/delete/{gvId}', ['as' => 'gv.destroy', 'uses' => 'GvController@destroy']);

    Route::get('logout', [AuthController::class, 'logout'])->name('logout');
});
