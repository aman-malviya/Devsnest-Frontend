import { useDispatch, useSelector } from "react-redux";
import { formInput } from "./actions";

import "./styles.css";

export default function App() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="form-container">
        <h1> Form Using React Redux</h1>
        <div className="input-form">
          <h2>Input</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => dispatch(formInput({ name: e.target.value }))}
          />
          <input
            type="mail"
            placeholder="Email"
            onChange={(e) => dispatch(formInput({ email: e.target.value }))}
          />
        </div>
        <div className="data-form">
          <h2>Output</h2>
          <h3>
            Username:<span>{formState.name}</span>
          </h3>
          <h3>
            Email:<span>{formState.email}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
