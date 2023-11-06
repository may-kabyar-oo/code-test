<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $serialNumber = 1;
        $township = fake()->randomElement(['AMP', 'AMT', 'CAT', 'CMT', 'PTG', 'PGT', 'MHA']);
        $registraion_date = fake()->date;
        $registraion_year = Carbon::parse($registraion_date)->year;
        return [
            'registration_date' => $registraion_date,
            'name' => fake()->name,
            'sex' => fake()->randomElement(['Male', 'Female', 'Other']),
            'age' => fake()->numberBetween(1, 99),
            'address' => fake()->text(40),
            'treatment_start_date' => fake()->date,
            'township' => $township,
            'vot' => fake()->boolean,
            'username' => $township . '_' . $serialNumber . '_' . $registraion_year,
            'password' => fake()->regexify('[A-Za-z0-9]{4}'),
            'serial_number' => $serialNumber++,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
