import React from "react";
import "../styles/Bachelor.css";

const Bachelor = props => (
    <div className="card">
      <span onClick={() => props.clickBachelor(props.id)} className="img-container">
        <img alt={props.name} src={props.image} />
      </span>
    </div>
);

export default Bachelor;
 