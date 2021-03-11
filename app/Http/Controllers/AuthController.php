<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseAuthController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\bcrypt;
use Validator;

class AuthController extends BaseController
{
    /**
    * Register API
    *
    * @return \Illuminate\Http\Response
    */
    public function register(Request $request)
    {
    	$validator = Validator::make($request->all(), [
    		'name' => 'required',
    		'email' => 'required|email',
    		'password' => 'required',
    		'c_password' => 'required|same:password'
    	]);

    	if($validator->fails())
    	{
    		return $this->sendError('Erreur lors de la validation des informations.', ['error'=>'Impossible d\'enregistrer l\'utilisateur, une des informations fournis n\'est pas correct']);
    	}

    	$input = $request->all();
    	$input['password'] = bcrypt($input['password']);
    	$user = User::create($input);
    	$success['token'] = $user->createToken('MyApp')->accessToken;
    	$success['name'] = $user->name;

    	return $this->sendResponse($success, 'Utilisateur enregistrer avec succès.');
    }

    /**
    * Login API
    *
    * @return \Illuminate\Http\Response
    */
    public function login(Request $request)
    {
    	if(Auth::attempt(['email' => $request->email, 'password' => $request->password]))
    	{
    		$user = Auth::user();
    		$success['token'] = $user->createToken('MyApp')->accessToken;
    		$success['name'] = $user->name;

    		return $this->sendResponse($success, 'Utilisateur logger avec succès !');
    	}
    	else
    	{
    		return $this->sendError('Accès refuser. Pas d\'autorisation valide', ['error'=>'Accès non Autorisé']);
    	}
    }
}
