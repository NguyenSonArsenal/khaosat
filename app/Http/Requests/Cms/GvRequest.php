<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class GvRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules['email'] = 'bail|required|max:64|unique:admin,email,' . request('id');

        if (request('id')) {
            $rules = [
                'password' => 'bail|nullable|confirmed|min:6|max:255',
            ];
        } else {
            $rules = [
                'password' => 'bail|required|confirmed|min:6|max:255',
            ];
        }
        return $rules;
    }

    public function attributes()
    {
        return [
            'email' => 'Email',
        ];
    }
}
