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
        $votPatients = Patient::where('vot', true)->get();
        
        return Inertia::render('VotPatient/Index', [
            'votPatients' => $votPatients
        ]);
    }
}
