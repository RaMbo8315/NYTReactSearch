import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Ptag = (props) => {
	return(
		<p class="card-text">{props.children}</p>
	);
}

export default Ptag;