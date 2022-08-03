<?php

/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite LLC <hello@insite.international>
 */

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\OwnerAppController;
use App\Http\Controllers\Admin\EvaluationController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Client\ServiceController;
use App\Http\Controllers\Admin\IronController1;
use App\Http\Controllers\Client\IronController;
use App\Http\Controllers\Client\PortfolioController;
use App\Http\Controllers\Client\DocumentationController;
use App\Http\Controllers\Client\OurTeamController;
use App\Http\Controllers\Client\LoginPageController;
use App\Http\Controllers\Client\TilesController;




Route::post('ckeditor/image_upload', [CKEditorController::class, 'upload'])->name('upload');

Route::redirect('', config('translatable.fallback_locale'));
Route::prefix('{locale?}')
    ->middleware(['setlocale'])
    ->group(function () {
        Route::prefix('adminpanel')->group(function () {
            Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
            Route::post('login', [LoginController::class, 'login'])->name('login');


            Route::middleware('auth')->group(function () {
                Route::get('logout', [LoginController::class, 'logout'])->name('logout');

                Route::redirect('', 'adminpanel/page');

                //news
                Route::resource('news', NewsController::class);
                Route::get('news/{news}/destroy', [NewsController::class, 'destroy'])->name('news.destroy');

                // Language
                Route::resource('language', LanguageController::class);
                Route::get('language/{language}/destroy', [LanguageController::class, 'destroy'])->name('language.destroy');

                // Translation
                Route::resource('translation', TranslationController::class);

                // Category
                Route::resource('category', \App\Http\Controllers\Admin\CategoryController::class);
                Route::get('category/{category}/destroy', [\App\Http\Controllers\Admin\CategoryController::class, 'signleproject'])->name('category.destroy');

                // brands
                Route::resource('brand', \App\Http\Controllers\Admin\BrandController::class);
                Route::get('brand/{brand}/destroy', [\App\Http\Controllers\Admin\BrandController::class, 'destroy'])->name('brand.destroy');
                //

                Route::resource('staff', \App\Http\Controllers\Admin\StaffController::class);
                Route::get('staff/{staff}/destroy', [\App\Http\Controllers\Admin\StaffController::class, 'destroy'])->name('staff.destroy');

                //portfolio

                Route::resource('portfolio', \App\Http\Controllers\Admin\PortfolioController::class);
                Route::get('portfolio/{portfolio}/destroy', [\App\Http\Controllers\Admin\PortfolioController::class, 'destroy'])->name('portfolio.destroy');

                //team
                Route::resource('team', \App\Http\Controllers\Admin\TeamController::class);
                Route::get('team/{team}/destroy', [\App\Http\Controllers\Admin\TeamController::class, 'destroy'])->name('team.destroy');

                //iron sizes
                Route::resource('iron', \App\Http\Controllers\Admin\IronController1::class);
                Route::post('create_iron', [IronController1::class, 'create'])->name("admin.irons.create");
                Route::get('destroy/{id}', [IronController1::class, 'destroy'])->name("admin.irons.del");
                Route::post('update', [IronController1::class, 'update'])->name("admin.irons.update");
                Route::get('search', [IronController1::class, 'search'])->name("admin.irons.search");

                // Product
                Route::resource('product', \App\Http\Controllers\Admin\ProductController::class);
                Route::get('product/{product}/destroy', [\App\Http\Controllers\Admin\ProductController::class, 'destroy'])->name('product.destroy');

                // Slider
                Route::resource('slider', SliderController::class);
                Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');

                // Page
                Route::resource('page', PageController::class);
                Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');
                Route::get('page/doc/{doc}/destroy', [PageController::class, 'docDelete'])->name('page.delete-doc');


                Route::get('setting/active', [SettingController::class, 'setActive'])->name('setting.active');
                // Setting
                Route::resource('setting', SettingController::class);
                Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');

                Route::resource('customer', \App\Http\Controllers\Admin\CustomerController::class);
                Route::get('customer/{customer}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroy'])->name('customer.destroy');
                Route::get('customer/doc/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'docDelete'])->name('customer.delete-doc');
                Route::get('customer/subclass/{customer}/create', [\App\Http\Controllers\Admin\CustomerController::class, 'createSubClass'])->name('subclass.create');
                Route::post('customer/subclass/{customer}/store', [\App\Http\Controllers\Admin\CustomerController::class, 'storeSubClass'])->name('subclass.store');
                Route::get('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'editSubClass'])->name('subclass.edit');
                Route::put('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'updateSubClass'])->name('subclass.update');
                Route::get('customer/subclass/{customer}/{subclass}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroySubClass'])->name('subclass.destroy');
                Route::get('customer/subclass/{customer}/{subclass}/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'subclassDocDelete'])->name('subclass.delete-doc');


                // Password
                Route::get('password', [\App\Http\Controllers\Admin\PasswordController::class, 'index'])->name('password.index');
                Route::post('password', [\App\Http\Controllers\Admin\PasswordController::class, 'update'])->name('password.update');

                Route::resource('classification', \App\Http\Controllers\Admin\ClassificationController::class);
                Route::get('classification/{classification}/destroy', [\App\Http\Controllers\Admin\ClassificationController::class, 'destroy'])->name('classification.destroy');
            });
        });
        Route::middleware(['active'])->group(function () {

            // Home Page
            Route::get('', [HomeController::class, 'index'])->name('client.home.index')->withoutMiddleware('active');

            // Contact Page
            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
            // Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');
            // contact us from navbar
            Route::post('/contactus', [ContactController::class, 'ContactMail'])->name('client.contact.contactmail');

            // About Page
            Route::get('aboutus', [LoginPageController::class, 'aboutus'])->name('client.aboutus');
            // partners page
            Route::get('partners', [LoginPageController::class, 'partners'])->name('client.partners.index');


            //news
            Route::get('/news', [\App\Http\Controllers\Client\NewsController::class, 'index'])->name('client.news.index');
            Route::get('/news/{news}', [\App\Http\Controllers\Client\NewsController::class, 'show'])->name('client.news.show');


            //portfolio
            Route::get('/projects', [\App\Http\Controllers\PortfolioController::class, 'index'])->name('client.project.index');
            Route::get('/{search}/{item?}', [\App\Http\Controllers\PortfolioController::class, 'search'])->name('client.project.show');
            Route::get('/projects/{search}/{item?}', [\App\Http\Controllers\PortfolioController::class, 'searchProject'])->name('client.projects.show');


            //search

            // Route::get('search', [TilesController::class, 'search'])->name('client.search.index')->withoutMiddleware('active');
        });
    });
