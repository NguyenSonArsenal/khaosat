<?php

namespace App\Models\Blog;

use Corcel\Model\Post as Corcel;

class WpPosts extends Corcel
{
    public $table = 'posts';

    protected $primaryKey = 'ID';

    protected $fillable = ['ID', 'post_author', 'post_date', 'post_date_gmt', 'post_content', 'post_title', 'post_excerpt', 'post_status', 'comment_status', 'ping_status',
        'post_password', 'post_name', 'to_ping', 'pinged', 'post_modified', 'post_modified_gmt', 'post_content_filtered',
        'post_parent', 'guid', 'menu_order', 'post_type', 'post_mime_type', 'comment_count'];

    const STATUS_PUBLISH = 'publish';

    public function terms()
    {
        return $this->belongsToMany(WpTerms::class, 'term_relationships', 'object_id', 'term_taxonomy_id');
    }
}
