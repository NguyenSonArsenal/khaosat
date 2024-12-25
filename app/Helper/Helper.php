<?php

use App\Models\Category;
use App\Models\CompanyInfo;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

if (!function_exists('cmsRoute')) {
    /**
     * @param $routeName
     * @param array $params
     * @return string
     */
    function cmsRoute($routeName, $params = [])
    {
        return route('cms.' . $routeName, $params);
    }
}

if (!function_exists('cmsRouteName')) {
    /**
     * @param $routeName
     * @return string
     */
    function cmsRouteName($routeName)
    {
        return 'cms.' . $routeName;
    }
}

function clientRouteName($routeName)
{
    return 'client.' . $routeName;
}

function clientRoute($routeName, $params = [])
{
    return route('client.' . $routeName, $params);
}

if (!function_exists('getConfig')) {
    /**
     * @param $key
     * @param string $default
     * @return \Illuminate\Config\Repository|mixed
     */
    function getConfig($key, $default = '')
    {
        return config('config.' . $key, $default);
    }
}

function getConstant($key, $default = '')
{
    return config('constant.' . $key, $default);
}

if (!function_exists('arrayGet')) {
    /**
     * @param $array
     * @param $key
     * @param null $default
     * @return mixed
     */
    function arrayGet($array, $key, $default = null)
    {
        return Arr::get($array, $key, $default);
    }
}

if (!function_exists('transMessage')) {
    /**
     * @param $key
     * @param string $default
     * @return array|\Illuminate\Contracts\Translation\Translator|string|null
     */
    function transMessage($key, $default = '')
    {
        return empty(trans('messages.' . $key)) ? $default : trans('messages.' . $key);
    }
}

/* Redirect */
if (!function_exists('backSystemError')) {
    /**
     * @param string $msg
     * @return \Illuminate\Http\RedirectResponse
     */
    function backSystemError($msg = '')
    {
        $msg = empty($msg) ? transMessage('system_error') : $msg;
        return redirect()->back()->with('notification_error', $msg);
    }
}

if (!function_exists('backSystemSuccess')) {
    /**
     * @param string $msg
     * @return \Illuminate\Http\RedirectResponse
     */
    function backSystemSuccess($msg = '')
    {
        $msg = empty($msg) ? transMessage('success') : $msg;
        return redirect()->back()->with('notification_success', $msg);
    }
}

if (!function_exists('backSuccess')) {
    /**
     * @param string $msg
     * @return \Illuminate\Http\RedirectResponse
     */
    function backSuccess($msg = '')
    {
        $msg = empty($msg) ? transMessage('success') : $msg;
        return redirect()->back()->with('notification_success', $msg);
    }
}

if (!function_exists('backRouteSuccess')) {
    /**
     * @param string $routeName
     * @param string $msg
     * @param array $params
     * @return \Illuminate\Http\RedirectResponse
     */
    function backRouteSuccess($routeName = '', $msg = '', $params = [])
    {
        $msg = empty($msg) ? transMessage('success') : $msg;
        return redirect()->route($routeName, $params)->with('notification_success', $msg);
    }
}

if (!function_exists('backRouteError')) {
    /**
     * @param string $routeName
     * @param string $msg
     * @param array $params
     * @return \Illuminate\Http\RedirectResponse
     */
    function backRouteError($routeName = '', $msg = '', $params = [])
    {
        $msg = empty($msg) ? transMessage('system_error') : $msg;
        return redirect()->route($routeName, $params)->with('notification_error', $msg);
    }
}
/* End redirect */

if (!function_exists('convertViToEn')) {
    /**
     * @param $str
     * @return string|string[]|null
     */
    function convertViToEn($str)
    {
        $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", "a", $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", "e", $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", "i", $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", "o", $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", "u", $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", "y", $str);
        $str = preg_replace("/(đ)/", "d", $str);
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", "A", $str);
        $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", "E", $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", "I", $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", "O", $str);
        $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", "U", $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", "Y", $str);
        $str = preg_replace("/(Đ)/", "D", $str);

        return $str;
    }
}

if (!function_exists('createSlug')) {
    /**
     * @param $text
     * @param string $delimiter
     * @return string|string[]|null
     */
    function createSlug($text, $delimiter = '-')
    {
        $text = trim(convertViToEn($text));

        // replace non letter or digits by -
        $text = preg_replace('~[^\pL\d]+~u', '-', $text);

        // transliterate
        // $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);

        // trim
        $text = trim($text, '-');

        // remove duplicate -
        $text = preg_replace('~-+~', '-', $text);

        // lowercase
        $text = strtolower($text);

        if (empty($text)) {
            return 'n-a';
        }

        return $text;
    }
}

if (!function_exists('extractNameFromEmail')) {
    /**
     * @param $email
     * @return mixed
     */
    function extractNameFromEmail($email)
    {
        $parts = explode("@", $email);
        $username = arrayGet($parts, 0);
        return $username;
    }
}

// Auth
if (!function_exists('cmsGuard')) {
    /**
     * @return \Illuminate\Contracts\Auth\Guard|\Illuminate\Contracts\Auth\StatefulGuard
     */
    function cmsGuard()
    {
        return Auth::guard('admins');
    }
}

if (!function_exists('backendCurrentUser')) {
    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    function cmsCurrentUser()
    {
        return Auth::guard('admins')->user();
    }
}

if (!function_exists('backendIsLogin')) {
    /**
     * @return bool
     */
    function cmsIsLogin()
    {
        return cmsGuard()->check();
    }
}

if (!function_exists('cmsCurrentUserId')) {
    /**
     * @return string
     */
    function cmsCurrentUserId()
    {
        return cmsCurrentUser() ? cmsCurrentUser()->getKey() : '';
    }
}
// End auth


function uploadThumbnailPost($image, $width = 1692, $height = 790, $folder = "thumbnail")
{
    return cloudinary()->upload($image->getRealPath(), [
        'folder' => $folder,
        'transformation' => [
            'width' => $width,
            'height' => $height,
//            'gravity' => 'faces',
//            'crop' => 'fill',
            'quality' => "auto",
            'fetch_format' => "auto"
        ]
    ])->getSecurePath();
}

if (!function_exists('activeMenuClient')) {

    function activeMenuClient($routeName)
    {
        $contains = str_contains(strtolower(\Route::currentRouteName()), 'client.' . $routeName);
        return $contains ? 'menu-active' : '';
    }
}

if (!function_exists('getCmsPagination')) {
    function getCmsPagination($perPage = '')
    {
        $perPage = empty($perPage) ? getConfig('pagination.cms', 20) : $perPage;
        return $perPage;
    }
}

if (!function_exists('getClientPagination')) {
    function getClientPagination($perPage = '')
    {
        $perPage = empty($perPage) ? getConfig('pagination.client', 20) : $perPage;
        return $perPage;
    }
}

if (!function_exists('getSTTCms')) {
    function getSTTCms($entities, $index)
    {
        return getCmsPagination() * ($entities->currentPage() -1) + 1 + $index;
    }
}

function t($key, $default = '')
{
    return empty(trans('messages.' . $key)) ? $default : trans('messages.' . $key);
}

function required()
{
    return '<span class="text-red text-danger">*</span>';
}

function activeMenu($name)
{
    if (!is_array($name)) {
        return str_contains(Route::currentRouteName(), $name);
    }
    foreach ($name as $name) {
        if (str_contains(Route::currentRouteName(), $name)) {
            return true;
        }
    }
    return false;
}

function formatPriceCurrency($value = null)
{
    $result = is_null($value) ? '' : number_format((float)$value, 2, ',', '.');

    if (substr($result, -3) == ',00') {
        return substr($result, 0, strlen($result) - 3);
    }

    if (substr($result, -2) == ',0') {
        return substr($result, 0, strlen($result) - 2);
    }

    return $result;
}

if (!function_exists('oldInput')) {
    function oldInput($old, $db)
    {
        return empty($old) ? $db : $old;
    }
}

if (!function_exists('getImgAlt')) {
    function getImgAlt($alt)
    {
        return $alt ? "alt='$alt'" : '';
    }
}

// trans frontend text
if (!function_exists('_tf')) {
    function _tf($key, $default = '')
    {
        return empty(trans('frontend_text.' . $key)) ? $default : trans('frontend_text.' . $key);
    }
}

if (!function_exists('getTimeReading')) {
    function getTimeReading($content) {
        $textEditor = strip_tags(trim(html_entity_decode($content,   ENT_QUOTES, 'UTF-8'), "\xc2\xa0"));
        $time = ceil(str_word_count($textEditor) / config('constant.READING_TIME'));
        return $time;
    }
}

if (!function_exists('showCreateAtClient')) {
    function showCreateAtClient($newEntity, $isShowReadingMinutes = true) {
        $result = date('d-m-Y H:i:s', strtotime($newEntity->created_at));
        if ($isShowReadingMinutes) {
            return $result . ' - ' . getTimeReading($newEntity->content) . " phút đọc";
        }
        return $result;
    }
}

if (!function_exists('showPublishAtClient')) {
    function showPublishAtClient($newEntity, $isShowReadingMinutes = true) {
        $result = date('d-m-Y H:i:s', strtotime($newEntity->public_at));
        if ($isShowReadingMinutes) {
            return $result . ' - ' . getTimeReading($newEntity->content) . " phút đọc";
        }
        return $result;
    }
}

// For wordpress
if (!function_exists('showPublishAtClientV2')) {
    function showPublishAtClientV2($newEntity, $isShowReadingMinutes = true) {
        $result = date('d-m-Y H:i:s', strtotime($newEntity->post_date));
        if ($isShowReadingMinutes) {
//            return $result . ' - ' . getTimeReading($newEntity->post_content) . " phút đọc";
        }
        return $result;
    }
}

if (!function_exists('getFileDimension')) {
    /**
     * @param $file: instance UploadedFile
     * @return array
     */
    function getFileDimension($file) {
        $size = getimagesize($file->getRealPath());
        return [
            'width'     => data_get($size, 0, 0),
            'height'     => data_get($size, 1, 0),
        ];
    }
}


function get_words($sentence, $count = 10) {
    preg_match("/(?:\w+(?:\W+|$)){0,$count}/", $sentence, $matches);
    return $matches[0];
}

function showRobotMetaType($robotMetaType) {
    $result = '';
    $data = explode(",", $robotMetaType);
    foreach ($data as $item) {
        $result .= data_get(getConfig('seo.robot'), $item) . ', ';
    }
    return trim(trim($result), ',');
}

function showMaxImagePreview($maxImagePreview) {
    if ($maxImagePreview) {
        return data_get(getConfig('seo.max_image_preview'), $maxImagePreview, '');
    }
    return '';
}

function getOlds($days) {
    $years = intval($days / 365);
    $days = $days % 365;

    $months = intval($days / 30);
    $days = $days % 30;
    return "$years năm, $months tháng, $days ngày";
}

/**
 * @param $birthDay: 2015-11-29
 * @return string
 */
function getAge($birthDay, $now = '')
{
    $fdate = $now;
    $tdate = $birthDay;
    $datetime1 = new DateTime($fdate);
    $datetime2 = new DateTime($tdate);
    $time = $datetime1->diff($datetime2);
    return [
        "year" => $time->y,
        "month" => $time->m,
        "day" => $time->d,
        "text" => $time->y . ' năm, ' . $time->m . ' tháng, ' . $time->d . ' ngày',
        "age" => $time->y * 12 + $time->m + ($time->d >= 15 ? 0.5 : 0)
    ];
}

function file_get_contents_curl($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}

function crawlPage($url, $depth = 5)
{
    $html = file_get_contents_curl($url);
    $doc = new DOMDocument();
    @$doc->loadHTML($html);
    $nodes = $doc->getElementsByTagName('title');
    $title = $nodes->item(0)->nodeValue;
    $metas = $doc->getElementsByTagName('meta');
    for ($i = 0; $i < $metas->length; $i++)
    {
        $meta = $metas->item($i);
        if($meta->getAttribute('name') == 'description') {
            $description = $meta->getAttribute('content');
        }
        if($meta->getAttribute('name') == 'keywords') {
            $keywords = $meta->getAttribute('content');
        }
        if($meta->getAttribute('name') == 'robots') {
            $robots = $meta->getAttribute('content');
        }
    }

    return [
        'title' => $title,
        'robots' => !empty($robots) ? $robots : '',
        'keywords' => !empty($keywords) ? $keywords : '',
        'description' => !empty($description) ? $description : '',
    ];
}

function isCmsAdmin()
{
    return empty(cmsCurrentUser()->khoa_id);
}

function cmsNoPermission()
{
    return redirect()->route(cmsRouteName('no_permission'));
}

function cmsNotFound()
{
    return redirect()->route(cmsRouteName('not_found'));
}
