<?php

namespace App\Http\Middleware;

use App\Models\Redirect;
use Closure;

class ClientRedirect
{
    public function handle($request, Closure $next)
    {
        return $next($request);
        $currentPath= url()->current(); //  http://dev.wowtop.jp/san-pham
        $uri = ltrim(\Request::getRequestUri(), "/");
        $dataList = Redirect::get();
        $entity = null;
        foreach ($dataList as $item) {
            $sourceUrl = $item->source_url;
            if ($currentPath == $sourceUrl) {
                $entity = Redirect::where('status', Redirect::STATUS_ACTIVE)->where('source_url', $sourceUrl)->first();
                if (!empty($entity)) {
                    break;
                }
            }
            if (str_starts_with($currentPath, $sourceUrl) || str_starts_with($uri, $sourceUrl)) {
                $entity = Redirect::where('status', Redirect::STATUS_ACTIVE)->where('source_url', '=', $sourceUrl)->where('source_url_type', Redirect::SOURCE_URL_TYPE_START_WITH)->first();
                if (!empty($entity)) {
                    break;
                }
            }
            if (str_contains($currentPath, $sourceUrl)) {
                $entity = Redirect::where('status', Redirect::STATUS_ACTIVE)->where('source_url', '=', $sourceUrl)->where('source_url_type', Redirect::SOURCE_URL_TYPE_CONTAINS)->first();
                if (!empty($entity)) {
                    break;
                }
            }
        }

        if (empty($entity)) {
            return $next($request);
        }

        if ($entity->redirect_type == Redirect::REDIRECT_TYPE_301) {
            header('HTTP/1.1 301 Moved Permanently');
            header("Location: $entity->destination_url");
            exit();
        }
        if ($entity->redirect_type == Redirect::REDIRECT_TYPE_302) {
            header('HTTP/1.1 302 Found');
            header("Location: $entity->destination_url");
            exit();
        }
        return $next($request);
    }
}
