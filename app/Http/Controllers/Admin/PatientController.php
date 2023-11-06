<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function show()
    {
        return Inertia::render('Patients/Index');
    }
}
