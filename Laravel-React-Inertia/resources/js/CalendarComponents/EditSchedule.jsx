import { useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { edit } from "../store/modules/schedule";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const EditSchedule = ({ editEvent, setDateSchedule, editId, setEditting }) => {
    const dispatch = useDispatch();
    const { data, setData, put, isDirty, processing } = useForm({
        ...editEvent,
    });
    console.log(isDirty);
    console.log(data);

    const submitEditEvent = (e) => {
        if (isDirty) {
            const newEvent = {
                title: data.title,
                description: data.description,
                start: data.startDate + " " + data.startTime,
                end: data.endDate + " " + data.endTime,
                color: data.color,
                create_user_id: 1,
                group_id: 1,
            };
            e.preventDefault();
            put(route("calendar.put", { id: editId, newEvent }), {
                onSuccess: (result) => {
                    const successedEvent = result.props.events[editId - 1];
                    dispatch(edit(successedEvent));
                    setDateSchedule((prevState) =>
                        prevState.map((e) =>
                            e.id === successedEvent.id ? successedEvent : e
                        )
                    );
                    setEditting(false);
                },
                onError: (errors) => {
                    console.error("エラー:", errors); // エラーログを確認
                },
            });
        } else {
            console.log("変更なし");
        }
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={submitEditEvent}>
                <h1>予定を編集 </h1>
                <input
                    className="border-2 border-solid border-gray-400 rounded-lg w-full"
                    placeholder="予定のタイトル"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <br />
                <textarea
                    className="border-2 border-solid border-gray-400 rounded-lg w-full"
                    placeholder="詳細"
                    type="text"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                <br />
                <h2>日程の期間</h2>
                <div className="my-2">
                    <input
                        type="datetime-local"
                        value={data.start}
                        onChange={(e) => setData("start", e.target.value)}
                    />
                    <ChevronDownIcon className="h-8 m-auto" />
                    <input
                        type="datetime-local"
                        value={data.end}
                        onChange={(e) => setData("end", e.target.value)}
                    />
                </div>
                <input
                    type="color"
                    value={data.color}
                    onChange={(e) => setData("color", e.target.value)}
                />
                <button type="submit" disabled={processing} className="ml-5">
                    編集確定
                </button>
            </form>
        </div>
    );
};

export default EditSchedule;
