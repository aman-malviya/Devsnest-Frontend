import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Context from "../../context/Auth";

function Profile() {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1>
          {logger.loggedIn ? "Welcome to Your Profile" : <Redirect to="/" />}
        </h1>
      </Route>
    </div>
  );
}

export default Profile;
