<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

use function Illuminate\Log\log;

class CalendarController extends Controller
{
    //
    public function index()
    {
        $allSchedule = Schedule::all();

        return Inertia::render('Calendar', [
            'events'=>$allSchedule,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'create_user_id' => 'required|integer',
                'group_id' => 'required|integer',
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'start' => 'required|date',
                'end' => 'required|date|after_or_equal:start',
                'color' => 'required|string',
            ]);
            Schedule::create($validated);

        } catch (\Exception $e) {
            Log::error('データ保存エラー: ' . $e->getMessage());
        }
        
    }
}
