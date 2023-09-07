import React from "react";
import { useSelector } from "react-redux";

function Alert() {
  const alertState = useSelector((state) => state.alert.alert);
  // console.log(alertState);
  return (
    <div style={{ height: "50px" }}>
      {alertState && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{alertState.type}</strong> {alertState.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;

// entering first commit here
