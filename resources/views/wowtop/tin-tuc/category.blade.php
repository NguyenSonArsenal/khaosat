@extends('wowtop.layout.main')
@section('title', 'Tin tức')

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/tin-tuc.css') }}">
@endpush

@section('content')
  <section class="section-main section-benh-thuong-gap pb-8">
    <div class="wrapper w-full lg:w-3/4">
      <div class="flex">
        <div class="w-full md:w-2/3 px-2">
          @if (count($dataList) == 0)
            <div>Danh sách trống</div>
          @endif
          <div class="">
            @foreach($dataList as $item)
              @php $category = $item['category'] @endphp
              @php $news = $item['news'] @endphp
              @if (count($news) == 0)
                @continue
              @endif
              <div class="mb-12">
                <div class="text-[30px] text-[#2C5D6C] font-semibold my-3">{{ $category->name }}</div>
                <div class="md:inline-flex py-3 border-t border-solid border-[#e1e1e1] w-full">
                  @foreach($news as $key => $value)
                    @if ($key == 0)
                      <div class="md:w-3/5 md:pr-4 mb-3">
                      <a href="{{ clientRoute('page_news_detail', ['permalink' => $value->permalink]) }}">
                        <img src="{{ $value->image }}">
                      </a>
                      <br>
                      <div class="leading-5">
                        <a href="{{ clientRoute('page_news_detail', ['permalink' => $value->permalink]) }}" class="text-[#2C5D6C] hover:text-[#2C5D6C] text-[20px] font-bold
                       leading-tight md:leading-normal ellipsis-text-2">
                          Miền Nam nắng nóng kéo dài, làm sao giảm ho, sổ mũi cho trẻ?sdfggsdfgdfg
                        </a>
                      </div>
                      <small class="block my-2 text-[#9F9E9A]">
                        Ngày đăng: 22-04-2024 15:22:50 - 8 phút đọc <br>
                        Danh mục: <a class="hover:text-[#2C5D6C]" href="https://wowtop.vn/danh-muc-tin-tuc/sua-tang-chieu-cao-cho-be-5-tuoi">
                          Sữa tăng chiều cao cho bé 5 tuổi
                        </a>
                      </small>
                      <span class="text-[14px] ellipsis-text-2 text-justify">dfggggggg dfg dfg</span>
                    </div>
                    @endif
                  @endforeach
                  @if (count($news) >= 2)
                    <div class="md:w-2/5">
                      @foreach($news as $key => $value)
                        @if ($key != 0)
                          <div>
                            <div class="flex pb-3">
                              <a class="w-1/3 block rounded" href="{{ clientRoute('page_news_detail', ['permalink' => $value->permalink]) }}">
                                <img src="{{ $value->image }}" alt="Eos placeat ad voluptatibus quod excepturi quas ea." class="rounded w-full object-cover">
                              </a>
                              <div class="w-2/3 py-0 pl-3">
                                <div class="leading-5 mb-2">
                                  <a href="{{ clientRoute('page_news_detail', ['permalink' => $value->permalink]) }}" class="text-[#2C5D6C] hover:text-[#2C5D6C] text-[16px] font-bold ellipsis-text-2 leading-tight">
                                    {{ $value->title }}
                                  </a>
                                </div>
                                <p class="ellipsis-text-3 text-[14px] text-justify leading-tight">{{ $value->meta_description }}</p>
                              </div>
                            </div>
                          </div>
                        @endif
                      @endforeach
                    </div>
                  @endif
                </div>

                <p class="news-readmore">
                  <a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => $category->slug]) }}" class="d-flex align-items-center justify-content-center"> Xem thêm </a>
                </p>
              </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </section>
@endsection

