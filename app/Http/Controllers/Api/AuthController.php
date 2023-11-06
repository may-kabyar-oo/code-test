<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LoginRequest;
use App\Http\Requests\Admin\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\AuthRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    private $authRepository;

    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    /**
     * Login
     */
    public function login(LoginRequest $request)
    {
        $user = $this->authRepository->getUser($request->validated());
        if (!$user) {
            return response()->json([
                'message' => 'Wrong password!'
            ], 400);
        }
        $user = $this->authRepository->login($user);
        return UserResource::make($user);
    }

    /**
     * Register
     */
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $user = $this->authRepository->create($data);
        $user = $this->authRepository->login($user);
        return UserResource::make($user);
    }

    /**
     * Logout current session
     *
     * @authenticated
     */
    public function logout(Request $request)
    {
        $this->authRepository->logout($request->user());
        return response()->json([
            'message' => 'Logout successful'
        ]);
    }

}
