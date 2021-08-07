import React, { useState } from "react";

const Context = React.createContext();

export default Context;

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export function Auth({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const logger = {
    loggedIn: loggedIn,
    loading: loading,
    toggleLogin: () => {
      setLoading(true);
      wait(1000).then(() => {
        setLoading(false);
        setLoggedIn(!loggedIn);
      });
    },
  };

  return <Context.Provider value={logger}>{children}</Context.Provider>;
}
