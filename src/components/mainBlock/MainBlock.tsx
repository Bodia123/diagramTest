/* eslint-disable @typescript-eslint/no-explicit-any */
import { Handle, Position } from "reactflow";
import css from "./initital.module.css";
import SelectEl from "../selectComponent/SelectEl";
type props = {
  data: {
    label: string;
    isInnitial?: boolean;
    id: string;
    position: { x: number; y: number };
    variantList: string[];
  };
  isConnectable: any;
};
function MainBlock({ data, isConnectable }: props) {
  return (
    <>
      {!data.isInnitial && (
        <Handle
          type="target"
          position={Position.Top}
          id="b"
          style={{ backgroundColor: "grey" }}
          isConnectable={isConnectable}
        />
      )}
      <div className={css.mainBox}>
        <div className={css.container} />
        <SelectEl currentNode={data} />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ backgroundColor: "grey" }}
        isConnectable={isConnectable}
      />
    </>
  );
}
export default MainBlock;
