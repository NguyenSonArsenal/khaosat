@extends('cms.layout.main')

@section('content')
  <div class="content-page teacher-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Danh sách giáo viên khoa <strong>{{ $khoa->name }}</strong></h4>
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
                <div>
                  <a href="{{route('cms.khoa.index')}}" style="margin-right: 2px">
                    <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                  </a>
                  @if (isCmsAdmin())
                    <a href="{{route('cms.gv.create', ['khoaid' => $khoaId])}}">
                      <button type="button" class="btn btn-cyan btn-sm">Thêm mới</button>
                    </a>
                  @endif
                </div>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">

                <table class="table table-striped table-bordered dataTable" role="grid">
                  <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Email</th>
                    <th scope="col">Thời gian tạo</th>
                    <th scope="col">Thời gian cập nhật</th>
                    <th scope="col">Hành động</th>
                  </tr>
                  </thead>
                  <tbody>
                  @foreach($dataList as $key => $entity )
                    <tr>
                      <td>{{ getSTTCms($dataList, $key) }}</td>
                      <td>{{ $entity->email }}</td>
                      <td>{{ date('d-m-Y H:i:s', strtotime($entity->created_at)) }}</td>
                      <td>{{ date('d-m-Y H:i:s', strtotime($entity->updated_at)) }}</td>
                      <td>
                        <div class="comment-footer d-flex">
                          @if ($entity->hasAllowEditGv())
                            <a href="{{ cmsRoute('gv.edit', ['gvId' => $entity->id, 'khoaid' => $khoaId]) }}">
                              <button type="button" class="btn btn-cyan btn-xs">Sửa</button>
                            </a>
                          @endif

                          @if (isCmsAdmin())
                            <form action="{{ cmsRoute('gv.destroy', ['gvId' => $entity->id]) }}" method="post">
                              @csrf
                              @method('DELETE')
                              <button type="submit" class="btn-danger btn btn-xs rounded"
                                      onclick="return confirm('Xoá. Bạn có chắc không?')"
                              >
                                Xóa
                              </button>
                            </form>
                          @endif
                        </div>
                      </td>
                    </tr>
                  @endforeach
                  </tbody>
                </table>

                <!-- Pagination -->
                {{ $dataList->appends(request()->all())->links('pagination::bootstrap-4') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@stop
