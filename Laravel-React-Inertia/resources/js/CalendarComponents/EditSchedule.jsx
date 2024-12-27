import { useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { edit } from "../store/modules/schedule";
<<<<<<< HEAD
import { useState } from "react";

const EditSchedule = ({ editEvent, setDateSchedule, editId, setEditing }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        start: "",
        end: "",
        color: "",
    });
    const { data, setData, put, isDirty, processing } = useForm({
        ...editEvent,
    });
    const submitEditEvent = (e) => {
        e.preventDefault();
=======
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const EditSchedule = ({ editEvent, setDateSchedule, editId, setEditting }) => {
    const dispatch = useDispatch();
    const { data, setData, put, isDirty, processing } = useForm({
        ...editEvent,
    });
    console.log(isDirty);
    console.log(data);

    const submitEditEvent = (e) => {
>>>>>>> origin
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
<<<<<<< HEAD
            put(route("calendar.put", { id: editId, newEvent }), {
                onSuccess: (result) => {
                    const successedEvent = result.props.flash.newEvent;
=======
            e.preventDefault();
            put(route("calendar.put", { id: editId, newEvent }), {
                onSuccess: (result) => {
                    const successedEvent = result.props.events[editId - 1];
>>>>>>> origin
                    dispatch(edit(successedEvent));
                    setDateSchedule((prevState) =>
                        prevState.map((e) =>
                            e.id === successedEvent.id ? successedEvent : e
                        )
                    );
<<<<<<< HEAD
                    setEditing(false);
                },
                onError: (errors) => {
                    setErrors((e) => ({ ...e, ...errors }));
                },
            });
        } else {
            setEditing(false);
            return;
=======
                    setEditting(false);
                },
                onError: (errors) => {
                    console.error("エラー:", errors); // エラーログを確認
                },
            });
        } else {
            console.log("変更なし");
>>>>>>> origin
        }
    };

    return (
<<<<<<< HEAD
        <div>
            <h1>予定を編集中... </h1>
            <form onSubmit={submitEditEvent}>
                <input
                    className="border-2 border-solid border-gray-400 rounded-lg"
                    placeholder="タイトル"
=======
        <div className="flex justify-center">
            <form onSubmit={submitEditEvent}>
                <h1>予定を編集 </h1>
                <input
                    className="border-2 border-solid border-gray-400 rounded-lg w-full"
                    placeholder="予定のタイトル"
>>>>>>> origin
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <br />
<<<<<<< HEAD

                <input
                    className="border-2 border-solid border-gray-400 rounded-lg "
=======
                <textarea
                    className="border-2 border-solid border-gray-400 rounded-lg w-full"
>>>>>>> origin
                    placeholder="詳細"
                    type="text"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
<<<<<<< HEAD

                <br />
                <h2>日程の期間</h2>
                <p>
=======
                <br />
                <h2>日程の期間</h2>
                <div className="my-2">
>>>>>>> origin
                    <input
                        type="datetime-local"
                        value={data.start}
                        onChange={(e) => setData("start", e.target.value)}
                    />
<<<<<<< HEAD
                    ~
                </p>

                <input
                    type="datetime-local"
                    value={data.end}
                    onChange={(e) => setData("end", e.target.value)}
                />

=======
                    <ChevronDownIcon className="h-8 m-auto" />
                    <input
                        type="datetime-local"
                        value={data.end}
                        onChange={(e) => setData("end", e.target.value)}
                    />
                </div>
>>>>>>> origin
                <input
                    type="color"
                    value={data.color}
                    onChange={(e) => setData("color", e.target.value)}
                />
<<<<<<< HEAD
                <p className="text-red-400">{errors.title}</p>
                <p className="text-red-400">{errors.description}</p>
                <p className="text-red-400">{errors.strat}</p>
                <p className="text-red-400">{errors.end}</p>
                <button type="submit" disabled={processing}>
=======
                <button type="submit" disabled={processing} className="ml-5">
>>>>>>> origin
                    編集確定
                </button>
            </form>
        </div>
    );
};

export default EditSchedule;
