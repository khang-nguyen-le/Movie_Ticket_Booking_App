import React from "react";
import Seat from "./Seat";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useSelector } from "react-redux";

const SeatArea = () => {
  const { movieSeatPlan } = useSelector((state) => state.ticket);
  const seatList = movieSeatPlan.danhSachGhe;
  console.log(seatList);


  return (
    <div className="mt-20">
      <SectionTitle>Vị trí ngồi</SectionTitle>
      <div className="flex flex-wrap gap-16 justify-center mt-20">
        {seatList?.map((seat) => {
          return (
            <Seat
              seatId={seat.maGhe}
              seatPrice={seat.giaVe}
              seatNum={seat.tenGhe}
              key={seat.maGhe}
              isBooked={seat.daDat}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeatArea;
