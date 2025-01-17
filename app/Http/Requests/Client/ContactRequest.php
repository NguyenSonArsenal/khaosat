<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class  ContactRequest extends FormRequest
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
            'title' => 'required|max:65',
            'phone' => 'required|max:15',
            'address' => 'required|max:255',
            'content' => "required|max:255",
        ];
        return $rules;
    }

    public function attributes()
    {
        return [
            'name' => 'họ tên',
        ];
    }
}
