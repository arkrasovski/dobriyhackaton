import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picture: [] };
    this.handleReload = this.handleReload.bind(this); //это вообще лишнее , так влад сказал
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.picture({ date: "" });
    this.setState({ picture: response }); //--------------------------------------
  }

  render() {
    return (
      <div class="exhibition-wrapper">
        {this.state.picture.map((picture) => (
          <div class="picture">
            <img class="picture-image" src={picture.picture}></img>
            <div class="picture-info">
              <span class="picture-title">{picture.title}</span>
              <span class="info">
                <span class="bold">Author:</span> {picture.author}
              </span>
              <span class="info">
                <span class="bold">Year:</span> {picture.year}
              </span>
              <span class="info">
                <span class="bold">Description:</span> {picture.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Picture;
