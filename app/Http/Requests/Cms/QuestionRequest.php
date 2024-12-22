<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class QuestionRequest extends FormRequest
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
            'options' => 'required|array|min:2', // Phải là mảng và ít nhất 2 phần tử
            'options.*' => 'required|string|max:255', // Mỗi phần tử phải là chuỗi không quá 255 ký tự
        ];
        return $rules;
    }

    public function attributes()
    {
        $attributes = [];

        // Xử lý các options để hiển thị như options[0], options[1], ...
        foreach ($this->input('options', []) as $key => $value) {
            $a = $key + 1;
            $attributes["options.$key"] = "lựa chọn [$a]";
        }

        return $attributes;
    }

    public function messages()
    {
        return [
            'options.required' => 'Trường options là bắt buộc.',
            'options.min' => 'Cần ít nhất :min lựa chọn.',
            'options.*.required' => 'Trường :attribute không được bỏ trống  .',
            'options.*.string' => 'Trường :attribute phải là một chuỗi.',
            'options.*.max' => 'Trường :attribute không được vượt quá :max ký tự.',
        ];
    }
}
