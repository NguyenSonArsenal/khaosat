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
                            <h5 class="card-title">Cập nhật</h5>
                            <a href="{{route('cms.question.index', ['id' => $data->khoa_id])}}">
                                <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                            </a>
                        </div>

                        <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                            <div class="card">
                                <form class="form-horizontal" action="{{route('cms.question.update', ['questionId' => $data->id])}}" method="post" enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')

                                    @include('cms.layout.structures._error_validate')
                                    @include('cms.layout.structures._notification')

                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group row">
                                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Câu hỏi *</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" name="question" required value="{{$data->question}}" placeholder="Nhập nội dung câu hỏi">
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Đáp án A *</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" name="da_a"
                                                               required value="{{ oldInput(old('da_a'), $data->da_a) }}"
                                                               placeholder="Nhập đáp án A">
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Đáp án B *</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" name="da_b"
                                                               required value="{{ oldInput(old('da_b'), $data->da_b) }}"
                                                               placeholder="Nhập đáp án B">
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Đáp án C *</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" name="da_c"
                                                               required value="{{ oldInput(old('da_c'), $data->da_c) }}"
                                                               placeholder="Nhập đáp án C">
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Đáp án D *</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" name="da_d"
                                                               required value="{{ oldInput(old('da_d'), $data->da_d) }}"
                                                               placeholder="Nhập đáp án D">
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Đáp án đúng *</label>
                                                    <div class="col-sm-8">
                                                        <fieldset id="group2" style="position: relative; top: 8px">
                                                            <input type="checkbox" value="a" name="da[]" {{ in_array('a', $da) ? 'checked' : '' }}> A &nbsp;&nbsp;&nbsp;
                                                            <input type="checkbox" value="b" name="da[]" {{ in_array('b', $da) ? 'checked' : '' }}> B &nbsp;&nbsp;&nbsp;
                                                            <input type="checkbox" value="c" name="da[]" {{ in_array('c', $da) ? 'checked' : '' }}> C &nbsp;&nbsp;&nbsp;
                                                            <input type="checkbox" value="d" name="da[]" {{ in_array('d', $da) ? 'checked' : '' }}> D &nbsp;&nbsp;&nbsp;
                                                        </fieldset>
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
