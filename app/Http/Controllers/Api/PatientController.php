<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\VotStatusRequest;
use App\Http\Resources\PatientResource;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $votPatients = Patient::where('vot', true)->get();
        return PatientResource::collection($votPatients);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $votPatient = Patient::findOrFail($id);
        return PatientResource::make($votPatient);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function changeVotStatus(VotStatusRequest $request)
    {
        $data = $request->validated();
        $patient = Patient::findOrFail($data['patient_id']);

        $patient->vot_status = $data['vot_status'];
        $patient->update();

        return response()->json([
            'message' => 'successful'
        ]);
    }
}
