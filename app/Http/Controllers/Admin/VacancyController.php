<?php

/**
 *  app/Http/Controllers/Admin/ProductController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CustomerRequest;
use App\Http\Requests\Admin\ProductRequest;
use App\Http\Requests\Admin\VacancyRequest;
use App\Models\Category;
use App\Models\Customer;
use App\Models\File;
use App\Models\Product;
use App\Models\Skill;
use App\Models\Vacancy;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\Eloquent\CustomerRepository;
use App\Repositories\Eloquent\VacancyRepository;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use ReflectionException;
use Illuminate\Support\Facades\Hash;

class VacancyController extends Controller
{
    /**
     * @var ProductRepositoryInterface
     */
    private $vacancyRepository;




    public function __construct(
        VacancyRepository $vacancyRepository
    ) {
        $this->vacancyRepository = $vacancyRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(ProductRequest $request)
    {
        /*return view('admin.pages.product.index', [
            'products' => $this->productRepository->getData($request, ['translations', 'categories'])
        ]);*/

        return view('admin.nowa.views.vacancy.index', [
            'data' => $this->vacancyRepository->getData($request),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $vacancy = $this->vacancyRepository->model;
        $url = locale_route('vacancy.store', [], false);
        $method = 'POST';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.vacancy.form', [
            'vacancy' => $vacancy,
            'url' => $url,
            'method' => $method,
            'skills' => Skill::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(VacancyRequest $request)
    {

        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];
        $saveData['position'] = isset($saveData['position']) && (bool)$saveData['position'];




        //dd($saveData);
        $vacancy = $this->vacancyRepository->create($saveData);

        $vacancy->skills()->sync($saveData['skills'] ?? []);

        // Save Files
        if ($request->hasFile('images')) {
            $vacancy = $this->vacancyRepository->saveFiles($vacancy->id, $request);
        }

        if ($request->hasFile('files')) {
            $vacancy = $this->vacancyRepository->saveFilesDocs($vacancy->id, $request);
        }

        return redirect(locale_route('vacancy.index', $vacancy->id))->with('success', __('admin.create_successfully'));
    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Product $product
     *
     * @return Application|Factory|View
     */
    public function show(string $locale, Customer $product)
    {
        return view('admin.pages.product.show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Category $category
     *
     * @return Application|Factory|View
     */
    public function edit(string $locale, Vacancy $vacancy)
    {
        $url = locale_route('vacancy.update', $vacancy->id, false);
        $method = 'PUT';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.vacancy.form', [
            'vacancy' => $vacancy,
            'url' => $url,
            'method' => $method,
            'skills' => Skill::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(VacancyRequest $request, string $locale, Vacancy $vacancy)
    {
        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $saveData['password'] = Hash::make($request->password);
        //dd($saveData);

        $this->vacancyRepository->update($vacancy->id, $saveData);

        $this->vacancyRepository->saveFiles($vacancy->id, $request);

        $vacancy->skills()->sync($saveData['skills'] ?? []);

        if ($request->hasFile('files')) {
            $vacancy = $this->vacancyRepository->saveFilesDocs($vacancy->id, $request);
        }




        return redirect(locale_route('vacancy.index', $vacancy->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, Vacancy $vacancy)
    {
        if (!$this->vacancyRepository->delete($vacancy->id)) {
            return redirect(locale_route('customer.index', $vacancy->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('vacancy.index'))->with('success', __('admin.delete_message'));
    }

    public function docDelete($locale, $id)
    {
        $file = File::query()->where('id', $id)->firstOrFail();
        $id = $file->fileable_id;
        //dd($file);
        if (Storage::exists('public/Vacancy/' . $file->fileable_id . '/files/' . $file->title)) {
            Storage::delete('public/Vacancy/' . $file->fileable_id . '/files/' . $file->title);
        }

        $file->delete();
        return redirect(locale_route('vacancy.edit', $id))->with('success', __('admin.delete_message'));
    }

    public function viewResumes(string $locale, Vacancy $vacancy)
    {
        return view('admin.nowa.views.vacancy.resumes', [
            'vacancy' => $vacancy,
        ]);
    }
}
