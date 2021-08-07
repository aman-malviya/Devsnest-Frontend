import { useDispatch } from "react-redux";
import { delItem } from "../actions";

const ToDoItem = ({ item, itemId }) => {
  const dispatch = useDispatch();
  return !item ? (
    ""
  ) : (
    <div>
      <span>{item} </span>
      <button onClick={() => dispatch(delItem(itemId))}>delete</button>
    </div>
  );
};

export default ToDoItem;
