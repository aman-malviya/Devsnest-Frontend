import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import "../../App.css";
import { Auth } from "../../context/Auth";

export default function Navbar() {
  return (
    <div>
      <Router>
        <div className="content">
          <nav>
            <ul className="navbar">
              <li>
                <Link className="nav" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="nav" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Auth>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about" component={About} />
              {/* <About /> */}

              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Auth>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// import React from "react";

// function Navbar() {
//   return (
//     <div>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Profile</li>
//         <li>Dashboard</li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;
