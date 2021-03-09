<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PlatController;
use App\Http\Controllers\RegisterController;
use App\Models\Plat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('plats', [PlatController::class, 'index']);
Route::get('plats/{id}', [PlatController::class, 'show']);
Route::post('plats', [PlatController::class, 'store']);
Route::put('plats/{id}', [PlatController::class, 'update']);
Route::delete('plats/{id}', [PlatController::class, 'delete']);
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
