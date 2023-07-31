import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const MovieItem = (props) => {
  // console.log(props);
  return (
    <div className="movie-item">
      <img src={props.image} alt="" className="h-96 object-cover w-full" />
      <div className="text my-3">
        <h3 className="font-bold text-lg line-clamp-1">
          <span className="py-1 px-2 text-white bg-blue-500 rounded text-xs mr-2">
            C18
          </span>
          {props.movieName}
        </h3>
        <p className="mt-2 line-clamp-2">{props.description}</p>
      </div>
      <a href=""></a>
      <a href={`/movie-details/${props.movieId}`}>
        <Button type="primary" className="bg-blue-700 hover:bg-blue-800">
          Xem chi tiết
        </Button>
      </a>
    </div>
  );
};

export default MovieItem;
