@extends('client.include.main')

@push('style')
  <link rel="stylesheet" href="{{ asset('client/assets/css/index.css') }}">
@endpush

@push('script')
  <script src="{{ asset('client/assets/js/index.js') }}"></script>
@endpush

@section('content')
  <main>
    <div class="wrapper">
      <div class="main">
        <form action="{{ clientRoute('khaosat.store', ['makhoa' => $makhoa]) }}" method="post">
          @method('POST')
          @csrf
          @include('client.include._notification')

          <input type="hidden" value="{{ $khoa->id }}" name="khoa_id">
          <input type="hidden" value="{{ $makhoa }}" name="makhoa">
          <div style="margin-bottom: 8px" class="text-danger"><small>Bạn vui lòng trả lời tất cả câu hỏi khảo sát nhé</small></div>

          <article class="space-y-2 uk-article mb-3">
            <div>Bài khảo sát khoa <strong>{{ $khoa->name }}</strong> gồm có {{ count($question) }} câu hỏi</div>
          </article>

          @foreach($question as $key => $item)
            <div class="item">
              <div class="question">{{ $key+1 }}. {{ $item->question }}</div>
              <div class="answer">
                <label>
                  <input type="checkbox" name="answer[{{$item->id}}][]" value="a"
                    {{ !empty(old("answer.{$item['id']}")) && in_array('a', old("answer.{$item['id']}")) ? 'checked' : '' }}
                  >
                  <span class="text text-wrong">{{$item->da_a}}</span>
                </label>

                <label>
                  <input type="checkbox" name="answer[{{$item->id}}][]" value="b"
                    {{ !empty(old("answer.{$item['id']}")) && in_array('b', old("answer.{$item['id']}")) ? 'checked' : '' }}
                  >
                  <span class="text text-wrong">{{$item->da_b}}</span>
                </label>

                <label>
                  <input type="checkbox" name="answer[{{$item->id}}][]" value="c"
                    {{ !empty(old("answer.{$item['id']}")) && in_array('c', old("answer.{$item['id']}")) ? 'checked' : '' }}
                  >
                  <span class="text text-wrong">{{$item->da_c}}</span>
                </label>

                <label>
                  <input type="checkbox" name="answer[{{$item->id}}][]" value="d"
                    {{ !empty(old("answer.{$item['id']}")) && in_array('d', old("answer.{$item['id']}")) ? 'checked' : '' }}
                  >
                  <span class="text text-wrong">{{$item->da_d}}</span>
                </label>
              </div>

              @if ($errors->has("answer.{$item->id}"))
                <div style="color: red;">
                  {{ $errors->first("answer.{$item->id}") }}
                </div>
              @endif
            </div>
          @endforeach

          <div class="item">
            <div class="mb-5" style="margin-bottom: 15px; font-weight: 500"> Vui lòng điền thông tin người tham gia khảo sát </div>
            <div class="form-group">
              <label>Họ và tên</label>
              <input type="text" name="name" class="form-control" value="{{ old('name') }}" placeholder="Nhập họ tên">
              @error('name')
              <small class="text-danger">{{ $errors->first('name') }}</small>
              @enderror
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Nhập email" value="{{ old('email') }}">
              @error('email')
              <small class="text-danger">{{ $errors->first('email') }}</small>
              @enderror
            </div>
            <div class="form-group">
              <label>Số điện thoại</label>
              <input type="text" name="phone" placeholder="Nhập số điện thoại" value="{{ old('phone') }}">
              @error('phone')
              <small class="text-danger">{{ $errors->first('phone') }}</small>
              @enderror
            </div>
          </div>

          <button type="submit" class="submit btn-cyan">Submit</button>
        </form>
      </div>
    </div>
  </main>
@endsection

