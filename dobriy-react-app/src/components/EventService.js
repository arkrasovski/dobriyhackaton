import React from "react";
import * as Api from "typescript-fetch-api";
import moment from "moment";
import { withRouter } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
const api = new Api.DefaultApi();

class EventService extends React.Component {
  constructor(props) {
    super(props);
    this.activeDay = "M";
    const id = this.props.match?.params.id || moment().format("YYYY-MM-DD");

    this.state = {
      events: [],
      date: id,
    };


    this.handleReload = this.handleReload.bind(this);
    this.changeDay = this.changeDay.bind(this);
    this.handleReload();
  }
  changeDay(e) {
    if (e.target.innerHTML.toUpperCase() === this.activeDay) {
    } else {
      this.activeDay = e.target.innerHTML.toUpperCase();
      this.changeActive(e.target);
      this.handleReload();
    }
  }

  changeActive(el) {
    let items = Array.from(document.querySelectorAll(".day-content__button"));
    items.forEach((e) => e.classList.remove("day-content__button_active"));
    el.classList.add("day-content__button_active");
  }

  async handleReload(event) {
    const id = this.props.match?.params.id || moment().format("YYYY-MM-DD");
    const response = await api.events({ date: id });
    this.setState({ events: response });
  }

  render() {
    return (
      <div className="wrapper">
        <h2 className="day-content__heading">Choose the day</h2>
        <ul class="day-content__ul">
          <li>
            <Link to="/events/monday">
              <button className="day-content__button day-content__button_active" onClick={this.changeDay}>M</button>
            </Link>
          </li>

          <li>
            <Link to="/events/tuesday">
              <button className="day-content__button" onClick={this.changeDay}>T</button>
            </Link>
          </li>

          <li>
            <Link to="/events/wednesday">
              <button className="day-content__button" onClick={this.changeDay}>W</button>
            </Link>
          </li>
          <li>
            <Link to="/events/thursday">
              <button className="day-content__button" onClick={this.changeDay}>Th</button>
            </Link>
          </li>
          <li>
            <Link to="/events/friday">
              <button className="day-content__button" onClick={this.changeDay}>F</button>
            </Link>
          </li>
          <li>
            <Link to="/events/saturday">
              <button className="day-content__button" onClick={this.changeDay}>Sa</button>
            </Link>
          </li>
          <li>
            <Link to="/events/sunday">
              <button className="day-content__button" onClick={this.changeDay}>Su</button>
            </Link>
          </li>
        </ul>
        <div className="card-wrapper">
          {this.state.events.map((event, index) => (
            < div className="item" >
              <img src={`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${(Number(event.imageId) >= 10) ? event.imageId : "0" + event.imageId}.jpg`} className="item__img"></img>
              <div className="item__wrapper">
                <div className="item__row">
                  <b>Title: </b><p>{event.name}</p>
                </div>
                <div className="item__row">
                  <b>Cost: </b><p>{event.price}rub</p>
                </div>
                <div className="item__row">
                  <b>Location: </b><p>{event.street}</p>
                </div>
                <button className="item__button"><Link to="/exhibition" className="item__a"></Link>Watch</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(EventService);
