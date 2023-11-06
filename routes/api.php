<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PatientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('/patients', PatientController::class);
Route::post('/patients/vot-status', [PatientController::class, 'changeVotStatus']);

Route::group(['middleware' => 'guest'], function () {
    Route::post('user/register', [AuthController::class, 'register'])->name('register');
    Route::post('user/login', [AuthController::class, 'login'])->name('login');
});

Route::group(['middleware' => 'auth:user'], function () {
    Route::post('user/logout', [AuthController::class, 'logout'])->name('logout');
});

