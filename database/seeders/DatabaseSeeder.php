<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Patient::factory()->count(25)->create();

        User::factory()->create([
            "name" => "AISUnion2023@gmail.com",
            "email" => "AISUnion2023@gmail.com",
            "password" => "AISunion@!2023"
        ]);
    }
}
