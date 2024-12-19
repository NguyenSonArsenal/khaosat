<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use SoftDeletes;

    public $table = 'question';

    public $fillable = ['question', 'da_a', 'da_b', 'da_c', 'da_d', 'da', 'khoa_id'];

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id', 'id');
    }
}
