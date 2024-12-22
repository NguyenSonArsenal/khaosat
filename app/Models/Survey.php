<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Survey extends Model
{
    use SoftDeletes;

    public $table = 'survey';

    public $fillable = ['question_id', 'survey_options_id', 'user_id'];

    public function user()
    {
        return $this->belongsTo(user::class, 'user_id', 'id');
    }
}
