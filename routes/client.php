<?php

use App\Http\Controllers\Client\HomeController;
use \App\Http\Controllers\Client\LocalizationController;


Route::get('/', [HomeController::class, 'showPageWowTop'])->name('home');
Route::get('san-pham', [HomeController::class, 'showPageListProductV2'])->name('page_san_pham');
Route::get('san-pham/{slug?}', [HomeController::class, 'showPageDetailProduct'])->name('page_chi_tiet_san_pham');
Route::get('dang-ki-dung-thu', [HomeController::class, 'showPageDangKiDungThu'])->name('page_dang_ki_dung_thu');
Route::get('san-pham-v2', [HomeController::class, 'showPageListProduct'])->name('page_san_pham_v2');

Route::get('danh-muc-tin-tuc/{permalink}', [HomeController::class, 'danhMucTinTucDetailV2'])->name('page_danh_muc_tin_tuc_detail');
Route::get('tin-tuc', [HomeController::class, 'showPageTinTucV2'])->name('page_news');
Route::get('tin-tuc/{permalink}', [HomeController::class, 'newsDetailV2'])->name('page_news_detail');

Route::get('danh-muc-tin-tuc-2', [HomeController::class, 'showDanhMucTinTucV2'])->name('page_danh_muc_tin_tuc_2');
Route::get('danh-muc-tin-tuc-2/{permalink}', [HomeController::class, 'danhMucTinTucDetail'])->name('page_danh_muc_tin_tuc_detail_2');
Route::get('tin-tuc-2', [HomeController::class, 'showPageTinTuc'])->name('page_news_2');
Route::get('tin-tuc-2/{permalink}', [HomeController::class, 'newsDetail'])->name('page_news_detail_2');

Route::get('not-found', [HomeController::class, 'pageNotFound'])->name('page_not_found');
Route::get('insert-data-cong-thuc', [HomeController::class, 'congThuc2']);
Route::get('du-doan-chieu-cao', [HomeController::class, 'showPageCongThucTangChieuCao'])->name('page_cong_thuc_tang_chieu_cao');
Route::get('du-doan-chieu-cao/thanh-cong/{maphacdo}', [HomeController::class, 'ddccSuccess'])->name('get.ddcc_success');
Route::post('ddcc', [HomeController::class, 'ddcc'])->name('post.ddcc');
Route::post('dkdt', [HomeController::class, 'postDkdt'])->name('post.dkdt');
Route::post('ajax-dkdt', [HomeController::class, 'postAjaxDkdt'])->name('post.ajax.dkdt');
