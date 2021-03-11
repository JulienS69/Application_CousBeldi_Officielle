liste des commande et instruction à executé DANS L'ORDRE :

	1. Pour l'initialisation de l'api, copier/coller le ficher ".env.example" dans le même emplacement. puis ajouter les informations pour la connexion à la base de données.
	2. Executer la commande : php artisan key:generate. => ajoute la clé permettant à l'application de s'executer.
	3. Executer la commande : php artisan migrate. => Permet de migrer les tables et les ajouter dans la base de données.
	4. Executer la commande : php artisan passport:install. => permet d'activer un token de sécurité pour la connexion/enregistrement.
