<?php

namespace App\Http\Controllers\Client;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LocalizationController extends Controller
{
    public function setLang()
    {
        $lang = strtolower(request('lang'));
        if (in_array(trim($lang), getConfig('lang'))) {
            session()->put('lang', $lang);
            $response = [
                'status' => 200,
                'data' => [],
                'message' => transMessage('success'),
            ];
        } else {
            $response = [
                'status' => 200,
                'data' => [],
                'message' => transMessage('system_error'),
            ];
        }
        return response()->json($response);
    }

    public function change(Request $request)
    {
        App::setLocale($request->locale);
        session()->put('locale', $request->locale);
        return redirect()->back();
    }
}
