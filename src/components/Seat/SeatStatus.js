import React from "react";

const SeatStatus = (props) => {
  return (
    <div className="seat-status flex items-center gap-3">
      <div className="w-6 h-auto">
        <img src={props.seatImg} alt="" />
      </div>
      <span>{props.statusText}</span>
    </div>
  );
};

export default SeatStatus;
