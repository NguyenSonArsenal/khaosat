@extends('cms.layout.main')

@section('title', 'Admin - Dashboard')

@push('styles')
  <link href="{{ asset('cms/css/dashboard.css') }}" rel="stylesheet">
@endpush

@section('content')
  <div class="content-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Trang quản trị</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card" style="margin: 15px 15px 0 15px">
            <div class="card-body" style="padding-top: 15px !important;">
              <div class="row">
                <div class="col-md-6 col-lg-2 col-xlg-3">
                  <div class="card card-hover">
                    <div class="box bg-cyan text-center">
                      <h1 class="font-light text-white"><i class="mdi mdi-view-dashboard"></i></h1>
                      <h6 class="text-white">Lorem ...</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">

            {{-- @include('layouts.cms.structures._notification')--}}

            <div class="card-body__head card-body__filter text-center">
              <a href="{{ cmsRoute('logout') }}"
                 class="btn-cyan btn btn-xs modal_confirm_delete rounded"
              >
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@stop
