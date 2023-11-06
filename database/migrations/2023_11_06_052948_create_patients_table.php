<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('serial_number')->unique();
            $table->date('registration_date');
            $table->string('name')->index();
            $table->enum('sex', ['Male', 'Female', 'Other']);
            $table->integer('age');
            $table->string('address', 40);
            $table->date('treatment_start_date');
            $table->enum('township', ['AMP', 'AMT', 'CAT', 'CMT', 'PTG', 'PGT', 'MHA']);
            $table->boolean('vot');
            $table->string('username');
            $table->string('password', 4);
            $table->boolean('vot_status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
