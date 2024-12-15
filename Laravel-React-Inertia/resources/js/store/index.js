import { configureStore } from "@reduxjs/toolkit";
import ScheduleReducer from "./modules/schedule";

export default configureStore({
    reducer: {
        schedule: ScheduleReducer,
    },
});
