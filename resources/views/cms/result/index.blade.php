@extends('cms.layout.main')

@section('title', 'Kết quả khảo sát')

@section('content')
  <div class="content-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Danh sách kết quả khảo sát</h4>
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
                    <th scope="col">Câu hỏi</th>
                    <th scope="col">Đáp án A</th>
                    <th scope="col">Đáp án B</th>
                    <th scope="col">Đáp án C</th>
                    <th scope="col">Đáp án D</th>
                    <th scope="col">Đáp án đúng</th>
                    <th scope="col">Đáp án user</th>
                    <th scope="col">User</th>
                    <th scope="col">Thời gian tạo</th>
                  </tr>
                  </thead>
                  <tbody>
                  @foreach($dataList as $key => $item)
                    <tr>
                      <td>{{ getSTTCms($dataList, $key) }}</td>
                      <td>{{ $item->question }}</td>
                      <td>{{ $item->da_a }}</td>
                      <td>{{ $item->da_b }}</td>
                      <td>{{ $item->da_c }}</td>
                      <td>{{ $item->da_d }}</td>
                      <td>{{ $item->da }}</td>
                      <td>{{ $item->user_da }}</td>
                      <td>
                        <div>Name: {{ $item->user->name }}</div>
                        <div>Email: {{ $item->user->email }}</div>
                        <div>Phone: {{ $item->user->phone }}</div>
                      </td>
                      <td>{{ date('d-m-Y H:i:s', strtotime($item->created_at)) }}</td>
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
