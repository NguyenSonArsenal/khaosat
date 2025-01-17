<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(KhoaTableSeeder::class);
        $this->call(AdminTableSeeder::class);
//        $this->call(QuestionTableSeeder::class);
    }
}
