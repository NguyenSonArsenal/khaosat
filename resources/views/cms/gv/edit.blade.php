@extends('cms.layout.main')

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
                <h5 class="card-title">Cập nhật thông tin giáo viên</h5>
                <a href="{{route('cms.gv.index', ['id' => $entity->khoa_id])}}">
                  <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="card">
                  <form class="form-horizontal" action="{{route('cms.gv.update', ['gvId' => $entity->id])}}"
                        method="post" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    @include('cms.layout.structures._error_validate')
                    @include('cms.layout.structures._notification')

                    <input type="hidden" name="id" value="{{ $entity->id }}">

                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group row">
                            <label for="fname" class="col-sm-3 text-right control-label col-form-label">Email *</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" name="email" required
                                     value="{{ oldInput(old('email'), $entity->email) }}" placeholder="Nhập username viết liền không dấu">
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="fname" class="col-sm-3 text-right control-label col-form-label">Mật khẩu</label>
                            <div class="col-sm-8">
                              <input type="password" class="form-control" name="password" value="" placeholder="Nhập mật khẩu 6-255 kí tự">
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="fname" class="col-sm-3 text-right control-label col-form-label">Nhập lại mật khẩu</label>
                            <div class="col-sm-8">
                              <input type="password" class="form-control" name="password_confirmation" value="" placeholder="Nhập lại mật khẩu">
                            </div>
                          </div>
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
