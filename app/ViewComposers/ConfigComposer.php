<?php
namespace App\ViewComposers;

use App\Models\Config;
use Illuminate\View\View;

class ConfigComposer
{
    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
//        $config = Config::first();
        $view->with('configComposer', []);
    }
}
