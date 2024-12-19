<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;

class DashboardController extends BaseCmsController
{
    public function index()
    {
        return view('cms.dashboard.index', []);
    }
}
