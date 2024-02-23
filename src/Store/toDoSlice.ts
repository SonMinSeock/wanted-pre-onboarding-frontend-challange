import { createSlice } from "@reduxjs/toolkit";

const initialToDoState: { toDoList: string[] } = { toDoList: [] };

const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialToDoState,
  reducers: {
    add(state, action) {
      state.toDoList.push(action.payload);
    },
    remove(state, action) {
      state.toDoList.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = toDoSlice.actions;

export default toDoSlice.reducer;
