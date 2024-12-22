<?php

namespace App\Http\Requests\Client;

use App\Models\Question;
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
        $questions = Question::query()->orderBy('id', 'desc')->where('khoa_id', request('khoa_id'))->get();

        foreach ($questions as $question) {
            $rules["answer.{$question['id']}"] = 'required|min:1';
        }
        $rules['name'] = 'max:64';
        $rules['email'] = 'max:64';
        $rules['phone'] = 'bail|nullable|numeric|digits:10';

        return $rules;
    }

    public function attributes()
    {
        return [
            'name' => 'họ tên',
            'phone' => 'số điện thoại',
        ];
    }


    public function messages()
    {
        $messages = [];

        $questions = Question::query()->orderBy('id', 'desc')->where('khoa_id', request('khoa_id'))->get();
        foreach ($questions as $question) {
            $messages["answer.{$question['id']}.required"] = "Bạn phải chọn ít nhất một đáp án ";
//            $messages["answer.{$question['id']}.array"] = "Dữ liệu cho câu hỏi '{$question['question']}' phải là dạng mảng.";
        }

        return $messages;
    }
}
