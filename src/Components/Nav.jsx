import React from "react";
import { Link } from "@reach/router";
const Nav = () => {
  return (
    <div>
      <Link to="/">
        <button className="homebtn">Home</button>
      </Link>
    </div>
  );
};

export default Nav;
