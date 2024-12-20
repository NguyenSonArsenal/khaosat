<?php

namespace Database\Seeders;

use App\Models\Khoa;
use Illuminate\Database\Seeder;

class KhoaTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Khoa::truncate();

        $data = [
            ['Kỹ thuật Sinh học', 'BF1'],
            ['Kỹ thuật Thực phẩm', 'BF2'],
            ['Kỹ thuật Hóa học', 'CH1'],
            ['Hóa học', 'CH2'],
            ['Kỹ thuật điện', 'EE1'],
            ['Kỹ thuật Điều khiển - Tự động hóa', 'EE2'],
            ['Điện tử và Viễn thông', 'ET1'],
            ['Kỹ thuật Y sinh', 'ET2'],
            ['CNTT: Khoa học Máy tính', 'IT1'],
            ['CNTT: Kỹ thuật máy tính', 'IT2'],
            ['Kỹ thuật Cơ điện tử', 'ME1'],
            ['Kỹ thuật Cơ khí', 'ME2'],
            ['Quản lý năng lượng', 'EM1'],
            ['Quản lý công nghiệp', 'EM2'],
            ['Quản trị kinh doanh', 'EM3'],
            ['Kế toán', 'EM4'],
            ['Tài chính - Ngân hàng', 'EM5'],
            ['Kỹ thuật Môi trường', 'EV1'],
            ['Quản lý Tài nguyên và Môi trường', 'EV2'],
            ['Tiếng Anh Khoa học Kỹ thuật và Công nghệ', 'FL1'],
            ['Tiếng Anh chuyên nghiệp quốc tế', 'FL2'],
        ];

        foreach ($data as $item) {
            Khoa::create([
                'name' => $item[0],
                'makhoa' => $item[1],
                'slug' => createSlug($item[0])
            ]);
        }
    }
}
