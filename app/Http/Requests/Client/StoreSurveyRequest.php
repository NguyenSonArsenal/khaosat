<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class StoreSurveyRequest extends FormRequest
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
        $rules = [
            'name' => 'required|max:64',
            'email' => 'required|max:64',
            'phone' => 'bail|numeric|digits:10',
        ];
        return $rules;
    }

    public function attributes()
    {
        return [
            'name' => 'họ tên',
            'phone' => 'số điện thoại',
        ];
    }
}
