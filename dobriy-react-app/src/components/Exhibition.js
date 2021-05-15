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
              <h3>Title: {picture.title}</h3>
              <h3>Author: {picture.author}</h3>
              <h3>Year: {picture.year}</h3>
              <h3>Description: {picture.description}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Picture;
