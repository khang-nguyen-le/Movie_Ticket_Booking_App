import React from "react";
import screenThumb from "./../../assets/images/screen-thumb.png";
import SeatArea from "../Seat/SeatArea";
import SectionTitle from "../SectionTitle/SectionTitle";
import SeatStatus from "../Seat/SeatStatus";
import emptySeat from "./../../assets/images/seat.png";
import bookedSeat from "./../../assets/images/booked-seat.png";
import selectedSeat from "./../../assets/images/selected-seat.png";

const BookingPlan = () => {
  return (
    <section className="max-w-screen-xl px-4 mx-auto py-20">
      <div className="screen-area">
        <SectionTitle>Màn hình</SectionTitle>
        <div>
          <img src={screenThumb} alt="Screen" className="mx-auto" />
        </div>
      </div>

      <SeatArea />

      <div className="flex justify-center items-center mt-20 gap-8">
        <SeatStatus seatImg={emptySeat} statusText="Ghế trống" />
        <SeatStatus seatImg={selectedSeat} statusText="Ghế đang chọn" />
        <SeatStatus seatImg={bookedSeat} statusText="Ghế đã đặt" />
      </div>
    </section>
  );
};

export default BookingPlan;
