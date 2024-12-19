<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('cms/image/khao-sat.webp') }}">
  <title>@yield('title', 'Admin')</title>

  <!-- For send ajax -->
  <meta name="csrf-token" content="{{ csrf_token() }}"/>

  {{--<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />--}}
  <meta name="robots" content="nofollow, noindex"/>

  {{--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">--}}
  <link href="{{ asset('cms/css/theme/style.min.css') }}" rel="stylesheet">
  <link href="{{ asset('cms/libs/select2/dist/css/select2.min.css') }}" rel="stylesheet">
  <link href="{{ asset('cms/fonts/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
  @stack('vendor_css')
  <link href="{{ asset('cms/css/common.css') }}" rel="stylesheet">
  @stack('styles')
</head>
<body>
<div class="preloader">
  <div class="lds-ripple">
    <div class="lds-pos"></div>
    <div class="lds-pos"></div>
  </div>
</div>
<div id="main-wrapper">
  @include('cms.layout.structures._topbar')
  @include('cms.layout.structures._left-sidebar')
  <div class="page-wrapper">
    @yield('content')
  </div>
  @include('cms.layout.structures._modal')
</div>

<script src="{{ asset('cms/libs/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('cms/libs/jquery-ui/jquery-ui.js') }}"></script>
<script src="{{ asset('cms/libs/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('cms/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js') }}"></script>
<script src="{{ asset('cms/js/theme/sidebarmenu.js') }}"></script>
<script src="{{ asset('cms/js/theme/custom.min.js') }}"></script>
<script src="{{ asset('cms/libs/loadingoverlay/loadingoverlay.min.js') }}"></script>
<script src="{{ asset('cms/libs/select2/dist/js/select2.min.js') }}"></script>

@stack('js-3rd')
<script src="{{ asset('cms/js/common.js') }}"></script>
@stack('scripts')
</body>

</html>
