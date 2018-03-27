import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

export const Label = (props) => {
	return(
		<label {...props}>{props.children}</label>
	);
}

export default Label;