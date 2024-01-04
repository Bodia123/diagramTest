import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { Node, OnNodesChange, applyNodeChanges } from "reactflow";

interface SelectState {
  selectList: number[];
  currentNumbers: string[];
}

const initialState: SelectState = {
  selectList: [1, 2, 3, 4, 5, 6],
  currentNumbers: [],
};

export const selectSlice = createSlice({
  name: "selectSlice",
  initialState,
  reducers: {
    changeCurrentNumber: (state, action: PayloadAction<string>) => {
      state.currentNumbers.push(action.payload);
    },
    clearNumberState: (state) => {
      state.currentNumbers = [];
    },
  },
});

export const { changeCurrentNumber, clearNumberState } = selectSlice.actions;

export const selectCount = (state: RootState) => state.selectSlice.selectList;

export default selectSlice.reducer;
