import React, { useEffect, useState } from "react";
import { movieServ } from "../../services/movieServices";
import MovieItem from "./MovieItem";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/loadingSlice";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    movieServ
      .getAllMovie()
      .then((res) => {
        // console.log(res);
        setMovies(res.data.content);
        dispatch(setLoading())

      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading())

      });
  }, []);

  const movieList = movies.map(movie => {
    return <MovieItem
      key={movie.maPhim}
      movieId={movie.maPhim}
      image={movie.hinhAnh}
      movieName={movie.tenPhim}
      description={movie.moTa} />
  })

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Danh sách phim</h2>
      <div className="grid grid-cols-4 gap-5">
        {movieList}
      </div>
    </div>
  );
};

export default MovieList;
