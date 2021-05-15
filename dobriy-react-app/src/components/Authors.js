import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authors: [] };

    this.handleReload = this.handleReload.bind(this); //это вообще лишнее , так влад сказал
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.authors({ date: "" });
    this.setState({ authors: response }); //--------------------------------------
  }

  render() {
    return (
      <div class="authors-wrapper">
        <div class="authors-title">Authors</div>
        {this.state.authors.map((author) => (
          <div class="authors-author">
            <img src={author.portrait} class="authors-image"></img>
            <div class="authors-description">
              <div class="authors-name">{author.name}</div>
              <div class="authors-country">{author.country}</div>
              <div class="authors-famous">
                The most famous picture: <span class="authors-famous-name">"{author.famous}"</span>
              </div>
              <div class="authors-bio">
                <span class="authors-bio-about">About author:</span>
                <br></br>
                {author.bio}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Authors;
