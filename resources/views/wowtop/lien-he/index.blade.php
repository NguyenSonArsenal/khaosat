@extends('wowtop.layout.main')

@section('title', 'Liên hệ')

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/lien-he.css') }}">
@endpush

@push('scripts')
  <script src="{{ asset('wowtop/assets/vendor/re-capcha/recaptcha-api.js') }}" async defer></script>
  <script type="text/javascript" src="{{ asset('wowtop/assets/js/contact.js') }}"></script>
@endpush

@section('content')
  <section class="section-main section-address-contact mb-4">
    <div class="wrapper px-4 py-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center md:border-r">
          <div><i class="fa fa-map-marker" aria-hidden="true"></i></div>
          <div class="text-[24px] my-1 text-[#2C5D6C] hover:text-[#2C5D6C] font-semibold cursor-pointer">Địa chỉ</div>
          <div class="text-[#2C5D6C] hover:text-[#2C5D6C] md:px-5">
            <a href="https://maps.app.goo.gl/3x6eAaX2GnDsqngg6" target="_blank">
              R4, Royal City 72 Nguyễn Trãi, Thanh Xuân, Hà Nội</a>
          </div>
        </div>
        <div class="text-center md:border-r">
          <div><i class="fa fa-phone" aria-hidden="true"></i></div>
          <div class="text-[24px] my-1 text-[#2C5D6C] font-semibold hover:text-[#2C5D6C] cursor-pointer">Điện thoại
          </div>
          <div class="text-[#2C5D6C] hover:text-[#2C5D6C]"><br>19008000</div>
        </div>
        <div class="text-center md:border-r">
          <div><i class="fa fa-envelope" aria-hidden="true"></i></div>
          <div class="text-[24px] my-1 text-[#2C5D6C] font-semibold hover:text-[#2C5D6C] cursor-pointer">Email</div>
          <div class="text-[#2C5D6C] hover:text-[#2C5D6C]"><br>cskh@ichnhi.com.vn</div>
        </div>
        <div class="text-center">
          <div><i class="fa fa-clock-o" aria-hidden="true"></i></div>
          <div class="text-[24px] my-1 text-[#2C5D6C] font-semibold hover:text-[#fcb900] cursor-pointer">Giờ làm việc
          </div>
          <div class="text-[#2C5D6C] hover:text-[#2C5D6C]"><br>Thứ 2 - Chủ nhật l 8:00 - 17:30</div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.754620340774!2d105.81523775!3d21.002471049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9b1bdb1599%3A0xf637f71ce16ca9f9!2zS2h1IMSRw7QgdGjhu4sgUm95YWwgQ2l0eSwgVGjGsOG7o25nIMSQw6xuaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1710216270125!5m2!1svi!2s"
      width="100%"
      class="h-[300px] md:h-[600px]"
      style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>

  <section class="form-contact my-5" id="form-contact">
    <div class="wrapper p-4">
      <div class="text-[#2C5D6C] text-center font-semibold text-[28px] mb-5">LIÊN HỆ NGAY VỚI CHÚNG TÔI</div>
      <form action="{{ clientRoute('post.contact') }}#form-contact" class="w-full md:w-3/5 text-center m-auto" method="post">
        @csrf
        @method('POST')

        @include('wowtop.layout.structures._notification')
        @include('wowtop.layout.structures._error_validate')

        <div class="flex flex-wrap mb-3">
          <div class="w-full md:w-1/2 mb-3 md:mb-0 md:pr-1">
            <input
              name="name"
              class="text-[14px] block w-full bg-gray-50 text-gray-700 border rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white"
              type="text" placeholder="Nhập họ tên *">
          </div>
          <div class="w-full md:w-1/2 md:pl-1">
            <input
              name="phone"
              class="text-[14px] block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white"
              type="text" placeholder="Nhập số điện thoại">
          </div>
        </div>
        <div class="flex flex-wrap mb-3">
          <div class="w-full md:w-1/2 mb-3 md:mb-0 pr-1">
            <input
              name="email"
              class="text-[14px] block w-full bg-gray-50 text-gray-700 border rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white"
              type="text" placeholder="Nhập email *">
          </div>
          <div class="w-full md:w-1/2 pl-1">
            <input
              name="address"
              class="text-[14px] block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white"
              type="text" placeholder="Nhập địa chỉ">
          </div>
        </div>

        <div class="flex flex-wrap mb-3">
          <div class="w-full md:mb-0">
            <input
              name="title"
              class="text-[14px] block w-full bg-gray-50 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
              style="padding: 15px 20px"
              type="text" placeholder="Nhập tiêu đề *">
          </div>
        </div>

        <div class="mb-3">
          <textarea id="message" rows="4"
                    name="content"
                    class="text-[14px] block w-full text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white"
                    style="padding: 15px 20px"
                    placeholder="Tin nhắn *"></textarea>
        </div>

        <div class="g-recaptcha mb-3" data-callback="recaptchaCallback" data-sitekey="{{ getConstant('GOOGLE_RECAPTCHA_KEY') }}"></div>

        <div class="text-left">
          <button
            disabled
            id="btn-submit"
            class="shadow bg-[#2C5D6C] hover:opacity-85 focus:shadow-outline focus:outline-none text-white
             font-bold py-2 px-4 rounded cursor-pointer"
            type="submit">
            Gửi
          </button>
        </div>
      </form>
    </div>
  </section>

  <script>
    function recaptchaCallback() {
      $('#btn-submit').removeAttr('disabled');
    };
  </script>
@endsection
