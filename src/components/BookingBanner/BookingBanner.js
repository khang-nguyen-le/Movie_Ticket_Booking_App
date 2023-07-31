import React from "react";
import "./BookingBanner.scss";
import { useSelector } from "react-redux";

const BookingBanner = () => {
  const { movieSeatPlan } = useSelector((state) => state.ticket);

  return (
    <section className="booking-banner">
      <div className="booking-banner__movie-info">
        <h1 className="text-5xl leading-snug mb-4 font-bold">
          {Object.keys(movieSeatPlan).length !== 0 &&
            movieSeatPlan.thongTinPhim.tenPhim}
        </h1>
        <div className="text-lg uppercase">
          <span>
            {Object.keys(movieSeatPlan).length !== 0 &&
              movieSeatPlan.thongTinPhim.tenCumRap}
          </span>
          <span className="divider"></span>
          <span>
            {Object.keys(movieSeatPlan).length !== 0 &&
              movieSeatPlan.thongTinPhim.tenRap}
          </span>
        </div>
      </div>
    </section>
  );
};

export default BookingBanner;
