@extends('cms.layout.main')

@push('styles')
@endpush

@push('scripts')
  <script src="{{ asset('cms/js/pages/question.js') }}"></script>
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
                <h5 class="card-title">Thêm mới</h5>
                <a href="{{route('cms.question.index', ['id' => $khoaId])}}">
                  <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="card">
                  <form class="form-horizontal" action="{{route('cms.question.store', ['id' => $khoaId])}}"
                        method="post" enctype="multipart/form-data">
                    @csrf
                    @include('cms.layout.structures._error_validate')
                    @include('cms.layout.structures._notification')

                    @if ($errors->has('options'))
                      <div class="error">{{ $errors->first('options') }}</div>
                    @endif

                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group row">
                            <label for="fname" class="col-sm-3 text-right control-label col-form-label">Câu hỏi
                              *</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" name="question" required
                                     value="{{ old('question') }}" placeholder="Nhập nội dung câu hỏi">
                            </div>
                          </div>

                          <div id="options-container">
                            <div class="form-group row option-item">
                              <label for="fname" class="col-sm-3 text-right control-label col-form-label">Lựa chọn 1 *</label>
                              <div class="col-sm-8">
                                <input type="text" class="form-control" name="options[]" required
                                       value="{{ old('options.0') }}"
                                       placeholder="Nhập nội dung">
                              </div>
                            </div>

                            <div class="form-group row option-item">
                              <label for="fname" class="col-sm-3 text-right control-label col-form-label">Lựa chọn 2
                                *</label>
                              <div class="col-sm-8">
                                <input type="text" class="form-control" name="options[]" required
                                       value="{{ old('options.1') }}"
                                       placeholder="Nhập nội dung">
                              </div>
                            </div>
                          </div>

                          <button type="button" class="btn btn-cyan" id="add-option">Thêm</button>
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
