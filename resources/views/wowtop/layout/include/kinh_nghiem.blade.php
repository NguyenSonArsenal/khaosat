<section class="section-kinh-nghiem">
  <div class="wrapper">
    <h2 class="title h2">KINH NGHIỆM <br> TĂNG CHIỀU CAO VƯỢT TRỘI CHO BÉ</h2>
    <div class="kinh-nghiem">
      <div class="row">
        <div class="col-lg-9">
          <div class="kinh-nghiem-left">
            <div class="bold">{{ _tf('tips_increase_height') }}</div>
            <div class="line">
              <div></div>
              <div></div>
            </div>
            <div class="kinh-nghiem-left-content">
              <div class="row">
                @foreach($tinTucBiQuyetTangChieuCao1 as $item)
                  <div class="col-md-5 mb-5">
                    <a href="{{ clientRoute('page_news_detail', ['permalink' => arrayGet($item, 'slug')]) }}">
                      <img data-src="{{ !empty($item['avatar']['src']) ? $item['avatar']['src'] : asset('client/image/default.jpg') }}" alt="" class="w-100 lazy">
                    </a>
                    <div class="ellipsis-text-2 thumnail_title mt-2 font-semibold text-[#84571B]">
                      <a href="{{ clientRoute('page_news_detail', ['permalink' => arrayGet($item, 'slug')]) }}"> {{ arrayGet($item, 'title') }}</a>
                    </div>
                    <div class="kinh_nghiem_des ellipsis-text-3 my-3">
                      {!! !empty($item['excerpt']['rendered']) ? $item['excerpt']['rendered'] : ''  !!}
                    </div>
                    <div class="kinh_nghiem_post_date"><small>{{ date('d-m-Y H:i:s', strtotime(arrayGet($item, 'date'))) }}</small></div>
                    <a href="{{ clientRoute('page_news') }}" class="show_all_post">{{ _tf('all_post') }}</a>
                  </div>
                @endforeach
                <div class="col-md-7">
                  <div class="tip_content">
                    @foreach($tinTucBiQuyetTangChieuCao2 as $item)
                      <div class="tip_content_item1">
                        <div class="item_top">
                          <a href="{{ clientRoute('page_news_detail', ['permalink' => arrayGet($item, 'slug')]) }}">
                            <img class="" src="{{ !empty($item['avatar']['src']) ? $item['avatar']['src'] : asset('client/image/default.jpg') }}" alt="Image name">
                          </a>
                        </div>
                        <div class="item_bottom">
                          <div class="ellipsis-text-2 thumnail_title font-semibold text-[#84571B]">
                            <a href="{{ clientRoute('page_news_detail', ['permalink' => arrayGet($item, 'slug')]) }}"> {{ arrayGet($item, 'title') }}</a>
                          </div>
                          <div class="kinh_nghiem_post_date"><small>{{ date('d-m-Y H:i:s', strtotime(arrayGet($item, 'date'))) }}</small></div>
                        </div>
                      </div>
                    @endforeach
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="kinh-nghiem-right">
            <div class="bold">Tin mới</div>
            <div class="line">
              <div></div>
              <div></div>
            </div>
            <div class="kinh-nghiem-right-content">
              <div class="tip_content_item">
                <div class="row">
                  @foreach($lastNews as $key => $item)
                    <div class="col-xs-6 col-md-12 mb-4">
                      <div class="row">
                        <div class="col-2 number">
                          0{{$key + 1}}.
                        </div>
                        <div class="col-10">
                          <div class="ellipsis-text-2 thumnail_title">
                            <a href="{{ clientRoute('page_news_detail', ['permalink' => arrayGet($item, 'slug')]) }}"> {{ arrayGet($item, 'title') }}</a>
                          </div>
                          <div class="kinh_nghiem_post_date">
                            <small> {{ date('d-m-Y H:i:s', strtotime(arrayGet($item, 'date'))) }}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  @endforeach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
