<?php

use App\Http\Controllers\Cms\AuthController;

Route::group(['as' => 'auth.'], function () {
    Route::get('/', [AuthController::class, 'showFormLogin']);
    Route::get('login', [AuthController::class, 'showFormLogin'])->name('login');
    Route::post('login', [AuthController::class, 'loginUser'])->name('login.post');
});

Route::group(['middleware' => ['authCms']], function() {
    Route::get('dashboard', ['as' => 'dashboard', 'uses' => 'DashboardController@index']);
    Route::resource('khoa', 'KhoaController');
//    Route::get('khoa/tao-cau-hoi/{slug}', 'KhoaController');

    Route::get('cau-hoi-khao-sat/{id}', ['as' => 'question.index', 'uses' => 'CauHoiController@index']);
    Route::get('cau-hoi-khao-sat/{id}/create', ['as' => 'question.create', 'uses' => 'CauHoiController@create']);
    Route::post('cau-hoi-khao-sat/{id}/store', ['as' => 'question.store', 'uses' => 'CauHoiController@store']);
    Route::get('cau-hoi-khao-sat/edit/{questionId}', ['as' => 'question.edit', 'uses' => 'CauHoiController@edit']);
    Route::put('cau-hoi-khao-sat/update/{questionId}', ['as' => 'question.update', 'uses' => 'CauHoiController@update']);
    Route::delete('cau-hoi-khao-sat/delete/{questionId}', ['as' => 'question.destroy', 'uses' => 'CauHoiController@destroy']);

    Route::get('gv/{id}', ['as' => 'gv.index', 'uses' => 'GvController@index']);
    Route::get('gv/{id}/create', ['as' => 'gv.create', 'uses' => 'GvController@create']);
    Route::post('gv/{id}/store', ['as' => 'gv.store', 'uses' => 'GvController@store']);
    Route::get('gv/edit/{gvId}', ['as' => 'gv.edit', 'uses' => 'GvController@edit']);
    Route::put('gv/update/{gvId}', ['as' => 'gv.update', 'uses' => 'GvController@update']);
    Route::delete('gv/delete/{gvId}', ['as' => 'gv.destroy', 'uses' => 'GvController@destroy']);

    Route::get('contact', ['as' => 'contact', 'uses' => 'ContactController@index']);
    Route::delete('contact/delete/{id}', ['as' => 'contact.delete', 'uses' => 'ContactController@delete']);
    Route::resource('product', 'ProductController');
    Route::resource('category-new', 'CategoryNewController')->except(['show']);
    Route::resource('news', 'NewsController')->except(['show']);
    Route::get('news/hot', ['as' => 'newx_hot', 'uses' => 'NewsController@getHotNews']); // fake news_hot to active menu
    Route::get('du-doan-chieu-cao', ['as' => 'ddcc.index', 'uses' => 'DdccController@index']);
    Route::get('dang-ki-dung-thu', ['as' => 'dkdt.index', 'uses' => 'DkdtController@index']);
    Route::get('dang-ki-dung-thu/excel', ['as' => 'dkdt.excel', 'uses' => 'DkdtController@excel']);
    Route::get('du-doan-chieu-cao/{id}', ['as' => 'ddcc.show', 'uses' => 'DdccController@show']);
    Route::post('news/arrange_hot', ['as' => 'news_arrange_hot.post', 'uses' => 'NewsController@arrangeHotNews']);
    Route::resource('image_manager', 'ImageManagerController')->only(['index', 'create', 'store', 'destroy']);
    Route::resource('redirect', 'RedirectController')->except(['show']);
    Route::resource('config', 'ConfigController')->except(['show']);
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');
});
