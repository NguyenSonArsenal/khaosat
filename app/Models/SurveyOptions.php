<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SurveyOptions extends Model
{
    use SoftDeletes;

    public $table = 'survey_options';

    public $fillable = ['question_id', 'text'];

    public function question()
    {
        return $this->belongsTo(Khoa::class, 'question_id', 'id');
    }
}
