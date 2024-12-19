@extends('wowtop.layout.main')
@section('title', 'Sản phẩm')

@push('styles')
	<link rel="stylesheet" href="{{ asset('wowtop/assets/css/reset.css') }}">
	<link rel="stylesheet" href="{{ asset('wowtop/assets/css/home_and_san_pham.css') }}">
	<link rel="stylesheet" href="{{ asset('wowtop/assets/css/san-pham-v2.css') }}">
@endpush

@push('scripts')
	<script src="{{ asset('wowtop/assets/js/product.js') }}"></script>
@endpush

@section('content')
	<section class="section-main section-products">

		<section class="section section_banner">
			<div class="wrapper992">
				<div class="row flex items-center rowrow">
					<div class="col-md-6">
						<img class="logoLeft" src="{{ asset('wowtop/assets/image/product/lonsua.png') }}" alt="Alt image">
					</div>
					<div class="col-md-6">
						<div class="banner_right">
							<div class="scroll">
								<img class="logo" src="{{ asset('wowtop/assets/image/product/logo-sp.png') }}" alt="Alt image">
								<h3 class="h3">CAO TỪ CẤP ĐỘ NGUYÊN BÀO</h3>
								<div class="suabot750">Sữa bột 750G</div>
								<div class="sohuu">Sở hữu chiều cao đạt chuẩn thế giới là bệ phóng tuyệt vời cho sự phát triển toàn diện về ngoại hình, sức khỏe, tinh thần hay sự nghiệp sau này của trẻ. Nếu được chăm sóc tốt, trẻ có thể cao lên đến 8-12cm mỗi năm.</div>
								<div class="dd">WowTop chứa hệ dưỡng chất giàu thành phần quý hiếm với  hàm lượng cao như CBP 125mg, Canxi 1200mg cùng 29 loại vitamin và khoáng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng WowTop không chỉ giúp trẻ tăng chiều cao lành mạnh mà còn kích thích sự phát triển ở cấp nguyên bào Xương từ sâu bên trong, giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng WowTop tăng trưởng chiều cao cho trẻ không chỉ ở lượng mà còn ở chất.
									Tiêu chuẩn & cam kết của sản phẩm</div>
								<img class="logo" src="{{ asset('wowtop/assets/image/product/cn.png') }}" alt="Alt image">
								<ul>
									<li>
										<img class="tich" src="{{ asset('wowtop/assets/image/product/tich2.png') }}" alt="Alt image">
										<span>NON - GMO VERIFIED: Chứng nhận nguồn sữa không biến đổi Gen</span>
									</li>
									<li>
										<img class="tich" src="{{ asset('wowtop/assets/image/product/tich2.png') }}" alt="Alt image">
										<span>ALL NATURAL: 100% nguyên liệu tự nhiên</span>
									</li>
									<li>
										<img class="tich" src="{{ asset('wowtop/assets/image/product/tich2.png') }}" alt="Alt image">
										<span>GRASS FED: Chứng nhận 100% Bò ăn cỏ tự nhiên</span>
									</li>
									<li>
										<img class="tich" src="{{ asset('wowtop/assets/image/product/tich2.png') }}" alt="Alt image">
										<span>NEW ZEALAND MADE: Nhập khẩu nguyên lon từ New Zealand</span>
									</li>
									<li>
										<img class="tich" src="{{ asset('wowtop/assets/image/product/tich2.png') }}" alt="Alt image">
										<span>HACCP from NZ MPI: Chứng nhận An toàn vệ sinh thực phẩm từ Bộ Kế hoạch & Đầu tư New Zealand</span>
									</li>
									<li>
										<img class="tich" src="{{ asset('wowtop/assets/image/product/tich2.png') }}" alt="Alt image">
										<span>GMP: Chứng nhận đạt tiêu chuẩn sản xuất Châu Âu</span>
									</li>
								</ul>
							</div>
							<div class="btn_muangay">
								<img class="muangay" src="{{ asset('wowtop/assets/image/product/mua.png') }}" alt="Alt image">
								<span class="muangay_txt">MUA NGAY</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section section_chungchi">
			<div class="wrapper992">
				<div class="row rowcc">
					<div class="col-md-6 left">
						<div class="row">
							<div class="slide_chung_chi">
								<div class="slide-arrows">
									<img id="banner-arrow-left" src="{{ asset('wowtop/assets/image/home/icon-left.png') }}" alt="Alt image">
									<img id="banner-arrow-right" src="{{ asset('wowtop/assets/image/home/icon-right.png') }}" alt="Alt image">
								</div>
								<div class="section_main_slider_chung_chi">
									<div class="slide_item">
										<img class="img_slide" data-lazy="{{ asset('wowtop/assets/image/product/artboard_14.png') }}" alt="Alt name">
									</div>
									<div class="slide_item">
										<img class="img_slide" data-lazy="{{ asset('wowtop/assets/image/product/artboard_14.png') }}" alt="Alt name">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="thuonghieu">
								<img class="th" src="{{ asset('wowtop/assets/image/product/artboard_16.png') }}" alt="Alt name">
								<img class="th" src="{{ asset('wowtop/assets/image/product/bfdhb.png') }}" alt="Alt name">
								<img class="th" src="{{ asset('wowtop/assets/image/product/artboard_15.png') }}" alt="Alt name">
								<img class="th" src="{{ asset('wowtop/assets/image/product/artboard_13.png') }}" alt="Alt name">
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="textchungchi">
							<div class="content">
								<div class="h3">NON - GMO VERIFIED</div>
								<div class="text">
									Một trong số công ty hiếm hoi ở New Zealand có đầy đủ chứng nhận về sữa công thức dành cho trẻ sơ sinh.
									WowTop chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP 125mg, Canxi 1200mg cùng 29 loại vitamin và khoáng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng WowTop không chỉ giúp
									trẻ tăng chiều cao lành mạnh mà còn kích thích sự phát triển ở cấp nguyên bào Xương từ sâu bên trong,
									giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng WowTop tăng trưởng chiều cao
									cho trẻ không chỉ ở lượng mà còn ở chất.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section section_pt_toan_dien">
			<div class="wrapper992">
				<div class="head">
					<div class="buoc_title">
						<span class="h3">CON VỤT CAO, XƯƠNG CHẮC KHỎE</span>
					</div>
					<div class="h3 row2">PHÁT TRIỂN TOÀN DIỆN</div>
					<div class="h3"><span class="nhocongthuc">NHỜ CÔNG THỨC</span><span class="vuottroi">VƯỢT TRỘI</span></div>
				</div>
				<div class="head2">
					<span class="head2_text">Các mẹ có biết, cao không chỉ về lượng mà còn về chất? <br>
						Các mẹ có biết xương con đang khóc lóc mỗi ngày? <br>
						Mẹ hãy tìm hiểu ngay <span>cách tăng chiều cao từ cấp độ nguyên bào</span>
					</span>
				</div>

				<div class="head3">
					<div class="h3t1 uppercase">
						<span><strong>Có thành phần CBP</strong></span><br>
						<span>
							giúp kích thích <br>
							<strong>quá trình tạo xương</strong> <br>
							từ cấp độ nguyên bào
						</span>
					</div>
					<div class="h3t2">
						<span class="max chulon">CBP</span>
						<span class="max chulon">≈ 1/50 tỷ Nano</span>
					</div>
					<div class="h3t3 uppercase">
						<span>10 lít sữa non của bò</span> <br>
						<span class="s2">tiết ra trong 24h đầu <br> chiết xuất ra được </span> <br>
						<span class="max chulon">4g CBP</span>
					</div>
				</div>
			</div>
		</section>

		<section class="section section_cbp">
			<div class="wrapper992">
				<img class="pt2pt" src="{{ asset('wowtop/assets/image/product/artboard_17.webp') }}" alt="Alt name">
				<h2 class="h2 title_sph">TÁC DỤNG CỦA <span>CBP</span> VỚI</h2>
				<div class="nguyenbaoxuong">
					<img src="{{ asset('wowtop/assets/image/product/bgr-tp-2.png') }}" alt="Alt name">
					<span class="h2">NGUYÊN BÀO XƯƠNG</span>
				</div>
				<div class="content">
					<div class="item">
						<img src="{{ asset('wowtop/assets/image/product/artboard_20.png') }}" alt="Alt name">
						<div class="item_right">
							<div class="h3">NGUYÊN BÀO XƯƠNG</div>
							<img src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Alt name">
							<div class="text">
								Là những công nhân đặc biệt với nhiệm vụ xây dựng và sửa chữa xương. Trong quá trình tăng chiều cao,
								nguyên bào xương sẽ làm việc chăm chỉ để tạo ra các phần xương mới, nối dài xương hơn, giống như cách
								công nhân xây lên những tòa nhà cao tầng.
							</div>
						</div>
					</div>
					<div class="item">
						<img src="{{ asset('wowtop/assets/image/product/artboard_21.png') }}" alt="Alt name">
						<div class="item_right">
							<div class="h3">Cao về lượng</div>
							<img src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Alt name">
							<div class="text">
								Nếu chỉ đo xem con cao lên bao nhiêu centimet giống như xây nhà cao tầng mà chỉ quan tâm xem xây được
								bao nhiêu tầng vậy. Chiều cao về centimet rất quan trọng, nhưng nếu xương không đủ chất lượng, nguyên
								bào xương thiếu hụt, con sẽ dễ bị loãng xương và các bệnh về xương khác
							</div>
						</div>
					</div>
					<div class="item">
						<img src="{{ asset('wowtop/assets/image/product/artboard_22.png') }}" alt="Alt name">
						<div class="item_right">
							<div class="h3">Cao về chất</div>
							<img src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Alt name">
							<div class="text">
								Quan tâm tới chất lượng xương (mật độ nguyên bào xương có đủ hay không cũng giống như việc kết cấu của 1
								tòa nhà có vững chắc hay không. Nếu mật độ nguyên bào xương quá ít, chúng sẽ không thể liên kết với nhau
								tạo thành 1 lưới xương vững chắc, xương sẽ rất dễ tổn thương, giống như tòa nhà cao tầng không đủ chắc
								chắn, có thể sụp đổ bất kì lúc nào vậy. ngược lại nếu chất lượng xương tốt (đủ số lượng nguyên bào
								xương) thì con có thể thoải mái vận động vui chơi với khung xương chắc khỏe.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section section_tai_sao_noi">
			<div class="wrapper992">
				<div class="text">
					Tại sao nói CBP là bữa tiệc thịnh soạn dành cho nguyên bào xương
					Khi hình thành nguyên bào xương, cần tiêu tổn rất nhiều dinh dưỡng và axit amin. CBP cung cấp dồi dào các
					dưỡng chất này, cho nguyên bào xương "ăn ngon", "ăn no", từ đó nó sẽ sinh ra 1 mạng lưới xương vững chắc
				</div>
			</div>
		</section>

		<section class="section section_cac_buoc_tang_cc">
			<div class="wrapper992">
				<h2 class="h2 title_sph">3 BƯỚC</h2>
				<div class="buoc_title">
					<span class="h3">TĂNG CHIỀU CAO <br> TẠI NGUYÊN BÀO XƯƠNG</span>
				</div>
				<div class="content">
					<div class="row">
						<div class="col-md-6">
							<div class="row">
								<div class="item_tang_cc">
									<div class="row1">
										<span class="number">1</span>
										<span class="txt">Tạo ra chất nền của khung xương <strong>giúp xương dài ra</strong></span>
									</div>
									<img src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Alt name">
								</div>
							</div>
							<div class="row">
								<div class="item_tang_cc">
									<div class="row1">
										<span class="number">2</span>
										<span class="txt">Phát sóng siêu tần thu hút <strong>canxi và 23 dưỡng chất</strong> cần thiết</span>
									</div>
									<img src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Alt name">
								</div>
							</div>
							<div class="row">
								<div class="item_tang_cc">
									<div class="row1">
										<span class="number">3</span>
										<span class="txt">Khoá các dưỡng chất cần thiết cho <strong>tăng trưởng</strong> và <strong>giúp xương chắc khoẻ</strong></span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6" style="margin-top: 15px">
							<img class="img_right_tang_cc" src="{{ asset('wowtop/assets/image/product/artboard_19.webp') }}" alt="Alt image">
						</div>
					</div>
				</div>
			</div>
		</section>

    @include('wowtop.layout.include.section_ct_toi_uu')

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

		<section class="section section_dat_tieu_chuan">
			<div class="wrapper">
				<div class="row">
					<div class="col-md-4">
						<img class="img1" src="{{ asset('wowtop/assets/image/product/gfhfg.webp') }}" alt="Image name">
					</div>
					<div class="col-md-7">
						<div class="text">
							<div class="title1 uppercase h2">
								WOWTOP ĐẠT TIÊU CHUẨN <br>
								<strong>QUỐC GIA NEWZELAND</strong>
							</div>
						</div>
						<div class="h3">
							ĐỦ TIÊU CHUẨN XUẤT KHẨU TOÀN THẾ GIỚI VÀ ĐẠT TIÊU CHUẨN CỦA CỤC AN TOÀN THỰC PHẨM VIỆT NAM
						</div>
						<div class="line2">
							<div class="line">
								<div>Lorem</div>
								<img class="img2" src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Image name">
							</div>
							<div class="line">
								<div>Lorem</div>
								<img class="img2" src="{{ asset('wowtop/assets/image/home/asset_1.png') }}" alt="Image name">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section section_thanh_phan">
			<div class="wrapper992">
				<div class="main">
					<h2 class="h2 title_sph">Thành phần</h2>
					<div class="text">
						Sữa bò tươi NON-GMO (Vitamin C, Sắt, Kẽm, Vitamin A, Vitamin D3), Sữa bò A2, Fructooligosaccharides (FOS),
						Lactose, Galacto-oligosaccharide (GOS), <strong>Canxi</strong> Phosphate Tribasic, Bột Docosahexaenoic Acid (DHA), Bột
						Arachidonic Acid (ARA) , Protein cơ bản sữa non (<strong>CBP 125mg/100g</strong>), <strong>Lactoferrin, Probiotic</strong> (Bifidobacteria
						lactis), Vitamin K1’ Bifidobacteria Animalis Probiotic-BB12, Immunoglobulin G (18,75mg/100g).
					</div>
				</div>
			</div>
		</section>

		<section class="section section_dinhduong">
			<div class="wrapper">
				<div class="main">
					<div class="w_h2"><div class="h2 title_sph">Dinh dưỡng trong 1 ly sữa WowTop 220ml</div></div>
					<table>
						<thead>
						<tr>
							<th>Thành phần</th>
							<th>Trong 1 ly sữa</th>
							<th>Đơn vị</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>Năng lượng</td>
							<td>727.58</td>
							<td>Kj</td>
						</tr>
						<tr>
							<td>Chất đạm</td>
							<td>7.63</td>
							<td>g</td>
						</tr>
						<tr>
							<td>Chất béo</td>
							<td>8.62</td>
							<td>g</td>
						</tr>
						<tr>
							<td>Chất béo bão hòa</td>
							<td>5.68</td>
							<td>g</td>
						</tr>
						<tr>
							<td>Trans Fat</td>
							<td>0.40</td>
							<td>g</td>
						</tr>
						<tr>
							<td>Monounsaturated</td>
							<td>1.72</td>
							<td>g</td>
						</tr>
						<tr>
							<td>Polyunsaturated</td>
							<td>0.11</td>
							<td>g</td>
						</tr>
						<tr class="tr_special">
							<td><strong>Lactoferrin</strong></td>
							<td><strong>25.74</strong></td>
							<td><strong>mg</strong></td>
						</tr>
						<tr class="tr_special">
							<td><strong>CBP</strong></td>
							<td><strong>125</strong></td>
							<td><strong>mg</strong></td>
						</tr>
						<tr class="tr_special">
							<td><strong>CPP</strong></td>
							<td><strong>140</strong></td>
							<td><strong>mg</strong></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>

    <section class="section section_nguon_goc">
      <div class="wrapper992">
        <div class="h2 uppercase"><span class="h2">Hướng dẫn truy xuất nguồn gốc</span></div>
        <div class="content pc">
          <div class="b b1">
            <div class="con">
              <img src="{{ asset('client/image/default.jpg') }}">
              <span>1 Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</span>
            </div>
          </div>
          <div class="b b2">
            <img src="{{ asset('client/image/default.jpg') }}">
            <span>2 Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</span>
          </div>
          <div class="b b3">
            <div class="con">
              <img src="{{ asset('client/image/default.jpg') }}">
              <span>3 Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</span>
            </div>
          </div>
        </div>
        <div class="content sp">
          <div class="b b1">
            <img class="img_left"  src="{{ asset('client/image/default.jpg') }}">
            <div class="right">
              <img class="buoc" src="{{ asset('wowtop/assets/image/product/b1.png') }}" alt="Alt image">
              <span>Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</span>
            </div>
          </div>
          <div class="b b1">
            <img class="img_left"  src="{{ asset('client/image/default.jpg') }}">
            <div class="right">
              <img class="buoc" src="{{ asset('wowtop/assets/image/product/b2.png') }}" alt="Alt image">
              <span>Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</span>
            </div>
          </div>
          <div class="b b1">
            <img class="img_left" src="{{ asset('client/image/default.jpg') }}">
            <div class="right">
              <img class="buoc" src="{{ asset('wowtop/assets/image/product/b3.png') }}" alt="Alt image">
              <span>Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section_hdsd">
      <div class="wrapper992">
        <div class="h2 uppercase"><span class="h2">Hướng dẫn sử dụng</span></div>
        <div class="pc">
          <div class="row">
            <div class="col-md-4">
              <img class="be" src="{{ asset('wowtop/assets/image/product/be.png') }}" alt="Alt image">
            </div>
            <div class="col-md-8">
              <div class="r1">
                <div>
                  <div class="row">
                    <div class="col-6">
                      <img class="buoc" src="{{ asset('wowtop/assets/image/product/b1.png') }}" alt="Alt image">
                    </div>
                    <div class="col-6">
                      <img class="buoc2" src="{{ asset('wowtop/assets/image/product/icon_giot.png') }}" alt="Alt image">
                    </div>
                  </div>
                  <div class="txt">Chuẩn bị 180ml nước ấm (35-45 độ C) </div>
                </div>
                <img class="mui_ten" src="{{ asset('wowtop/assets/image/product/mui_ten.png') }}" alt="Alt image">
              </div>
              <div class="r1">
                <div>
                  <div class="row">
                    <div class="col-6">
                      <img class="buoc" src="{{ asset('wowtop/assets/image/product/b2.png') }}" alt="Alt image">
                    </div>
                    <div class="col-6">
                      <img class="buoc2" src="{{ asset('wowtop/assets/image/product/icon_muong.png') }}" alt="Alt image">
                    </div>
                  </div>
                  <div class="txt">Pha 4 muỗng (40g) sữa WowTop vào nước ấm</div>
                </div>
                <img class="mui_ten" src="{{ asset('wowtop/assets/image/product/mui_ten.png') }}" alt="Alt image">
              </div>
            </div>
          </div>
          <div class="rowb3">
            <img class="buoc" src="{{ asset('wowtop/assets/image/product/b3.png') }}" alt="Alt image">
            <div class="txt">Khuấy đều để có được một ly 220ml sữa tăng chiều cao WowTop đầy đủ dưỡng chất</div>
            <img class="buoc2" src="{{ asset('wowtop/assets/image/product/icon_coc.png') }}" alt="Alt image">
          </div>
        </div>
        <div class="sp">
          <img class="be" src="{{ asset('wowtop/assets/image/product/be.png') }}" alt="Alt image">
          <div class="r1">
            <div>
              <div class="row">
                <div class="col-6">
                  <img class="buoc" src="{{ asset('wowtop/assets/image/product/b1.png') }}" alt="Alt image">
                </div>
                <div class="col-6">
                  <img class="buoc2" src="{{ asset('wowtop/assets/image/product/icon_giot.png') }}" alt="Alt image">
                </div>
              </div>
              <div class="txt">Chuẩn bị 180ml nước ấm (35-45 độ C) </div>
            </div>
            <img class="mui_ten" src="{{ asset('wowtop/assets/image/product/mui_ten.png') }}" alt="Alt image">
          </div>
          <div class="r1">
            <div>
              <div class="row">
                <div class="col-6">
                  <img class="buoc" src="{{ asset('wowtop/assets/image/product/b2.png') }}" alt="Alt image">
                </div>
                <div class="col-6">
                  <img class="buoc2" src="{{ asset('wowtop/assets/image/product/icon_muong.png') }}" alt="Alt image">
                </div>
              </div>
              <div class="txt">Pha 4 muỗng (40g) sữa WowTop vào nước ấm</div>
            </div>
            <img class="mui_ten" src="{{ asset('wowtop/assets/image/product/mui_ten.png') }}" alt="Alt image">
          </div>
          <div class="r1">
            <div>
              <div class="row">
                <div class="col-6">
                  <img class="buoc" src="{{ asset('wowtop/assets/image/product/b3.png') }}" alt="Alt image">
                </div>
                <div class="col-6">
                  <img class="buoc2" src="{{ asset('wowtop/assets/image/product/icon_coc.png') }}" alt="Alt image">
                </div>
              </div>
              <div class="txt">Khuấy đều để có được một ly 220ml sữa tăng chiều cao WowTop đầy đủ dưỡng chất</div>
            </div>
          </div>
        </div>
      </div>
    </section>

{{--		<section class="section hop_san_pham">--}}
{{--			<div class="wrapper">--}}
{{--				<h2 class="h2 title_sph">HỘP SẢN PHẨM WOWTOP</h2>--}}
{{--				<div class="hop_row_1">--}}
{{--					<div class="hop_row_1_right">--}}
{{--						<p class="h3">--}}
{{--							CÔNG NGHỆ <br>ĐÓNG GÓI TIÊN TIẾN <br>VÀ KHOÁ THÔNG MINH <br>--}}
{{--						</p>--}}
{{--					</div>--}}
{{--				</div>--}}
{{--				<div class="hop_row_2">--}}
{{--					<div class="row">--}}
{{--						<div class="col-6">--}}
{{--							<div class="hop_item">--}}
{{--								<div class="h3">NẮP ĐẬY KÍN SÁNG TẠO</div>--}}
{{--								<img src="{{ asset('wowtop/assets/image/product/lonnnn2.webp') }}" alt="Alt image">--}}
{{--							</div>--}}
{{--						</div>--}}
{{--						<div class="col-6">--}}
{{--							<div class="hop_item">--}}
{{--								<div class="h3">THÌA CẢI NẮP ĐỘC ĐÁO</div>--}}
{{--								<img src="{{ asset('wowtop/assets/image/product/lonnnn2.webp') }}" alt="Alt image">--}}
{{--							</div>--}}
{{--						</div>--}}
{{--						<div class="col-6">--}}
{{--							<div class="hop_item">--}}
{{--								<div class="h3">THÌA ĐO CHÍNH XÁC</div>--}}
{{--								<img src="{{ asset('wowtop/assets/image/product/lonnnn2.webp') }}" alt="Alt image">--}}
{{--							</div>--}}
{{--						</div>--}}
{{--						<div class="col-6">--}}
{{--							<div class="hop_item">--}}
{{--								<div class="h3">THUÂN TIỆN VÀ AN TOÀN</div>--}}
{{--								<img src="{{ asset('wowtop/assets/image/product/lonnnn2.webp') }}" alt="Alt image">--}}
{{--							</div>--}}
{{--						</div>--}}
{{--					</div>--}}
{{--				</div>--}}
{{--				<img src="{{ asset('wowtop/assets/image/home/pt1.webp') }}" alt="Alt image" class="pt1">--}}
{{--				<img src="{{ asset('wowtop/assets/image/home/pt2.webp') }}" alt="Alt image" class="pt2">--}}
{{--				<img src="{{ asset('wowtop/assets/image/product/pt3.webp') }}" alt="Alt image" class="pt3">--}}
{{--			</div>--}}
{{--		</section>--}}

		<section class="section section_question">
			<div class="wrapper">
				<div class="sp">
					<h2 class="h2 title_sph uppercase">wow Mom hỏi - wowtop trả lời</h2>
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									Bổ sung CBP 125mg/100g
								</button>
							</h2>
							<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Bột Protein quý hiếm từ sữa non bò New Zealand giúp xương phát triển và tích cực hấp thụ Canxi. CBP
									không chỉ kích thích sự phát triển về lượng của Nguyên bào xương (Osteoblast), mà đồng thời còn có thể
									ức chế hoạt động của Hủy cốt bào (Osteoclast), đóng vai trò quan trọng trong việc duy trì mật độ xương,
									thúc đẩy sự phát triển xương về chất.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Thành phần sữa A2 hiếm
								</button>
							</h2>
							<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Nguồn gốc từ trang trại độc quyền ở Dải vàng nguồn sữa của Đảo Nam New Zealand ở vĩ độ 43°. Chất A2-β
									casein thân thiện hơn với cơ thể con người, giúp bảo vệ sức khỏe đường huyết của trẻ, hỗ trợ tiêu hóa và
									hấp thụ dưỡng chất dễ dàng hơn, và có thể giảm tỷ lệ dị ứng sữa;
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									Công thức Canxi ưu việt
								</button>
							</h2>
							<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Mỗi 100g sữa WowTop chứa 1200mg Canxi, cải thiện trong quá trình phát triển xương và răng.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
									Tỷ lệ vitamin K và vitamin D cao
								</button>
							</h2>
							<div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Kết hợp hấp thụ canxi kép. Vitamin K và vitamin D hỗ trợ trong quá trình hấp thụ và sử dụng canxi của xương.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
									Tỷ lệ Canxi : Phốt pho = 1.4 : 1
								</button>
							</h2>
							<div id="collapse5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Đây là tỉ lệ hoàn hảo để trẻ ở lứa tuổi từ 4-14 hấp thụ Canxi ở mức tối đa.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
									Đặc biệt thêm vào chất Lactoferrin
								</button>
							</h2>
							<div id="collapse6" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									1g lactoferrin được chiết xuất từ mỗi 20,000g sữa tươi. Sản phẩm này chứa đến 73mg lactoferrin cho mỗi
									mỗi 100g sữa bột. Lactoferrin là một loại protein đa chức năng không chỉ tham gia vào việc vận chuyển
									sắt cho cơ thể, mà còn có các chức năng sinh học mạnh mẽ như kháng sinh phổ rộng, chống oxy hóa, kháng
									khuẩn, kháng virus và điều hoà miễn dịch
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
									Chứa Prebiotics (GOS, FOS) và probiotics chiết xuất từ sữa (Probiotic BB-12)
								</button>
							</h2>
							<div id="collapse7" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Cùng với tỷ lệ tối ưu giữa DHA và ARA, hoàn hảo cho sự phát triển mạnh mẽ của trẻ em ở độ tuổi 4-14.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pc">
					<h2 class="h2 title_sph uppercase">wow Mom hỏi - wowtop trả lời</h2>
					<div class="main_question">
						<div class="question_head">
							<div class="row">
								<div class="col-md-7">
									<span class="cauhoi">Câu hỏi</span>
								</div>
								<div class="col-md-5">
									<span class="cautraloi">Câu trả lời</span>
								</div>
							</div>
						</div>
						<div class="question_content">
							<div class="row">
								<div class="row">
									<div class="col-md-7">
										<div class="list_question">
											@for ($i =0; $i <= 5; $i++)
												<div class="question_item question_item_{{$i}}" data-question-id="{{$i}}">
													<div class="user_img">
														<img src="{{ asset('client/image/default.jpg') }}">
													</div>
													<div class="content_question">
														<div class="user_name">Nguyễn Thị A</div>
														<div class="q">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
															piece of classical Latin literature from 45 BC, making it over 2000 years old.
														</div>
													</div>
												</div>
											@endfor
										</div>
									</div>
									<div class="col-md-5">
										@for ($i =0; $i <= 5; $i++)
											<div class="answer answer_{{$i}}" id="answer" data-answer-id="{{$i}}">
												{{$i}}Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
												classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
												professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
												consectetur
											</div>
										@endfor
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section-feedback">
			<div class="wrapper">
				<div class="head">
					<img src="{{ asset('wowtop/assets/image/home/asset_11_2.png') }}" alt="Alt image">
					<div class="txt">
						<div class="head_1 h2">Bé uống wowtop</div>
						<div class="head_2 h2">Con lớn vượt trội</div>
					</div>
				</div>
				<div class="orange slide-arrows-center">
					<div class="slide-arrows">
						<i id="feedback-arrow-left" class="fa fa-angle-left"></i>
						<i id="feedback-arrow-right" class="fa fa-angle-right"></i>
					</div>
					<div class="section-main-feedback">
						<div class="feedback_item">
							<div class="row1">
								<img src="{{ asset('wowtop/assets/image/be-thap-cao.webp') }}" alt="Alt image">
							</div>
							<div class="row2">
								Sau 3 tháng con cao thêm 5cm nhờ uống Wowtop, con tự tin tham gia câu lạc bộ bóng rổ của trường
							</div>
							<div class="row3">
								Minh Anh - 11 tuổi - Hà Nội
							</div>
							<div class="row4">
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star-o" style="color:#FFD37B"></i>
							</div>
						</div>
						<div class="feedback_item">
							<div class="row1">
								<img src="{{ asset('wowtop/assets/image/be-thap-cao.webp') }}" alt="Alt image">
							</div>
							<div class="row2">
								Sau 3 tháng con cao thêm 5cm nhờ uống Wowtop, con tự tin tham gia câu lạc bộ bóng rổ của trường
							</div>
							<div class="row3">
								Minh Anh - 12 tuổi - Hà Nội
							</div>
							<div class="row4">
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star-o" style="color:#FFD37B"></i>
							</div>
						</div>
						<div class="feedback_item">
							<div class="row1">
								<img src="{{ asset('wowtop/assets/image/be-thap-cao.webp') }}" alt="Alt image">
							</div>
							<div class="row2">
								Sau 3 tháng con cao thêm 5cm nhờ uống Wowtop, con tự tin tham gia câu lạc bộ bóng rổ của trường
							</div>
							<div class="row3">
								Minh Anh - 13 tuổi - Hà Nội
							</div>
							<div class="row4">
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star-o" style="color:#FFD37B"></i>
							</div>
						</div>
						<div class="feedback_item">
							<div class="row1">
								<img src="{{ asset('wowtop/assets/image/be-thap-cao.webp') }}" alt="Alt image">
							</div>
							<div class="row2">
								Sau 3 tháng con cao thêm 5cm nhờ uống Wowtop, con tự tin tham gia câu lạc bộ bóng rổ của trường
							</div>
							<div class="row3">
								Minh Anh - 14 tuổi - Hà Nội
							</div>
							<div class="row4">
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star" style="color:#FFD37B"></i>
								<i class="fa fa-star-o" style="color:#FFD37B"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    @include('wowtop.layout.include.section_dk_mua_hang')

    @include('wowtop.layout.include.kinh_nghiem', ['lastNews' => $lastNews])
	</section>
@endsection
