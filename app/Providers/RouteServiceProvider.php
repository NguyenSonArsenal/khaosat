<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * This is used by Laravel authentication to redirect users after login.
     *
     * @var string
     */
    const HOME = '/home';

    /**
     * The controller namespace for the application.
     *
     * When present, controller route declarations will automatically be prefixed with this namespace.
     *
     * @var string|null
     */
    // protected $namespace = 'App\\Http\\Controllers';

    protected $_namespaceCms = 'App\\Http\\Controllers\\Cms';
    protected $_namespaceApi = 'App\\Http\\Controllers\\Api';
    protected $_namespaceClient = 'App\\Http\\Controllers\\Client';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::prefix('api')
                ->name('api.')
                ->middleware('api')
                ->namespace($this->_namespaceApi)
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->prefix(getConstant('CMS_PREFIX'))
                ->name('cms.')
                ->namespace($this->_namespaceCms)
                ->group(base_path('routes/cms.php'));

            Route::middleware(['web', 'redirect'])
                ->name('client.')
                ->namespace($this->_namespaceClient)
                ->group(base_path('routes/client.php'));
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
        });
    }
}
