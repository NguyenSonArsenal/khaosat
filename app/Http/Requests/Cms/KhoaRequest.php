<?php

namespace App\Http\Requests\Cms;

use App\Models\Khoa;
use Illuminate\Foundation\Http\FormRequest;

class KhoaRequest extends FormRequest
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
        $id = request('id');
        $maxLengthMaKhoa = Khoa::MAX_LENGTH_MAKHOA;
        $rules = [
            'name' => 'required|max:255',
            'makhoa' => "required|max:$maxLengthMaKhoa|unique:khoa,makhoa,$id,id,deleted_at,NULL",
        ];
        return $rules;
    }

    public function attributes()
    {
        return [
            'name' => 'tên khoa',
        ];
    }
}
