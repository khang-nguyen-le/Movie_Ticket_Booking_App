import React from "react";
import "./Seat.scss";
import { useDispatch } from "react-redux";
import { setTicketList } from "../../redux/slices/ticketSlice";

const Seat = (props) => {
  const dispatch = useDispatch();
  const selectSeatHandler = (ticket) => {
    // console.log(ticket);
    dispatch(setTicketList(ticket));
  };
  return (
    <div className="relative">
      <label htmlFor={props.seatNum} className="seat-label">
        {props.seatNum}
      </label>
      <input
        type="checkbox"
        id={props.seatNum}
        className="seat"
        disabled={props.isBooked}
        onChange={() => {
          selectSeatHandler({
            maGhe: props.seatId,
            giaVe: props.seatPrice,
            soGhe: props.seatNum,
          });
        }}
      ></input>
    </div>
  );
};

export default Seat;
