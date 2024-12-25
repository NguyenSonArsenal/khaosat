<?php

namespace App\Http\Controllers\Cms\Base;

use App\Http\Controllers\Controller;

class BaseCmsController extends Controller
{
    public function notFound()
    {
        return view('cms.not_found');
    }

    public function noPermission()
    {
        return view('cms.no_permission');
    }
}
