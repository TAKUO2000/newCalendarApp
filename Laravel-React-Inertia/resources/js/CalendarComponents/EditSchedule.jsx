import { useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { edit } from "../store/modules/schedule";
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
            put(route("calendar.put", { id: editId, newEvent }), {
                onSuccess: (result) => {
                    const successedEvent = result.props.flash.newEvent;
                    dispatch(edit(successedEvent));
                    setDateSchedule((prevState) =>
                        prevState.map((e) =>
                            e.id === successedEvent.id ? successedEvent : e
                        )
                    );
                    setEditing(false);
                },
                onError: (errors) => {
                    setErrors((e) => ({ ...e, ...errors }));
                },
            });
        } else {
            setEditing(false);
            return;
        }
    };

    return (
        <div>
            <h1>予定を編集中... </h1>
            <form onSubmit={submitEditEvent}>
                <input
                    className="border-2 border-solid border-gray-400 rounded-lg"
                    placeholder="タイトル"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <br />

                <input
                    className="border-2 border-solid border-gray-400 rounded-lg "
                    placeholder="詳細"
                    type="text"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />

                <br />
                <h2>日程の期間</h2>
                <p>
                    <input
                        type="datetime-local"
                        value={data.start}
                        onChange={(e) => setData("start", e.target.value)}
                    />
                    ~
                </p>

                <input
                    type="datetime-local"
                    value={data.end}
                    onChange={(e) => setData("end", e.target.value)}
                />

                <input
                    type="color"
                    value={data.color}
                    onChange={(e) => setData("color", e.target.value)}
                />
                <p className="text-red-400">{errors.title}</p>
                <p className="text-red-400">{errors.description}</p>
                <p className="text-red-400">{errors.strat}</p>
                <p className="text-red-400">{errors.end}</p>
                <button type="submit" disabled={processing}>
                    編集確定
                </button>
            </form>
        </div>
    );
};

export default EditSchedule;
