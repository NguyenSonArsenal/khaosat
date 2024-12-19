<form id="form" action="{{ clientRoute('post.dkdt') }}" method="POST" autocomplete="off">
  <input autocomplete="false" name="hidden" type="text" style="display:none;">
  @csrf
  @method('POST')
  @include('wowtop.layout.structures._notification')

  <div class="row_input">
    <input type="text" class="form-control" placeholder="Họ và tên con *" name="child_name" value="{{ old('child_name') }}" id="child_name">
    <small class="text-danger" id="child_name_warning"></small>
    @if($errors->has('child_name'))
      <small class="text-danger" id="child_name_warning_submit">{{ $errors->first('child_name') }}</small>
    @endif
  </div>

  <div class="row_input">
    <input type="text" class="form-control" name="date_of_birth" id="datepicker" placeholder="Ngày tháng năm sinh của con *" value="{{ old('date_of_birth') }}">
    <small class="text-danger" id="date_of_birth_warning"></small>
    @if($errors->has('date_of_birth'))
      <small class="text-danger" id="date_of_birth_submit">{{ $errors->first('date_of_birth') }}</small>
    @endif
  </div>

  <div class="row_input">
    <input type="number" class="form-control" placeholder="Nhập chiều cao hiện tại của con (50-200cm) *" name="height_child" value="{{ old('height_child') }}" id="height_child">
    <small class="text-danger" id="height_child_warning"></small>
    @if($errors->has('height_child'))
      <small class="text-danger" id="height_child_warning_submit">{{ $errors->first('height_child') }}</small>
    @endif
  </div>
  <div class="row_input">
    <input type="number" class="form-control" placeholder="Nhập chiều cao hiện tại của mẹ (50-200cm) *" name="height_mother" value="{{ old('height_mother') }}" id="height_mother">
    <small class="text-danger" id="height_mother_warning"></small>
    @if($errors->has('height_mother'))
      <small class="text-danger" id="height_mother_warning_submit">{{ $errors->first('height_mother') }}</small>
    @endif
  </div>
  <div class="row_input">
    <input type="number" class="form-control" placeholder="Nhập chiều cao hiện tại của bố (50-200cm) *" name="height_father" value="{{ old('height_father') }}" id="height_father">
    <small class="text-danger" id="height_father_warning"></small>
    @if($errors->has('height_father'))
      <small class="text-danger" id="height_father_warning_submit">{{ $errors->first('height_father') }}</small>
    @endif
  </div>

  <div class="row_input">
    <input type="tel" class="form-control" placeholder="Số điện thoại phụ huynh *" name="phone" pattern="^\d{10,11}$" value="{{ old('phone') }}" id="phone">
    <small class="text-danger" id="phone_warning"></small>
    @if($errors->has('phone'))
      <small class="text-danger" id="phone_warning_submit">{{ $errors->first('phone') }}</small>
    @endif
  </div>
  <div class="row_input">
    <div class="row">
      <div class="col-md-4">
        <select class="form-control my-select2__select2 select2-wrapper my-select2" name="province_id" id="province_id">
          <option value="">Tỉnh/thành phố*</option>
          @foreach($provinces as $key => $value)
            <option value="{{ $value['id'] }}">{{ $value['name'] }}</option>
          @endforeach
        </select>
        @if($errors->has('province_id'))
          <small class="text-danger" id="height_father_warning_submit">Chọn tỉnh/thành phố</small>
        @endif
      </div>
      <div class="col-md-4 inputc">
        <select class="form-control my-select2__select2 select2-wrapper my-select2" name="district_id" id="district_id">
          <option value="">Quận/huyện*</option>
        </select>
        @if($errors->has('district_id'))
          <small class="text-danger" id="height_father_warning_submit">Chọn quận/huyện</small>
        @endif
      </div>
      <div class="col-md-4 inputc2">
        <select class="form-control my-select2__select2 select2-wrapper my-select2" name="ward_id" id="ward_id">
          <option value="">Xã/phường*</option>
        </select>
        @if($errors->has('ward_id'))
          <small class="text-danger" id="height_father_warning_submit">Chọn xã/phường</small>
        @endif
      </div>
    </div>
  </div>
  <div class="row_input">
    <input type="text" class="form-control" placeholder="Địa chỉ (số nhà, tên đường)*" name="address" value="{{ old('address') }}">
    <small class="text-danger" id="address_warning"></small>
    @if($errors->has('address'))
      <small class="text-danger" id="address_submit">{{ $errors->first('address') }}</small>
    @endif
  </div>
  <br>
  <div class="form-check form-check-inline" style="margin-bottom: 8px">
    <input class="form-check-input checkbox" type="checkbox" id="inlineCheckbox1">
    <label class="form-check-label cursor-pointer" for="inlineCheckbox1" style="color: #84571B; font-style: italic; margin-right: 4px">Tôi đồng ý với <strong>Thể lệ</strong> và <strong>Điều khoản</strong> chương trình</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input checkbox" type="checkbox" id="inlineCheckbox2">
    <label class="form-check-label cursor-pointer" for="inlineCheckbox2" style="color: #84571B; font-style: italic; margin-right: 4px">Tôi đã đọc và đồng ý với mẫu chấp thuận của WowTop</label>
  </div>
  <button type="submit" id="btn_submit1" class="xacnhan text-center block" style="cursor: pointer">XÁC NHẬN</button>
</form>
