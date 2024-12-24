<?php

namespace App\Models;

use App\Models\Base\Model;

class User extends Model
{
    public $table = 'user';

    protected $fillable = ['name', 'khoa_id', 'email', 'phone'];

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id', 'id');
    }
}
