import "./App.css";
import React from "react";
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
        <section>
          <Switch>
            <Route path="/events">
              <EventService />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
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
