const CalendarTest = ({ events }) => {
    console.log(events);
    return (
        <>
            aaa
            {events.map(
                ({
                    id,
                    create_user_id,
                    group_id,
                    title,
                    discription,
                    start,
                    end,
                }) => (
                    <div key={id}>
                        <p>
                            {id + " " + create_user_id + " " + group_id + " "}
                        </p>
                        <p>{title + " " + discription}</p>
                        <p>
                            {start}~{end}
                        </p>
                    </div>
                )
            )}
        </>
    );
};

export default CalendarTest;
