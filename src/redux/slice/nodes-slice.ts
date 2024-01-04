import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Node, NodeChange, applyNodeChanges } from "reactflow";

interface NodesState {
  nodeList: Node[];
}

const initialState: NodesState = {
  nodeList: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      type: "mainBlock",
      data: {
        label: "",
        isInnitial: true,
        id: "1",
        position: { x: 0, y: 0 },
      },
    },
  ],
};

export const nodeSlice = createSlice({
  name: "nodesList",
  initialState,
  reducers: {
    addNodeToState: (state, action: PayloadAction<Node>) => {
      state.nodeList.push(action.payload);
    },
    onNodeChange: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodeList = applyNodeChanges(action.payload, state.nodeList);
    },
    clearNodeState: (state) => {
      state.nodeList = initialState.nodeList;
    },
  },
});

export const { addNodeToState, onNodeChange, clearNodeState } =
  nodeSlice.actions;

export const selectCount = (state: RootState) => state.nodesSlice.nodeList;

export default nodeSlice.reducer;
