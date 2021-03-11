<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BoissonController extends Controller
{
    public function index()
    {
    	return Menu::all();
    }

    public function show(Boisson $boisson)
    {
    	return Boisson::findOrFail($boisson);
    }

    public function store(Request $request): JsonResponse
    {
    	$boisson = Menu::create($request->all());
    	return response()->json($boisson, 201);
    }

    public function update(Request $request, Boisson $boisson)
    {
    	$menu->update($request->all());
    	return response()->json($boisson, 200);
    }

    public function delete(Boisson $boisson)
    {
    	$menu->delete();
    	return response()->json(null, 204)
    }
}