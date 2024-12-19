<?php

namespace App\Exports;

use App\Models\Dkdt;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Fill;

class DkdtExport implements WithHeadings, ShouldAutoSize, FromView
{
    public function view(): View
    {
        $data = Dkdt::select('id', 'child_name', 'date_of_birth', 'height_child', 'height_father', 'height_mother', 'phone', 'province_id', 'district_id', 'ward_id', 'address')
            ->with(['province', 'district', 'ward'])
            ->get();

        foreach ($data as $key => $item) {
            $data[$key]['province_id'] = !empty($item->province->name) ? $item->province->name : '';
            $data[$key]['district_id'] = !empty($item->district->name) ? $item->district->name : '';
            $data[$key]['ward_id'] = !empty($item->ward->name) ? $item->ward->name : '';
        }

        mb_convert_encoding($data, 'UCS-2LE', 'UTF-8');

        return view('cms.dkdt.export', [
            'data' => $data
        ]);
    }

    public function collection()
    {
        $data = Dkdt::select('id', 'child_name', 'date_of_birth', 'height_child', 'height_father', 'height_mother', 'phone', 'province_id', 'district_id', 'ward_id', 'address')
            ->with(['province', 'district', 'ward'])
            ->take(10)->get();

        foreach ($data as $key => $item) {
            $data[$key]['province_id'] = !empty($item->province->name) ? $item->province->name : '';
            $data[$key]['district_id'] = !empty($item->district->name) ? $item->district->name : '';
            $data[$key]['ward_id'] = !empty($item->ward->name) ? $item->ward->name : '';
        }

        return $data;
    }


    public function headings(): array
    {
        return
            [
                'ID',
                'Tên con',
                'Sinh nhật con',
                'Chiều cao con (cm)',
                'Chiều cao bố (cm)',
                'Chiều cao mẹ (cm)',
                'Sđt',
                'Tỉnh',
                'Huyện',
                'Xã',
                'Địa chỉ',
            ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],

            // Styling a specific cell by coordinate.
            'B2' => ['font' => ['italic' => true]],

            // Styling an entire column.
            'C'  => ['font' => ['size' => 16]],
        ];
    }
}
