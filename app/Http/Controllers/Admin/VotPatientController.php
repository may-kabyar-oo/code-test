<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VotPatientController extends Controller
{
    public function index()
    {
        $votPatients = Patient::where('vot', 1)->paginate(10);
        return Inertia::render('VotPatient/Index', [
            'votPatients' => $votPatients
        ]);
    }
}
