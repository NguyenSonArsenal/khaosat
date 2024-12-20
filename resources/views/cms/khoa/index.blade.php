@extends('cms.layout.main')

@section('title', 'Khoa - Quản lý khoa')

@section('content')
  <div class="content-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Danh sách khoa</h4>
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
                <a href="{{ cmsRoute('khoa.create') }}">
                  <button type="button" class="btn btn-cyan btn-sm">Thêm mới</button>
                </a>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <table class="table table-striped table-bordered dataTable" role="grid">
                  <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên khoa</th>
                    <th scope="col">Mã khoa</th>
                    <th scope="col">Thời gian tạo</th>
                    <th scope="col">Thời gian cập nhật</th>
                    <th scope="col">Hành động</th>
                  </tr>
                  </thead>
                  <tbody>
                  @foreach($dataList as $key => $item)
                    <tr>
                      <td>{{ getSTTCms($dataList, $key) }}</td>
                      <td>{{ $item->name }}</td>
                      <td>{{ $item->makhoa }}</td>
                      <td>{{ date('d-m-Y H:i:s', strtotime($item->created_at)) }}</td>
                      <td>{{ date('d-m-Y H:i:s', strtotime($item->updated_at)) }}</td>
                      <td>
                        <div class="comment-footer">
                          <a href="{{ cmsRoute('khoa.edit', ['khoa' => $item->id]) }}">
                            <button type="button" class="btn btn-cyan btn-xs">Sửa</button>
                          </a>
                          <a href="{{ cmsRoute('question.index', ['id' => $item->id]) }}">
                            <button type="button" class="btn btn-primary btn-xs">Câu hỏi</button>
                          </a>
                          <a href="{{ cmsRoute('gv.index', ['id' => $item->id]) }}">
                            <button type="button" class="btn btn-cyan btn-xs">GV</button>
                          </a>
                          <a href="#modal_confirm_delete"
                             class="btn-danger btn btn-xs modal_confirm_delete rounded"
                             data-toggle="modal"
                             data-form-action="{{ cmsRoute('khoa.destroy', ['khoa' => $item->id]) }}"
                          >
                            Xóa
                          </a>
                        </div>
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
