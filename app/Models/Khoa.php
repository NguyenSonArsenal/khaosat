<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Khoa extends Model
{
    use SoftDeletes;

    const MAX_LENGTH_MAKHOA = 5;

    public $table = 'khoa';

    public $fillable = ['name', 'slug', 'makhoa'];

    public function user()
    {
        return $this->hasMany(User::class,'khoa_id');
    }
}
