<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // categorytranslations
        $Category = [
            [
                "slug" => "filebi",
                "ge" => ["name" => "გრანიტი"],
                "en" => ["name" => "tiles"],
            ],
            [
                "slug" => "kafeli",
                "ge" => ["name" => "კაფელი"],
                "en" => ["name" => "kafeli"],
            ],
            [
                "slug" => "metlaxi",
                "ge" => ["name" => "მეტლახი"],
                "en" => ["name" => "metlaxi"],
            ],
            [
                "slug" => "laminati",
                "ge" => ["name" => "ლამინატი"],
                "en" => ["name" => "laminati"],
            ],
            [
                "slug" => "ironDoors",
                "ge" => ["name" => "რკინის კარი"],
                "en" => ["name" => "iron doors"],
            ],
            [
                "slug" => "woodDoors",
                "ge" => ["name" => "ხის კარი"],
                "en" => ["name" => "Wood doors"],
            ],
            [
                "slug" => "bathroom",
                "ge" => ["name" => "აბაზანის ავეჯი"],
                "en" => ["name" => "Bathroom"],
            ],
        ];

        // // Insert Languages
        foreach ($Category as $cat) {
            Category::create($cat);
        }

        // Category::create([
        //     "name" => "test"
        // ]);
    }
}
