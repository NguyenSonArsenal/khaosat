<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // single view bind
//        View::composer(
//            ['client/layout/footer', 'client/introduce/index', 'client/layout/main', 'cms/layout/auth', 'cms/layout/main'], // view name
//            'App\Composers\LayoutComposer' // composer class name
//        );
//        View::composer(
//            ['components/menu-category'], // view name
//            'App\Composers\MenuComposer' // composer class name
//        );
    }
}
