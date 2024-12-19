<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('wowtop/assets/image/logo.webp') }}">
  <title>@yield('title')</title>
  <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
  @stack('css-3rd')
  <link href="{{ asset('cms/css/theme/style.min.css') }}" rel="stylesheet">
  <link href="{{ asset('cms/fonts/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
  <link href="{{ asset('cms/css/theme/common.css') }}" rel="stylesheet">
  <link href="{{ asset('cms/css/common.css') }}" rel="stylesheet">
</head>

<body>
<div class="main-wrapper">
  <div class="preloader" style="display: none;">
    <div class="lds-ripple">
      <div class="lds-pos"></div>
      <div class="lds-pos"></div>
    </div>
  </div>
  @yield('content')
</div>

<script src="{{ asset('cms/libs/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('cms/libs/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('cms/libs/loadingoverlay/loadingoverlay.min.js') }}"></script>
@stack('js-3rd')
</body>
</html>

