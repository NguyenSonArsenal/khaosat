<div class="post-relation mr-0 rounded-2xl border-1 border-solid">
  <div class="bg-[#2C5D6C] ml-0 mr-0 py-3 px-4" style="border-radius: 8px 8px 0 0;">
    <p class="text-white font-semibold uppercase m-0">Bài viết liên quan</p>
  </div>
  <div class="post-relation-content px-3">
    @if (count($newRelation) == 0)
      <div>Danh sách trống</div>
    @endif
    @foreach($newRelation as $item)
      <div class="flex py-3 border-t border-solid border-[#e1e1e1]">
        <a class="w-1/3 block rounded"
           href="{{ clientRoute('page_news_detail', ['permalink' => $item->permalink]) }}">
          <img src="{{ asset('wowtop/assets/image/image_cover.webp') }}" {!! getImgAlt($item->avatar_alt) !!}
          class="rounded w-full object-cover">
        </a>
        <div class="w-2/3 py-0 pl-3">
          <div class="leading-5 mb-2">
            <a href="{{ clientRoute('page_news_detail', ['permalink' => $item->permalink]) }}"
               class="text-[#2C5D6C] hover:text-[#2C5D6C] text-[18px] font-bold ellipsis-text-2 leading-tight">
              {{ $item->title }}
            </a>
          </div>
          <p class="ellipsis-text-3 text-[14px] text-justify leading-tight">{{ $item->meta_description }}</p>
        </div>
      </div>
    @endforeach
  </div>
</div>

{{--<div>--}}
  {{--<img src="{{ asset('client/image/nhan-vien-ban.png') }}" width="" class="w-full h-auto img-tvv">--}}
  {{--<div class="tu-van-vien">--}}
    {{--<p class="font-semibold">Tư vấn khách hàng</p>--}}
    {{--<a href="tel:1900636468">1800 646845</a>--}}
  {{--</div>--}}
{{--</div>--}}

{{--<div>--}}
  {{--<a href="">--}}
    {{--<img src="{{ asset('client/image/chantrang-02.jpg') }}" width="" class="w-full h-auto">--}}
  {{--</a>--}}
{{--</div>--}}
