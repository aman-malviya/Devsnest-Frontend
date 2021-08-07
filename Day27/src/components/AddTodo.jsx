import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="add your task..."
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button
        onClick={() => {
          setItem("");
          dispatch(addItem(item));
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
