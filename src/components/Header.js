import React from "react";
import "../styles/Header.css";

const Header = props => (
  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="/">{props.children}</a>
    <div className="collapse navbar-collapse">
      <div className="text score" id="wins">
        Score: {props.score}
      </div>
      <div className="text score" id="loss">
        Top Score: {props.topScore}
      </div>
    </div>
  </nav>
);

export default Header;
