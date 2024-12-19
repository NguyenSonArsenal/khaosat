<?php

return [
    'pagination' => [
        'cms' => 20,
        'client' => 10,
    ],
    'seo' => [
        'max_meta_title' => 60,
        'max_meta_description' => 160,
        'max_focus_keyword' => 5,
        'robot' => [
            1 => 'Index',
            2 => 'No Index',
            3 => 'Nofollow',
            4 => 'No Archive',
            5 => 'No Image Index',
            6 => 'No Snippet',
        ],
        'max_image_preview' => [
            1 => 'Large',
            2 => 'Standard',
            3 => 'None',
        ]
    ],
    'a_tag_target' => [
        'blank' => 1,
        'self' => 2,
    ],
    'lang_vn' => 'vn',
    'lang_vi' => 'vi',
    'lang_ja' => 'ja',
    'lang_en' => 'en',
    'lang' => ['vn', 'en'],
    'gender' => [
        1 => 'Nam',
        2 => 'Nữ',
    ],
    'time_to_exercise' => [
        1 => 'Thường xuyên',
        2 => 'Thỉnh thoảng',
        3 => 'Không bao giờ',
    ],
    'products_using' => [
        1 => 'Sữa tăng chiều cao',
        2 => 'Thuốc/Thực phẩm chức năng',
        3 => 'Khác',
        4 => 'Không sử dụng sản phẩm nào',
    ],
];
