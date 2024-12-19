<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\DdccRequest;
use App\Http\Requests\Client\DkdtRequest;
use App\Http\Requests\Client\StoreContactRequest;
use App\Models\Blog\WpPosts;
use App\Models\Blog\WpTerms;
use App\Models\CategoryNew;
use App\Models\Contact;
use App\Models\Ddcc;
use App\Models\Dkdt;
use App\Models\HeightChildren;
use App\Models\News;
use App\Models\Product;
use App\Models\Province;
use App\Service\WpBlog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Validator;

class HomeController extends Controller
{
    public $wpBlogService;

    public function __construct(WpBlog $wpBlog)
    {
        $this->wpBlogService = $wpBlog;
    }

    protected function _builderGetNews($params = [])
    {
        $categoryNewTableName = CategoryNew::getTableName();
        $newTableName = News::getTableName();
        return News::query()
            ->with(['categoryNew'])
            ->select([$newTableName . '.*'])
            ->join($categoryNewTableName, $categoryNewTableName . '.id', '=', $newTableName . '.category_new_id')
            ->where($categoryNewTableName . '.slug', arrayGet($params, 'slug'))
            ->where($newTableName . '.status', News::STATUS_PUBLIC)
            ->orderByDesc($newTableName . '.id');
    }

    public function index(Request $request)
    {
        $newTableName = News::getTableName();

        $benhDuongHoHap = $this->_builderGetNews(['slug' => 'benh-duong-ho-hap'])->limit(6)->get();
        $gocChiaSe1 = $this->_builderGetNews(['slug' => 'goc-chia-se'])->limit(3)->get();
        $gocChiaSe2 = $this->_builderGetNews(['slug' => 'goc-chia-se'])
            ->whereNotIn($newTableName . '.id', $gocChiaSe1->pluck('id')->toArray())
            ->limit(3)->get();

        $camNangChamSocTre1 = $this->_builderGetNews(['slug' => 'cam-nang-cham-soc-tre'])->limit(3)->get();
        $camNangChamSocTre2 = $this->_builderGetNews(['slug' => 'cam-nang-cham-soc-tre'])
            ->whereNotIn($newTableName . '.id', $gocChiaSe1->pluck('id')->toArray())
            ->limit(3)->get();

        $sanPham = Product::orderByDesc('id')->limit(6)->get();

        $viewData = [
            'benhDuongHoHap' => $benhDuongHoHap,
            'gocChiaSe1' => $gocChiaSe1,
            'gocChiaSe2' => $gocChiaSe2,
            'camNangChamSocTre1' => $camNangChamSocTre1,
            'camNangChamSocTre2' => $camNangChamSocTre2,
            'sanPham' => $sanPham,
        ];
        return view('client.home.index', $viewData);
    }

    public function showPageBenhThuongGap()
    {
        $categoryNewTableName = CategoryNew::getTableName();
        $newTableName = News::getTableName();
        $dataList = News::query()
            ->select([$newTableName . '.*'])
            ->join($categoryNewTableName, $categoryNewTableName . '.id', '=', $newTableName . '.category_new_id')
            ->where($categoryNewTableName . '.slug', 'benh-duong-ho-hap')
            ->orderByDesc($newTableName . '.id')
            ->paginate(getClientPagination());

        $newRelation = News::query()
            ->select([$newTableName . '.*'])
            ->join($categoryNewTableName, $categoryNewTableName . '.id', '=', $newTableName . '.category_new_id')
            ->whereNotIn($newTableName . '.id', $dataList->pluck('id')->toArray())
            ->get()->random(getConstant('COUNT_NEWS_RELATION_CLIENT'));

        $viewData = [
            'dataList' => $dataList,
            'newRelation' => $newRelation
        ];

        return view('client.benh-thuong-gap.index', $viewData);
    }

    public function showPageListProduct()
    {
        $dataList = Product::get();
        return view('wowtop.san-pham.index', ['dataList' => $dataList]);
    }

    public function showPageListProductV2()
    {
        $dataList = $data = $this->wpBlogService->getData();
        $lastNews = array_slice($dataList, 0, 4);

        $categoryNew = WpTerms::where('slug', 'bi-quyet-tang-chieu-cao')->first();
        if (!empty($categoryNew)) {
            $dataPostCategory = $this->wpBlogService->getPostByCategory($categoryNew->term_id);
            $tinTucBiQuyetTangChieuCao1 = array_slice($dataPostCategory, 0, 1);
            array_shift($dataPostCategory);
            $tinTucBiQuyetTangChieuCao2 = array_slice($dataPostCategory, 0, 3);
        }

        $viewData = [
            'tinTucBiQuyetTangChieuCao1' => !empty($tinTucBiQuyetTangChieuCao1) ? $tinTucBiQuyetTangChieuCao1 : [],
            'tinTucBiQuyetTangChieuCao2' => !empty($tinTucBiQuyetTangChieuCao2) ? $tinTucBiQuyetTangChieuCao2 : [],
            'lastNews' => $lastNews,
        ];
        return view('wowtop.san-pham.index_v2', $viewData);
    }

    public function showPageDetailProduct($slug)
    {
        $entity = Product::where('slug', $slug)->first();
        if (empty($entity)) {
            return redirect()->route(clientRouteName('page_not_found'));
        }
        return view('client.chi-tiet-san-pham.index', ['entity' => $entity]);
    }

    public function showPageDiemBan()
    {
        return view('client.diem-ban.index');
    }

    public function showPageLienHe()
    {
        return view('wowtop.lien-he.index');
    }

    public function showPageTinTuc()
    {
        $categoryNewTableName = CategoryNew::getTableName();
        $newTableName = News::getTableName();
        $dataList = News::query()
            ->with(['categoryNew'])
            ->select([$newTableName . '.*'])
            ->join($categoryNewTableName, $categoryNewTableName . '.id', '=', $newTableName . '.category_new_id')
            ->where($newTableName . '.status', News::STATUS_PUBLIC)
            ->orderByDesc($newTableName . '.id', 'desc')->paginate(getClientPagination());

        $builderHot = News::query()
            ->where('is_hot', News::HOT)
            ->where('status', News::STATUS_PUBLIC)
            ->orderBy('hot_position', 'asc')->orderBy('id', 'desc');
        $newHot1 = $builderHot->first();
        if (!empty($newHot1)) {
            $newHot2 = $builderHot->where('id', '!=', $newHot1->id)->take(3)->get();
        }

        $viewData = [
            'dataList' => $dataList,
            'newHot1' => !empty($newHot1) ? $newHot1 : [],
            'newHot2' => !empty($newHot2) ? $newHot2 : [],
        ];
        return view('wowtop.tin-tuc.index', $viewData);
    }

    public function showPageTinTucV2()
    {
        try {
            $dataList = $data = $this->wpBlogService->getData();
            $dataList = $this->paginate($dataList, 10);

            $viewData = [
                'dataList' => $dataList,
                'newHot1' => !empty($newHot1) ? $newHot1 : [], // @todo
                'newHot2' => !empty($newHot2) ? $newHot2 : [], // @todo
            ];
            return view('wowtop.tin-tuc.index2', $viewData);
        } catch (\Exception $e) {
            Log::error($e);
            return redirect()->route(clientRouteName('page_not_found'));
        }
    }

    public function danhMucTinTucDetailV2($permalink)
    {
        try {
            $categoryNew = WpTerms::where('slug', $permalink)->first();
            if (empty($categoryNew)) {
                return redirect()->route(clientRouteName('page_not_found'));
            }
            $dataList = $this->wpBlogService->getPostByCategory($categoryNew->term_id);
            $dataList = $this->paginate($dataList, 15);

            $viewData = [
                'dataList' => $dataList,
                'categoryNew' => $categoryNew,
            ];

            return view('wowtop.tin-tuc.category_show_2', $viewData);
        } catch (\Exception $e) {
            Log::error($e);
            return redirect()->route(clientRouteName('page_not_found'));
        }
    }

    public function danhMucTinTucDetail($permalink)
    {
        $categoryNew = CategoryNew::where('slug', $permalink)->first();
        if (empty($categoryNew)) {
            return redirect()->route(clientRouteName('page_not_found'));
        }

        $dataList = $this->_builderGetNews(['slug' => $permalink])->paginate(getClientPagination());

        $viewData = [
            'dataList' => $dataList,
            'categoryNew' => $categoryNew,
        ];

        return view('wowtop.tin-tuc.category_show', $viewData);
    }

    public function showDanhMucTinTuc()
    {
        $category = CategoryNew::get();
        $dataList = [];
        foreach ($category as $item) {
            $news = News::query()->where('category_new_id', $item->id)->where('status', News::STATUS_PUBLIC)
                ->take(4)->orderBy('id', 'desc')->get();
            $tmp = [
                'category' => $item,
                'news' => $news,
            ];
            $dataList[] = $tmp;
        }

        $viewData = [
            'dataList' => $dataList
        ];
        return view('wowtop.tin-tuc.category', $viewData);
    }

    public function showDanhMucTinTucV2()
    {
        $category = CategoryNew::get();
        $dataList = [];
        foreach ($category as $item) {
            $news = News::query()->where('category_new_id', $item->id)->where('status', News::STATUS_PUBLIC)
                ->take(4)->orderBy('id', 'desc')->get();
            $tmp = [
                'category' => $item,
                'news' => $news,
            ];
            $dataList[] = $tmp;
        }

        $viewData = [
            'dataList' => $dataList
        ];
        return view('wowtop.tin-tuc.category', $viewData);
    }

    public function postContact(StoreContactRequest $request)
    {
        try {
            $params = request()->all();
            $entity = new Contact();
            $entity->fill($params);
            $entity->save();
            return backSuccess();
        } catch (\Exception $e) {
            Log::error($e);
            return backSystemError();
        }
    }

    public function pageNotFound()
    {
        return view('wowtop.error.404');
    }

    public function newsDetailV2($slug)
    {
        try {
            $entity = WpPosts::query()->where('post_status', WpPosts::STATUS_PUBLISH)->where('post_name', $slug)->first();



            if (empty($entity)) {
                return redirect()->route(clientRouteName('page_not_found'));
            }
            $entityBlog = $this->wpBlogService->getPostDetailById($entity->ID);
            $link = arrayGet($entityBlog, 'link');
            $crawl = crawlPage(arrayGet($entityBlog, 'link'));

            $content = !empty($entityBlog['content']['rendered']) ? $entityBlog['content']['rendered'] : "";
            $content = str_replace("href=\"$link","href=\"", $content);

            $categories = arrayGet($entityBlog, 'categories', []);
            $dataCategory = WpTerms::whereIn('term_id', $categories)->get();
            $viewData = [
                'entity' => $entity,
                'entityBlog' => $entityBlog,
                'newRelation' => [],
                'keywords' => [],
                'robots' => '',
                'crawl' => $crawl,
                'dataCategory' => $dataCategory,
                'content' => $content,
            ];

            return view('wowtop.tin-tuc.show2', $viewData);
        } catch (\Exception $e) {
            Log::error($e);
            return redirect()->route(clientRouteName('page_not_found'));
        }
    }

    public function newsDetail($slug)
    {
        try {
            $entity = News::query()->with(['newSeo'])->where('permalink', $slug)->where('status', News::STATUS_PUBLIC)->first();
            $categoryNewTableName = CategoryNew::getTableName();
            $newTableName = News::getTableName();

            if (empty($entity)) {
                return redirect()->route(clientRouteName('page_not_found'));
            }
            $newRelation = News::query()
                ->select([$newTableName . '.*'])
                ->join($categoryNewTableName, $categoryNewTableName . '.id', '=', $newTableName . '.category_new_id')
                ->whereNotIn($newTableName . '.id', [$entity->id])
                ->where($newTableName . '.category_new_id', [$entity->category_new_id])
                ->where($newTableName . '.status', News::STATUS_PUBLIC)
                ->get();
            if (count($newRelation) > getConstant('COUNT_NEWS_RELATION_CLIENT')) {
                $newRelation = $newRelation->random(getConstant('COUNT_NEWS_RELATION_CLIENT'));
            }

            $keywords = $entity->focusKeywords()->pluck('name')->toArray();
            $keywords = implode(",", $keywords);

            $robots = '';
            $robotMeta = !empty($entity->newSeo->robot_meta) ? explode(',', $entity->newSeo->robot_meta) : '';
            if ($robotMeta) {
                foreach (getConfig('seo.robot') as $key => $value) {
                    if (in_array($key, $robotMeta)) {
                        $robots .= $value . ',';
                    }
                }
            }
            $robots = rtrim($robots, ',');
            $maxSnippet = !empty($entity->newSeo->max_snippet) ? $entity->newSeo->max_snippet : '';
            if ($maxSnippet) {
                $robots .= ', max_snippet:' . $maxSnippet;
            }
            $maxVideoPreview = !empty($entity->newSeo->max_video_preview) ? $entity->newSeo->max_video_preview : '';
            if ($maxVideoPreview) {
                $robots .= ', max_video_preview:' . $maxVideoPreview;
            }
            $maxImagePreview = !empty($entity->newSeo->max_image_preview) ? $entity->newSeo->max_image_preview : '';
            if ($maxImagePreview) {
                $robots .= ', max_image_preview:' . arrayGet(getConfig('seo.max_image_preview'), $maxImagePreview);
            }
            $viewData = [
                'entity' => $entity,
                'newRelation' => $newRelation,
                'keywords' => $keywords,
                'robots' => strtolower($robots),
            ];

            return view('wowtop.tin-tuc.show', $viewData);
        } catch (\Exception $e) {
            Log::error($e);
            return redirect()->route(clientRouteName('page_not_found'));
        }
    }

    public function sendSms()
    {
        return view('client.sms');
    }

    public function showPageWowTop()
    {
        $dataList = $data = $this->wpBlogService->getData();
        $lastNews = array_slice($dataList, 0, 4);

        $categoryNew = WpTerms::where('slug', 'bi-quyet-tang-chieu-cao')->first();
        if (!empty($categoryNew)) {
            $dataPostCategory = $this->wpBlogService->getPostByCategory($categoryNew->term_id);
            $tinTucBiQuyetTangChieuCao1 = array_slice($dataPostCategory, 0, 1);
            array_shift($dataPostCategory);
            $tinTucBiQuyetTangChieuCao2 = array_slice($dataPostCategory, 0, 3);
        }

        $viewData = [
            'tinTucBiQuyetTangChieuCao1' => !empty($tinTucBiQuyetTangChieuCao1) ? $tinTucBiQuyetTangChieuCao1 : [],
            'tinTucBiQuyetTangChieuCao2' => !empty($tinTucBiQuyetTangChieuCao2) ? $tinTucBiQuyetTangChieuCao2 : [],
            'lastNews' => $lastNews,
        ];

        return view('wowtop.home.index', $viewData);
    }

    public function showPageGioiThieu()
    {
        return view('wowtop.gioi-thieu.index');
    }

    public function showPageChinhSachRiengTu()
    {
        return view('wowtop.chinh-sach-rieng-tu.index');
    }

    public function showPageChinhSachThanhToan()
    {
        return view('wowtop.chinh-sach-thanh-toan.index');
    }

    public function showPageChinhSachDoiTra()
    {
        return view('wowtop.chinh-sach-doi-tra.index');
    }

    public function showPageChinhSachGiaoNhan()
    {
        return view('wowtop.chinh-sach-giao-nhan.index');
    }

    public function showPageCauHoiThuongGap()
    {
        return view('wowtop.cau-hoi-thuong-gap.index');
    }

    public function showPageTrangTraiNewZealand()
    {
        return view('wowtop.trang-trai-new-zealand.index');
    }

    public function showPageGiaiThuong()
    {
        return view('wowtop.giai-thuong.index');
    }

    public function showPageDiemPhanPhoi()
    {
        return view('wowtop.diem-phan-phoi.index');
    }

    public function showPageMuaHangTrucTuyen()
    {
        return view('wowtop.mua-hang-truc-tuyen.index');
    }

    public function showPageNhanTuVan()
    {
        return view('wowtop.nhan-tu-van.index');
    }

    public function showPageSuaTangChieuCaoWowtop()
    {
        return view('wowtop.sua-tang-chieu-cao-wowtop.index');
    }

    public function showPageViSaoChonWowtop()
    {
        return view('wowtop.vi-sao-chon-wowtop.index');
    }

    public function showPageBaMeWow()
    {
        return view('wowtop.ba-me-wow.index');
    }

    public function showPageGocChuyenGia()
    {
        return view('wowtop.goc-chuyen-gia.index');
    }

    public function showPageLoiNhanToiChaMe()
    {
        return view('wowtop.loi-nhan-toi-cha-me.index');
    }

    public function showPageLuuYCookie()
    {
        return view('wowtop.luu-y-ve-cookie.index');
    }

    public function showPageTuyChinhCookie()
    {
        return view('wowtop.tuy-chinh-cookie.index');
    }

    public function showPagePhapLy()
    {
        return view('wowtop.phap-ly.index');
    }

    public function showPageTuyChinhQuyenRiengTu()
    {
        return view('wowtop.tuy-chinh-quyen-rieng-tu.index');
    }

    public function showPageCongThucTangChieuCao()
    {
        return view('wowtop.cong-thuc-tang-chieu-cao.index');
    }

    public function congThuc2()
    {
        try {
            $address = public_path('vendor/cong-thuc-tang-chieu-cao.xlsx');
            $spreadsheet = IOFactory::load($address);

            $dataSheet1 = $spreadsheet->getSheet(0)->toArray(); // height boy
            $dataSheet2 = $spreadsheet->getSheet(1)->toArray(); // height girl
            $dataSheet3 = $spreadsheet->getSheet(2)->toArray(); // weight boy
            $dataSheet4 = $spreadsheet->getSheet(3)->toArray(); // weight girl

            $dataInsertHeightBoyTmp = [];
            $dataInsertHeightGirlTmp = [];
            $dataInsertWeightBoyTmp = [];
            $dataInsertWeightGirlTmp = [];
            HeightChildren::truncate();
            foreach ($dataSheet1 as $key => $item) {
                if ($key == 0 || $key == 1) {
                    continue;
                }
                if (empty($item[0])) {
                    continue;
                }
                $dataInsertBoy['type'] = HeightChildren::TYPE_HEIGHT_BOY;
                $dataInsertBoy['age'] = $item[0];
                $dataInsertBoy['c1'] = $item[1];
                $dataInsertBoy['c1_rate'] = $item[2];
                $dataInsertBoy['c2'] = $item[3];
                $dataInsertBoy['c2_rate'] = $item[4];
                $dataInsertBoy['c3'] = $item[5];
                $dataInsertBoy['c3_rate'] = $item[6];
                $dataInsertBoy['c4'] = $item[7];
                $dataInsertBoy['c4_rate'] = $item[8];
                $dataInsertBoy['c5'] = $item[9];
                $dataInsertBoy['c5_rate'] = $item[10];
                $dataInsertBoy['c6'] = $item[11];
                $dataInsertBoy['c6_rate'] = $item[12];
                $dataInsertBoy['c7'] = $item[13];
                $dataInsertBoy['c7_rate'] = $item[14];
                $dataInsertBoy['c8'] = $item[15];
                $dataInsertBoy['c8_rate'] = $item[16];
                $dataInsertBoy['c9'] = $item[17];
                $dataInsertBoy['c9_rate'] = $item[18];
                $dataInsertHeightBoyTmp[] = $dataInsertBoy;
            }

            foreach ($dataSheet2 as $key => $item) {
                if ($key == 0 || $key == 1) {
                    continue;
                }
                if (empty($item[0])) {
                    continue;
                }
                $dataInsertGirl['type'] = HeightChildren::TYPE_HEIGHT_GIRL;
                $dataInsertGirl['age'] = $item[0];
                $dataInsertGirl['c1'] = $item[1];
                $dataInsertGirl['c1_rate'] = $item[2];
                $dataInsertGirl['c2'] = $item[3];
                $dataInsertGirl['c2_rate'] = $item[4];
                $dataInsertGirl['c3'] = $item[5];
                $dataInsertGirl['c3_rate'] = $item[6];
                $dataInsertGirl['c4'] = $item[7];
                $dataInsertGirl['c4_rate'] = $item[8];
                $dataInsertGirl['c5'] = $item[9];
                $dataInsertGirl['c5_rate'] = $item[10];
                $dataInsertGirl['c6'] = $item[11];
                $dataInsertGirl['c6_rate'] = $item[12];
                $dataInsertGirl['c7'] = $item[13];
                $dataInsertGirl['c7_rate'] = $item[14];
                $dataInsertGirl['c8'] = $item[15];
                $dataInsertGirl['c8_rate'] = $item[16];
                $dataInsertGirl['c9'] = $item[17];
                $dataInsertGirl['c9_rate'] = $item[18];
                $dataInsertHeightGirlTmp[] = $dataInsertGirl;
            }

            foreach ($dataSheet3 as $key => $item) {
                if ($key == 0 || $key == 1) {
                    continue;
                }
                if (empty($item[0])) {
                    continue;
                }
                $dataInsertGirl['type'] = HeightChildren::TYPE_WEIGHT_BOY;
                $dataInsertGirl['age'] = $item[0];
                $dataInsertGirl['c1'] = $item[1];
                $dataInsertGirl['c2'] = $item[2];
                $dataInsertGirl['c3'] = $item[3];
                $dataInsertGirl['c4'] = $item[4];
                $dataInsertGirl['c5'] = $item[5];
                $dataInsertGirl['c6'] = $item[6];
                $dataInsertGirl['c7'] = $item[7];
                $dataInsertGirl['c8'] = $item[8];
                $dataInsertGirl['c9'] = $item[9];
                $dataInsertWeightBoyTmp[] = $dataInsertGirl;
            }

            foreach ($dataSheet4 as $key => $item) {
                if ($key == 0 || $key == 1) {
                    continue;
                }
                if (empty($item[0])) {
                    continue;
                }
                $dataInsertGirl['type'] = HeightChildren::TYPE_WEIGHT_GIRL;
                $dataInsertGirl['age'] = $item[0];
                $dataInsertGirl['c1'] = $item[1];
                $dataInsertGirl['c2'] = $item[2];
                $dataInsertGirl['c3'] = $item[3];
                $dataInsertGirl['c4'] = $item[4];
                $dataInsertGirl['c5'] = $item[5];
                $dataInsertGirl['c6'] = $item[6];
                $dataInsertGirl['c7'] = $item[7];
                $dataInsertGirl['c8'] = $item[8];
                $dataInsertGirl['c9'] = $item[9];
                $dataInsertWeightGirlTmp[] = $dataInsertGirl;
            }


            HeightChildren::insert($dataInsertHeightBoyTmp);
            HeightChildren::insert($dataInsertHeightGirlTmp);
            HeightChildren::insert($dataInsertWeightBoyTmp);
            HeightChildren::insert($dataInsertWeightGirlTmp);
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function ddcc(DdccRequest $request)
    {
        try {
            $params = request()->all();
            $tmpMaPhacDo1 = 'WT' . date('y') . date('m') . date('d');
            $tmpEntity = Ddcc::where('ma_phac_do_1', $tmpMaPhacDo1)->orderBy('id', 'desc')->first();
            $params['ma_phac_do_1'] = $tmpMaPhacDo1;
            if (empty($tmpEntity)) {
                $params['ma_phac_do_2'] = '001';
            } else {
                $ma_phac_do_2 = (int)$tmpEntity->ma_phac_do_2 + 1;
                switch (strlen($ma_phac_do_2)) {
                    case 1:
                        $params['ma_phac_do_2'] = '00' . $ma_phac_do_2;
                        break;
                    case 2:
                        $params['ma_phac_do_2'] = '0' . $ma_phac_do_2;
                        break;
                    case 3:
                        $params['ma_phac_do_2'] = $ma_phac_do_2;
                        break;
                }
            }
            $params['ma_phac_do'] = $tmpMaPhacDo1 . $params['ma_phac_do_2'];
            $productUsingTmp = '';
            foreach ($params['products_using'] as $value) {
                $productUsingTmp .= arrayGet(getConfig('products_using'), $value) . ', ';
            }
            $productUsingTmp = rtrim($productUsingTmp, ', ');
            $params['products_using'] = $productUsingTmp;
            $params['time_to_exercise'] = arrayGet(getConfig('time_to_exercise'), $params['time_to_exercise']);
            $params['date_of_birth'] = date('Y-m-d', strtotime($params['date_of_birth']));
            Ddcc::create($params);
            return redirect()->route(clientRouteName('get.ddcc_success'), ['maphacdo' => $params['ma_phac_do']]);
        } catch (\Exception $e) {
            Log::error($e);
            return redirect()->back()->with('notification_error', 'Đã có lỗi sảy ra');
        }
    }

    public function ddccSuccess($maphacdo)
    {
        try {
            $data = Ddcc::where('ma_phac_do', $maphacdo)->first();
            if (empty($data)) {
                return redirect()->route(clientRouteName('page_not_found'));
            }
            $ddcc20 = $this->ddcc20($data);
            $viewData = [
                'data' => $data,
                'ddcc20' => $ddcc20,
            ];
            return view('wowtop.cong-thuc-tang-chieu-cao.success', $viewData);
        } catch (\Exception $e) {
            Log::error($e);
            return redirect()->route(clientRouteName('page_cong_thuc_tang_chieu_cao'));
        }
    }

    public function ddcc20($data)
    {
        $monthsSubscribed = arrayGet(getAge($data->date_of_birth), 'age');
        $entity = HeightChildren::where('age', $monthsSubscribed)->where('type', $data->gender)->first(); // height
        $columnHeight = 'c1';
        $height = $data->height;
        if (!empty($entity)) {
            $columnHeight = arrayGet($this->tinhChenhLechHeight($height, $entity), 'columnHeight');
        }
        $data2 = HeightChildren::where('type', $data->gender)->get()->toArray();
        $values = $this->getValueDDCC($data2, $columnHeight, $height, $monthsSubscribed);
        return end($values['mainValue']);
    }

    public function showPageDangKiDungThu()
    {
        $provinces = Province::all();
        return view('wowtop.dang-ki-dung-thu.index', ['provinces' => $provinces]);
    }

    public function postDkdt(DkdtRequest $request)
    {
        try {
            $params = request()->all();
            $params['date_of_birth'] = date('Y-m-d', strtotime($params['date_of_birth']));

            $entity = Dkdt::where('phone', arrayGet($params, 'phone'))->first();
            if (!empty($entity)) {
                $entity->fill($params);
                $entity->save();
            } else {
                Dkdt::create($params);
            }
            return backSuccess();
        } catch (\Exception $e) {
            Log::error($e);
            return backSystemError();
        }
    }

    public function postAjaxDkdt(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'child_name' => 'bail|max:255',
                'date_of_birth' => '',
                'height_child' => 'bail|nullable|numeric|min:50|max:200',
                'height_father' => 'bail|nullable|numeric|min:50|max:200',
                'height_mother' => 'bail|nullable|numeric|min:50|max:200',
                'phone' => '',
                'province_id' => '',
                'district_id' => '',
                'ward_id' => '',
                'address' => '',
            ]);
            if (!$validator->passes()) {
                return response()->json(['error'=>$validator->errors()->all()]);
            }
            $params = request()->all();
            $params['date_of_birth'] = date('Y-m-d', strtotime($params['date_of_birth']));
            $entity = Dkdt::where('phone', request('phone'))->first();
            if (!empty($entity)) {
                $entity->fill($params);
                $entity->save();
            } else {
                Dkdt::create($params);
            }
            return response()->json(['success' => 'Store success']);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['error' => 'System error']);
        }

    }
}
