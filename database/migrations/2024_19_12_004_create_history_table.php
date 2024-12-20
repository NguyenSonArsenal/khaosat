<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // question, da_a, da_b, da_c, da_d, da_d, user_da, result: true/false, user_id, created_at

        Schema::create('history', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('question');
            $table->integer('result')->comment('1:true, 2:false');
            $table->string('da_a');
            $table->string('da_b');
            $table->string('da_c');
            $table->string('da_d');
            $table->string('da');
            $table->string('user_da');
            $table->string('user_id');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('history');
    }
}
