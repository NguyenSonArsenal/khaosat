<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use SoftDeletes;

    public $table = 'user';

    protected $fillable = ['name', 'khoa_id', 'email', 'phone'];

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id', 'id')->whereNull('deleted_at');;
    }
}
