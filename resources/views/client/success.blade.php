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
        Kết quả bài khảo sát của bạn đã được ghi nhận vào hệ thống. Cảm ơn bạn vì đã giành thời gian làm bài khảo sát.
      </div>
    </div>
  </main>
@endsection

