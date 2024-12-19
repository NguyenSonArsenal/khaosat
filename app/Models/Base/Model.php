<?php

namespace App\Models\Base;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Model extends Authenticatable
{
    use Notifiable, HasFactory;

    public $timestamps = true;

    public static function getTableName()
    {
        return with(new static)->getTable();
    }
}
