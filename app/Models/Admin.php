<?php

namespace App\Models;

use App\Models\Base\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Admin extends Model
{
    protected $table = 'admin';

    protected $fillable = ['email', 'password', 'role', 'khoa_id'];

    use SoftDeletes;

    public function hasAllowEditGv()
    {
        return isCmsAdmin() || cmsCurrentUserId() == $this->id;
    }
}
