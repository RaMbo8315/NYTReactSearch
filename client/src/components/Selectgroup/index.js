import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Selectgroup = (props) => {
	return(
		<div className="form-group">
            <select className="form-control">
				<option value="1">1</option>
				<option value="5" selected>5</option>
				<option value="10">10</option>
			</select>
        </div>
	);
}

export default Selectgroup;