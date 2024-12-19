<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Admin::truncate();
        Admin::create([
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin')
        ]);
    }
}
