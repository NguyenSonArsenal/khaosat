<?php

namespace App\Models\Blog;

use Corcel\Model\Post as Corcel;

class WpTerms extends Corcel
{
    public $table = 'terms';

    protected $primaryKey = 'term_id';

    public function terms()
    {
        return $this->belongsToMany(WpTerms::class);
    }

    public function posts()
    {
        return $this->belongsToMany(WpPosts::class, 'term_relationships', 'term_taxonomy_id', 'object_id');
    }
}
