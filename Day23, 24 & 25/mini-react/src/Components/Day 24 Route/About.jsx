import React, { useContext } from "react";
import Context from "../../context/Auth";

function About() {
  const logger = useContext(Context);
  return (
    <div>
      <h2>
        {logger.loggedIn
          ? "You are loggedIn !! Visit your profile and dashboard"
          : "You are LoggedOut!! please loggIn"}
      </h2>
    </div>
  );
}

export default About;
