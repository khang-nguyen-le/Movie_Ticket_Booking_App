import React, { useEffect, useState } from "react";
import "./DetailsPlan.scss";
import { useSelector } from "react-redux";

const DetailsPlan = () => {
  const { selectedTheater, defaultTheater } = useSelector(
    (state) => state.theater
  );

  const [theater, setTheater] = useState();

  useEffect(() => {
    if (Object.keys(defaultTheater).length > 0) {
      setTheater(
        defaultTheater.cumRapChieu.map((theater) => {
          return (
            <li className="details-plan__theater-item flex">
              <div className="details-plan__theater w-5/12 border-r border-r-gray-500 p-6">
                <h2 className="uppercase mb-2 text-base font-bold">
                  {theater.tenCumRap}
                </h2>
                <p>{theater.diaChi}</p>
              </div>
              <div className="details-plan__schedule w-7/12 p-6 flex flex-wrap gap-4">
                {theater.lichChieuPhim.map((schedule) => {
                  console.log(schedule);
                  const showtime = moment(schedule.ngayChieuGioChieu).format(
                    "HH:mm"
                  );
                  return (
                    <a href={`/movie-booking/${schedule.maLichChieu}`}>
                      <button className="details-plan__schedule-item">
                        {showtime}
                      </button>
                    </a>
                  );
                })}
              </div>
            </li>
          );
        })
      );
    }

    if (Object.keys(selectedTheater).length > 0) {
      setTheater(
        selectedTheater.cumRapChieu.map((theater) => {
          return (
            <li className="details-plan__theater-item flex">
              <div className="details-plan__theater w-5/12 border-r border-r-gray-500 p-6">
                <h2 className="uppercase mb-2 text-base font-bold">
                  {theater.tenCumRap}
                </h2>
                <p>{theater.diaChi}</p>
              </div>
              <div className="details-plan__schedule w-7/12 p-6 flex flex-wrap gap-4">
                {theater.lichChieuPhim.map((schedule) => {
                  return (
                    <a href={`/movie-booking/${schedule.maLichChieu}`}>
                      <button className="details-plan__schedule-item">
                        {moment(schedule.ngayChieuGioChieu).format("HH:mm")}
                      </button>
                    </a>
                  );
                })}
              </div>
            </li>
          );
        })
      );
    }
  }, [defaultTheater, selectedTheater]);

  return (
    <section className="details-plan mt-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="details-plan__wrapper bg-gray-800 rounded-lg">
          <ul className="details-plan__theater-list">{theater}</ul>
        </div>
      </div>
    </section>
  );
};

export default DetailsPlan;
