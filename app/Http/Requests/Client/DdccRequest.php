<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class  DdccRequest extends FormRequest
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
            'parent_name' => 'bail|required|max:255',
            'phone' => 'required',
            'child_name' => 'bail|required|max:255',
            'gender' => 'required',
            'date_of_birth' => 'bail|required|before:today|ddcc_birthday',
            'height' => 'bail|required|numeric|min:50|max:200',
            'weight' => 'bail|required|numeric|min:1|max:150',
            'products_using' => 'required',
            'time_to_exercise' => 'required',
            'time_sleep' => 'required',
        ];
        return $rules;
    }

    public function attributes()
    {
        return [
            'parent_name' => 'họ và tên phụ huynh',
            'phone' => 'số điện thoại',
            'child_name' => 'họ tên con',
            'gender' => 'giới tính',
            'date_of_birth' => 'ngày tháng năm sinh',
            'height' => 'chiều cao của con',
            'products_using' => 'sản phẩm con sử dụng',
            'time_to_exercise' => 'tần suất vận động của con',
            'time_sleep' => 'thời gian con ngủ',
            'weight' => 'cân nặng của con',
        ];
    }

    public function messages()
    {
        return [
            'date_of_birth.ddcc_birthday' => 'Giá trị trường ngày tháng năm sinh của con không hợp lệ (trên 20 tuổi)',
            'height.min' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
            'height.max' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
            'weight.min' => 'Nhập thông tin cân nặng trong khoảng 1-150kg',
            'weight.max' => 'Nhập thông tin cân nặng trong khoảng 1-150kg',
        ];
    }
}
