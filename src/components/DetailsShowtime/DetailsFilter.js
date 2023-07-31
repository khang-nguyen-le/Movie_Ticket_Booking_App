import React, { useEffect, useState } from "react";
import { Select } from "antd";
import "./DetailsFilter.scss";
import dateImg from "./../../assets/images/date.png";
import { useDispatch } from "react-redux";
import {
  setDefaultTheater,
  setSelectedTheater,
} from "../../redux/slices/theaterSlice";
import cinemaImg from "./../../assets/images/cinema.png";

const DetailsFilter = (props) => {
  const { theaterSystem } = props;
  console.log(theaterSystem);

  const [theaters, setTheaters] = useState([]);
  const [cinemaLogo, setCinemaLogo] = useState(cinemaImg);
  const [theaterName, setTheaterName] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (theaterSystem) {
      dispatch(setDefaultTheater(theaterSystem[0]));

      setCinemaLogo(theaterSystem[0].logo);

      setTheaterName(theaterSystem[0].maHeThongRap);

      setTheaters(
        theaterSystem.map((theater) => {
          return {
            value: theater.maHeThongRap,
            label: theater.maHeThongRap,
          };
        })
      );
    }
  }, [theaterSystem]);

  const date = [
    {
      value: "02-10-2023",
      label: "02-10-2023",
    },
    {
      value: "29-11-2023",
      label: "29-11-2023",
    },
    {
      value: "22-10-2023",
      label: "22-10-2023",
    },
  ];

  const changeTheaterHandler = (value) => {
    const selectedTheater = theaterSystem.find(
      (theater) => theater.maHeThongRap === value
    );
    setCinemaLogo(selectedTheater.logo);
    dispatch(setSelectedTheater(selectedTheater));
    dispatch(setDefaultTheater({}));
    setTheaterName(value);
  };

  const changeDateHandler = (value) => {
    console.log(value);
  };

  return (
    <section className="details-filter">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="details-filter__title text-2xl mb-10">
          Rạp chiếu phim và lịch chiếu
        </h2>
        <div className="details-filter__filter-wrapper flex gap-20">
          <div className="details-filter__filter-item flex items-center">
            <div
              className="w-10 h-10 rounded-full mr-3"
              style={{
                boxShadow:
                  "0 10px 15px -3px rgb(255 255 255 / 0.2), 0 4px 6px -4px rgb(255 255 255 / 0.2)",
              }}
            >
              <img src={cinemaLogo} alt="theater logo" />
            </div>

            <Select
              value={theaterName}
              style={{
                width: 160,
              }}
              onChange={changeTheaterHandler}
              options={theaters?.length > 0 ? theaters : []}
              bordered={false}
              className="details-filter__selector"
            />
          </div>
          <div className="details-filter__filter-item flex items-center">
            <div
              className="w-10 h-10 rounded-full mr-6"
              style={{
                boxShadow:
                  "0 10px 15px -3px rgb(255 255 255 / 0.2), 0 4px 6px -4px rgb(255 255 255 / 0.2)",
              }}
            >
              <img src={dateImg} alt="theater logo" />
            </div>

            <Select
              defaultValue="Chọn ngày"
              style={{
                width: 160,
              }}
              onChange={changeDateHandler}
              options={date}
              bordered={false}
              className="details-filter__selector"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsFilter;
