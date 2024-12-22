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
                <h5 class="card-title">Cập nhật</h5>
                <a href="{{route('cms.question.index', ['id' => $data->khoa_id])}}">
                  <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="card">
                  <form class="form-horizontal" action="{{route('cms.question.update', ['questionId' => $data->id])}}"
                        method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    @include('cms.layout.structures._error_validate')
                    @include('cms.layout.structures._notification')

                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group row">
                            <label for="fname" class="col-sm-3 text-right control-label col-form-label">Câu hỏi
                              *</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" name="question"
                                     required value="{{ oldInput(old('question'), $data->question) }}"
                                     placeholder="Nhập nội dung câu hỏi">
                            </div>
                          </div>
                          <div id="options-container">
                            @foreach($data->surveyOptions as $key => $item)
                              <div class="form-group row option-item">
                                <label for="fname" class="col-sm-3 text-right control-label col-form-label">
                                  Lựa chọn {{ $key+1 }} {{ $key == 0 || $key == 1 ? '*' : '' }}
                                </label>
                                <div class="col-sm-8">
                                  <input type="text" class="form-control" name="options[{{$item->id}}]"
                                         value="{{ $item->text }}"
                                         placeholder="Nhập lựa chọn">
                                </div>

                                @if ($key >= 2)
                                  <button type="button" class="remove-option btn btn-xs btn-danger">Xóa</button>
                                @endif
                              </div>
                            @endforeach
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
