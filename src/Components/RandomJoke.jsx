import React, { Component } from "react";
import axios from "axios";
class RandomJoke extends Component {
  state = { jokes: [] };
  render() {
    const jokes = this.state;
    return (
      <div>
        <div>
          <form className="randomForm" onSubmit={this.handleSubmit}>
            <button className="randombtn">
              Click here to get random Jokes
            </button>
          </form>

          {Object.keys(jokes).map((item, i) => (
            <h3 className="random-result" key={i}>
              {jokes[item].joke}
            </h3>
          ))}
        </div>
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();

    axios.get("http://api.icndb.com/jokes/random").then(res => {
      const jokes = res.data;
      this.setState({ jokes: jokes.value });
    });
  };
}

export default RandomJoke;
