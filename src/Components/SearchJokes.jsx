import React, { Component } from "react";
import axios from "axios";
class SearchJokes extends Component {
  state = { jokes: [], FirstName: "", LastName: "" };
  handleFirstName = event => {
    this.setState({ FirstName: event.target.value });
  };
  handleLastName = event => {
    this.setState({ LastName: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(
        `http://api.icndb.com/jokes/random?firstName=${
          this.state.FirstName.length === 0 ? "Chuck" : this.state.FirstName
        }&amp&lastName=${
          this.state.LastName.length === 0 ? "Norris" : this.state.LastName
        }`
      )
      .then(res => {
        const jokes = res.data;
        this.setState({ jokes: jokes.value });
      });
  };
  render() {
    const jokes = this.state;
    return (
      <div className="formSearch">
        <div className="opacity">
          <form onSubmit={this.handleSubmit}>
            <h3 className="search-title">
              Enter FirstName and SecondName for a personalised Joke
            </h3>
            <label>
              FirstName:
              <input
                type="text"
                id="first-input"
                value={this.state.FirstName}
                onChange={this.handleFirstName}
              ></input>
            </label>
            <label>
              SecondName:
              <input
                type="text"
                id="second-input"
                value={this.state.LastName}
                onChange={this.handleLastName}
              ></input>
            </label>
            <input type="submit" className="btn"></input>
          </form>

          {Object.keys(jokes).map((item, i) => (
            <h3 key={i} className="line2">
              {jokes[item].joke}
            </h3>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchJokes;
