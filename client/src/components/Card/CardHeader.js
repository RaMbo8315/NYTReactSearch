import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

export const CardHeader = (props) => {
	return(
		<div className="card-header">
            <h5 className="card-title"><strong><i className="fa  fa-list-alt"></i>   {props.children}</strong></h5>
        </div>
	);
}

