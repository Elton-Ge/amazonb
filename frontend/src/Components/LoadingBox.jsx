import React from "react";

function LoadingBox(props) {
  return (
    <div className={"loading"}>
      Loading...
      <i className="fa fa-spinner fa-spin" />
    </div>
  );
}

export default LoadingBox;
