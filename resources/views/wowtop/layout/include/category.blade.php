<style>
  .post-cateogry {
    display: grid;
    gap: 8px;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(3, 1fr);
  }
  .category_item {
    color: #2C5D6C;
    font-size: 16px;
    border: 1px solid #2C5D6C;
    padding: 24px;
    border-radius: 8px;
    text-align: center;
    font-weight: 700;
  }
  .category_item a:hover {
    color: #2C5D6C;
  }
</style>
<div class="post-relation mr-0 rounded-2xl border-1 border-solid border-[#2C5D6C]">
  <div class="bg-[#2C5D6C] ml-0 mr-0 py-3 px-4" style="border-radius: 8px 8px 0 0;">
    <p class="text-white font-semibold uppercase m-0">Sữa tăng chiều cao cho bé</p>
  </div>
  <div class="post-cateogry p-3">
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '1-tuoi']) }}">1 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '2-tuoi']) }}">2 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '3-tuoi']) }}">3 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '4-tuoi']) }}">4 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '5-tuoi']) }}">5 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '6-tuoi']) }}">6 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '7-tuoi']) }}">7 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '8-tuoi']) }}">8 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '9-tuoi']) }}">9 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '10-tuoi']) }}">10 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '11-tuoi']) }}">11 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '12-tuoi']) }}">12 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '13-tuoi']) }}">13 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => '14-tuoi']) }}">14 tuổi</a></div>
    <div class="category_item"><a href="{{ clientRoute('page_danh_muc_tin_tuc_detail', ['permalink' => 'tren-14-tuoi']) }}">Trên 14 tuổi</a></div>
  </div>
</div>
