@extends('cms.layout.main')

@section('content')
  <div class="content-page teacher-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Câu hỏi</h4>
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
                  @if (!cmsCurrentUser()->khoa_id)
                    <a href="{{route('cms.khoa.index')}}" style="margin-right: 2px">
                      <button type="button" class="btn btn-cyan btn-sm">Quay lại</button>
                    </a>
                  @endif
                  <a href="{{route('cms.question.create', ['id' => $khoaId])}}">
                    <button type="button" class="btn btn-cyan btn-sm">Thêm mới</button>
                  </a>
                </div>
              </div>

              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">

                <table class="table table-striped table-bordered dataTable" role="grid">
                  <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Câu hỏi</th>
                    <th scope="col">Lựa chọn</th>
                    <th scope="col">Hành động</th>
                  </tr>
                  </thead>
                  <tbody>
                  @foreach($dataList as $key => $entity )
                    <tr>
                      <td>{{ getSTTCms($dataList, $key) }}</td>
                      <td>{{ $entity->question }}</td>
                      <td>
                        @foreach($entity->surveyOptions as $key => $c)
                          <div style="margin-bottom: 2px">Lựa chọn {{ $key+1 }}: {{ $c->text }}</div>
                        @endforeach
                      </td>
                      <td>
                        <div class="comment-footer d-flex">
                          <a href="{{ route('cms.question.edit', ['questionId' => $entity->id]) }}">
                            <button type="button" class="btn btn-cyan btn-xs">Sửa</button>
                          </a>
                          <form action="{{ route('cms.question.destroy', ['questionId' => $entity->id]) }}" method="post">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn-danger btn btn-xs rounded"
                                    onclick="return confirm('Xoá. Bạn có chắc không?')"
                            >
                              Xóa
                            </button>
                          </form>
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
