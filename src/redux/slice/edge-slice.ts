import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Edge, EdgeChange, applyEdgeChanges } from "reactflow";
// Define a type for the slice state

interface edgeState {
  edgeList: Edge[];
}

// Define the initial state using that type
const initialState: edgeState = {
  edgeList: [],
};

export const edgeSlice = createSlice({
  name: "edgeSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addEdge: (state, action: PayloadAction<Edge>) => {
      state.edgeList.push(action.payload);
    },
    onEdgeChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edgeList = applyEdgeChanges(action.payload, state.edgeList);
    },
    clearState: (state) => {
      state.edgeList = [];
    },
  },
});

export const { addEdge, onEdgeChange, clearState } = edgeSlice.actions;

export const selectCount = (state: RootState) => state.edgeSlice.edgeList;

export default edgeSlice.reducer;
