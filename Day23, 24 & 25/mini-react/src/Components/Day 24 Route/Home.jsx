import React, { useContext, useState } from "react";
import Context from "../../context/Auth";

function Home() {
  const logger = useContext(Context);
  const toogleLogin = () => {
    logger.toggleLogin();
    // setlogging(!logging);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Login to access Profile and Dashboard</h2>
      </div>
      {
        logger.loading ? (
          "Loading..."
        ) : (
          <button onClick={logger.toggleLogin} className="btn">
            {logger.loggedIn ? "Logout" : "Login"}
          </button>
        )
        //   logger.loggedIn ? (
        //     <button onClick={logger.logout} className="btn">
        //       Logout
        //     </button>
        //   ) : (
        //     <button onClick={logger.login} className="btn">
        //       Login
        //     </button>
        //   )
      }
    </div>
  );
}

export default Home;
