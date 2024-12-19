@extends('wowtop.layout.main')
@section('title', 'Sản phẩm')

@push('styles')
	<link rel="stylesheet" href="{{ asset('wowtop/assets/css/master.css') }}">
	<link rel="stylesheet" href="{{ asset('wowtop/assets/css/san-pham.css') }}">
  <style>
  
  </style>
@endpush

@push('scripts')
	<script src="{{ asset('wowtop/assets/js/product.js') }}"></script>
@endpush

@section('content')
	<section class="section-main section-products">
		<div class="wrapper">
			<div id="product-wrapper">
				<div id="product-left" class="ripple-kids">
					
					<div class="fixedXX" id="bottle-container">
						<div id="bottle-inline">
							<img alt="bottle kids" src="{{ asset('wowtop/assets/image/home/5.webp') }}"
									 style="padding-top: 0px;">
						</div>
					</div>
				</div>
				<div id="product-right">
					<div id="menu-right" class="half-half" style="background-color: #00BBB6;">
						<ul>
							<li><a href="#nutrition2" class="compare-reset">Nutrition</a></li>
							<li><a href="#whats-inside" class="compare-reset">Ingredients</a></li>
							<li><a href="#other-products" class="compare-reset">Other Products</a></li>
						</ul>
					</div>
					<div id="product-rightwrap">
						<div class="product-module">
							<h1 class="h-icecream kidsgreen" style="margin-top: 50px;">Ripple Kids Unsweetened</h1>
							<p class="product-desc kidsgreen">Original Plant-Based Milk</p>
							<h2 class="product-size kidsgreen" style="margin-bottom: 0; margin: 0 0 15px;">
								48<span>oz</span> Milk
							</h2>
							<div class="row" style="text-align: justify">
								<h2 class="better-milk kidsgreen">Same Great Taste Kids Love, Now With 0g of Sugar</h2>
								<p class="ripple-desc first">Ripple® Kids was developed with key nutrients specifically
									for growing
									kids. With 0g added sugar,* it’s a great choice for parents looking to reduce their
									little one’s
									sugar intake, while still offering the same creamy &amp; delicious taste kids
									love.</p>
								<p class="ripple-desc">All of our Ripple Kids flavors have 8g of protein, prebiotic
									fiber, 50mg of
									DHA, and choline to support developing brains and bodies. Plus, these plant-based
									milks offer
									all of the essential nutrients found in dairy milk - calcium, magnesium, phosphorus,
									riboflavin,
									and vitamins A, D, and B12. Kids and parents will love this new sugar-free option of
									our popular
									Kids Milk!</p>
							
							
							</div>
							<div class="row margin20">
								<div class="product-list" style="width:100%;">
									<ul>
										<li class="kidsgreen">
											<svg xmlns="" width="16" height="16"
													 fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
											</svg>
											0g Added Sugar
										</li>
										<li class="kidsgreen">
											<svg xmlns="" width="16" height="16"
													 fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
											</svg>
											8g of Plant-Based Protein for Growing Bodies
										</li>
										<li class="kidsgreen">
											<svg xmlns="" width="16" height="16"
													 fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
											</svg>
											Healthy DHA Omega-3’s for Brain Building Nutrition
										</li>
										<li class="kidsgreen">
											<svg xmlns="" width="16" height="16"
													 fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
											</svg>
											Prebiotic Fiber to Support Digestion
										</li>
										<li class="kidsgreen">
											<svg xmlns="" width="16" height="16"
													 fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
												<path
													d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
											</svg>
											Higher Calcium than Dairy Milk
										</li>
									</ul>
								</div>
								<div class="product-list" style="display:block; clear:both; width: 100%;"><a
										href="javascript:void(0)" target="_blank"
										class="coupon-button gold-bg"
										style="width:100%; max-width: 175px; text-align: center; margin-top: 20px; margin-right: 15px;">Shop Now</a>
								</div>
							</div>
							<div class="row">
								<small class="pl-small">*Not a low-calorie food.</small>
							</div>
							<div class="slogan-empty sep-empty"></div>
							
							<div class="switch-content switch-content-right active">
								<div id="nutrition2">
									<h2 class="kidsgreen">Nutrition</h2>
									<p class="nutrition-desc kidsgreen">Serving Size 1 cup (240mL)</p>
								</div>
								<div class="row margin50">
									<div class="nutrition-col">
										<h3>120 <span class="nl kidsgreen">Calories</span></h3>
									</div>
									<div class="nutrition-col">
										<h3>8<span class="thin">g</span> <span class="nl kidsgreen">Protein</span></h3>
									</div>
									<div class="nutrition-col">
										<h3>8<span class="thin">g</span> <span class="nl kidsgreen">Total Fat</span>
										</h3>
										<p class="perc"></p>
									</div>
									<div class="nutrition-col">
										<h3>3<span class="thin">g</span> <span class="nl kidsgreen">Carbs</span></h3>
										<p class="perc"></p>
									</div>
									<div class="nutrition-col">
										<h3>0<span class="thin">g</span> <span class="nl kidsgreen">Sugars</span></h3>
									</div>
									<div class="nutrition-col last">
										<h3>70<span class="thin">mg</span> <span class="nl kidsgreen">Sodium</span></h3>
										<p class="perc"></p>
									</div>
								</div>
								<div class="row">
									<div class="nutrition-half">
										<div class="nutrition-sub left">
											<ul>
												<li class="kidsgreen">Saturated Fat</li>
												<li class="kidsgreen">Trans Fat</li>
												<li class="kidsgreen">Polyunsaturated Fat</li>
												<li class="kidsgreen">Monounsaturated Fat</li>
												<li class="kidsgreen">Cholesterol</li>
												<li class="kidsgreen">Dietary Fiber</li>
												<li class="kidsgreen">Potassium</li>
											</ul>
										</div>
										<div class="nutrition-sub right">
											<ul>
												<li>1g</li>
												<li>0g</li>
												<li>2g</li>
												<li>6g</li>
												<li>0mg</li>
												<li>2g</li>
												<li>421mg</li>
											</ul>
										</div>
									</div>
									<div class="nutrition-half">
										<div class="nutrition-sub left">
											<ul>
												
												<li class="kidsgreen">Calcium</li>
												<li class="kidsgreen">Iron</li>
												<li class="kidsgreen">Vitamin A</li>
												<li class="kidsgreen">Vitamin D</li>
												<li class="kidsgreen">Vitamin B12</li>
												<li class="kidsgreen">Choline</li>
												<li class="kidsgreen">Magnesium</li>
											</ul>
										</div>
										<div class="nutrition-sub right">
											<ul>
												
												<li>445mg</li>
												<li>2mg</li>
												<li>90mcg</li>
												<li>5mcg</li>
												<li>1.1mcg</li>
												<li>55mg</li>
												<li>24mg</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							
							<div class="slogan-empty sep-empty"></div>
							
							<div id="whats-inside">
								<h2 class="kidsgreen">Ingredients</h2>
								
								<div class="row">
									<p class="n-description kidsgreen" style="text-align: justify">WATER, PEA PROTEIN, VEGETABLE OIL (SUNFLOWER OR
										SAFFLOWER
										OIL), CONTAINS LESS THAN 1% OF SOLUBLE CORN FIBER, MAGNESIUM CITRATE,
										RIBOFLAVIN, VITAMIN
										B12, DHA ALGAL OIL, CHOLINE BITARTRATE, VITAMIN A PALMITATE, VITAMIN D2,
										DIPOTASSIUM
										PHOSPHATE, TRICALCIUM PHOSPHATE, SEA SALT, NATURAL FLAVOR, GUM ARABIC, GUAR GUM,
										GELLAN GUM,
										WITH ROSEMARY EXTRACT, MIXED TOCOPHEROLS, AND ASCORBYL PALMITATE TO PRESERVE
										FRESHNESS.</p>
									<small class="pl-small">*Pertains to U.S. Products Only</small>
								</div>
							</div>
							
							<div class="slogan-empty sep-empty"></div>
							
							<div id="why-yellow">
								<h2 class="kidsgreen">Why Yellow Peas?</h2>
								<p class="text-justify">Peas are an excellent source of protein, setting Ripple apart from other plant-based
									beverages
									that have little to no protein. Ripple uses a proprietary method to harvest protein
									from peas,
									removing impurities to leave a clean, neutral taste.</p>
								<p class="text-justify">And, peas have a small environmental footprint, unlike almonds, which require
									irrigation, or
									cattle, which contribute to deforestation and greenhouse gas emissions. Yellow peas
									also grow in
									areas that receive lots of rain, so they need little or no irrigation, and little or
									no
									fertilizer.
								</p>
							</div>
							
							<div class="slogan-empty sep-empty"></div>
							<div id="other-products">
								<h2 class="kidsgreen my-3 text-center">Other Products</h2>
								
								<div class="other-wrap yogurt-original-color">
									<a href="javascript:void(0);" class="other-col other1">
										<img alt="product plant milk"
												 src="{{ asset('wowtop/assets/image/home/5.webp') }}">
										<p style="color: #2C5D6C">NUTRITIOUS<br> PEA&nbsp;MILK</p>
									</a>
									<a href="javascript:void(0);" class="other-col other2">
										<img alt="product kids " src="{{ asset('wowtop/assets/image/home/5.webp') }}">
										<p style="color: #2C5D6C">On The Go<br><br></p>
									</a>
									<a href="javascript:void(0);" class="other-col other4">
										<img alt="product protein shakes"
												 src="{{ asset('wowtop/assets/image/home/5.webp') }}">
										<p style="color: #2C5D6C">Protein Shake<br><br></p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      
      <section class="section section_me_co_biet">
        <div class="row">
          <div class="col-sm-6">
            <div class="item_left">
              <h2 class="section_title">MẸ CÓ BIẾT?</h2>
              <p>Trẻ em Việt Nam xếp thứ 179 trên 204 trong Bảng xếp hạng chiều cao của thế giới!</p>
              <a href="javascript:void(0)" class="tim_hieu_them">Tìm hiểu thêm</a>
            </div>
          </div>
          <div class="col-sm-6">
            <img src="{{ asset('wowtop/assets/image/default_large.png') }}" alt="">
          </div>
        </div>
      </section>
      
      <section class="section section_cao_hon">
        <h2 class="section_title">CAO HƠN CẢ VỀ LƯỢNG & CHẤT VỚI WOWTOP </h2>
        <div class="row">
          <div class="col-sm-4 mb-4">
            <div class="item first_item">
              <div class="flex item_head item_head_left">
                <span class="bold">Tăng chiều cao vượt trội và phát triển hệ cơ xương khớp</span>
                <img class="icon icon_left" src="{{ asset('wowtop/assets/image/product/xuong.png') }}" alt="">
              </div>
              <div class="content">CBP kích thích sự phát triển cả về số lượng và chất lượng nguyên bào Xương, tăng khả năng hấp thụ Canxi. Cung cấp Canxi hàm lượng cao cho sự phát triển xương</div>
            </div>
            <div class="item">
              <div class="flex item_head item_head_left">
                <span class="bold">Tăng cường miễn dịch</span>
                <img class="icon icon_left" src="{{ asset('wowtop/assets/image/product/xuong.png') }}" alt="">
              </div>
              <div class="content">WowTop là thương hiệu tiên phong trên thế giới bổ sung Lactoferrin và IgG vào công thức, kết hợp cùng Vitamin C & nhóm B giúp kháng khuẩn, kháng virus và điều hoà miễn dịch. Nhờ đó trẻ phát triển khỏe mạnh với đề kháng tốt.</div>
            </div>
          </div>
          <div class="col-sm-4 mb-5">
            <img class="img_center" src="{{ asset('wowtop/assets/image/default_large.png') }}" alt="">
          </div>
          <div class="col-sm-4">
            <div class="item">
              <div class="flex item_head item_head_right">
                <span class="bold">Phát triển trí não tối đa</span>
                <img class="icon icon_right" src="{{ asset('wowtop/assets/image/product/xuong.png') }}" alt="">
              </div>
              <div class="content">AHA-ARA có trong WowTop giúp trí não phát triển mạnh mẽ, tăng cường khả năng học hỏi, ghi nhớ ở trẻ.</div>
            </div>
            <div class="item">
              <div class="flex item_head item_head_right">
                <span class="bold">Cải thiện tiêu hóa</span>
                <img class="icon icon_right" src="{{ asset('wowtop/assets/image/product/xuong.png') }}" alt="">
              </div>
              <div class="content">Bộ ba FOS-GOS-BB12 giúp bổ sung lượng chất xơ quan trọng cho hệ tiêu hoá đồng thời cung cấp 200 triệu lợi khuẩn. BB12 là loại lợi khuẩn có khả năng cao nhất đi qua môi trường dạ dày.</div>
            </div>
            <div class="item">
              <div class="flex item_head item_head_right">
                <span class="bold">Cung cấp đủ năng lượng</span>
                <img class="icon icon_right" src="{{ asset('wowtop/assets/image/product/5.png') }}" alt="">
              </div>
              <div class="content">Độ tuổi 4-14 là độ tuổi quan trọng nhất trong hành trình học tập và phát triển của trẻ. WowTop cung cấp đủ năng lượng cho trẻ trong thời kì thỏa sức học tập và khám phá </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section section_thanh_phan">
        <h2 class="section_title text-center">Công thức ưu việt từ NEW ZEALAND</h2>
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
      </section>
      
      
      <section class="section section_thanh_phan">
        <h2 class="section_title text-center">Thành phần</h2>
        <div class="nd_tp">
          Sữa bò tươi NON-GMO (Vitamin C, Sắt, Kẽm, Vitamin A, Vitamin D3), Sữa bò A2, Fructooligosaccharides (FOS),
          Lactose, Galacto-oligosaccharide (GOS), Canxi Phosphate Tribasic, Bột Docosahexaenoic Acid (DHA), Bột
          Arachidonic Acid (ARA) , Protein cơ bản sữa non (CBP 125mg/100g), Lactoferrin, Probiotic (Bifidobacteria
          lactis), Vitamin K1’ Bifidobacteria Animalis Probiotic-BB12, Immunoglobulin G (18,75mg/100g).
        </div>
      </section>
      
      <section class="section section_huong_dan_pha_sua">
        <h2 class="section_title">Hướng dẫn pha WowTop ngon như ý</h2>
        <div class="huong_dan_item">
          <span class="stt">1</span>
          <span class="bold content">Chuẩn bị 180ml nước ấm (35-45 độ C)</span>
          <img class="image" src="{{ asset('wowtop/assets/image/product/6.png') }}" alt="">
        </div>
        <div class="huong_dan_item huong_dan_item2">
          <img class="image image2" src="{{ asset('wowtop/assets/image/product/7.png') }}" alt="">
          <span class="bold content content2">Pha 4 muỗng (40g) sữa WowTop vào nước ấm</span>
          <span class="stt2 stt">2</span>
        </div>
        <div class="huong_dan_item">
          <span class="stt">3</span>
          <span class="bold content">Khuấy đều để có được một ly 220ml sữa tăng chiều cao WowTop đầy đủ dưỡng chất</span>
          <img class="image" src="{{ asset('wowtop/assets/image/product/8.png') }}" alt="">
        </div>
      </section>
		</div>
	</section>
@endsection
