@extends('wowtop.layout.main')
@section('title', 'Tin tức')

@push('pagination')
  @php
    $page = request('page', 1);
    $lastPage = $dataList->lastPage();
    $fullUrl = request()->fullUrl();
    if ($page == 1 && $lastPage > 1) {
      $result = '<link rel="next" href="' . $dataList->nextPageUrl() . '" />';
    } else if ($page == $lastPage) {
      $result = '<link rel="prev" href="' . $dataList->previousPageUrl() . '" />';
    } else {
      $result1 = '<link rel="next" href="' . $dataList->nextPageUrl() . '" />';
      $result2 = '<link rel="prev" href="' . $dataList->previousPageUrl() . '" />';
      $result = $result1 . $result2;
    }
  @endphp
  {!! $result !!}
@endpush

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
          @if (!empty($newHot1))
            <div>
              <div class="text-[30px] text-[#2C5D6C] font-semibold my-3">Tin nổi bật</div>
              <div>
                <div class="md:inline-flex py-3 border-t border-solid border-[#e1e1e1]">
                  <div class="md:w-3/5 md:pr-4 mb-3">
                    <a href="javascript:void(0)">
                      <img src="{{ $newHot1->avatar }}">
                    </a>
                    <br>
                    <div class="leading-5">
                      <a href="{{ clientRoute('page_news_detail_2', ['permalink' => $newHot1->permalink]) }}" class="text-[#2C5D6C] hover:text-[#2C5D6C] text-[20px] font-bold
                       leading-tight md:leading-normal ellipsis-text-2">
                        {{ $newHot1->title }}
                      </a>
                    </div>
                    <small class="block my-2 text-[#9F9E9A]">
                      Ngày đăng: {{ showPublishAtClient($newHot1) }} <br>
                      @if (!empty($newHot1->categoryNew->name))
                        Danh mục: <a class="hover:text-[#2C5D6C]" href="{{ clientRoute('page_danh_muc_tin_tuc', ['permalink' => $newHot1->categoryNew->slug]) }}">
                          {{ $newHot1->categoryNew->name }}
                        </a>
                      @endif
                    </small>
                    <span class="text-[14px] ellipsis-text-2 text-justify">{{ $newHot1->meta_description }}</span>
                  </div>
                  <div class="md:w-2/5">
                    <div>
                      @foreach($newHot2 as $item)
                        <div class="flex pb-3">
                          <a class="w-1/3 block rounded" href="{{ clientRoute('page_news_detail_2', ['permalink' => $item->permalink]) }}">
                            <img src="{{ asset('wowtop/assets/image/image_cover.webp') }}" {!! getImgAlt($item->avatar_alt) !!} class="rounded w-full object-cover">
                          </a>
                          <div class="w-2/3 py-0 pl-3">
                            <div class="leading-5 mb-2">
                              <a href="{{ clientRoute('page_news_detail', ['permalink' => $item->permalink]) }}"
                                 class="text-[#2C5D6C] hover:text-[#2C5D6C] text-[16px] font-bold ellipsis-text-2 leading-tight">
                                {{ $item->title }}
                              </a>
                            </div>
                            <p class="ellipsis-text-3 text-[14px] text-justify leading-tight">{{ $item->meta_description }}</p>
                          </div>
                        </div>
                      @endforeach
                    </div>
                  </div>
                </div>
              </div>
            </div>
          @endif

          <div class="text-[30px] text-[#2C5D6C] font-semibold my-3">Tin tức</div>
          @if ($dataList->count() == 0)
            <div>Danh sách trống</div>
          @endif
          <div class="">
            @foreach($dataList as $item)
              <div class="inline-flex py-3 border-t border-solid border-[#e1e1e1] w-full">
                <div class="w-1/3">
                  <a href="{{ clientRoute('page_news_detail_2', ['permalink' => $item->permalink]) }}">
                    <img src="{{ $item->avatar ? $item->avatar : asset('client/image/default.jpg') }}"
                         {!! getImgAlt($item->avatar_alt) !!}
                         class="rounded-xl w-[260px] h-[135px]" style="object-fit: contain;">
                  </a>
                </div>
                <div class="w-2/3 px-4 py-0">
                  <div class="leading-5">
                    <a href="{{ clientRoute('page_news_detail_2', ['permalink' => $item->permalink]) }}"
                       class="text-[#2C5D6C] hover:text-[#2C5D6C] text-[18px] font-bold
                       leading-tight md:leading-normal ellipsis-text-2">
                      {{ $item->title }}
                    </a>
                  </div>
                  <small class="block my-2 text-[#9F9E9A]">
                    Ngày đăng: {{ showPublishAtClient($item) }} <br>
                    @if (!empty($item->categoryNew->name))
                      Danh mục: <a class="hover:text-[#2C5D6C]" href="{{ clientRoute('page_danh_muc_tin_tuc_detail_2', ['permalink' => $item->categoryNew->slug]) }}">{{ $item->categoryNew->name }}</a>
                    @endif
                  </small>
                  <span class="text-[14px] ellipsis-text-2 text-justify">{{ $item->meta_description }}</span>
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
