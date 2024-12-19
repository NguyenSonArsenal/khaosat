<?php

namespace App\Models\Blog;

use Corcel\Model\Post as Corcel;

class WpPostmeta extends Corcel
{
    public $table = 'postmeta';
}
