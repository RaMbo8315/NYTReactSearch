import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const HeadFive = (props) => {
	return(
		<h5 class="card-title">{props.children}</h5>
	);
}

export default HeadFive;