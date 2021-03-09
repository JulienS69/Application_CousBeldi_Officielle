<?php

namespace App\Http\Controllers;

use App\Models\Plat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlatController extends Controller
{
    public function index()
    {
        return Plat::all();
    }

    public function show(Plat $plat)
    {
        return $plat;
    }

    public function store(Request $request): JsonResponse
    {
        $plat = Plat::create($request->all());
        return response()->json($plat, 201);
    }

    public function update(Request $request, Plat $plat)
    {
        $plat->update($request->all());
        return response()->json($plat, 200);
    }

    public function delete(Plat $plat)
    {
        $plat->delete();
        return response()->json(null, 204);
    }

}
