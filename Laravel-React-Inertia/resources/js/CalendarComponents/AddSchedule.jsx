import { useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { add } from "../store/modules/schedule";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const AddSchedule = ({ selectedDate, setDateSchedule }) => {
    const dispatch = useDispatch();
    const { data, setData, post, reset, processing } = useForm({
        title: "",
        description: "",
        start: selectedDate + " 00:00",
        end: selectedDate + " 23:59",
        color: "#00c8ff",
        create_user_id: 1,
        group_id: 1,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("calendartest.post", data), {
            onSuccess: (r) => {
                const response = r.props.flash;
                const responseNewEvent = response.event.newEvent;
                const responseMessage = response.message;
                console.log({ responseNewEvent });

                if (
                    responseNewEvent.start.substring(0, 10) <= selectedDate &&
                    responseNewEvent.end.substring(0, 10) >= selectedDate
                ) {
                    console.log(responseNewEvent.start.substring(0, 10));
                    setDateSchedule((e) => [...e, responseNewEvent]);
                }
            },
        });
    };

    return (
        <div className="mt-2 flex justify-center">
            <form onSubmit={submit}>
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
                <div className="flex mt-2">
                    <input
                        type="color"
                        value={data.color}
                        onChange={(e) => setData("color", e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={processing}
                        className="m-auto bg-gray-400"
                    >
                        送信
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSchedule;
