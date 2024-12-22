@extends('cms.layout.main')

@push('styles')
  <link rel="stylesheet" href="{{ asset('client/assets/css/index.css') }}">
  <style>
    .main .item {
      background: #e5e5e5;
    }
  </style>
@endpush

@section('title', 'Kết quả khảo sát')

@section('content')
  <div class="content-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Kết quả khảo sát</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              @include('cms.layout.structures._notification')
              <div class="card-body__head d-flex">
                <h5 class="card-title">Danh sách ({{ count($question) }} bản ghi)</h5>
                <a href="{{ cmsRoute('khaosat.ketqua', ['makhoa' => $makhoa]) }}">
                  <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4 main">

                @foreach($question as $key => $q)
                  <div class="item">
                    <div class="question">{{ $key+1 }}. {{ $q->question }}</div>
                    <div class="answer">
                      @foreach($q->surveyOptions as $k => $item)
                        <label>
                          <input type="checkbox" disabled {{ in_array($item->id, $survey) ? "checked" : ""  }}
                          >
                          <span class="text text-wrong">{{ $item->text }}</span>
                        </label>
                      @endforeach
                    </div>

                    @if ($errors->has("answer.{$q->id}"))
                      <div style="color: red;">
                        {{ $errors->first("answer.{$q->id}") }}
                      </div>
                    @endif
                  </div>
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@stop
