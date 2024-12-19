{{--<input name="url-change-language" type="hidden" value="{{ clientRoute('set-lang') }}"/>--}}
<input name="my_language" type="hidden" value="{{ session('lang', getConfig('lang_vn')) }}"/>
{{--<input name="changeLang" id="changeLang" type="hidden" value="{{ clientRoute('changeLang') }}"/>--}}

<header class="header" data-module="header">
  <nav class="header__top">
    <div class="container-main">
      <div class="header__top__item">
        <div class="header__hotline">
          <div>
            {{--<a href="{{ clientRoute('page_trang_trai_new_zealand') }}">--}}
              {{--<span>{{ \GoogleTranslate::trans('Trang trại New Zealand', app()->getLocale()) }}</span>--}}
            {{--</a>--}}
            {{--<a href="{{ clientRoute('page_giai_thuong') }}">--}}
              {{--<span>{{ \GoogleTranslate::trans(_tf('prize'), app()->getLocale()) }}</span>--}}
            {{--</a>--}}
            {{--<a href="{{ clientRoute('page_diem_phan_phoi') }}">--}}
              {{--<span>{{ \GoogleTranslate::trans(_tf('distribution_point'), app()->getLocale()) }}</span>--}}
            {{--</a>--}}
            {{--<a href="{{ clientRoute('page_mua_hang_truc_tuyen') }}">--}}
              {{--<span>{{ \GoogleTranslate::trans(_tf('online_shopping'), app()->getLocale()) }}</span>--}}
            {{--</a>--}}
            {{--<a href="{{ clientRoute('page_nhan_tu_van') }}">--}}
              {{--<span>{{ \GoogleTranslate::trans(_tf('advice'), app()->getLocale()) }}</span>--}}
            {{--</a>--}}

            <a href="javascript:void(0)">
              <span>{{ \GoogleTranslate::trans('Trang trại New Zealand', app()->getLocale()) }}</span>
            </a>
            <a href="javascript:void(0)">
              <span>{{ \GoogleTranslate::trans(_tf('online_shopping'), app()->getLocale()) }}</span>
            </a>
            <a href="javascript:void(0)">
              <span>{{ \GoogleTranslate::trans(_tf('advice'), app()->getLocale()) }}</span>
            </a>

            {{--<a href="javascript:void(0)">--}}
            {{--<span style="margin-right: 4px" class="multi_lang {{ session('locale', getConfig('lang_vi')) == getConfig('lang_vi') ? 'bold' : '' }}" data-text="vi">VN</span>--}}
            {{--<span>/</span>--}}
            {{--<span style="padding: 4px" class="multi_lang {{ session('locale', getConfig('lang_vi')) == getConfig('lang_en') ? 'bold' : '' }}" data-text="en">EN</span>--}}
            {{--<span>/</span>--}}
            {{--<span style="padding-left: 4px" class="multi_lang {{ session('locale', getConfig('lang_vi')) == getConfig('lang_ja') ? 'bold' : '' }}" data-text="ja">JP</span>--}}
            {{--</a>--}}
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="header__main">
    <div class="container-main">
      <div class="header__logo">
        <a href="{{ clientRoute('home') }}"><img src="{{ asset('wowtop/assets/image/logo.webp') }}" alt="Logo wowtop" width="159"
                                                 height="50" style="object-fit: cover"></a>
      </div>
      <div class="header__menu">
        <nav class="main-menu">
          <ul>
            <li><a href="{{ clientRoute('home') }}">{{ \GoogleTranslate::trans(_tf('home_page'), app()->getLocale()) }}</a></li>
            <li><a href="javascript:void(0)">Giới thiệu</a></li>
            <li><a href="{{ clientRoute('page_san_pham') }}">{{ \GoogleTranslate::trans('Sản phẩm', app()->getLocale()) }}</a></li>
            <li>
              <a href="{{ clientRoute('page_news') }}">{{ \GoogleTranslate::trans(_tf('wow_newsletter'), app()->getLocale()) }}
                {{--<span class="icon-dropdown">--}}
                  {{--<img src="{{ asset('wowtop/assets/image/dropdown.svg') }}" alt="icon dropdown">--}}
                {{--</span>--}}
              </a>
              <ul class="sub_menu">
                <li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'cach-tang-chieu-cao']) }}">Cách tăng chiều cao</a></li>
                <li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'bai-tap-tang-chieu-cao']) }}">Bài tập tăng chiều cao</a></li>
                <li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'sua-tang-chieu-cao']) }}">Sữa tăng chiều cao</a></li>
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc') }}">{{ \GoogleTranslate::trans('Danh mục tin tức', app()->getLocale()) }}</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_vi_sao_chon_wowtop') }}">{{ \GoogleTranslate::trans(_tf('why_choose_wowtop'), app()->getLocale()) }}</a></li>--}}
              </ul>
            </li>
            {{--<li>--}}
              {{--<a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'sua-tang-chieu-cao']) }}">Sữa tăng chiều cao--}}
                {{--<span class="icon-dropdown">--}}
                  {{--<img src="{{ asset('wowtop/assets/image/dropdown.svg') }}" alt="">--}}
                {{--</span>--}}
              {{--</a>--}}
              {{--<ul>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">4 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">5 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">6 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">7 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">8 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">9 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">10 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">11 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">12 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">13 tuổi</a></li>--}}
                {{--<li><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">14 tuổi</a></li>--}}
              {{--</ul>--}}
            {{--</li>--}}
            <li></li>
            <li><a href="{{ clientRoute('page_cong_thuc_tang_chieu_cao') }}">Dự đoán chiều cao của con</a></li>
            <li><a href="{{ clientRoute('page_dang_ki_dung_thu') }}" class="dk_dung_thu">Đăng kí dùng thử</a></li>
            {{--<li>--}}
            {{--<div class="header-search">--}}
            {{--<a href="javascript:void(0);" class="header-search__btn">--}}
            {{--<i class="fa fas fa-search" style="color: #2C5D6C; font-size: 20px"></i></a>--}}
            {{--<div class="header-search__form">--}}
            {{--<form class action="#" method="get">--}}
            {{--<input type="text" id="search_input"--}}
            {{--placeholder="{{ _tf('enter_your_search') }}" value="{{ request('s') }}" name="s">--}}
            {{--<button type="submit" value class><i class="fa fa-search-plus"></i></button>--}}
            {{--<button type="button" class="header-search__form__delete"--}}
            {{--onclick="document.getElementById('search_input').value = ''">--}}
            {{--<img src="{{ asset('wowtop/assets/image/icon/icon-delete.svg') }}">--}}
            {{--</button>--}}
            {{--</form>--}}
            {{--</div>--}}
            {{--</div>--}}
            {{--</li>--}}
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
