<div class="content">
  <div><small class="text_dacam"><i>Vui lòng click button download để tải xuống từng file</i></small></div>

  <table class="table_export">
    <thead>
      <tr>
        <th style="width: 100px">File</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      @for($i=1; $i<=$numFiles; $i++)
        <tr>
          <td>File_{{$i}}</td>
          <td><a href="{{clientRoute('download_transaction', ['fileNumber' => $i]) . '?' . request()->getQueryString()}}"><i class="ri-file-download-line text_dacam"></i></a></td>
        </tr>
      @endfor
    </tbody>
  </table>
</div>
