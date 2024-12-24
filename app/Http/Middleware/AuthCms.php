<?php

namespace App\Http\Middleware;

use Closure;

class AuthCms
{
    public function handle($request, Closure $next)
    {
        if (!cmsIsLogin()) {
            return redirect()->route(cmsRouteName('auth.login'));
        }
        return $next($request);
    }
}
