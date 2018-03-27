import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Title = (props) => {
	return(
			<h5 className="card-title"><strong><i className="fa  fa-list-alt"></i>   {props.children}</strong></h5>
	);
}

export default Title;