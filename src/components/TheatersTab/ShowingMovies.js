import React, { useEffect, useState } from "react";
import { theaterServ } from "../../services/theaterServices";
import MovieShowtime from "./MovieShowtime";

const ShowingMovies = (props) => {
  const [showingMovies, setShowingMovies] = useState([]);

  const { theaterId, maCumRap } = props;

  useEffect(() => {
    theaterServ
      .getMoviesByTheater(theaterId)
      .then((res) => {
        console.log(res.data.content[0].lstCumRap);

        const cumRap = res.data.content[0].lstCumRap.find(
          (cumRap) => cumRap.maCumRap === maCumRap
        );
        console.log(cumRap);

        setShowingMovies(cumRap.danhSachPhim);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [theaterId, maCumRap]);

  const showingMoviesList = showingMovies.filter(
    (movie) => movie.dangChieu === true
  );

  console.log(showingMoviesList);

  const renderShowingMoviesList = showingMoviesList.map((movie) => {
    return (
      <li
        className="flex py-3 border-b border-b-neutral-300"
        key={movie.maPhim}
      >
        <div className="w-2/12 h-48 mr-4">
          <img src={movie.hinhAnh} alt="" className="h-full object-cover" />
        </div>
        <div className="w-10/12">
          <div className="mb-4">
            <h3 className="capitalize font-bold text-lg inline-block mr-2">
              {movie.tenPhim}
            </h3>
            <span className="py-1 px-2 text-white bg-blue-500 rounded text-xs align-text-top">
              C18
            </span>
          </div>
          <div>
            <MovieShowtime showtimes={movie.lstLichChieuTheoPhim} />
          </div>
        </div>
      </li>
    );
  });

  return renderShowingMoviesList;
};

export default ShowingMovies;
