import { useState } from "react";
import { useDispatch } from "react-redux";
import { edit } from "../store/modules/schedule";
import EditSchedule from "../CalendarComponents/EditSchedule";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import TestPost from "./TestPost";
const DisplaySchedule = ({ item, setDateSchedule }) => {
    const [editing, setEditing] = useState(false);

    const toggelEditing = () => {
        setEditing((prevEditing) => !prevEditing);
    };
    return (
        <>
            {editing ? (
                <>
                    <div className="my-2 p-2 border-red-400 rounded-lg border-2 border-solid">
                        <div className="mr-1 h-6 w-6 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                            <AdjustmentsHorizontalIcon
                                onClick={toggelEditing}
                            />
                        </div>
                        <EditSchedule
                            editEvent={item}
                            setDateSchedule={setDateSchedule}
                            editId={item.id}
                            setEditing={setEditing}
                        />
                    </div>
                    <TestPost />
                </>
            ) : (
                <>
                    <div className="my-2 p-2 border-gray-400 rounded-lg border-2 border-solid">
                        <div className="mr-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                            <AdjustmentsHorizontalIcon
                                onClick={toggelEditing}
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
                                .replace(" ", "日")
                                .replace("T", "日")}
                            ～
                            {item.end
                                .replace("-", "年")
                                .replace("-", "月")
                                .replace(" ", "日")
                                .replace("T", "日")}
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default DisplaySchedule;
