<?php

namespace Database\Seeders;

use App\Models\Plat;
use Illuminate\Database\Seeder;

class PlatsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plat::truncate();

        $faker = \Faker\Factory::create();

        for($i = 0; $i < 50; $i++){
            Plat::create(
            [
                'Nom' => $faker->sentence,
                'description' => $faker->paragraph,
                'prix' => '10.0',
            ]);
        }

    }
}
