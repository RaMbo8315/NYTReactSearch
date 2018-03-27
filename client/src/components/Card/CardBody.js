import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

export const CardBody = (props) => {
	return(
		<div className="card-body text-dark bg-light">
		  	{props.children}
		</div>
	);
}

