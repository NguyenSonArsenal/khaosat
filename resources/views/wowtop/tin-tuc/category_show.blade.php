@extends('wowtop.layout.main')
@section('title', 'Danh mục tin tức')

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/san-pham.css') }}">
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/tin-tuc.css') }}">
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/_pagination.css') }}">
  <style>
    @media (max-width: 767px) {
      .hideX {
        display: none;
      }
    }
  </style>
@endpush

@section('content')
  <section class="section-main section-benh-thuong-gap pb-8">
    <div class="wrapper w-full lg:w-3/4">
      <div class="flex">
        <div class="w-full md:w-2/3 px-2">
          <div class="text-[30px] text-[#2C5D6C] font-semibold my-3">{{ $categoryNew->name }}</div>
          @if ($dataList->count() == 0)
            <div>Danh sách trống</div>
          @endif
          <div class="">
            @foreach($dataList as $item)
              <div class="inline-flex py-3 border-t border-solid border-[#e1e1e1] w-full">
                <div class="w-1/3">
                  <a href="{{ clientRoute('page_news_detail_2', ['permalink' => $item->permalink]) }}">
                    <img src="{{ $item->avatar ? $item->avatar : asset('client/image/default.jpg') }}"
                         {!! getImgAlt($item->avatar_alt) !!} class="rounded-xl w-[260px] h-[135px] md:h-auto object-cover">
                  </a>
                </div>
                <div class="w-2/3 px-4 py-0">
                  <div class="leading-5">
                    <a href="{{ clientRoute('page_news_detail_2', ['permalink' => $item->permalink]) }}"
                       class="text-[#2C5D6C] hover:text-[#2C5D6C] text-[20px] font-bold
                       leading-tight md:leading-normal ellipsis-text-3">
                      {{ $item->title }}
                    </a>
                  </div>
                  <small class="block my-2 text-[#9F9E9A]">
                    {{ showCreateAtClient($item) }}
                  </small>
                  <p class="ellipsis-text-2 text-[14px] text-justify">{{ $item->meta_description }}</p>
                </div>
              </div>
          @endforeach

          <!-- Pagination -->
            <div class="mt-3 text-center">
              {{$dataList->appends(request()->all())->links('vendor.pagination.bootstrap-4')}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection

