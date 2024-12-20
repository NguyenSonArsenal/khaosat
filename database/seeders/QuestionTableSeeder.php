<?php

namespace Database\Seeders;

use App\Models\Khoa;
use App\Models\Question;
use Illuminate\Database\Seeder;

class QuestionTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Question::truncate();
        $khoaIds = Khoa::select('id')->pluck('id')->toArray();
        $da = ['a', 'b', 'c', 'd'];
        $faker = \Faker\Factory::create('vi_VN');

        foreach ($khoaIds as $khoaId) {
            $max = rand(10, 99);
            for ($i = 0; $i < $max; $i++) {
                $item = [
                    'question' => $faker->sentence(rand(5, 20)),
                    'khoa_id' => $khoaId,
                    'da_a' => $faker->sentence(rand(1, 10)),
                    'da_b' => $faker->sentence(rand(1, 10)),
                    'da_c' => $faker->sentence(rand(1, 10)),
                    'da_d' => $faker->sentence(rand(1, 10)),
                    'da' => $this->getRandomString($da),
                ];

                Question::create($item);
            }
        }
    }

    function getRandomString($inputArray) {
        // Trộn mảng ngẫu nhiên
        shuffle($inputArray);

        // Lấy số phần tử ngẫu nhiên (từ 1 đến số lượng phần tử trong mảng)
        $count = rand(1, count($inputArray));

        // Lấy ra $count phần tử đầu tiên từ mảng đã trộn
        $randomElements = array_slice($inputArray, 0, $count);

        // Kết hợp các phần tử thành chuỗi cách nhau bởi dấu phẩy
        return implode(',', $randomElements);
    }
}
