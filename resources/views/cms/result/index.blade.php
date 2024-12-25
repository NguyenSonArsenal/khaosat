@extends('cms.layout.main')

@section('title', 'Kết quả khảo sát')

@section('content')
  <div class="content-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Danh sách kết quả khảo sát khoa: <strong>{{ $khoa->name }}</strong></h4>
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
                <h5 class="card-title">Danh sách ({{ $dataList->total() }} bản ghi)</h5>
                <a href="{{ cmsRoute('khoa.index') }}">
                  <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <table class="table table-striped table-bordered dataTable" role="grid">
                  <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">SĐT</th>
                    <th scope="col">Thời gian tạo</th>
                    <th scope="col">Hành động</th>
                  </tr>
                  </thead>
                  <tbody>
                  @foreach($dataList as $key => $item)
                    <tr>
                      <td>{{ getSTTCms($dataList, $key) }}</td>
                      <td>{{ $item->name }}</td>
                      <td>{{ $item->email }}</td>
                      <td>{{ $item->phone }}</td>
                      <td>{{ date('d-m-Y H:i:s', strtotime($item->created_at)) }}</td>
                      <td>
                        <a href="{{ cmsRoute('khaosat.ketqua.show', ['makhoa' => $makhoa, 'userId' => $item->id]) }}">
                          <button type="button" class="btn btn-cyan btn-xs">Xem</button>
                        </a>
                      </td>
                    </tr>
                  @endforeach
                  </tbody>
                </table>

                <!-- Pagination -->
                {{ $dataList->appends(\Illuminate\Support\Facades\Request::all())->render('cms.layout.structures._pagination')}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@stop
