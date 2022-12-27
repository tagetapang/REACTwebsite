import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: '100px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
        <strong>{props.alert.type}</strong><p className="ml-14">{props.alert.msg}</p>
      </div>}

    </div>
  );
}
