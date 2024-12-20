<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

{{--  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">--}}

  <title>Khảo sát</title>
  <link rel="icon" type="image/x-icon" href="{{ asset('cms/image/khao-sat.webp') }}">
  <link rel="stylesheet" href="{{ asset('client/assets/fonts/remixicon/remixicon.css') }}">
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('client/assets/libs/slick/slick.css') }}">
  @stack('css-3rd')

  <link rel="stylesheet" href="{{ asset('client/assets/css/reset.css') }}">
  <link rel="stylesheet" href="{{ asset('client/assets/css/common.css') }}">
  @stack('style')
</head>
<body>

<div class="container">
  @include('client.include.header')

  @yield('content')

  @include('client.include.footer')
  @include('client.include.connect_social')
  <div class="to-top-btn is-hidden js-scroll-to-top is-shown" style=""><i class="ri-arrow-up-line"></i></div>

</div>

<script src="{{ asset('client/assets/libs/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('client/assets/libs/slick/slick.min.js') }}"></script>
@stack('js-3rd')

<script src="{{ asset('client/assets/js/common.js') }}"></script>


<script type="text/javascript">
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
</script>
@stack('script')

</body>
</html>
