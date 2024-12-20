<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    function render($request, Throwable $exception)
    {
//        if ($this->isHttpException($exception)) {
//            if ($exception->getStatusCode() == 404) {
//                if (!str_contains(request()->url(), getConstant('CMS_PREFIX'))) {
//                    return redirect()->route(clientRouteName('page_not_found'));
//                }
//            }
//        }
        return parent::render($request, $exception);
    }
}
