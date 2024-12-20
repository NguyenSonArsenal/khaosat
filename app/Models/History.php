<?php

namespace App\Models;

use App\Models\Base\Model;

class History extends Model
{
    public $table = 'history';

    protected $fillable = ['question', 'result', 'da_a', 'da_b', 'da_c', 'da_d', 'da', 'user_da', 'user_id'];

    public function user()
    {
        return $this->belongsTo(user::class, 'user_id', 'id');
    }
}
