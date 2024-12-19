<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Khoa extends Model
{
    use SoftDeletes;

    public $table = 'khoa';

    public $fillable = ['name', 'slug'];
}
