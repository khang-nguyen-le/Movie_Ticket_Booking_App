import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PageTitle = () => {
  const { movieSeatPlan } = useSelector((state) => state.ticket);
  return (
    <section className="bg-gray-800 h-28 flex">
      <div className="w-full max-w-screen-xl px-4 mx-auto flex justify-between items-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center"

        >
          <i class="fa fa-angle-double-left"></i> Quay lại
        </button>

        <p className="text-lg">
          <span>
            {Object.keys(movieSeatPlan).length !== 0 &&
              movieSeatPlan.thongTinPhim.gioChieu}
            ,{" "}
          </span>
          {Object.keys(movieSeatPlan).length !== 0 &&
            movieSeatPlan.thongTinPhim.ngayChieu}
        </p>
        <div className="text-center">
          <p className="text-3xl font-semibold  tracking-wider">05:00</p>
          <p className="text-base">phút còn lại</p>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
