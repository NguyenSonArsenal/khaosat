<?php

namespace App\Http\Middleware;

use Closure;

class AuthGV
{
    public function handle($request, Closure $next)
    {
        if (!cmsIsLogin()) {
            return redirect()->route(cmsRouteName('auth.login'));
        }

        $khoaId = $request->route()->parameter('khoaid');

        if (empty($khoaId) || empty(cmsCurrentUser()->khoa_id)) {
            return $next($request);
        }

        if (cmsCurrentUser()->khoa_id == $khoaId) {
            return $next($request);
        }

        abort(404, 'Permission');
    }
}
