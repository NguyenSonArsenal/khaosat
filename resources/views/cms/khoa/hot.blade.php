@extends('cms.layout.main')

@section('title', 'Admin - Quản lý tin tức nổi bật')



@push('scripts')
  <script>
    $(function() {
      $('#sortable_books').sortable({
        axis: 'y',
        update: function (event, ui) {
          var data = [];
          $('tr.row1').each(function(index,element) {
            data.push({
              id: $(this).attr('data-id'),
              position: index+1
            });
          });
          
          console.log(data, '//datadata')
          
          var url = $('input[name="arrange_hot"]').val();
          var csrf = $('meta[name="csrf-token"]').attr('content');
    
          // POST to server using $.post or $.ajax
          $.ajax({
            data: {data: data},
            type: 'POST',
            url: url,
            headers: {'X-CSRF-TOKEN': csrf},
            cache: false,
            success: function(response) {
              $("#sortable_books tr").each(function (n) {
                $(this).find('.number').html(n + 1);
              });
            }
          });
        }
      });
    });
  </script>
@endpush

@section('content')
  <input name="arrange_hot" value="{{ cmsRoute('news_arrange_hot.post') }}" type="hidden">
  
  <div class="content-page">
    <div class="page-breadcrumb">
      <div class="row">
        <div class="col-12 d-flex no-block align-items-center">
          <h4 class="page-title">Danh sách tin tức nổi bật</h4>
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
                <h5 class="card-title">Danh sách ({{ count($dataList) }} bản ghi)</h5>
              </div>
              <div><span>Bạn vui lòng kéo thả, sau đó đợi 5s để hệ thống cập nhật dữ liệu. Sẽ có 4 bài viết nổi bật nhất hiển thị lên giao diện tin tức.</span></div>
              <br>
  
              <div id="zero_config_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <table class="table table-striped table-bordered dataTable" role="grid">
                  <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">IDD</th>
                    <th scope="col">Ảnh đại diện</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Tiêu đề</th>
                  </tr>
                  </thead>
                  <tbody id="sortable_books">
                    @foreach($dataList as $key => $item)
                      <tr id="{{$item->id}}" data-id="{{ $item->id }}" class="row1">
                        <td class="number">{{ $key + 1 }}</td>
                        <td>{{ $item->id }}</td>
                        <td>
                          @if ($item->avatar)
                            <img src="{{ asset($item->avatar) }}" width="50px" height="50px">
                          @endif
                        </td>
                        <td>{{ !empty($item->categoryNew->name) ? $item->categoryNew->name : '' }}</td>
                        <td>{{ $item->title }}</td>
                      </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@stop
