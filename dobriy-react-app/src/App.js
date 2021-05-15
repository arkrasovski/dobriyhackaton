import "./App.css";
import React from "react";
import Map from "./components/Map";
import search from "./images/Search.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="leftbar">
            <span><Link to="/">Dobriy museum</Link></span>
            <ul>
              
              {/* <li>
                <Link to="/events/monday">Timetable</Link>
              </li> */}
              <li>
                <Link to="/map">Map</Link>
              </li>
              {/* <li>
                <Link to="/recomendations">Recommendations</Link>
              </li> */}
            </ul>
          </div>
          <div className="rightbar">
            <input type="text"></input>
            <img className="lupa" src={search}></img>
          </div>
        </header>

        <section>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/recomendations">
              <LastSeen />
              <Recommendations />
            </Route> */}
            {/* <Route path="/events/:id">
              <WeeeklyFilms />
            </Route> */}

            <Route path="/map">
              <Map />
            </Route>
            <Route path="/">
              {/* <User /> */}
              <Map />
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
