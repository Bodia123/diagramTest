/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch, useAppSelector } from "../../hook/redux-hook";
import css from "./select.module.css";
import { addNodeToState } from "../../redux/slice/nodes-slice";
import { changeCurrentNumber } from "../../redux/slice/select-slice";
import { addEdge } from "../../redux/slice/edge-slice";

interface props {
  currentNode: {
    label: string;
    isInnitial?: boolean;
    id: string;
    position: { x: number; y: number };
    variantList: string[];
  };
}

const SelectEl = ({ currentNode }: props) => {
  const { selectList, currentNumbers } = useAppSelector(
    (state) => state.selectSlice
  );

  const dispatch = useAppDispatch();

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCurrentNumber(e.currentTarget.value));

    const newNode = {
      id: `${Number(currentNode.id) + 1}`,
      position: {
        x: currentNode.position.x + 300,
        y: currentNode.position.y + 200,
      },
      type: "mainBlock",

      data: {
        id: `${Number(currentNode.id) + 1}`,
        label: e.currentTarget.value,
        position: {
          x: currentNode.position.x + 300,
          y: currentNode.position.y + 200,
        },
        variantList:
          currentNumbers.length === 0
            ? [e.currentTarget.value]
            : [...currentNode.variantList, e.currentTarget.value],
      },
    };
    dispatch(addNodeToState(newNode));
    const newEdge = {
      id: `${Date.now()}`,
      source: currentNode.id,
      type: "smoothstep",
      target: newNode.id,
    };
    dispatch(addEdge(newEdge));
  };
  return (
    <select
      name="select"
      id="select"
      className={css.select}
      onChange={(e) => handleClick(e)}>
      <option hidden defaultValue={"Select"}>
        Виберіть значення
      </option>
      {selectList.map((item) => (
        <option
          value={item}
          key={item}
          id={`option-${item}`}
          className={css.option}>
          Варіант{" "}
          {currentNode.variantList && currentNode.variantList.join(" - ")} -{" "}
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectEl;
