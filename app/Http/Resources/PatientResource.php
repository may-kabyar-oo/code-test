<?php

namespace App\Http\Resources;

use App\Http\Resources\Traits\DateResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    use DateResponse;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'serial_number' => $this->serial_number,
            'registration_date' => $this->registration_date,
            'name' => $this->name,
            'sex' => $this->sex,
            'age' => $this->age,
            'address' => $this->address,
            'treatment_start_date' => $this->treatment_start_date,
            'township' => $this->township,
            'vot' => $this->vot,
            'username' => $this->username,
            'password' => $this->password,
            'created_at' => $this->getFormattedDate($this->created_at),
            'updated_at' => $this->getFormattedDate($this->updated_at),
        ];
    }
}
