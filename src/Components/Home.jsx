import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div>
      <div className="showcase"></div>
      <h1>Chuck Jokes</h1>
      <div className="homePara">
        <p className="line1">Welcome to the world of Chuck Norris jokes. </p>
        <p className="line2">
          If you want Chuck to Make you laugh you have 2 options.
        </p>
        <p className="line3">
          1) Click the Get Jokes button to go to a new page with a random Joke
          after each click.
        </p>
        <p className="line4">
          2)Click the Search Joke button for a more personalised Joke.
        </p>
        <h4> PS.Make sure you laugh Chuck will always be watching you.</h4>
      </div>
      <div className="homePage">
        <Link to="/random">
          <button className="btn">Get Jokes</button>{" "}
        </Link>
        <Link to="/search">
          <button className="btn">Search Jokes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
