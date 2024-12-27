<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CalendarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
<<<<<<< HEAD
        return [        
                'create_user_id' => 'required|integer',
                'group_id' => 'required|integer',
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'start' => 'required|date',
                'end' => 'required|date|after_or_equal:start',
                'color' => 'required|string',
=======
        return [
            'create_user_id' => 'required|integer',
            'group_id' => 'required|integer',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start' => 'required|date',
            'end' => 'required|date|after_or_equal:start',
            'color' => 'required|string|regex:/^#([a-fA-F0-9]{6})$/',
        ];
    }

    public function messages(): array
    {
        return [
            'title.string' => 'タイトルは文字列である必要があります。',
            'start.required' => '開始日は必須です。',
            'start.before_or_equal' => '開始日は終了日以前でなければなりません。',
            'end.after_or_equal' => '終了日は開始日以後でなければなりません。',
            'color.regex' => 'カラーコードは#付きの16進数形式で入力してください。',
            'create_user_id.exists' => '指定されたユーザーIDが存在しません。',
            'group_id.exists' => '指定されたグループIDが存在しません。',
>>>>>>> origin
        ];
    }
}
