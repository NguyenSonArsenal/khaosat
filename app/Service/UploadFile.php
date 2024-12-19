<?php

namespace App\Service;

use Illuminate\Support\Facades\File;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadFile
{
    /**
     * @param $file: Instance Illuminate\Http\UploadedFile
     * @param $pathTmp: link image
     * @param $oldImage: link image
     * @return void
     */
    public function upload($file, $pathTmp, $oldImage = '')
   {
       $fileName = time() . "_" . $file->getClientOriginalName();
       $uploadPath = public_path($pathTmp); // Folder upload path

       if (!file_exists($uploadPath)) {
           mkdir($uploadPath, 0777, true);
       }

       $file->move($uploadPath, $fileName);

       // Remove old file
       if (File::exists(public_path($oldImage))) {
           File::delete(public_path($oldImage));
       }

       return config('app.url') . '/' . ltrim($pathTmp . '/' . $fileName, '/');
   }

    public function UploadFileToStorage(UploadedFile $file, $folder = null, $disk = 'public', $filename = null)
    {
        $FileName = !is_null($filename) ? $filename : Str::random(10);
        return $file->storeAs(
            $folder,
            $FileName . "." . $file->getClientOriginalExtension(),
            $disk
        );
    }

    public function deleteFile($path, $disk = 'public')
    {
        Storage::disk($disk)->delete($path);
    }

    public function uploadImageToS3($file, $folder)
    {
        $path_name = Storage::disk('s3')->put($folder, $file, 'public');
        $path = Storage::disk('s3')->url($path_name);
        return $path;
    }
}
