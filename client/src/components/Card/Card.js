import React from 'react';
import "./style.css";


// gather other componet
//import otherComponent from "../otherComponent";

export const Card = (props) => {
	return(
		<div className="card text-white bg-dark">
			{props.children}
		</div>
	);
}

