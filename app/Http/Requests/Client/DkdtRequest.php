<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;


class DkdtRequest extends FormRequest
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

    public function rules()
    {
        return [
            'child_name' => 'bail|required|max:255',
            'date_of_birth' => 'required',
            'height_child' => 'bail|required|numeric|min:50|max:200',
            'height_father' => 'bail|required|numeric|min:50|max:200',
            'height_mother' => 'bail|required|numeric|min:50|max:200',
            'phone' => 'required',
            'province_id' => 'required',
            'district_id' => 'required',
            'ward_id' => 'required',
            'address' => 'required',
        ];
    }

    public function attributes()
    {
        return [
            'child_name' => 'họ và tên con',
            'date_of_birth' => 'ngày tháng năm sinh của con',
            'phone' => 'số điện thoại',
            'height_child' => 'chiều cao của con',
            'height_mother' => 'chiều cao của mẹ',
            'height_father' => 'chiều cao của bố',
            'province_id' => 'tỉnh/thành phố',
            'district_id' => 'quận/huyện',
            'ward_id' => 'xã/phường',
            'address' => 'địa chỉ',
        ];
    }

    public function messages()
    {
        return [
//            'date_of_birth.ddcc_birthday' => 'Giá trị trường ngày tháng năm sinh của con không hợp lệ (trên 20 tuổi)',
            'height_child.min' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
            'height_child.max' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
            'height_mother.min' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
            'height_mother.max' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
            'height_father.min' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
            'height_father.max' => 'Nhập thông tin chiều cao trong khoảng 50-200cm',
        ];
    }

//    protected function failedValidation(Validator $validator)
//    {
//        $this->merge(['errors' => $validator->errors()]);
//    }
}
