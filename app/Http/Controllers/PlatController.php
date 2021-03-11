<?php

namespace App\Http\Controllers;

use App\Models\Plat;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\BaseAuthController as BaseController;
use Illuminate\Http\Request;
use Validator;
use App\Http\Resources\Plat as PlatResource;

class PlatController extends BaseController
{
    public function index()
    {
        $plats = Plat::all();
        return $this->sendResponse(PlatResource::collection($plats), 'Affichage des plats avec succès !');
    }

    public function show($plat)
    {
        $plat = Plat::findOrFail($plat);
        if(is_null($plat))
        {
            return $this->sendError('Plat introuvable dans la base d\'information !');
        }
        return $this->sendResponse(new PlatResource($plat), 'Produit trouvé avec succès');
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'nom' => 'required',
            'description' => 'required',
            'prix' => 'required',
        ]);
        if($validator->fails())
        {
            return $this->sendError('Erreur lors de la validation !', $validator->errors());
        }

        $plat = Plat::create($input);

        return $this->sendResponse(new PlatResource($plat), 'Plat créer avec succès !');
    }

    public function update(Request $request, Plat $plat)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'nom' => 'required',
            'description' => 'required',
            'prix' => 'required',
        ]);
        if($validator->fails())
        {
            return $this->sendError('Impossible d\'update le plat !', $validator->errors());
        }
        $plat->nom = $input['name'];
        $plat->description = $input['description'];
        $plat->prix = $input['prix'];
        $plat->save();
        return $this->sendResponse(new PlatResource($plat), 'Plat modifier avec succès !');
    }

    public function delete(Plat $plat)
    {
        $plat->delete();
        return $this->sendResponse([], 'Plat supprimé avec succès !');
    }

}
