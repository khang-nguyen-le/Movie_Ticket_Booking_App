import React from "react";
import { Button } from "antd";

const Theater = (props) => {
  return (
    <div className="text-left w-60">
      <h5 className="uppercase font-bold truncate">{props.theaterName}</h5>
      <p className="truncate">{props.address}</p>
    </div>
  );
};

export default Theater;
