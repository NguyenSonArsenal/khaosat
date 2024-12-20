@extends('cms.layout.main')

@section('title', 'Admin - Thêm thông tin khoa')

@push('scripts')
  <script src="{{ asset('cms/js/pages/khoa.js') }}"></script>
@endpush

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
                <h5 class="card-title">Thêm mới khoa</h5>
                <a href="{{cmsRoute('khoa.index')}}">
                  <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="card-body">
                  <form class="form-horizontal" action="{{cmsRoute('khoa.store')}}" method="post"
                        enctype="multipart/form-data">
                    @csrf
                    @include('cms.layout.structures._error_validate')
                    @include('cms.layout.structures._notification')

                    <input type="hidden" name="id" value="">

                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Tên khoa {!! required() !!}</label>
                          <input type="text" class="form-control rounded-pill" name="name" value="{{ old('name') }}"
                                 placeholder="Nhập tên khoa: Ex: Khoa công nghệ thông tin & truyền thông">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Mã khoa {!! required() !!}</label>
                            <input type="text" class="form-control rounded-pill" name="makhoa" value="{{ old('makhoa') }}"
                                 placeholder="Nhập mã khoa">
                          <small class="text-danger">Mã khoa {{ \App\Models\Khoa::MAX_LENGTH_MAKHOA }} kí tự, không chứa dấu cách</small>
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
