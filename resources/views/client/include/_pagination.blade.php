@if ($paginator->hasPages())
  <div class="pagination_inner">
    <div>Hiển thị {{ priceFormat($paginator->firstItem()) }}  tới
      {{ priceFormat($paginator->lastItem()) }} của
      {{ priceFormat($paginator->total()) }} bản ghi</div>
    <ul class="pagination">
      <!-- Nút Previous -->
      @if ($posts->onFirstPage())
        <li class="disabled"><span>&laquo;</span></li>
      @else
        <li><a href="{{ $posts->previousPageUrl() }}">&laquo;</a></li>
      @endif

    <!-- Hiển thị trang đầu tiên -->
      @if ($posts->currentPage() > 2)
        <li><a href="{{ $posts->url(1) }}">1</a></li>
        @if ($posts->currentPage() > 3)
          <li class="dots">...</li>
        @endif
      @endif

    <!-- Hiển thị trang hiện tại, trang trước và trang sau -->
      @for ($i = max(1, $posts->currentPage() - 1); $i <= min($posts->lastPage(), $posts->currentPage() + 1); $i++)
        @if ($i == $posts->currentPage())
          <li class="active"><a>{{ $i }}</a></li>
        @else
          <li><a href="{{ $posts->url($i) }}">{{ $i }}</a></li>
        @endif
      @endfor

    <!-- Hiển thị trang cuối cùng -->
      @if ($posts->currentPage() < $posts->lastPage() - 1)
        @if ($posts->currentPage() < $posts->lastPage() - 2)
          <li class="dots">...</li>
        @endif
        <li><a href="{{ $posts->url($posts->lastPage()) }}">{{ $posts->lastPage() }}</a></li>
      @endif

    <!-- Nút Next -->
      @if ($posts->hasMorePages())
        <li><a href="{{ $posts->nextPageUrl() }}">&raquo;</a></li>
      @else
        <li class="disabled"><span>&raquo;</span></li>
      @endif
    </ul>
  </div>
@endif
