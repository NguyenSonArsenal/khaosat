<header>
  <div class="wrapper">
    <div class="nav_pc">
      <div class="logo">
        <a href="{{ clientRoute('home', ['makhoa' => request('makhoa')]) }}">
          <img src="{{ asset('cms/image/khao-sat.webp') }}" alt="" width="100px">
        </a>
      </div>
{{--      <ul class="menu">--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'home') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('home') }}">Trang chủ</a>--}}
{{--        </li>--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'thongke') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('thongke') }}">Thống kê</a>--}}
{{--        </li>--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'nguon_du_lieu') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('nguon_du_lieu') }}">Nguồn dữ liệu</a>--}}
{{--        </li>--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'contact') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('contact') }}">Liên hệ</a>--}}
{{--        </li>--}}
{{--      </ul>--}}
    </div>
    <div class="nav_sp">
      <div class="logo">
        <a href="{{ clientRoute('home', ['makhoa' => request('makhoa')]) }}">
          <img src="{{ asset('cms/image/khao-sat.webp') }}" alt="" width="100px">
        </a>
        <div class="toggle" id="toggle">
          <i class="ri-menu-line i_line"></i>
          <i class="ri-close-line i_close"></i>
        </div>
      </div>
{{--      <ul class="menu">--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'home') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('home') }}">Home</a>--}}
{{--        </li>--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'thongke') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('thongke') }}">Thống kê</a>--}}
{{--        </li>--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'nguon_du_lieu') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('nguon_du_lieu') }}">Nguồn dữ liệu</a>--}}
{{--        </li>--}}
{{--        <li class="{{ str_contains(request()->route()->getName(), 'contact') ? 'active' : '' }}">--}}
{{--          <a href="{{ clientRoute('contact') }}">Liên hệ</a>--}}
{{--        </li>--}}
{{--      </ul>--}}
    </div>
  </div>
</header>