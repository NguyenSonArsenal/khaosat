<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;

class VerifyAdmin
{
    public function handle($request, Closure $next)
    {
        if (cmsCurrentUserId() == User::ADMIN_ID) {
            return $next($request);
        }
        return redirect()->route('cms.admins.index');
    }
}