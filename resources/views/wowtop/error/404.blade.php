@extends('wowtop.layout.main')

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/404.css') }}">
  <style>

  </style>
@endpush

@section('content')
  <div class="wrapper">
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-11 col-sm-offset-1 text-center">
              <h1 class="text-center"><strong>404</strong></h1>
              <div class="contant_box_404" style="margin-top: 0">
                <h2 class="h2">
                  {{ _tf('404_page_text') }}
                </h2>
                <a href="{{ clientRoute('home') }}" class="link_404">{{ _tf('back_home') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
@endsection