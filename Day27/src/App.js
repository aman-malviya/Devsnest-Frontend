import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import ToDoItem from "./components/ToDoItem";

import "./styles.css";

export default function App() {
  const todos = useSelector((state) => state.todo);
  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <AddTodo />
      {todos.map((item, index) => (
        <ToDoItem key={index} item={item} itemId={index} />
      ))}
    </div>
  );
}
