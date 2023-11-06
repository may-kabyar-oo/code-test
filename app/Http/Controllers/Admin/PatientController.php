<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PatientListRequest;
use App\Http\Requests\Admin\PatientRequest;
use App\Models\Patient;
use Carbon\Carbon;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function index(PatientListRequest $request)
    {
        $data = $request->validated();
        $patientsQuery = Patient::query();
            $patientsQuery->orderBy('created_at', 'desc');

        if (array_key_exists('search', $data)) {
            $patientsQuery->where('name','LIKE','%'. $data['search'] .'%');
        }

        $patients = $patientsQuery->paginate(10);

        // dd($patients);
        return Inertia::render('Patients/Index', [
            'patients' => $patients
        ]);
    }

    public function store(PatientRequest $request)
    {
        $data = $request->validated();

        $lastPatient = Patient::orderBy('id', 'desc')->first();

        $patient = new Patient();
        $patient->serial_number = $lastPatient->id + 1;
        $patient->registration_date = Carbon::now();
        $patient->name = $data['name'];
        $patient->sex = $data['sex'];
        $patient->age = $data['age'];
        $patient->address = $data['address'];
        $patient->treatment_start_date = $data['treatment_start_date'];
        $patient->township = $data['township'];
        $patient->vot = $data['vot'];
        $patient->username = $data['township'] . '_' . $lastPatient->id + 1 . '_' . Carbon::now()->year;
        $patient->password = $data['password'];
        $patient->save();

        return to_route('patients.index');

    }

    public function destroy($id)
    {
        $votPatient = Patient::findOrFail($id);
        $votPatient->delete();

        return to_route('patients.index');
    }
}
