import React, { useEffect, useState } from "react";
import DetailsBanner from "../../components/DetailsBanner/DetailsBanner";
import DetailsShowtime from "../../components/DetailsShowtime/DetailsShowtime";
import { useParams } from "react-router-dom";
import { movieServ } from "../../services/movieServices";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/loadingSlice";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState()
  const { movieId } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    movieServ.getMovieDetails(movieId)
      .then((res) => {
        console.log(res)
        setMovie(res.data.content)
        dispatch(setLoading())
      })
      .catch(err => {
        console.log(err)
        dispatch(setLoading())
        return
      })
  }, [movieId])

  return (
    <div className="bg-gray-950 text-white">
      <DetailsBanner
        movieThumb={movie && movie.hinhAnh}
        trailer={movie && movie.trailer}
        movieName={movie && movie.tenPhim}
        synopsis={movie && movie.moTa}
        premiere={movie && movie.ngayKhoiChieu}
      />
      <DetailsShowtime theaterSystem={movie && movie.heThongRapChieu.length > 0 && movie.heThongRapChieu} />
    </div>
  );

};

export default MovieDetailsPage;
