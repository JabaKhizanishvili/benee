<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Page;
use App\Models\Slider;
use App\Models\Category;

use Inertia\Inertia;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    //
    public function index(Request $request)
    {
        $page = Page::where('key', 'home')->firstOrFail();
        $portfolio = Portfolio::where("status", 0)->with(['files', 'translations', 'latestImage'])->paginate(4);


        // return Inertia::render('News', ["seo" => [
        //     "title" => $page->meta_title,
        //     "description" => $page->meta_description,
        //     "keywords" => $page->meta_keyword,
        //     "og_title" => $page->meta_og_title,
        //     "og_description" => $page->meta_og_description,
        //     //            "image" => "imgg",
        //     //            "locale" => App::getLocale()
        // ]])->withViewData([
        //     'meta_title' => $page->meta_title,
        //     'meta_description' => $page->meta_description,
        //     'meta_keyword' => $page->meta_keyword,
        //     "image" => $page->file,
        //     'og_title' => $page->meta_og_title,
        //     'og_description' => $page->meta_og_description
        // ]);



        return Inertia::render(
            'Projects',
            [
                // "product" => Product::with('latestImage')->where('category_id', ('7'))->paginate(10),
                "projects" => $portfolio,
                // "product" => Product::with(['latestImage', 'translations'])->where("category_id", 1)->paginate(10),
                "page" => $page,
                "seo" => [
                    "title" => $page->meta_title,
                    "description" => $page->meta_description,
                    "keywords" => $page->meta_keyword,
                    "og_title" => $page->meta_og_title,
                    "og_description" => $page->meta_og_description,
                    //            "image" => "imgg",
                    //            "locale" => App::getLocale()
                ],
            ]
        )->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function search(Request $request, $locale, $slug, $index, Slider $sliders)
    {
        // dd($slug);
        $categorysearch = Category::with('translations')->get();
        $categoryid = $categorysearch->where('name', $slug);
        // dd($categoryid[0]->id);

        $searchedProducts = Portfolio::with(['files', 'latestImage', 'translation'])->where('category_id', $categoryid[0]->id)->get();
        // dd($searchedProducts);
        $portfolio = Portfolio::where("status", 0)->with(['files', 'translations', 'latestImage'])->paginate(6);
        $page = Page::where('key', 'home')->firstOrFail();
        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }


        return Inertia::render('Home', [
            "searched" => $searchedProducts,
            "portfolio" => $portfolio,
            "category" => Category::with('translations')->get(),
            'active' => $slug,
            "indexx" => $index,
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
