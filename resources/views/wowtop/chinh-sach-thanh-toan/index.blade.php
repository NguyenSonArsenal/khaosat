@extends('wowtop.layout.main')

@section('title', 'Chính sách thanh toán')

@push('styles')
  <style>
    .title {
      font-size: 20px;
      font-weight: 700;
      margin: 15px 0;
    }
  </style>
@endpush

@section('content')
  <section class="section-main section-about-company" style="padding-bottom: 30px">
    <div class="wrapper">
      <h1 class="text-center text-[#2C5D6C] font-semibold">CHÍNH SÁCH THANH TOÁN</h1>
      <div class="title">Hướng dẫn mua hàng</div>

      Bước 1: Tìm sản phẩm cần mua <br>

      Quý Khách hàng có thể tìm kiếm sản phẩm theo một số gợi ý sau: <br>

      * Gợi ý 1: Tìm kiếm sản phẩm theo danh mục <br>

      – Click vào danh mục sản phẩm cần tìm kiếm trên thanh menu bar. <br>

      * Gợi ý 2: Tìm nhanh khi đã biết tên sản phẩm: Quý Khách hàng chỉ cần gõ “Tên sản phẩm” vào ô tìm kiếm, hệ thống sẽ gợi ý tên sản phẩm đúng hoặc gần đúng nhất.
      <br>

      Bước 2: Click vào sản phẩm muốn mua hàng, trang web sẽ đưa Khách hàng tới trang mô tả chi tiết sản phẩm. Tại đây, Khách hàng có thể xem chi tiết hình ảnh sản phẩm, tên, mã, thương hiệu và giá cả của sản phẩm.
      <br>

      Bước 3: Sau khi xem chi tiết sản phẩm, Khách hàng có thể lựa chọn “Đặt hàng” để tiến hành đặt hàng sản phẩm. Sau
      khi lựa chọn, sản phẩm đó sẽ được thêm vào biểu tượng giỏ hàng nằm ở góc trên phía bên phải của trang web. Khách
      hàng tiếp tục lựa chọn các sản phẩm khác trên trang web và thực hiện các bước như trên để thêm hàng vào giỏ. Sau
      khi hoàn thành, click vào biểu tưởng Giỏ hàng, tiếp đến click vào mục Thanh toán, trang web sẽ hiển thị các thông
      tin chốt đơn hàng, tại đó khách hàng vui lòng hoàn thiện các thông tin về người đặt hàng, người nhận hàng, địa chỉ
      nhận hàng, phương thức vận chuyển và phương thức thanh toán. Sau khi điền đầy đủ thông tin, Khách hàng click vào
      “Đặt hàng” để hoàn thành việc đặt mua sản phẩm.
    </div>
  </section>
@endsection
