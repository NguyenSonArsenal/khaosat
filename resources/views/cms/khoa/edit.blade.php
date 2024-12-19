@extends('cms.layout.main')

@section('title', 'Admin - Cập nhật thông tin khoa')

@section('content')
  <div class="content-page teacher-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title"></h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="card-body__head d-flex">
                <h5 class="card-title">Cập nhật thông tin khoa</h5>
                <a href="{{cmsRoute('khoa.index')}}">
                  <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="card-body">
                  <form class="form-horizontal" action="{{cmsRoute('khoa.update', ['khoa' => $entity->id])}}" method="post"
                        enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    @include('cms.layout.structures._error_validate')
                    @include('cms.layout.structures._notification')

                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Tên khoa <span class="text-red">*</span></label>
                          <input type="text" class="form-control rounded-pill" name="name" value="{{ oldInput(old('name'), $entity->name) }}"
                                 placeholder="Nhập tên khoa">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Slug</label>
                          <input type="text" class="form-control rounded-pill" name="slug" readonly value="{{ $entity->slug }}">
                        </div>
                      </div>
                    </div>

                    <div class="border-top">
                      <div class="card-body">
                        <button type="submit" class="btn btn-success">Gửi đi</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@stop
