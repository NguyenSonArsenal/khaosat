@extends('wowtop.layout.main')

@php
  $title = $entity->title;
  $des = $entity->meta_description;
	 if (!empty($configComposer)) {
	  $desType = explode(' ', $configComposer->meta_description_type);
	  $title =  str_replace("%term%", $entity->title, $configComposer->meta_title_type);
	  $title =  str_replace("%sep%", '-', $title);
	  $title =  str_replace("%sitename%", config('app.app_name'), $title);
	  $title =  str_replace("%current_year%", 2024, $title);
	  $des =  str_replace("%term_description%", 2024, $entity->meta_description);
	  $des =  str_replace("%current_year%", 2024, $title);
	 }
@endphp


@section('robots', $robots)
@section('keywords', $keywords)
@section('description', $des)
@section('canonical', !str_contains($entity->canonical, config('app.url')) ? config('app.url') . '/tin-tuc/' . $entity->canonical : $entity->canonical)



@section('facebook')
  <meta property="og:title" content="{{ $entity->meta_title }}"/>
  <meta property="og:description" content="{{ $entity->meta_description }}"/>
  <meta property="og:image" content="{{ $entity->avatar }}"/>
@endsection

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/tin-tuc.css') }}">
  <style>
    @media (max-width: 767px) {
      .hideX {
        display: none;
      }
    }
    #page_new .ck p {
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    #page_new h1 {
      font-size: 30px;
      font-weight: 700;
    }
    #page_new .ck h1 {
      font-size: 30px;
      margin-top: 28px;
      margin-bottom: 8px;
      font-weight: 700;
    }
    #page_new .ck h2 {
      font-weight: 700;
      font-size: 22px;
      margin-top: 20px;
      margin-bottom: 8px;
    }
    #page_new .ck h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    blockquote {
      margin: 0 0 1rem;
    }

    .ck-blurred.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline {
      border: none;
      background: #FFFEF7;
    }

    .ck {
      pointer-events: none;
      /*pointer-events: none;  uncomment before commit */
    }

    .ck a {
      pointer-events: visible !important;
    }

    ol, ul, menu {
      padding-left: 2rem;
    }

  </style>
@endpush

@push('scripts')
  <script src="https://cdn.jsdelivr.net/npm/ckeditor5-classic-plus@41.3.0/build/ckeditor.js"></script>

  <script>
    ClassicEditor.create(document.querySelector("#content"), {
      toolbar: [],
    }).then(editor  => {
    }).catch(error => {
      console.error(error);
    });

    $('#content').removeAttr('readonly').trigger('blur').attr('readonly','readonly');
  </script>


@endpush

@section('content')
  <section class="section-main section-benh-thuong-gap pt-10 pb-8" id="page_new">
    <div class="wrapper w-full lg:w-3/4">
      <div class="inline-flex	">
        <div class="w-full md:w-2/3 px-4 x">
          <div>
            <small>
              <a class="text-[#4F4F4F] hover:text-[#2C5D6C] font-semibold" href="{{ clientRoute('home') }}">Trang chủ</a> >
              @if (!empty($entity->categoryNew->parent->slug))
                <a class="text-[#4F4F4F] hover:text-[#2C5D6C] font-semibold"
                   href="{{ clientRoute('page_danh_muc_tin_tuc_detail_2', ['permalink' => $entity->categoryNew->parent->slug]) }}" >
                  {{ $entity->categoryNew->parent->name }}
                </a>
                >
              @endif
              <a class="text-[#4F4F4F] hover:text-[#2C5D6C] font-semibold"
                 href="{{ clientRoute('page_danh_muc_tin_tuc_detail_2', ['permalink' => $entity->categoryNew->slug]) }}" >
                {{ $entity->categoryNew->name }}
              </a>
              >
              <span class="text-[#4F4F4F] font-semibold">{{ $entity->title }}</span>
            </small>
          </div>
          <hr class="text-[#e5e5e5] mt-3 mb-4">
          <div class="text-[30px] text-[#2C5D6C] font-semibold my-3"><h1>{{ $entity->title }}</h1></div>
          <div class="px-5 py-2 bg-[#f2f2f2] rounded-xl flex items-center">
            <img src="{{ asset('client/image/icon/1.png') }}" {!! getImgAlt($entity->avatar_alt) !!} class="w-[35px] h-[35px] rounded-full">
            <span class="text-[#888] ml-2 text-[13px]">
              {{ showPublishAtClient($entity) }}
            </span>
          </div>

          <div class="my-10 ck ck-reset ck-editor ck-rounded-corners content1" id="content1">
            {!! $entity->content  !!}
          </div>

        </div>
        <div class="hideX md:block w-1/3 px-4">
          @include('wowtop.layout.include.news-relation-v2', ['newRelation' => $newRelation])
        </div>
      </div>
    </div>
  </section>
@endsection