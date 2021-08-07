import React, { useContext } from "react";
import Context from "../../context/Auth";
import { Route, Redirect } from "react-router-dom";

function Dashboard() {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1>
          {logger.loggedIn ? "Welcome to Dashboard" : <Redirect to="/" />}
        </h1>
      </Route>
    </div>
  );
}

export default Dashboard;
