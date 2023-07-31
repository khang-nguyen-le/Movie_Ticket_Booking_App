import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { theaterServ } from "../../services/theaterServices";
import TheaterList from "./TheaterList";

const TheatersTab = () => {

  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    theaterServ
      .getAllTheaters()
      .then((res) => {
        console.log(res);
        setTheaters(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const theatersList = theaters.map((theater) => {
    return {
      label: <img src={theater.logo} alt="theater logo" className="w-10 h-10" />,
      key: theater.maHeThongRap,
      children: <TheaterList theaterId={theater.maHeThongRap} />,
    };
  });

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Tabs tabPosition="left" items={theatersList} />
    </div>
  );
};

export default TheatersTab;
