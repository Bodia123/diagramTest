import { useMemo } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { useAppDispatch, useAppSelector } from "../hook/redux-hook.js";
import MainBlock from "../components/mainBlock/MainBlock.js";
import { clearNodeState, onNodeChange } from "../redux/slice/nodes-slice.js";
import { clearState, onEdgeChange } from "../redux/slice/edge-slice.js";
import { clearNumberState } from "../redux/slice/select-slice.js";

function App() {
  const dispatch = useAppDispatch();
  const nodeList = useAppSelector((state) => state.nodesSlice.nodeList);
  const edgeList = useAppSelector((state) => state.edgeSlice.edgeList);

  const nodeTypes = useMemo(() => ({ mainBlock: MainBlock }), []);

  const clearStore = () => {
    dispatch(clearState());
    dispatch(clearNodeState());
    dispatch(clearNumberState());
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodeList}
        edges={edgeList}
        nodeTypes={nodeTypes}
        onNodesChange={(e) => dispatch(onNodeChange(e))}
        onEdgesChange={(e) => dispatch(onEdgeChange(e))}
        fitView>
        <Background color="#ccc" />
        <MiniMap zoomable pannable />
        <Controls>
          <button onClick={clearStore}>R</button>
        </Controls>
      </ReactFlow>
    </div>
  );
}

export default App;
