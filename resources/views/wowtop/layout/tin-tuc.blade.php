<!doctype html>
<html class="no-js" lang="vi" style="scroll-behavior: smooth">
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<head>
  <meta charset="utf-8">
  {{--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">--}}
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">

  <!-- For send ajax -->
  <meta name="csrf-token" content="{{ csrf_token() }}"/>

  <!-- Logo -->
  <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('wowtop/assets/image/logo.webp') }}">

  <title>@yield('title', 'Wowtop')</title>

  <!-- SEO -->
  <meta name="title" content="@yield('title')">
  <meta name="robots" content="@yield('robots')">
  <meta name="description" content="@yield('description')">
  <meta name="keywords" content="@yield('keywords')">
  <link rel="canonical" href="@yield('canonical', url()->current())" />
  @yield('facebook')
  <!-- END SEO -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/font/font-awesome/css/font-awesome.min.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/vendor/bootstrap5/bootstrap.min.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/vendor/slick/slick.css') }}"/>
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/css/theme.css') }}"/>
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/css/tailwind.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/css/common.css') }}"/>

  @stack('styles')

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-N9XQ8WQ281"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-N9XQ8WQ281');
  </script>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WMG5F8CW');</script>
  <!-- End Google Tag Manager -->
</head>

<body class="header-transparent header-light" data-module="lazyload">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMG5F8CW"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div id="fb-root"></div>

  <main id="main">
    @include('wowtop.layout.include.header')
    @include('wowtop.layout.include.menu')

    @yield('content')

    @include('wowtop.layout.include.footer')
  </main>

</body>


<script type="text/javascript" src="{{ asset('wowtop/assets//vendor/jquery/jquery-3.5.1.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('wowtop/assets/vendor/bootstrap5/bootstrap.bundle.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('wowtop/assets/vendor/slick/slick.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('wowtop/assets/js/theme.js') }}"></script>
<script type="text/javascript" src="{{ asset('wowtop/assets/js/app.js') }}"></script>
<script type="text/javascript" src="{{ asset('wowtop/assets/js/common.js') }}"></script>

  @stack('scripts')

</html>
