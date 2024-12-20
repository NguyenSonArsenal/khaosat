<?php

use App\Http\Controllers\Client\HomeController;

Route::get('khao-sat/{makhoa}', ['as' => 'home', 'uses' => 'HomeController@index']);
Route::get('khao-sat/{makhoa}/success', ['as' => 'khaosat.success', 'uses' => 'HomeController@success']);
Route::post('khao-sat/{makhoa}/store', ['as' => 'khaosat.store', 'uses' => 'HomeController@store']);
