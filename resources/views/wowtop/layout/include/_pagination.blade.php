<style>
    .pagination {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-left: 0;
        list-style: none;
        border-radius: 2px;
        justify-content: center;
    }

    .page-item.disabled .page-link {
        color: #6c757d;
        pointer-events: none;
        cursor: auto;
        background-color: #fff;
        border-color: #dee2e6;
    }

    .page-item:first-child .page-link {
        margin-left: 0;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }

    .page-link:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    .page-link {
        position: relative;
        display: block;
        padding: 0.5rem 0.75rem;
        margin-left: -1px;
        line-height: 1.25;
        color: #7460ee;
        background-color: #fff;
        border: 1px solid #dee2e6;
    }

    .page-item.active .page-link {
        z-index: 1;
        color: #fff;
        background-color: #2962FF;
        border-color: #2962FF;
    }

    .page-link:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    @media (max-width: 767.9px) {
        .page-link {
            padding: 0px;
            width: 30px;
            font-size: 15px;
            text-align: center;
            line-height: unset;
        }

        .pagination {
            width: 90%;
        }
    }
</style>

@if ($paginator->hasPages())
    <div class="pagination-container pagination-container">
        <nav>
            {{-- Previous Page Link --}}
            @if (!$paginator->onFirstPage())
                <a class="prev-chap mdc-icon-button btn btn-default" href="{{ $paginator->previousPageUrl() }}"
                   rel="prev">
                    Trang trước
                </a>
            @endif

            <ul class="pagination">
                @if($paginator->currentPage() > 3)
                    <li class="hidden-xs"><a class="mdc-icon-button" href="{{ $paginator->url(1) }}"><span
                                    class="icon-text">1</span></a></li>
                @endif
                @if($paginator->currentPage() > 4)
                    <li><span>...</span></li>
                @endif

                @foreach(range(1, $paginator->lastPage()) as $i)
                    @if($i >= $paginator->currentPage() - 2 && $i <= $paginator->currentPage() + 2)
                        @if ($i == $paginator->currentPage())
                            <li class="nav-active"><a class="mdc-icon-button active" href="#"><span
                                            class="icon-text">{{ $i }}</span></a></li>
                        @else
                            <li><a class="mdc-icon-button" href="{{ $paginator->url($i) }}"><span
                                            class="icon-text">{{ $i }}</span></a></li>
                        @endif
                    @endif
                @endforeach

                @if($paginator->currentPage() < $paginator->lastPage() - 3)
                    <li><span>...</span></li>
                @endif
                @if($paginator->currentPage() < $paginator->lastPage() - 2)
                    <li class="hidden-xs">
                        <a class="mdc-icon-button" href="{{ $paginator->url($paginator->lastPage()) }}"><span
                                    class="icon-text">{{ $paginator->lastPage() }}</span></a>
                    </li>
                @endif
            </ul>

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <a class="next-chap mdc-icon-button btn btn-default " href="{{ $paginator->nextPageUrl() }}" rel="next">
                    Trang sau
                </a>
            @endif
        </nav>
    </div>
@endif