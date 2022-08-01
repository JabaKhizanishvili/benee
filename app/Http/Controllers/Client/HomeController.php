<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Product;
use App\Models\Staff;
use App\Models\Slider;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Repositories\Eloquent\ProductRepository;
use Clockwork\Request\Request;
use Dotenv\Util\Regex;
use Illuminate\Support\Facades\Redis;

class HomeController extends Controller
{
    public function index(Request $request)
    {



        $page = Page::where('key', 'home')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        // $products = app(ProductRepository::class)->getPopularProducts();


        //dd($products);
        $query =  Product::select('products.*', 'categories.slug')
            ->leftJoin('categories', 'categories.id', '=', 'products.category_id')
            ->where('categories.slug', '=', 'filebi')
            ->with(['latestImage', 'translations'])->paginate(6);

        return Inertia::render('Home', [
            // "tiles" => Product::with(['latestImage', 'translations'])->where("category_id", 15)->paginate(6),
            "tiles" => $query,
            // "tiles" => $query,
            "doors" => Product::select('products.*', 'categories.slug')
                ->leftJoin('categories', 'categories.id', '=', 'products.category_id')
                ->where('categories.slug', '=', 'ironDoors')
                ->with(['latestImage', 'translations'])->paginate(6),

            "bath" => Product::select('products.*', 'categories.slug')
                ->leftJoin('categories', 'categories.id', '=', 'products.category_id')
                ->where('categories.slug', '=', 'bathroom')
                ->with(['latestImage', 'translations'])->paginate(6),
            'partners' => Staff::with('latestImage')->get(),
            "sliders" => $sliders->get(), "page" => $page, "seo" => [
                "title" => $page->meta_title,
                "description" => $page->meta_description,
                "keywords" => $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,

                //            "image" => "imgg",
                //            "locale" => App::getLocale()
            ],  'images' => $images
        ])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
}
