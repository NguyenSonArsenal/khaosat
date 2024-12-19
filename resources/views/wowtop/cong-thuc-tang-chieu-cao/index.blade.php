@extends('wowtop.layout.main')

@section('title', 'Phác đồ dự đoán chiều cao tương lai')

@push('styles')
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/vendor/select2/dist/css/select2.min.css') }}"/>
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/vendor/jquery/jquery.timepicker.min.css') }}"/>
  <link rel="stylesheet" type="text/css" href="{{ asset('wowtop/assets/vendor/jquery/jquery-ui.css') }}"/>
  <link rel="stylesheet" href="{{ asset('wowtop/assets/css/du-doan-chieu-cao.css') }}">
@endpush

@push('scripts')
  <script type="text/javascript" src="{{ asset('wowtop/assets/vendor/jquery/jquery-ui.js') }}"></script>
  <script type="text/javascript" src="{{ asset('wowtop/assets/vendor/chart/chart.js') }}"></script>
  <script type="text/javascript" src="{{ asset('wowtop/assets/vendor/select2/dist/js/select2.full.min.js') }}"></script>
  <script type="text/javascript" src="{{ asset('wowtop/assets/js/cong-thuc-tang-chieu-cao.js') }}"></script>
  <script type="text/javascript" src="{{ asset('wowtop/assets/vendor/jquery/jquery.timepicker.min.js') }}"></script>
@endpush

@section('content')
  <section class="section-main section-ddcc">
    <div class="mt-[15px]">
      <h1 class="text-center text-[#7F4806] font-semibold text-[34px] md:text-[40px]">PHÁC ĐỒ DỰ ĐOÁN CHIỀU CAO TƯƠNG LAI</h1>

      <div class="mt-2 mb-12 text-[16px] text-center md:px-[150px] text-[#353535] ccc">
        Phát triển chiều cao luôn là mong muốn không chỉ của các phụ huynh mà còn của chính các con. Chiều <br class="pc"> cao không chỉ phụ thuộc vào gen mà còn phụ thuộc nhiều vào chế độ dinh dưỡng, sinh hoạt và tập luyện.
        <br>
        <strong>Hãy cùng WOWTOP lập nên phác đồ dự đoán chiều cao tương lai để có thể xác định được giai đoạn <br class="pc"> vàng phù hợp </strong> cho lộ trình phát triển chiều cao tối đa của trẻ nhé
      </div>
    </div>
    <div style="background: white">
      <div class="wrapper">
        <div class="form-content">
          <form action="{{ clientRoute('post.ddcc') }}" method="post" id="form-search" autocomplete="off">
            <input autocomplete="false" name="hidden" type="text" style="display:none;">
            @method('POST')
            @csrf

            @include('wowtop.layout.structures._notification')

            <input type="hidden" name="api_du_doan_chieu_cao" value="{{ route('api.du-doan-chieu-cao') }}">

            <div class="muc_lon">THÔNG TIN PHỤ HUYNH</div>
            <div class="row">
              <div class="col-sm-6 mb">
                <input type="text" class="form-control" placeholder="Họ và tên phụ huynh *" name="parent_name" value="{{ old('parent_name') }}" id="parent_name">
                <small class="text-danger" id="parent_name_warning"></small>
                @if($errors->has('parent_name'))
                  <small class="text-danger" id="parent_name_warning_submit">{{ $errors->first('parent_name') }}</small>
                @endif
              </div>
              <div class="col-sm-6">
                <input type="tel" class="form-control" placeholder="Số điện thoại phụ huynh *" name="phone" pattern="^\d{10,11}$" value="{{ old('phone') }}" id="phone">
                <small class="text-danger" id="phone_warning"></small>
                @if($errors->has('phone'))
                  <small class="text-danger" id="phone_warning_submit">{{ $errors->first('phone') }}</small>
                @endif
              </div>
            </div>

            <br>
            <div class="muc_lon">THÔNG TIN CỦA CON</div>
            <div class="row mb-3">
              <div class="col-sm-6 mb">
                <input type="text" class="form-control" placeholder="Họ và tên con *" name="child_name" value="{{ old('child_name') }}" id="child_name">
                <small class="text-danger" id="child_name_warning"></small>
                @if($errors->has('child_name'))
                  <small class="text-danger" id="child_name_warning_submit">{{ $errors->first('child_name') }}</small>
                @endif
              </div>
              <div class="col-sm-6">
                <select class="form-control" name="gender">
                  <option value="">Giới tính *</option>
                  @foreach(getConfig('gender') as $key => $value)
                    <option value="{{ $key }}" {{ old('gender') == $key ? 'selected' : '' }}>{{ $value }}</option>
                  @endforeach
                </select>
                <small class="text-danger" id="gender_warning"></small>
                @if($errors->has('gender'))
                  <small class="text-danger" id="gender_warning_submit">{{ $errors->first('gender') }}</small>
                @endif
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-6 mb">
                <input type="text" class="form-control" name="date_of_birth" id="datepicker" placeholder="Ngày tháng năm sinh*" value="{{ old('date_of_birth') }}">
                <small class="text-danger" id="date_of_birth_warning"></small>
                @if($errors->has('date_of_birth'))
                  <small class="text-danger" id="date_of_birth_submit">{{ $errors->first('date_of_birth') }}</small>
                @endif
              </div>
              <div class="col-sm-6">
                <input type="text" class="form-control" placeholder="Nhập chiều cao hiện tại của con (50-200cm) *" name="height" value="{{ old('height') }}" id="height">
                <small class="text-danger" id="height_warning"></small>
                @if($errors->has('height'))
                  <small class="text-danger" id="height_warning_submit">{{ $errors->first('height') }}</small>
                @endif
                <div>
                  <ul class="suggest_height">
                    <li><span class="number_height"></span>.1</li>
                    <li><span class="number_height"></span>.2</li>
                    <li><span class="number_height"></span>.3</li>
                    <li><span class="number_height"></span>.4</li>
                    <li><span class="number_height"></span>.5</li>
                    <li><span class="number_height"></span>.6</li>
                    <li><span class="number_height"></span>.7</li>
                    <li><span class="number_height"></span>.8</li>
                    <li><span class="number_height"></span>.9</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-6 mb">
                <input type="text" class="form-control" placeholder="Nhập cân nặng hiện tại của con (1-150kg) *" name="weight" value="{{ old('weight') }}"  id="weight">
                <small class="text-danger" id="weight_warning"></small>
                @if($errors->has('weight'))
                  <small class="text-danger" id="weight_warning_submit">{{ $errors->first('weight') }}</small>
                @endif
                <div>
                  <ul class="suggest_weight">
                    <li><span class="number_weight"></span>.1</li>
                    <li><span class="number_weight"></span>.2</li>
                    <li><span class="number_weight"></span>.3</li>
                    <li><span class="number_weight"></span>.4</li>
                    <li><span class="number_weight"></span>.5</li>
                    <li><span class="number_weight"></span>.6</li>
                    <li><span class="number_weight"></span>.7</li>
                    <li><span class="number_weight"></span>.8</li>
                    <li><span class="number_weight"></span>.9</li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <select class="form-control my-select2__select2 select2-wrapper my-select2" name="products_using[]" id="products_using" multiple="multiple">
                  @foreach(getConfig('products_using') as $key => $value)
                    <option value="{{ $key }}" {{ in_array($key, old('products_using', [])) ? 'selected' : '' }}>{{ $value }}</option>
                  @endforeach
                </select>
                <small class="note" style="padding-left: 20px">Có thể chọn nhiều</small>
                <small class="text-danger" id="warning_products_using"></small>
                @if($errors->has('products_using'))
                  <small class="text-danger" id="products_using_submit">{{ $errors->first('products_using') }}</small>
                @endif
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-6 mb">
                <select class="form-control" name="time_to_exercise">
                  <option value="">Con thường xuyên chơi thể thao, vận động không? *</option>
                  @foreach(getConfig('time_to_exercise') as $key => $value)
                    <option value="{{ $key }}" {{ old('time_to_exercise') == $key ? 'selected' : "" }}>{{ $value }}</option>
                  @endforeach
                </select>
                <small class="text-danger" id="time_to_exercise_submit_warning"></small>
                @if($errors->has('time_to_exercise'))
                  <small class="text-danger" id="time_to_exercise_submit">{{ $errors->first('time_to_exercise') }}</small>
                @endif
              </div>
              <div class="col-sm-6">
                <input type="text" id="timepicker" name="time_sleep" placeholder="Con có thường đi ngủ lúc mấy giờ? *" class="form-control"
                       value="{{ old('time_sleep') }}"/>
                <small class="text-danger" id="time_sleep_warning"></small>
                @if($errors->has('time_sleep'))
                  <small class="text-danger" id="time_sleep_submit">{{ $errors->first('time_sleep') }}</small>
                @endif
              </div>
            </div>

            <button type="submit" id="submit" style="margin-top: 50px">Nhận phác đồ chiều cao</button>
          </form>
        </div>

        <div class="w-full my-5" id="chart" style="display: none">
          <h4 class="bold mb-6 text-center">BẢNG DỰ ĐOÁN CHIỀU CAO ĐẾN TUỔI TRƯỞNG THÀNH</h4>
          <div class="">
            <div style="max-height: 750px">
              <canvas id="lineChart" style="width:100%; max-width:100%; text-align: center;"></canvas>
              <div><small id="note" class="text-center">Ghi chú: trục dọc: chiều cao (cm), trục ngang: tuổi</small></div>
            </div>
          </div>
          <div class="note">
            <div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: rgba(0,0,255,1.0)"></span> Đường chiều cao của con</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: red"></span> Đường chiều cao chuẩn</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: #CCFF66"></span> Dưới chuẩn độ 4</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: #CCFF99"></span> Dưới chuẩn độ 3</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: #CCFFCC"></span> Dưới chuẩn độ 2</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: yellow"></span> Dưới chuẩn độ 1</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: #CC3399"></span> Trên chuẩn độ 1</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: #CC3366"></span> Trên chuẩn độ 2</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: #CC3333"></span> Trên chuẩn độ 3</div>
              <div><span style="height: 4px; width: 48px; display: inline-block; background: #CC3300"></span> Trên chuẩn độ 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  </section>
@endsection
