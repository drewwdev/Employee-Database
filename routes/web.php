<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/employees/list', [EmployeesController::class, 'getEmployeesList'])->name('employee.list');

Route::post('/get/individual/employee/details', [EmployeesController::class, 'getEmployeeDetails'])->name('employee.details');
