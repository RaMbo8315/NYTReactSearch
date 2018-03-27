import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Jumbotron = ({ children }) => (
	<div style={{ clear: "both" }} className="jumbotron text-white bg-dark">
	  {children}
	</div>
  );

export default Jumbotron;