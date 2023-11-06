<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // 'serial_number' => 'required',
            // 'registration_date' => 'required',
            'name' => 'required',
            'sex' => 'required',
            'age' => 'required|integer',
            'address' => 'required',
            'treatment_start_date' => 'required',
            'township' => 'required',
            'vot' => 'required',
            // 'username' => 'required',
            'password' => 'required',
        ];
    }
}
