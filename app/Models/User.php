<?php

namespace App\Models;

use App\Models\Base\Model;
use Laravel\Scout\Searchable;
use Rennokki\QueryCache\Traits\QueryCacheable;

class User extends Model
{

    use QueryCacheable, Searchable;
    public $cacheFor = 3600; // cache time, in seconds
    public $cacheTags = ['users'];

    const ADMIN_ID = 1;
    const PENDING = 1;
    const PENDING_ALIAS = 'Chưa active';
    const APPROVED = 2;
    const APPROVED_ALIAS = 'Hoạt động';
    const CONFIRMED = 3;
    const CONFIRMED_ALIAS = 'Kích hoạt';
    const BLOCKED = 4;
    const BLOCKED_ALIAS = 'Ngừng kích hoạt';

    const ROLE = [
        "SUPER_ADMIN" => "Super_admin",
        "ADMIN" => "Admin",
        "AUTHOR" => "Author",
        "OTHER" => "Other"
    ];

    protected $fillable = ['name', 'full_name', 'email', 'phone', 'password', 'date_of_birth', 'avatar', 'introduce',
        'status', 'created_at', 'updated_at', 'deleted_at', 'link_fb', 'link_youtube', 'link_website'];

    public function slugUsers()
    {
        return $this->hasMany(SlugUser::class, 'user_id', 'id');
    }

    public function slugs() {
        return $this->hasMany(SlugUser::class)->latest();
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    public function isAdmin()
    {
        return $this->role == self::ROLE['ADMIN'];
    }

    public function isSuperAdmin()
    {
        return $this->role == self::ROLE['SUPER_ADMIN'];
    }

    public function isActive()
    {
        return $this->status == self::APPROVED;
    }

    public function isConfirmed()
    {
        return $this->status == self::CONFIRMED;
    }

    public function isPending()
    {
        return $this->status == self::PENDING;
    }

    public function isShowMenuPost()
    {
        return $this->isAdmin() || $this->isConfirmed() || $this->isSuperAdmin();
    }

    public function getAllCategoryOwner()
    {
        if ($this->isSuperAdmin() || $this->isAdmin())
            return Category::pluck('id')->toArray();
        return Category::whereUserId($this->id)->pluck('id')->toArray();
    }

    public function displayStatus()
    {
        $status = '';
        switch ($this->status) {
            case self::PENDING;
                $status = self::PENDING_ALIAS;
                break;
            case self::APPROVED;
                $status = self::APPROVED_ALIAS;
                break;
            case self::CONFIRMED;
                $status = self::CONFIRMED_ALIAS;
                break;
            case self::BLOCKED;
                $status = self::BLOCKED_ALIAS;
        }
        return $status;
    }
}
