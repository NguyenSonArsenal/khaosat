<style>
  .submenu {
    display: none;
    max-height: 172px;
    overflow-y: scroll;
  }
</style>
<div class="header-mobile">
  <div class="container-main">
    <div class="header-mobile__logo-mb">
      <a href="{{ clientRoute('home') }}">
        <img src="{{ asset('wowtop/assets/image/logo.webp') }}" alt="Logo wowtop" width="159" height="50">
      </a>
    </div>
    <button class="header-mobile__hbg-btn"><i class="fa fa-bars"></i></button>
    <div class="header-mobile__search">
      <div class="header-mobile__search-form">
        <form class action="" method="get">
          <input type="text" class placeholder="{{ _tf('enter_your_search') }}" value="{{ request('s') }}" name="s"/>
          <button type="submit"><i class="fa fa-search-plus" style="color: green"></i></button>
        </form>
      </div>
    </div>
    <button class="header-mobile__close-btn"><i class="fa fa-close"></i></button>
  </div>
</div>

<aside class="mobile-menu">
  <div class="container-main">
    <div class="mobile-menu__main">
      <nav class="main-menu-mobile">
        <ul class="line_1">
          {{--          <li><a href="{{ clientRoute('page_san_pham') }}">{{ _tf('height_increasing_milk') }}</a></li>--}}
          <li><a href="javascript:void(0)">Giới thiệu</a></li>
          <li><a href="{{ clientRoute('page_san_pham') }}">Sản phẩm</a></li>
          <li class="">
            <a href="{{ clientRoute('page_news') }}" class="" data-text="Products" data-et-has-event-already="true">
              {{ _tf('wow_newsletter') }}
            </a>
            <button class="main-menu-mobile__expand-btn">
              <img src="{{ asset('wowtop/assets/image/dropdown.svg') }}" alt="icon dropdown">
            </button>
            <ul class="submenu">
              <li class="mb-3 mt-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'cach-tang-chieu-cao']) }}">Cách tăng chiều cao</a></li>
              <li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'bai-tap-tang-chieu-cao']) }}">Bài tập tăng chiều cao</a></li>
              <li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'sua-tang-chieu-cao']) }}">Sữa tăng chiều cao</a></li>
            </ul>
          </li>
          {{--<li class="">--}}
            {{--<a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'sua-tang-chieu-cao']) }}" class="" data-text="Products" data-et-has-event-already="true">--}}
              {{--Sữa tăng chiều cao--}}
            {{--</a>--}}
            {{--<button class="main-menu-mobile__expand-btn">--}}
              {{--<img src="{{ asset('wowtop/assets/image/dropdown.svg') }}" alt="">--}}
            {{--</button>--}}
            {{--<ul class="submenu">--}}
              {{--<li class="mb-3 mt-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">4 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">5 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">6 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">7 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">8 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">9 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">10 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">11 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">12 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">13 tuổi</a></li>--}}
              {{--<li class="mb-3"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">14 tuổi</a></li>--}}
            {{--</ul>--}}
          {{--</li>--}}
          <li><a href="{{ clientRoute('page_cong_thuc_tang_chieu_cao') }}">Dự đoán chiều cao của con</a></li>
          <li><a href="{{ clientRoute('page_dang_ki_dung_thu') }}">Đăng kí dùng thử</a></li>
        </ul>
        <ul class="line_2">
          <li><a href="javascript:void(0)">Trang trại New Zealand</a></li>
          <li><a href="javascript:void(0)">Mua hàng trực tuyến</a></li>
          <li><a href="javascript:void(0)">Nhận tư vấn</a></li>
          {{--<li>--}}
          {{--<a href="javascript:void(0);">--}}
          {{--<span class="multi_lang {{ session('lang', getConfig('lang_vn')) == getConfig('lang_vn') ? 'bold' : '' }}" data-text="vn">VN</span>--}}
          {{--<span>/</span>--}}
          {{--<span class="multi_lang {{ session('lang', getConfig('lang_vn')) == getConfig('lang_en') ? 'bold' : '' }}" data-text="en">EN</span>--}}
          {{--</a>--}}
          {{--</li>--}}
        </ul>
      </nav>
    </div>
  </div>
</aside>
