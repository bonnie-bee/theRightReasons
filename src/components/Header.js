import React from "react";
import "../styles/Header.css";

const Header = props => (
  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="/">{props.children}</a>
    <div className="collapse navbar-collapse">
      <div className="text score" id="wins">
        Score: 0
      </div>
      <div className="text score" id="loss">
        Top Score: 0
      </div>
    </div>
  </nav>
);

export default Header;
