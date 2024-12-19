<?php

namespace App\Models\Blog;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WpTermRelationships extends Model
{
    public $table = 'term_relationships';
}
