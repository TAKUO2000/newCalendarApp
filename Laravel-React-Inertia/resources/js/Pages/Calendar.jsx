import Footer from "../CalendarComponents/Footer";
import Header from "../CalendarComponents/Header";
import TopMain from "../CalendarComponents/TopMain";

import { Provider } from "react-redux";
import store from "../store";
import { Head } from "@inertiajs/react";

const Calendar = ({ events }) => {
    const propsEvents = events.filter((e) => e.create_user_id === 1); //user id 1のみプロップスで渡す（serverサイドでのちに変更予定）
    return (
        <>
<<<<<<< HEAD
            <Head>
                <title>CalendarPage</title>
            </Head>
=======
            <Head title="calendarPAGE" />
>>>>>>> origin
            <Provider store={store}>
                <Header />
                <TopMain events={propsEvents} />
                <Footer />
            </Provider>
        </>
    );
};

export default Calendar;
