import "./App.css";
import React from "react";
import Event from "./components/EventService";
import Authors from "./components/Authors";
import search from "./images/Search.svg";
import Picture from "./components/Exhibition";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";
import EventService from "./components/EventService";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="leftbar">
            <span className="leftbar__span"><Link to="/exhibition">Dobriy museum</Link></span>
            <ul>

              <li>
                <Link to="/events">Events</Link>
              </li>

              <li>
                <Link to="/authors">Authors</Link>
              </li>

            </ul>
          </div>
          <div className="rightbar">
            <input type="text"></input>
            <img className="lupa" src={search}></img>
          </div>
        </header >

        <section>
          <Switch>
            <Route path="/events">
              <EventService />
            </Route>
            <Route path="/authors">
              <Authors />
            </Route>
            <Route path="/exhibition">
              <Picture />
            </Route>
            <Route path="/">
              <Picture />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </section>
      </div >
    </Router >
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>About us</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}

export default App;
