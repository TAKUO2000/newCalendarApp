import { useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { add } from "../store/modules/schedule";
import { nanoid } from "nanoid";

const AddSchedule = ({ selectedDate, displayStartDate, setDateSchedule }) => {
    const dispatch = useDispatch();
    const { data, setData, post, reset, processing } = useForm({
        title: "",
        description: "",
        startTime: "00:00",
        endTime: "23:59",
        endDate: selectedDate,
        color: "#00c8ff",
    });

    const submitNewEvent = async (e) => {
        const newEvent = {
            title: data.title,
            description: data.description,
            start: selectedDate + " " + data.startTime,
            end: data.endDate + " " + data.endTime,
            color: data.color,
            create_user_id: 1,
            group_id: 1,
        };
        e.preventDefault();
        await post(route("calendar.post", newEvent), {
            onSuccess: () => {
                const keyid = nanoid();
                const newEventWithId = { ...newEvent, id: keyid };
                reset();
                dispatch(add(newEventWithId));
                setDateSchedule((p) => [...p, newEventWithId]);
            },
            onError: (errors) => {
                console.error("エラー:", errors); // エラーログを確認
            },
        });
    };

    return (
        <div className="mt-2">
            <form onSubmit={submitNewEvent}>
                <h2>新しい予定の追加</h2>
                <h3>予定の内容</h3>
                <input
                    className="border-2 border-solid border-gray-400 rounded-lg"
                    placeholder="予定のタイトル"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <br />
                <input
                    className="border-2 border-solid border-gray-400 rounded-lg"
                    placeholder="詳細"
                    type="text"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                <br />
                <h2>日程の期間</h2>
                <p>
                    {displayStartDate}
                    <input
                        type="time"
                        value={data.startTime}
                        onChange={(e) => setData("startTime", e.target.value)}
                    />
                    ~
                </p>

                <input
                    type="date"
                    value={data.endDate}
                    onChange={(e) => setData("endDate", e.target.value)}
                />
                <input
                    type="time"
                    value={data.endTime}
                    onChange={(e) => setData("endTime", e.target.value)}
                />
                <input
                    type="color"
                    value={data.color}
                    onChange={(e) => setData("color", e.target.value)}
                />

                <button type="submit" disabled={processing}>
                    送信
                </button>
            </form>
        </div>
    );
};

export default AddSchedule;
