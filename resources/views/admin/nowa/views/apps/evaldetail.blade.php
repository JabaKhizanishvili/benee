{{-- @php
    print_r($data)
@endphp --}}

@extends('admin.nowa.views.layouts.app')

@section('styles')


@endsection

@section('content')


   <div class="container-fluid">

    <div class="row d=flex justify-content-center">
        <div class="col-md-8">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table mg-b-0 text-md-nowrap">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Company Name</th>
                                <td>{{$data->company_name}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and 5 represents "Extremely Satisfied," how would you rate your level of overall satisfaction with Maritime Lloyd as a service supplier?
                                </th>
                                <td>{{$data->answer_1}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Why do you say that? What specifically are you satisfied or dissatisfied with Maritime Lloyd?
                                </th>
                                <td>{{$data->answer_2}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    How likely are you to recommend Maritime Lloyd to your business partners/other ship owners? Would you say the chances are …                                </th>
                                <td>{{$data->answer_3}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    How likely are you to repurchase services from Maritime Lloyd? Would you say the chances are …
                                <td>{{$data->answer_4}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    How would you rate the overall quality of your relationship with Maritime Lloyd, considering all of your experiences with them? Would you say it is
                                <td>{{$data->answer_5}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and 5 represents "Extremely Satisfied," how would you rate your level of satisfaction with Maritime Lloyd in regards to customer service?
                                    <td>{{$data->answer_6}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and 5 represents "Extremely Satisfied," how would you rate your level of satisfaction with Maritime Lloyd in regards to price?
                                    <td>{{$data->answer_7}}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and 5 represents "Extremely Satisfied," how would you rate your level of satisfaction with Maritime Lloyd in regards to value?
                                    <td>{{$data->answer_8}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>



    </div>



   </div>


@endsection

@section('scripts')



@endsection
