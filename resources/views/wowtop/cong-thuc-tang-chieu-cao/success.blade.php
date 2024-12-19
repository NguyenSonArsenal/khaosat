@extends('wowtop.layout.main')

@section('title', 'Phác đồ dự đoán chiều cao tương lai')

@push('styles')
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/du-doan-chieu-cao.css') }}">
@endpush

@section('content')
  <section class="section-main text-center section_ddcc_success mb-[50px]">
    <div class="wrapper">
      <div><img class="logo" src="{{ asset('wowtop/assets/image/logo2.webp') }}" alt=""></div>
      <h1 class="text-center text-[#7F4806] font-semibold text-[30px] md:text-[40px] mt-[30px]">CHÚC MỪNG!</h1>
      <div class="mb-[30px] md:text-[26px] mt-[10px] maphacdo">Mã phác đồ: <br class="sp"> {{ $data->ma_phac_do }}</div>
      <div class="text-[#353535]">Chúc mừng phụ huynh <strong>{{ mb_strtoupper($data->parent_name) }}</strong> đã hoàn thành thông tin của bé
        <strong>{{ mb_strtoupper($data->child_name) }}</strong>, <br> đội ngũ Chuyên gia sức khỏe của WOWTOP sẽ lên phác đồ chi tiết để gửi lại bạn.
      </div>
      <div class="my-3 text-[#7F4806] du_kien">Dự kiến chiều cao của con ở độ tuổi 20 là: {{$ddcc20}}cm
      </div>
      <div class="text-[#353535]">
        Để nhận kết quả <strong>Phác đồ dự đoán chiều cao chi tiết</strong> từng giai đoạn của bé <br><strong>{{ mb_strtoupper($data->child_name) }}</strong>, phụ huynh
        <strong>{{ mb_strtoupper($data->parent_name) }}</strong> vui lòng làm theo hướng dẫn sau đây:
      </div>
      <div class="text-[#7F4806] mb-5 mt-3">
        <span>Bước 1: Tham gia Nhóm <strong>Cho Con Cao Lớn Phát Triển Tận Cùng</strong></span> <br>
        <span>
          Bước 2: Nhắn tin cho admin <strong>Bác sĩ Lăng Hường</strong> mã phác đồ để nhận kết quả Phác đồ dự đoán chiều cao chi tiết nhất cùng hướng dẫn giúp tăng chiều cao phù hợp với tình trạng của con
        </span>
      </div>
      <div class="row btn1">
        <div class="col-md-6 mb-[15px] left">
          <a href="https://www.facebook.com/groups/1175304576757740" class="btn-left">Tham gia Nhóm <strong>Cho Con Cao Lớn Phát Triển Tận Cùng</strong></a>
        </div>
        <div class="col-md-6 right">
          <a href="#" target="_blank" class="btn-right">Nhắn tin cho <strong>Bác sĩ Lăng Hường</strong> để nhận kết quả chi tiết</a>
        </div>
      </div>
    </div>
  </section>
@endsection