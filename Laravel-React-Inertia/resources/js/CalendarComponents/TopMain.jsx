import { useCallback, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { firstAdd } from "../store/modules/schedule";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";

import CalenderDialog from "./CalenderDialog";

const TopMain = ({ events }) => {
    const schedule = useSelector((state) => state.schedule);

    const [selectedDate, setSelectedDate] = useState("");

    // 日程ダイアログの表示・非表示
    const [openDate, setOpenDate] = useState(false);
    // 選択した日程の予定を格納
    const [dateSchedule, setDateSchedule] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (schedule.length === 0) {
            dispatch(firstAdd(events));
        }
    }, [dispatch, schedule.length, events]);

    const handleDateClick = useCallback(
        (e) => {
            setSelectedDate(e.dateStr);
            const resultSchedule = schedule.filter((d) => {
                const date = parseInt(
                    e.dateStr.replace("-", "").replace("-", ""),
                    10
                );
                const start = parseInt(
                    d.start.substr(0, 10).replace("-", "").replace("-", ""),
                    10
                );
                const end = parseInt(
                    d.end.substr(0, 10).replace("-", "").replace("-", ""),
                    10
                );
                return start <= date && end >= date;
            });
            setDateSchedule(resultSchedule);
            setOpenDate(true);
        },
        [schedule]
    );
    const formatDate = (date) =>
        date.replace("-", "年").replace("-", "月") + "日";

    return (
        <>
            <CalenderDialog
                dateSchedule={dateSchedule}
                setDateSchedule={setDateSchedule}
                displayStartDate={formatDate(selectedDate)}
                selectedDate={selectedDate}
                setOpenDate={setOpenDate}
                openDate={openDate}
            />

            <div className="lg:flex flex-col font-body text-base">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locales={[jaLocale]}
                    locale="ja"
                    contentHeight="auto"
                    headerToolbar={{
                        left: "prev",
                        center: "title",
                        right: "today,next",
                    }}
                    events={schedule}
                    dateClick={handleDateClick}
                    displayEventTime={false}
                />
            </div>
        </>
    );
};
export default TopMain;
