import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 10, marginRight: 10 }} className="btn btn-primary">
    {props.children}
  </button>
);

export default FormBtn;