<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Khoa;
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

        $khoaIds = Khoa::select('id')->pluck('id')->toArray();
        $faker = \Faker\Factory::create('vi_VN');
        foreach ($khoaIds as $khoaId) {
            $max = rand(1, 10);
            for ($i = 0; $i < $max; $i++) {
                Admin::create([
                    'email' => $faker->email,  // Tạo email ngẫu nhiên
                    'password' => bcrypt('admin'),
                    'khoa_id' => $khoaId
                ]);
            }
        }
    }
}
