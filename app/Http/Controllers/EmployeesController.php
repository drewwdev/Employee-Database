<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    // Get Employee list from database

    public function getEmployeesList()
    {
        try{
            $employees = Employee::all();
            return response()->json($employees);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    // Get individual Employee details

    public function getEmployeeDetails(Request $request) {

        try{
            $employeeData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }
}
