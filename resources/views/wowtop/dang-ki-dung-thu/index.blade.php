@extends('wowtop.layout.main')
@section('title', 'Đăng kí dùng thử')

@push('styles')
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/vendor/jquery/jquery-ui.css') }}"/>
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/vendor/select2/dist/css/select2.min.css') }}"/>
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/home_and_san_pham.css') }}">
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/dk_dung_thu.css') }}">
@endpush

@push('scripts')
  <script type="text/javascript" src="{{ asset('wowtop/assets/vendor/jquery/jquery-ui.js') }}"></script>
  <script type="text/javascript" src="{{ asset('wowtop/assets/vendor/select2/dist/js/select2.full.min.js') }}"></script>
  <script src="{{ asset('wowtop/assets/js/dk_dung_thu.js') }}"></script>
@endpush

@section('content')
  <section class="section-main">
    <section class="section-banner-slider">
      <div class="slide-arrows">
        <img id="banner-arrow-left" src="{{ asset('wowtop/assets/image/home/icon-left.png') }}" alt="Alt image">
        <img id="banner-arrow-right" src="{{ asset('wowtop/assets/image/home/icon-right.png') }}" alt="Alt image">
      </div>
      <div class="section-main-slider">
        <div class="slide_item">
          <div class="slide_left">
{{--            <div class="dkngay h2">ĐĂNG KÝ NGAY</div>--}}
{{--            <div class="concaolon h3">CON CAO LỚN TRONG "TẦM TAY"</div>--}}
          </div>
        </div>
        <div class="slide_item">
          <div class="slide_left">
{{--            <div class="dkngay h2">ĐĂNG KÝ NGAY</div>--}}
{{--            <div class="concaolon h3">CON CAO LỚN TRONG "TẦM TAY"</div>--}}
          </div>
        </div>
      </div>
    </section>

    <section class="section section_quatang">
      <div class="wrapper992">
        <div class="head">
          <div class="h1">NHẬN XUẤT QUÀ TẶNG</div>
          <div class="h2">SỮA CAO WOWTOP</div>
          <div class="h3">NHẬP KHẨU NGUYÊN LON TỪ NEWREALAND</div>
          <div class="t">
            <span>lên đến</span> <span class="h1"> 11,250,000 VNĐ/ SUẤT</span>
          </div>
          <div class="t2">WowTop là sữa hàng đầu tại New Zealand về tăng chiều cao, WowTop mới có mặt tại Việt Nam và chuẩn bị ra
            mắt. Hiện tại chưa có nhiều người tại Việt Nam có cơ hội trải nghiệm sản phẩm, nên chúng tôi mang đến
            chương trình đặc biệt này để tạo cơ hội cho các mẹ cùng bé được trải nghiệm dòng sản phẩm tuyệt vời, từ đó
            cùng chúng tôi lan toả về WowTop - sữa tăng chiều cao thật sự hiệu quả để nhiều người cùng biết tới.
          </div>
        </div>
        <div class="main">
          <img class="connguoi" src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_18.png') }}" alt="Alt image">
          <div class="box">
            <div class="row">
              <div class="col-md-6">
                <div class="box_item">
                  <div class="n">
                    <span class="number h1">5</span>
                    <span class="suat">Suất</span>
                  </div>
                  <div class="giatri dungchung">
                    <div>
                      <small>Giá trị</small> <small>11,250,000 vnđ/ suất</small>
                    </div>
                  </div>
                  <div class="img"><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_19.png') }}" alt="Alt image"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="box_item">
                  <div class="n">
                    <span class="number h1">995</span>
                    <span class="suat">Suất</span>
                  </div>
                  <div class="giatri dungchung">
                    <div>
                      <small>Giá trị</small> <small>11,250,000 vnđ/ suất</small>
                    </div>
                  </div>
                  <div class="img"><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_21.png') }}" alt="Alt image"></div>
                  <img class="ab" src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_20.png') }}" alt="Alt image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h2 tonggiatri">TỔNG GIÁ TRỊ LÊN ĐẾN 1,3 TỶ VNĐ</div>
        <div class="dkdt h2">
          <span>Đăng kí dùng thử</span>
        </div>
      </div>
    </section>

    <section class="section section_ct_toi_uu sp">
      <img src="{{ asset('wowtop/assets/image/home/bgr-mobile-2.jpg') }}" alt="alt img">
      <div class="tiu_uu_head">
        <div class="title h2 font-bold text-center">
          <p>CÔNG THỨC TỐI ƯU</p>
        </div>
        <div class="title2">
          <div class="h2"><span class="cho">CHO</span> <span class="chieu_cao_vd">CHIỀU CAO VƯỢT ĐỈNH</span></div>
          <img src="{{ asset('wowtop/assets/image/home/artboard-13.png') }}" alt="Alt image" style="width: 60%; margin: 0 auto">
        </div>
      </div>
      <div class="content_ct_toi_uu">
        <div class="item_ct">
          <div class="row">
            <div class="col-4 ct_image ct_image_1">
              <img src="{{ asset('wowtop/assets/image/home/bong.webp') }}" alt="alt img">
              <span class="lbl">Cao hơn, <br> chắc khỏe hơn <br> từ cấp nguyên <br> bào xương</span>
            </div>
            <div class="col-8 right_ct">
            <span>
              Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP & CPP</strong> tăng cường hoạt động
              của nguyên bào xương, Hàm lượng Canxi cao hàng đầu (1200mg), tỷ lệ vàng Canxi : Photo = 1,4:1 kết hợp với D3K2 & khoáng chất·giúp hấp thu Canxi tối đa.
            </span>
              <img src="{{ asset('wowtop/assets/image/home/artboard-14.png') }}" alt="Alt image">
            </div>
          </div>
        </div>
        <div class="item_ct">
          <div class="row">
            <div class="col-4 ct_image">
              <img src="{{ asset('wowtop/assets/image/home/bong.webp') }}" alt="alt img">
              <span class="lbl">Tiêu hoá <br>Tốt</span>
            </div>
            <div class="col-8 right_ct">
              <span>Chứa <strong>200 triệu lợi khuẩn Lactobacillus</strong> giúp hệ tiêu hóa luôn khỏe mạnh. Hệ chất xơ <strong>GOS & FOS</strong> bảo vệ đường ruột, giúp hấp thu Canxi tốt hơn</span>
              <img src="{{ asset('wowtop/assets/image/home/artboard-14.png') }}" alt="Alt image">
            </div>
          </div>
        </div>
        <div class="item_ct">
          <div class="row">
            <div class="col-4 ct_image">
              <img src="{{ asset('wowtop/assets/image/home/bong.webp') }}" alt="alt img">
              <span>Cung cấp <br> dinh dưỡng <br> toàn diện</span>
            </div>
            <div class="col-8 right_ct">
              <span>Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.</span>
              <img src="{{ asset('wowtop/assets/image/home/artboard-14.png') }}" alt="Alt image">
            </div>
          </div>
        </div>
        <div class="item_ct">
          <div class="row">
            <div class="col-4 ct_image">
              <img src="{{ asset('wowtop/assets/image/home/bong.webp') }}" alt="alt img">
              <span>Phát triển <br> trí não & <br> sáng mắt</span>
            </div>
            <div class="col-8 right_ct">
              <span><strong>DHA và ARA</strong> giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh,  phát triển thị lực & sáng mắt</span>
              <img src="{{ asset('wowtop/assets/image/home/artboard-14.png') }}" alt="Alt image">
            </div>
          </div>
        </div>
        <div class="item_ct">
          <div class="row">
            <div class="col-4 ct_image">
              <img src="{{ asset('wowtop/assets/image/home/bong.webp') }}" alt="alt img">
              <span>Tăng sức <br> đề kháng</span>
            </div>
            <div class="col-8 right_ct">
              <span><strong>Lactoferrin & IgG</strong> tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.</span>
              <img src="{{ asset('wowtop/assets/image/home/artboard-14.png') }}" alt="Alt image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section_ct_toi_uu pc">
      <div class="wrapper">
        <div class="w_hopsua">
          <div class="head">
            <div class="title h2 font-bold text-center">
              <p class="l1">CÔNG THỨC TỐI ƯU</p>
            </div>
            <div class="title2">
              <div class="h2"><span class="cho">CHO</span> <span class="chieu_cao_vd">CHIỀU CAO VƯỢT ĐỈNH</span></div>
              <img src="{{ asset('wowtop/assets/image/home/artboard-13.png') }}" alt="Alt image" style="width: 60%; margin: 0 auto">
            </div>
          </div>
          <img class="hopsua" src="{{ asset('wowtop/assets/image/home/nen-ct-2.webp') }}" alt="Alt image">
          <div class="text">
            <div class="txt1">
            <span>
              Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP & CPP</strong> tăng cường hoạt động
              của nguyên bào xương, Hàm lượng Canxi cao hàng đầu (1200mg), tỷ lệ vàng Canxi : Photo = 1,4:1 kết hợp với D3K2 & khoáng chất·giúp hấp thu Canxi tối đa.
            </span>
            </div>
            <div class="txt2">
              <span>Chứa <strong>200 triệu lợi khuẩn Lactobacillus</strong> giúp hệ tiêu hóa luôn khỏe mạnh. Hệ chất xơ <strong>GOS & FOS</strong> bảo vệ đường ruột, giúp hấp thu Canxi tốt hơn</span>
            </div>
            <div class="txt3">
              <span>Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.</span>
            </div>
            <div class="txt4">
              <span><strong>DHA và ARA</strong> giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh,  phát triển thị lực & sáng mắt</span>
            </div>
            <div class="txt5">
              <span><strong>Lactoferrin & IgG</strong> tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cach_thuc_tham_gia">

    </section>

    <section class="section_conbo section_conbo_tmp">
      <div class="wrapper">
        <div class="text">
          <div class="title1 uppercase h2">
            Nguồn sữa từ những chú bò <br>
            <strong>Hạnh phúc nhất thế giới</strong><br>
          </div>
        </div>
        <div class="img">
          <div class="row">
            <div class="col-md-5">
              <div><img class="img1" src="{{ asset('wowtop/assets/image/home/non-gmo.png') }}" alt="Image name"></div>
            </div>
            <div class="col-md-7">
              <div>
                <div class="img_3">
                  <img src="{{ asset('wowtop/assets/image/home/conbo_img_1.png') }}" alt="Image name">
                  <img src="{{ asset('wowtop/assets/image/home/conbo_img_2.png') }}" alt="Image name">
                  <img src="{{ asset('wowtop/assets/image/home/conbo_img_3.png') }}" alt="Image name">
                </div>
                <div style="color: white; font-size: 22px; margin-left: 50px">Nông trại bò sữa chuẩn Quốc tế</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-5">
              <img src="{{ asset('wowtop/assets/image/home/conbo_img_5.png') }}" alt="Image name">
            </div>
            <div class="col-md-7" style="position: relative">
              <img class="conbo1 pc" src="{{ asset('wowtop/assets/image/home/dong-co-d-2.webp') }}" alt="Image name">
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
              <img src="{{ asset('wowtop/assets/image/home/conbo_img_1.png') }}" alt="Image name">
              <img src="{{ asset('wowtop/assets/image/home/conbo_img_2.png') }}" alt="Image name">
              <img src="{{ asset('wowtop/assets/image/home/conbo_img_3.png') }}" alt="Image name">
            </div>
            <div style="color: #715421; font-size: 20px; font-weight: 600" class="text-center">Nông trại bò sữa chuẩn Quốc tế</div>
          </div>
          <div><img class="img1" src="{{ asset('wowtop/assets/image/home/non-gmo.png') }}" alt="Image name"></div>
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

    <section class="section section_tim_hieu_sp">
      <div class="wrapper992">
        <div class="r1">
          <div class="head">
            <div class="txt h3">>> TÌM HIỂU THÊM VỀ SẢN PHẨM</div>
            <div><img src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Alt name"></div>
          </div>
          <div class="bottom">
            <div class="row">
              <div class="col-md-6 rr1">
                <p><span>Thời gian đăng ký dùng thử từ ngày...... đến hết ngày.....</span></p>
              </div>
              <div class="col-md-6 rr2">
                <p><span>Đối tượng tham gia chương trình đăng ký dùng thử là cha mẹ có con trong độ tuổi từ 1 - 10 tuổi</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="r2">
          <div class="txt h2 dungchung"><span>CÁCH THỨC THAM GIA</span></div>
          <div class="main">
            <div class="row">
              <div class="col-md-4 col-sm-4 col-6">
                <div class="item">
                  <span class="number">1</span>
                  <div><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_11.png') }}" alt="Alt name"></div>
                  <div class="t">Xem video để hiểu rõ về sản phẩm WowTop mà bố mẹ lựa chọn cho con yêu</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-6">
                <div class="item">
                  <span class="number">2</span>
                  <div><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_12.png') }}" alt="Alt name"></div>
                  <div class="t">Xem video để hiểu rõ về sản phẩm WowTop mà bố mẹ lựa chọn cho con yêu</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-6">
                <div class="item">
                  <span class="number">3</span>
                  <div><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_13.png') }}" alt="Alt name"></div>
                  <div class="t">Bố mẹ điền Form đăng ký dùng thử sữa WowTop cho con yêu</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-6">
                <div class="item">
                  <span class="number">4</span>
                  <div><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_14.png') }}" alt="Alt name"></div>
                  <div class="t">Các bố mẹ tham gia Group ..... để cập nhật kết quả theo tuần BẤM VÀO ẢNH PHÍA TRÊN ĐỂ THAM GIA NGAY</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-6">
                <div class="item">
                  <span class="number">5</span>
                  <div><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_10.png') }}" alt="Alt name"></div>
                  <div class="t">Chuyên gia gọi điện cho bố mẹ để nắm bắt tình trạng chiều cao của con để lên lộ trình phát triển chiều cao cả về chất và lượng cho con. Lựa chọn 5 bé dùng thử 3 tháng sản phẩm WowTop</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-6">
                <div class="item">
                  <span class="number">6</span>
                  <div><img src="{{ asset('wowtop/assets/image/dk_dung_thu/asset_9.png') }}" alt="Alt name"></div>
                  <div class="t">Bố mẹ cam kết ghi nhận quá trình sử dụng của con</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section sectionb456">
      <div class="wrapper992">
        <div class="dkdt h2">
          <span>Đăng kí dùng thử</span>
        </div>
        <div class="head dungchung">
          <div class="txt h2"><span>BỐ MẸ THAM GIA NGAY</span></div>
        </div>
        <div class="t1 h2 mt-1 text-center" style="font-weight: 500">CON CAO LỚN TRONG "TẦM TAY"</div>

        <div class="row r4 my-12">
          <div class="col-md-6">
            <div class="buoc b4 h2">BƯỚC 1</div>
            <div class="t1 h3 mt-1" style="font-weight: 500">XEM VIDEO ĐỂ HIỂU RÕ VỀ SẢN PHẨM WOWTOP MÀ BỐ MẸ LỰA CHỌN CHO CON YÊU</div>
          </div>
          <div class="col-md-6 relative">
            <iframe style="border-radius: 20px" width="100%" height="315" src="https://www.youtube.com/embed/y9vlAFDEr7I?si=zDi8B9unDuWxPVnw"></iframe>
          </div>
        </div>

        <div class="pc">
          <div class="row r2">
            <div class="col-md-6">
              <div class="mainr2">
                @for($i=0; $i<20; $i++)
                  <div class="cauhoi_item">
                    <div class="cauhoi">? Cau hoi 1</div>
                    <div class="traloi">Bố mẹ trả lời</div>
                  </div>
                @endfor
              </div>
            </div>
            <div class="col-md-6 mt-4 md:mt-0">
              <div class="buoc b4 h2" style="float: right">BƯỚC 2</div>
              <div class="t1 h3 mt-1 text-right" style="font-weight: 500; clear: both">BỐ MẸ VUI LÒNG TRẢ LỜI CÁC CÂU HỎI DƯỚI ĐÂY ĐỂ CHẮN CHẮN BỐ MẸ ĐÃ HIỂU VÀ SẴN SÀNG LỰA CHỌN WOWTOP CHO PHÁT TRIỂN CHIỀU CAO VƯỢT TRỘI CỦA CON YÊU</div>
            </div>
          </div>
        </div>
        <div class="sp">
          <div class="row r2">
            <div class="col-md-6 mt-4 md:mt-0">
              <div class="buoc b4 h2">BƯỚC 2</div>
              <div class="t1 h3 mt-1 text-justify" style="font-weight: 500;">BỐ MẸ VUI LÒNG TRẢ LỜI CÁC CÂU HỎI DƯỚI ĐÂY ĐỂ CHẮN CHẮN BỐ MẸ ĐÃ HIỂU VÀ SẴN SÀNG LỰA CHỌN WOWTOP CHO PHÁT TRIỂN CHIỀU CAO VƯỢT TRỘI CỦA CON YÊU</div>
            </div>
            <div class="col-md-6">
              <div class="mainr2">
                @for($i=0; $i<20; $i++)
                  <div class="cauhoi_item">
                    <div class="cauhoi">? Cau hoi 1</div>
                    <div class="traloi">Bố mẹ trả lời</div>
                  </div>
                @endfor
              </div>
            </div>
          </div>
        </div>

        <div class="r3 mt-12">
          <div class="head">
            <div class="buoc b4 h2">BƯỚC 3</div>
            <div class="t1 h3 mt-1" style="font-weight: 500">BỐ MẸ ĐIỀN FORM ĐĂNG KÝ DÙNG THỬ SỮA WOWTOP CHO CON YÊU </div>
          </div>
          <div class="dk_mua_hang">
            <div class="content">
              <div class="title h2">Đăng kí ngay tại đây</div>
              <div class="row">
                <div class="col-lg-8">
                  @include('wowtop.dang-ki-dung-thu.form')
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row r4 mt-12">
          <div class="col-md-6">
            <div class="buoc b4 h2">BƯỚC 4</div>
            <div class="t1 h3 mt-1" style="font-weight: 500">BỐ MẸ THAM GIA GROUP .... ĐỂ CẬP NHẬT KẾT QUẢ THEO TUẦN</div>
          </div>
          <div class="col-md-6 relative">
            <img src="{{ asset('wowtop/assets/image/dk_dung_thu/3.jpg') }}" alt="Alt image">
            <a class="join_group" href=""><span>THAM GIA GROUP</span></a>
          </div>
        </div>
        <div class="pc">
          <div class="row r5">
            <div class="col-md-6">
              <img src="{{ asset('wowtop/assets/image/dk_dung_thu/2.jpg') }}" alt="Alt image">
            </div>
            <div class="col-md-6 mt-4 md:mt-0">
              <div class="buoc b4 h2" style="float: right">BƯỚC 5</div>
              <div class="t1 h3 mt-1 text-right" style="font-weight: 500; clear: both">CHUYÊN GIA GỌI ĐIỆN PHỎNG VẤN VÀ CƠ HỘI DÙNG THỬ WOWTOP 3 THÁNG</div>
            </div>
          </div>
        </div>
        <div class="row r5 sp">
          <div class="col-md-6">
            <div class="buoc b4 h2">BƯỚC 5</div>
            <div class="t1 h3 mt-1" style="font-weight: 500">CHUYÊN GIA GỌI ĐIỆN PHỎNG VẤN VÀ CƠ HỘI DÙNG THỬ WOWTOP 3 THÁNG</div>
          </div>
          <div class="col-md-6">
            <img src="{{ asset('wowtop/assets/image/dk_dung_thu/2.jpg') }}" alt="Alt image">
          </div>
        </div>
        <div class="r6">
          <div class="buoc b4 h2">BƯỚC 6</div>
          <div class="t1 h3 mt-1" style="font-weight: 500">BỐ MẸ GHI NHẬN QUÁ TRÌNH SỬ DỤNG CỦA CON </div>
        </div>
        <div class="row r7">
          <div class="col-sm-6">
            <div>
              <img src="{{ asset('wowtop/assets/image/be-thap-cao.webp') }}" alt="Alt image">
              <p>Bố mẹ chụp 1 toàn dáng của con trước khi sử dụng sản phẩm và 1 ảnh toàn dáng của con cầm sản phẩm WowTop sau khi sử dụng sản phẩm</p>
            </div>
          </div>
          <div class="col-sm-6 right">
            <iframe style="border-radius: 20px" width="100%" height="315" src="https://www.youtube.com/embed/y9vlAFDEr7I?si=zDi8B9unDuWxPVnw"></iframe>
            <p>VIDEO MẪU QUAY CẢNH BÓC HỘP VÀ CON SỬ DỤNG SẢN PHẨM WOWTOP</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section_dieu_khoan">
      <div class="wrapper992">
        <div class="dk"><span class=" h3 t1">ĐIỀU KHOẢN THAM GIA CHƯƠNG TRÌNH</span></div>
        <div class="main">
          <div>* Bố mẹ khi tham gia chương trình đăng ký dùng thử đồng ý với Thể lệ và Điều khoản chương trình</div>
          <div>* Đồng ý cho Nhãn hàng sử dụng video, hình ảnh cho mục đích truyền thông sản phẩm</div>
          <div>* Mọi quyết định cuối cùng thuộc về ban tổ chức</div>
        </div>
      </div>
    </section>

    <section class="section section_banner_bottom">
      <img src="{{ asset('wowtop/assets/image/dk_dung_thu/bg12.jpg') }}" alt="Alt image">
    </section>
  </section>
@endsection
