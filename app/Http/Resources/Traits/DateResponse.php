<?php

namespace App\Http\Resources\Traits;

use Illuminate\Support\Carbon;

trait DateResponse
{
    protected function getFormattedDate($date, $custom_format = '')
    {
        if ($date === null || $date === '') {
            return $date;
        }
        $response_date_format = config('setting.response_date_format');
        if (is_string($date)) {
            $input_format = $custom_format ?: config('setting.request_date_format');
            $date = Carbon::createFromFormat($input_format, $date);
        }
        return $date->format($response_date_format);
    }
}
