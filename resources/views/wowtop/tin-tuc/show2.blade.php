@extends('wowtop.layout.tin-tuc')

@section('title', arrayGet($crawl, 'title'))
@section('robots', arrayGet($crawl, 'robots'))
@section('keywords', "")
@section('description', arrayGet($crawl, 'description'))

@section('robots', $entity->title)
@section('title', $entity->title)

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/ck.css') }}">
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/tin-tuc.css') }}">

  <style>
    #ez-toc-container {
      display: none;
    }
  </style>
@endpush

@push('scripts')
@endpush

@push('seo')

@endpush

@section('content')
  <section class="section-main section-benh-thuong-gap pt-10 pb-8" id="page_new">
    <div class="wrapper w-full lg:w-3/4">
      <div class="w-full">
        <div class="x">
          <div class="text-[30px] text-[#2C5D6C] font-semibold mb-3"><h1 class="text-[#2C5D6C]">{{ $entity->post_title }}</h1></div>
          <div class="mb-3">
            <small>Danh mục:
              @foreach($dataCategory as $k => $c)
                <a class="hover:text-[#2C5D6C]" href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => arrayGet($c, 'slug')]) }}">{{ arrayGet($c, 'name') }}</a>
                @if ($k != count($dataCategory) - 1) <span>, </span> @endif
              @endforeach</small>
          </div>

          <div class="px-5 py-2 bg-[#f2f2f2] rounded-xl flex items-center mb-3">
            <img src="{{ asset('client/image/icon/1.png') }}" class="w-[35px] h-[35px] rounded-full">
            <span class="text-[#888] ml-2 text-[13px]">
              {{ showPublishAtClientV2($entity) }}
            </span>
          </div>

          <div id="contentx"></div>

          <div class="my-10 ck ck-reset ck-editor ck-rounded-corners content1" id="content1">
            <div class=""></div>
            {!! $content  !!}
          </div>

        </div>
        {{--<div class="hideX md:block w-1/3 px-4">--}}
        {{--@include('wowtop.layout.include.news-relation', ['newRelation' => $newRelation])--}}
        {{--</div>--}}
      </div>
    </div>
  </section>
@endsection
