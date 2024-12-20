<?php

namespace App\Models;

use App\Models\Base\Model;

class User extends Model
{
    public $table = 'user';

    protected $fillable = ['name', 'khoa_id', 'email', 'phone'];
}
