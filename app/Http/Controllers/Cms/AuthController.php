<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Cms\Base\BaseCmsController;

class AuthController extends BaseCmsController
{
    public function showFormLogin()
    {
        if (cmsIsLogin()) {
            return redirect()->route('cms.khoa.index');
        }
        return view('cms.auth.login');
    }

    public function loginUser()
    {
        $checkLogin = cmsGuard()->attempt([
            'email' => request('email'),
            'password' => request('password')
        ]);

        if ($checkLogin) {
            return redirect()->route(cmsRouteName('khoa.index'));
        }


        return redirect()->back()->withErrors(transMessage('account_not_found'))->withInput(request()->all());
    }

    public function logout()
    {
        cmsGuard()->logout();
        return redirect()->route(cmsRouteName('auth.login'));
    }
}
