import { Button } from "antd";
import React from "react";

const MovieShowtime = (props) => {
  const { showtimes } = props;
  console.log(showtimes);

  const renderedShowtimes = showtimes.map((showtime) => {
    // const formattedTime = moment(showtime.ngayChieuGioChieu).fornpm mat(
    //   "DD/MM, h:mm"
    // );
    return (
      <Button className="bg-blue-100 hover:bg-blue-200 font-semibold mr-3 mb-3">
        <span className="text-green-900">{showtime.ngayChieuGioChieu}</span>
      </Button>
    );
  });

  return renderedShowtimes;
};

export default MovieShowtime;
