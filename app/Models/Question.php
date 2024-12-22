<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use SoftDeletes;

    public $table = 'question';

    public $fillable = ['question', 'image', 'khoa_id'];

    public function khoa()
    {
        return $this->belongsTo(Khoa::class, 'khoa_id', 'id');
    }

    public function surveyOptions()
    {
        return $this->hasMany(SurveyOptions::class,'question_id');
    }
}
