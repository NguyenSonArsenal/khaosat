@extends('wowtop.layout.main')

@section('title', 'Trang chủ')

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/home_and_san_pham.css') }}">
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/home.css') }}">
@endpush

@push('scripts')
  <script type="text/javascript" src="{{ asset('wowtop/assets/js/home/index.js') }}"></script>
@endpush

@section('content')
{{--  <section class="section-banner-slider">--}}
{{--    <div class="slide-arrows">--}}
{{--      --}}{{--<i id="banner-arrow-left" class="fa fa-angle-left"></i>--}}
{{--      --}}{{--<i id="banner-arrow-right" class="fa fa-angle-right"></i>--}}

{{--      <img id="banner-arrow-left" src="{{ asset('wowtop/assets/image/home/icon-left.png') }}" alt="Alt image">--}}
{{--      <img id="banner-arrow-right" src="{{ asset('wowtop/assets/image/home/icon-right.png') }}" alt="Alt image">--}}
{{--    </div>--}}
{{--    <div class="section-main-slider">--}}
{{--      <div class="slide_item">--}}
{{--        <div class="slide_left">--}}
{{--          <div class="h2">GIÚP TĂNG CHIỀU CAO <br> TỪ CẤP ĐỘ NGUYÊN BÀO</div>--}}
{{--          <div class="xacnhan"><a href="javascript:void(0)">TÌM HIỂU THÊM</a></div>--}}
{{--        </div>--}}
{{--      </div>--}}
{{--      <div class="slide_item">--}}
{{--        <div class="slide_left">--}}
{{--          <div class="h2">GIÚP TĂNG CHIỀU CAO <br> TỪ CẤP ĐỘ NGUYÊN BÀO</div>--}}
{{--          <div class="xacnhan"><a href="javascript:void(0)">TÌM HIỂU THÊM</a></div>--}}
{{--        </div>--}}
{{--      </div>--}}
{{--    </div>--}}
{{--  </section>--}}

  <section class="section-banner-slider">
    <div class="section-main-slider pc">
      <div class="slide_item">
        <div class="slide_left pt-12 md:pt-[150px] lg:pt-[200px]" style="margin-top: 0;">
          <div class="h2">GIÚP TĂNG CHIỀU CAO <br> TỪ CẤP ĐỘ NGUYÊN BÀO</div>
          <div class="xacnhan"><a href="javascript:void(0)">TÌM HIỂU THÊM</a></div>
        </div>
      </div>
    </div>

    <div class="section-main-slider sp">
      <div class="slide_item">
        <img src="{{ asset('wowtop/assets/image/home/banner2x.webp') }}" alt="">
        <div class="text">
          <div class="h2">GIÚP TĂNG CHIỀU CAO <br> TỪ CẤP ĐỘ NGUYÊN BÀO</div>
          <div class="xacnhan"><a href="javascript:void(0)">TÌM HIỂU THÊM</a></div>
        </div>
      </div>
    </div>
  </section>

  @include('wowtop.layout.include.section_ct_toi_uu')

  <section class="section_tang_chieu_cao">
    <div class="bg">
      <div class="wrapper">
        <div class="title h2">
          <p>TĂNG CHIỀU CAO TỪ CẤP ĐỘ NGUYÊN BÀO XƯƠNG*</p>
          <p><strong>CAO HƠN CẢ VỀ CHẤT VỀ LƯỢNG</strong></p>
        </div>
        <div class="content">
          <div class="title1">
          <span>
            (*) Nguyên bào xương xây dựng cấu trúc ma trận xương, dẫn các hạt Canxi và khoáng chất vào xương, từ đó tác
            động trực tiếp tới chất lượng xương và chiều cao tối đa của cơ thể.
          </span>
          </div>
          <div class="contentx">
            <div class="row">
              <div class="c col-sm-6">
                <div class="leftx">
                  <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/cbp.webp') }}" alt="alt img">
                  <p>
                    <strong>CBP</strong> trong Wowtop có kích thước phân tử siêu nhỏ, <strong>30 Kilodalton (≈ 1/50 tỷ hạt Nano)</strong>, dễ dàng len lỏi và kích thích Nguyên bào xương hoạt động hiệu quả hơn*
                  </p>
                </div>
              </div>
              <div class="c col-sm-6">
                <div class="rightx">
                  <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/10l.webp') }}" alt="alt img">
                  <p>
                    <strong>CBP</strong> là thành phần quý hiếm bậc nhất ngành sữa. <strong> 10 lít sữa non</strong> từ Bò ăn cỏ tự nhiên chỉ chiết xuất được <strong>4 gam CBP</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div class="row row_2">
              <div class="col">
                <img class="sp lazy" data-src="{{ asset('wowtop/assets/image/home/xuong.webp') }}" alt="Alt name">
                <span>
                <strong>CBP</strong> thúc đẩy <strong>nguyên bào xương</strong> sản sinh và hoạt động hiệu quả, hình thành ma trận xương, kích thích xương dài ra nhanh hơn.
                Ngoài ra,  <strong>CBP</strong> còn giúp tăng mật độ xương, hấp thu <strong>Canxi</strong> cùng các dưỡng chất quan trọng như Sắt, Kẽm... tốt hơn, từ đó <strong>tăng chiều cao cả về lượng & chất</strong>.
              </span>
              </div>
              <img class="pc lazy" data-src="{{ asset('wowtop/assets/image/home/xuong.webp') }}" alt="Alt name">
            </div>
          </div>
          <img class="nen-xanh lazy" data-src="{{ asset('wowtop/assets/image/home/pt-xanh.webp') }}" alt="Alt name">
        </div>
      </div>
    </div>
  </section>

  <section class="section-chuyen-gia">
    <div class="wrapper">
      <div class="titleX h2">
        <p>CHUYÊN GIA NEW ZEALAND <br><strong>CHIA SẺ NGUYÊN LÝ TĂNG CHIỀU CAO</strong></p>
        <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Alt name">
        <p>TỪ CẤP ĐỘ NGUYÊN BÀO</p>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3 left">
{{--          <iframe  loading="lazy" width="100%" height="315" src="https://www.youtube.com/embed/y9vlAFDEr7I?si=zDi8B9unDuWxPVnw"></iframe>--}}


{{--          <iframe style="border-radius: 20px" src="https://www.youtube.com/embed/y9vlAFDEr7I?si=zDi8B9unDuWxPVnw"--}}
{{--                  loading="lazy"--}}
{{--                  width="100%"--}}
{{--                  height="315"--}}
{{--                  allow="accelerometer; autoplay;--}}
{{--        encrypted-media; gyroscope;--}}
{{--        picture-in-picture"--}}
{{--                  allowfullscreen></iframe>--}}


          <div class="youtube" data-embed="U9t-slLl30E">
            <div class="play-button"></div>
          </div>

        </div>
        <div class="col-md-6 mb-3 right">
          <div class="r1">
            Xương dài ra do quá trình <strong>cốt hóa</strong> sụn tăng trưởng thành xương. Hầu hết quá trình này do <strong>nguyên bào xương</strong>
            chịu trách nhiệm. Nguyên bào xương tạo ra ma trận xương (Khung nền xương) đồng thời tăng cường chuyển hóa,
            lắng đọng Canxi, Phospho để lấp đầy và làm cứng ma trận xương, giúp xương dài ra ở 2 đầu. <strong>WOWTOP</strong> vừa bổ sung
            <strong>Canxi, Phospho, D3, K2</strong> làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần <strong>CBP</strong> kích thích nguyên
            bào xương phát triển, nhờ đó thúc đẩy mạnh mẽ quá trình cốt hóa ở 2 đầu xương, giúp <strong>tăng chiều cao cả về lượng và về chất</strong>.
          </div>
          <img class="line lazy" data-src="{{ asset('wowtop/assets/image/home/asset_11.png') }}" alt="Alt image">
          <div class="r2">
            <strong>Chuyên gia tăng chiều cao David - viện dinh dưỡng New Zealand.</strong>
          </div>
          <div><a href="" class="more">Tìm hiểu ngay</a></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section_sailam">
    <div class="wrapper">
      <div class="title uppercase h2">Những sai lầm trong tăng chiều cao</div>
      <div class="content">
        <div class="row row_1">
          <div class="col-sm-4">
            <div class="sailam_item">
              <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/h4.png') }}" alt="alt img">
              <p>Chỉ quan tâm cao về lượng</p>
              <p>
                Chiều cao về centimet rất quan trọng, nhưng nếu Chất lượng xương không được đảm bảo, trẻ sẽ dễ bị loãng
                xương và các bệnh về xương khác.. Wowtop giúp cao hơn từ nguyên bào xương, cải thiện chiều cao cả về
                lượng và chất.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="sailam_item">
              <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/h5.png') }}" alt="alt img">
              <p>Canxi, Khoáng chất là đủ</p>
              <p>
                Chiều cao do khung xương quyết định. Canxi & khoáng chất chỉ là nguyên liệu cho
                xương hình thành. Cần có CBP, CPP thúc đẩy nguyên bào xương hoạt động, thu hút và hấp thụ tốt Canxi &
                khoáng chất thì khung xương mới dài hơn, chắc khỏe hơn.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="sailam_item">
              <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/h1.png') }}" alt="alt img">
              <p>Uống sữa là đủ để cao</p>
              <p>
                Sữa là giải pháp dinh dưỡng tối ưu. Tuy nhiên vẫn cần kết hợp luyện tập & sinh hoạt để tăng chiều cao.
                Wowtop có đội ngũ Healthcoach đồng hành cùng con từ chế độ dinh dưỡng tới vận động để con đạt chiều cao
                tối đa.
              </p>
            </div>
          </div>
        </div>
        <div class="row row_2">
          <div class="col-sm-6">
            <div class="sailam_item">
              <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/h3.png') }}" alt="alt img">
              <p>Tin rằng GEN quyết định chiều cao</p>
              <p>
                GEN chỉ quyết định 23% Dinh dưỡng, luyện tập và chế độ sinh hoạt mới thực sự giúp con cao vượt trội.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="sailam_item">
              <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/h2.png') }}" alt="alt img">
              <p>Bỏ qua giai đoạn vàng</p>
              <p>
                Giai đoạn 0 – 5 tuổi và giai đoạn trước dậy thì là các mốc tăng chiều cao quan trọng ở trẻ, cần được đặc biệt lưu ý và bổ sung dinh dưỡng tối đa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/PT.webp') }}" alt="Image name">
    </div>
  </section>

  <section class="section_conbo section_conbo_tmp">
    <div class="wrapper">
      <div class="dkdt h2">
        <span>Đăng kí dùng thử</span>
      </div>
      <div class="text">
        <div class="title1 uppercase h2">
          Nguồn sữa từ những chú bò <br>
          <strong>Hạnh phúc nhất thế giới</strong><br>
        </div>
      </div>
      <div class="img">
        <div class="row">
          <div class="col-md-5">
            <div><img class="img1 lazy" data-src="{{ asset('wowtop/assets/image/home/non-gmo.png') }}" alt="Image name"></div>
          </div>
          <div class="col-md-7">
            <div>
              <div class="img_3">
                <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/conbo_img_1.png') }}" alt="Image name">
                <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/conbo_img_2.png') }}" alt="Image name">
                <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/conbo_img_3.png') }}" alt="Image name">
              </div>
              <div style="color: white; font-size: 22px; margin-left: 50px">Nông trại bò sữa chuẩn Quốc tế</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="col-md-5">
            <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/conbo_img_5.png') }}" alt="Image name">
          </div>
          <div class="col-md-7" style="position: relative">
            <img class="conbo1 pc lazy" data-src="{{ asset('wowtop/assets/image/home/dong-co-d-2.webp') }}" alt="Image name">
          </div>
        </div>
      </div>
      <div class="text_end">
        BIẾN MÓN QUÀ KỲ DIỆU CỦA THIÊN NHIÊN TRỞ THÀNH SẢN PHẨM HỮU CƠ <br>
        TUYỆT VỜI CHO THẾ HỆ TƯƠNG LAI CAO LỚN VÀ TỐT ĐẸP HƠN
      </div>
    </div>
  </section>

  <section class="section_conbo_m section_conbo_tmp">
    <div class="wrapper">
      <div class="text">
        <div class="title1 uppercase h2">
          Nguồn sữa từ những chú bò <br>
          <strong>Hạnh phúc nhất thế giới</strong><br>
        </div>
      </div>
      <div class="img">
        <div style="margin-bottom: 65px">
          <div class="img_3">
            <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/conbo_img_1.png') }}" alt="Image name">
            <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/conbo_img_2.png') }}" alt="Image name">
            <img class="lazy" data-src="{{ asset('wowtop/assets/image/home/conbo_img_3.png') }}" alt="Image name">
          </div>
          <div style="color: #715421; font-size: 20px; font-weight: 600" class="text-center">Nông trại bò sữa chuẩn Quốc tế</div>
        </div>
        <div>
          <img class="img1 lazy" data-src="{{ asset('wowtop/assets/image/home/non-gmo.png') }}" alt="Image name">
        </div>
      </div>
    </div>
  </section>

  <section class="section section_nha_may">
    <div class="text">
      <div class="title1 uppercase h2">
        <strong>NHÀ MÁY SẢN XUẤT WOWTOP TẠI NEWZEALAND</strong><br>
        DẪN ĐẦU VỀ CÔNG NGHỆ SẢN XUẤT SỮA
      </div>
    </div>
  </section>

  @include('wowtop.layout.include.section_feedback')
  @include('wowtop.layout.include.section_dk_mua_hang')


  {{--<section class="section_recipe mt-5">--}}
    {{--<div class="wrapper">--}}
      {{--<h2 class="section_title text-uppercase">{{ _tf(('title_section_recipe_1')) }} <br class="pc"> {{ _tf(('title_section_recipe_2')) }}</h2>--}}
      {{--<div>--}}
        {{--<div class="section_recipe_logo">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/5.webp') }}">--}}
        {{--</div>--}}
        {{--<div class="row">--}}
          {{--<div class="col-sm-6 col-md-4">--}}
            {{--<div class="recipe_item recipe_item_1">--}}
              {{--<img src="{{ asset('wowtop/assets/image/home/1.png') }}">--}}
              {{--<div class="text-justify ellipsis-text-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                {{--industry's standard dummy text ever since the 1500s--}}
              {{--</div>--}}
            {{--</div>--}}
            {{--<div class="recipe_item">--}}
              {{--<img src="{{ asset('wowtop/assets/image/home/3.png') }}">--}}
              {{--<div class="text-justify ellipsis-text-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                {{--industry's standard dummy text ever since the 1500s--}}
              {{--</div>--}}
            {{--</div>--}}
          {{--</div>--}}
          {{--<div class="col-md-4 wowtop_img_block">--}}
            {{--<img src="{{ asset('wowtop/assets/image/home/5.webp') }}" class="wowtop_img">--}}
          {{--</div>--}}
          {{--<div class="col-sm-6 col-md-4">--}}
            {{--<div class="recipe_item recipe_item_1">--}}
              {{--<img src="{{ asset('wowtop/assets/image/home/2.png') }}">--}}
              {{--<div class="text-justify ellipsis-text-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                {{--industry's standard dummy text ever since the 1500s--}}
              {{--</div>--}}
            {{--</div>--}}
            {{--<div class="recipe_item">--}}
              {{--<img src="{{ asset('wowtop/assets/image/home/4.png') }}">--}}
              {{--<div class="text-justify ellipsis-text-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                {{--industry's standard dummy text ever since the 1500s--}}
              {{--</div>--}}
            {{--</div>--}}
          {{--</div>--}}
        {{--</div>--}}
      {{--</div>--}}
    {{--</div>--}}
    {{--<div class="image_gift">--}}
      {{--<h3>--}}
        {{--{{ _tf('amazing_nature_1') }} <br>--}}
        {{--{{ _tf('amazing_nature_2') }} <br>--}}
        {{--{{ _tf('amazing_nature_3') }}--}}
      {{--</h3>--}}
      {{--<img src="{{ asset('wowtop/assets/image/home/asset_1.webp') }}" class="w-100">--}}
    {{--</div>--}}
  {{--</section>--}}

    {{--<section class="section-newspaper-about-wowtop">--}}
    {{--<div class="wrapper">--}}
      {{--<h2 class="section_title text-uppercase">{{ _tf('title_section_the_press_talk') }}</h2>--}}
      {{--<div class="slide-arrows-center dot-circle-inside">--}}
        {{--<div class="slide-arrows">--}}
          {{--<i id="newspaper-arrow-left" class="fa fa-angle-left"></i>--}}
          {{--<i id="newspaper-arrow-right" class="fa fa-angle-right"></i>--}}
        {{--</div>--}}
        {{--<div class="slide-newspaper">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/24h.webp') }}" alt="slide 1">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/dt.png') }}" alt="slide 2">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/k14.png') }}" alt="slide 2">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/sk.png') }}" alt="slide 2">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/24h.webp') }}" alt="slide 1">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/dt.png') }}" alt="slide 2">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/k14.png') }}" alt="slide 2">--}}
          {{--<img src="{{ asset('wowtop/assets/image/home/sk.png') }}" alt="slide 2">--}}
        {{--</div>--}}
      {{--</div>--}}
    {{--</div>--}}
  {{--</section>--}}

  {{--<section class="section_truyen_hinh">--}}
    {{--<div class="wrapper">--}}
      {{--<h2 class="title text-uppercase">{{ _tf('title_section_television_talk') }}</h2>--}}

      {{--<div id="micro-slider">--}}
        {{--<div class="micro-slider">--}}
          {{--<div class="slider-item">--}}
            {{--<iframe src="https://www.youtube.com/embed/c1OIegKRtFI?si=MVIwT2kWqScD8wX4"></iframe>--}}
          {{--</div>--}}
          {{--<div class="slider-item">--}}
            {{--<iframe src="https://www.youtube.com/embed/c1OIegKRtFI?si=MVIwT2kWqScD8wX4"></iframe>--}}
          {{--</div>--}}
          {{--<div class="slider-item">--}}
            {{--<iframe src="https://www.youtube.com/embed/c1OIegKRtFI?si=MVIwT2kWqScD8wX4"></iframe>--}}
          {{--</div>--}}
        {{--</div>--}}
      {{--</div>--}}

      {{--<div class="text">--}}
        {{--Lorem Ipsum is simply dummy text of the printing and typesetting industry.--}}
        {{--Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,--}}
        {{--when an unknown printer took a galley of type and scrambled it to make a type specimen book.--}}
        {{--It has survived not only five centuries--}}
      {{--</div>--}}
    {{--</div>--}}
  {{--</section>--}}

  {{--<section class="section_customer_feel">--}}
    {{--<div class="feel_head">--}}
      {{--<div class="">--}}
        {{--<div class="fell_content">--}}
          {{--<img src="{{ asset('wowtop/assets/image/feel.webp') }}" class="img_left">--}}
          {{--<div class="fell_content_slide dot-circle-inside">--}}
            {{--<div class="slide-arrows">--}}
              {{--<i id="customer-fell-arrow-left" class="fa fa-solid fa-arrow-left"></i>--}}
              {{--<i id="customer-fell-arrow-right" class="fa fa-solid fa-arrow-right"></i>--}}
            {{--</div>--}}
            {{--<div class="slide-cam-nhan">--}}
              {{--<div class="item_slide_feel">--}}
                {{--<div class="ellipsis-text-3 desc_feel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                  {{--industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and--}}
                  {{--scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap--}}
                  {{--into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the--}}
                  {{--release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing--}}
                  {{--software like Aldus PageMaker including versions of Lorem Ipsum.--}}
                {{--</div>--}}
                {{--<div class="item_slide_feel_info">--}}
                  {{--<img src="{{ asset('wowtop/assets/image/home/chuyen-gia.webp') }}">--}}
                  {{--<div>--}}
                    {{--<div class="bold">Me thu Huong</div>--}}
                    {{--<div><small>83A, Dong Da, Ha Noi</small></div>--}}
                    {{--<div>--}}
                      {{--<small>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star-o"></i>--}}
                      {{--</small>--}}
                    {{--</div>--}}
                  {{--</div>--}}
                {{--</div>--}}
              {{--</div>--}}
              {{--<div class="item_slide_feel">--}}
                {{--<div class="ellipsis-text-3 desc_feel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                  {{--industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and--}}
                  {{--scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap--}}
                  {{--into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the--}}
                  {{--release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing--}}
                  {{--software like Aldus PageMaker including versions of Lorem Ipsum.--}}
                {{--</div>--}}
                {{--<div class="item_slide_feel_info">--}}
                  {{--<img src="{{ asset('wowtop/assets/image/home/chuyen-gia.webp') }}">--}}
                  {{--<div>--}}
                    {{--<div class="bold">Me thu Huong</div>--}}
                    {{--<div><small>83A, Dong Da, Ha Noi</small></div>--}}
                    {{--<div>--}}
                      {{--<small>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star-o"></i>--}}
                      {{--</small>--}}
                    {{--</div>--}}
                  {{--</div>--}}
                {{--</div>--}}
              {{--</div>--}}
              {{--<div class="item_slide_feel">--}}
                {{--<div class="ellipsis-text-3 desc_feel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                  {{--industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and--}}
                  {{--scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap--}}
                  {{--into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the--}}
                  {{--release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing--}}
                  {{--software like Aldus PageMaker including versions of Lorem Ipsum.--}}
                {{--</div>--}}
                {{--<div class="item_slide_feel_info">--}}
                  {{--<img src="{{ asset('wowtop/assets/image/home/chuyen-gia.webp') }}">--}}
                  {{--<div>--}}
                    {{--<div class="bold">Me thu Huong</div>--}}
                    {{--<div><small>83A, Dong Da, Ha Noi</small></div>--}}
                    {{--<div>--}}
                      {{--<small>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star-o"></i>--}}
                      {{--</small>--}}
                    {{--</div>--}}
                  {{--</div>--}}
                {{--</div>--}}
              {{--</div>--}}
              {{--<div class="item_slide_feel">--}}
                {{--<div class="ellipsis-text-3 desc_feel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                  {{--industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and--}}
                  {{--scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap--}}
                  {{--into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the--}}
                  {{--release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing--}}
                  {{--software like Aldus PageMaker including versions of Lorem Ipsum.--}}
                {{--</div>--}}
                {{--<div class="item_slide_feel_info">--}}
                  {{--<img src="{{ asset('wowtop/assets/image/home/chuyen-gia.webp') }}">--}}
                  {{--<div>--}}
                    {{--<div class="bold">Me thu Huong</div>--}}
                    {{--<div><small>83A, Dong Da, Ha Noi</small></div>--}}
                    {{--<div>--}}
                      {{--<small>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star-o"></i>--}}
                      {{--</small>--}}
                    {{--</div>--}}
                  {{--</div>--}}
                {{--</div>--}}
              {{--</div>--}}
              {{--<div class="item_slide_feel">--}}
                {{--<div class="ellipsis-text-3 desc_feel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the--}}
                  {{--industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and--}}
                  {{--scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap--}}
                  {{--into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the--}}
                  {{--release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing--}}
                  {{--software like Aldus PageMaker including versions of Lorem Ipsum.--}}
                {{--</div>--}}
                {{--<div class="item_slide_feel_info">--}}
                  {{--<img src="{{ asset('wowtop/assets/image/home/chuyen-gia.webp') }}">--}}
                  {{--<div>--}}
                    {{--<div class="bold">Me thu Huong</div>--}}
                    {{--<div><small>83A, Dong Da, Ha Noi</small></div>--}}
                    {{--<div>--}}
                      {{--<small>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star"></i>--}}
                        {{--<i class="fa fa-star-o"></i>--}}
                      {{--</small>--}}
                    {{--</div>--}}
                  {{--</div>--}}
                {{--</div>--}}
              {{--</div>--}}
            {{--</div>--}}
          {{--</div>--}}
          {{--<div style="clear: both"></div>--}}
        {{--</div>--}}
      {{--</div>--}}
    {{--</div>--}}
    {{--<div style="background: #B0CECE">--}}
      {{--<div class="wrapper">--}}
        {{--<h2 class="title">{{ _tf('title_section_feel_wowmon') }}</h2>--}}
      {{--</div>--}}
    {{--</div>--}}
  {{--</section>--}}

  @include('wowtop.layout.include.kinh_nghiem', ['lastNews' => $lastNews])
@endsection
