import { createSlice } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
    name: "schedule",
    initialState: [],
    reducers: {
        firstAdd(state, { payload }) {
            return payload; //Scriptmodeで2回実行されるので余分なScheduleStateの要素を減らす目的で追加
        },
        add(state, { payload }) {
            // payloadが配列であるかどうかを確認し、個々の要素を追加する
            if (Array.isArray(payload)) {
                state.push(...payload);
            } else {
                state.push(payload);
            }
        },
        destroy(state, { payload }) {
            return state.filter((d) => d.id !== payload); // filterメソッドのタイポ修正
        },
        edit(state, { payload }) {
            const index = state.findIndex((d) => d.id === payload.id); // 特定の要素を見つけるためのインデックスを取得
            if (index >= 0) {
                state[index] = payload; // 該当の要素を新しい内容で置き換える
            }
        },
    },
});

const { firstAdd, add, destroy, edit } = scheduleSlice.actions;

export { firstAdd, add, destroy, edit }; // destroyとeditをエクスポート
export default scheduleSlice.reducer;
