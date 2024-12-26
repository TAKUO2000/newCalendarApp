import { useState } from "react";
import { useDispatch } from "react-redux";
import { destroy } from "../store/modules/schedule";
// import scheduleApi from "../api/schedule";
// import EditSchedule from "./EditSchedule";
import { useForm } from "@inertiajs/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import EditSchedule from "./EditSchedule";

const DisplaySchedule = ({ item, setDateSchedule }) => {
    const dispatch = useDispatch();
    const { delete: destroyaa, processing } = useForm();

    const deleteButtonHandle = () => {
        destroyaa(route("calendar.delete", { id: item.id }), {
            onSuccess: () => {
                dispatch(destroy(item.id));
                setDateSchedule((p) => {
                    const newState = p.filter(
                        (schedule) => schedule.id !== item.id
                    );
                    return newState;
                });
            },
            onError: (errors) => console.log(errors),
        });
    };

    const [editing, setEditing] = useState(false);
    const toggelEditing = () => {
        setEditing((prevEditing) => !prevEditing);
    };

    const { id, ...editEvent } = item;

    for (const key in editEvent) {
        if (editEvent[key] === null) {
            editEvent[key] = "";
        }
    }

    return (
        <>
            {editing ? (
                <div className="my-2 p-2 border-red-400 rounded-lg border-2 border-solid">
                    <div className="mr-1 h-6 w-6 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <AdjustmentsHorizontalIcon onClick={toggelEditing} />
                    </div>
                    <EditSchedule
                        editEvent={editEvent}
                        editId={id}
                        setDateSchedule={setDateSchedule}
                        setEditing={setEditing}
                    />
                </div>
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
                                .replace(" ", "日")}
                            ～
                            {item.end
                                .replace("-", "年")
                                .replace("-", "月")
                                .replace(" ", "日")}
                        </p>
                        <button
                            onClick={deleteButtonHandle}
                            className="bg-gray-200 rounded-full p-1 w-8 h-auto"
                            disabled={processing}
                        >
                            <TrashIcon className="text-red-500" />
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default DisplaySchedule;
