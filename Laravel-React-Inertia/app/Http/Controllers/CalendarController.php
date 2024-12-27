<?php

namespace App\Http\Controllers;

use App\Http\Requests\CalendarRequest;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class CalendarController extends Controller
{
    //
    public function index()
    {
        $allSchedule = Schedule::all();

        return Inertia::render('Calendar', [
            'events' => $allSchedule,
        ]);
    }

    public function store(CalendarRequest $request)
    {
        try {
            $validated = $request->validated();
            $newEvent = Schedule::create($validated);
            return redirect()->route('calendar.get')->with([
                'success' => '新しいイベントが作成されました',
                'newEvent' => $newEvent, // 必要に応じてデータをフラッシュメッセージで渡す
            ]);
        } catch (\Exception $e) {
            Log::error('データ保存エラー: ' . $e->getMessage());
        }
    }

    public function update(CalendarRequest $request, $id)
    {
        $validated = $request->validated();

        $edit = Schedule::find($id);
        $edit->update([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'start' => $validated['start'],
            'end' => $validated['end'],
            'color' => $validated['color'],
        ]);

        return redirect()->route('calendar.get')->with([
            'success' => '予定が更新されました',
<<<<<<< HEAD
            'editEvent' => $edit,
=======
            'newEvent' => $edit,
>>>>>>> origin
        ]);
    }

    public function destroy($id)
    {
        Schedule::find($id)->delete();
        return redirect()->route('calendar.get')->with([
            'success' => '削除が更新されました',
<<<<<<< HEAD
            'deletedEvent' => $id,
=======
            'deletedId' => $id,
        ]);
    }

    public function testpost(CalendarRequest $request)
    {
        $validated = $request->validated();
        $event = Schedule::create($validated);
        return redirect()->route('calendar.get')->with([
            'message' => '追加しました',
            'event' =>  ["newEvent" => $event],
>>>>>>> origin
        ]);
    }
}
