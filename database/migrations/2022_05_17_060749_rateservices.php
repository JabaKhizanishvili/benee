<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Rateservices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('rateservices', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            // $table->date('created_at');
            $table->tinyInteger('answer_1');
            $table->string('answer_2');
            $table->string('answer_3');
            $table->string('answer_4');
            $table->string('answer_5');
            $table->tinyInteger('answer_6');
            $table->tinyInteger('answer_7');
            $table->tinyInteger('answer_8');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('rateservices');
    }
}
