import { useState } from "react";
import { useDispatch } from "react-redux";
// import scheduleApi from "../api/schedule";
import { edit } from "../store/modules/schedule";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
const DisplaySchedule = ({ item, setDateSchedule }) => {
    // console.log(item);
    const [editting, setEditting] = useState(false);

    const toggelEditting = () => {
        setEditting((prevEditting) => !prevEditting);
    };

    const dispatch = useDispatch();
    //追加予定入力欄state
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [startDate, setStartDate] = useState(item.start.substr(0, 10));
    const [startTime, setStartTime] = useState(item.start.substr(11, 5));
    const [endDate, setEndDate] = useState(item.end.substr(0, 10));
    const [endTime, setEndTime] = useState(item.end.substr(11, 5));
    const [color, setColor] = useState(item.backgroundColor);

    const submitEditEvent = async () => {
        const editEvent = {
            id: item.id,
            title,
            description,
            start: startDate + " " + startTime,
            end: endDate + " " + endTime,
            backgroundColor: color,
            borderColor: color,
        };
        //
    };

    return (
        <>
            {editting ? (
                <>
                    <div className="my-2 p-2 border-red-400 rounded-lg border-2 border-solid">
                        <div className="mr-1 h-6 w-6 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                            <AdjustmentsHorizontalIcon
                                onDoubleClick={toggelEditting}
                            />
                        </div>
                        <form>
                            <input
                                className="border-2 border-solid border-gray-400 rounded-lg"
                                placeholder="予定のタイトル"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <br />
                            <input
                                className="border-2 border-solid border-gray-400 rounded-lg"
                                placeholder="詳細"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <br />
                            <h2>日程の期間</h2>
                            <p>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                />
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) =>
                                        setStartTime(e.target.value)
                                    }
                                />
                                ~
                            </p>

                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                            <input
                                type="time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />

                            <input
                                type="button"
                                value="送信する"
                                className="border-2 rounded-lg bg-gray-500 text-white ml-10"
                                onClick={() => submitEditEvent()}
                            />
                        </form>
                    </div>
                </>
            ) : (
                <>
                    <div className="my-2 p-2 border-gray-400 rounded-lg border-2 border-solid">
                        <div className="mr-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                            <AdjustmentsHorizontalIcon
                                onDoubleClick={toggelEditting}
                            />
                        </div>
                        <h2>予定名：{item.title}</h2>
                        <p className="text-sm text-gray-500">
                            詳細：{item.description}
                        </p>
                        <p className="text-sm text-gray-500">
                            期間：
                            {item.start
                                .replace("-", "年")
                                .replace("-", "月")
                                .replace(" ", "日")}
                            ～
                            {item.end
                                .replace("-", "年")
                                .replace("-", "月")
                                .replace(" ", "日")}
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default DisplaySchedule;
