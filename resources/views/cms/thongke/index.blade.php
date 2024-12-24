@extends('cms.layout.main')

@section('title', 'Thống kê')

@push('styles')
  <link rel="stylesheet" href="{{ asset('cms/css/thongke.css') }}">
@endpush

@push('scripts')
  <script src="{{ asset('cms/libs/chart/chart.js') }}"></script>
  <script src="{{ asset('cms/js/thongke.js') }}"></script>
@endpush

@section('content')
  <div class="content-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Thống kê số lượng khảo sát từng khoa</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <section class="section_bar">
                <div>
                  <input type="hidden" name="khoa" value="{{ $khoa }}">
                  <input type="hidden" name="count" value="{{ $count }}">

                  <div class="data">
                    <div class="bidv_container">
                      <canvas id="bidvBarChart"></canvas>
                    </div>
                  </div>

                  <div style="margin-top: 15px">
                    <div><strong class="text-danger">Chú thích:</strong></div>
                    <table>
                      @foreach($listKhoa2 as $item)
                        <tr>
                          <td><strong>{{ $item->makhoa }}:</strong></td>
                          <td>{{ $item->name }}</td>
                        </tr>
                      @endforeach
                    </table>
                  </div>
                </div>
              </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@stop
