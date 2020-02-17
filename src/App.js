import React from "react";
import "./App.css";
import RandomJoke from "./Components/RandomJoke";
import SearchJokes from "./Components/SearchJokes";
import Home from "./Components/Home";
import { Router } from "@reach/router";
import Nav from "./Components/Nav";
import EndpointError from "./Components/EndpointError";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Home path="/" />
        <RandomJoke path="/random" />
        <SearchJokes path="/search" />
        <EndpointError default />
      </Router>
    </div>
  );
}

export default App;
