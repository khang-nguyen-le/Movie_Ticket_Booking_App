import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { movieServ } from "../../services/movieServices";

const HomeBanner = () => {
  const [bannerItems, setBannerItems] = useState([]);
  const getAllBanner = async () => {
    const res = await movieServ.getAllBanner();
    // console.log(res);

    setBannerItems(res.data.content);
  };

  useEffect(() => {
    getAllBanner();
  }, []);

  const bannerList = bannerItems.map((item) => {
    return (
      <div key={item.maBanner} className="h-90vh">
        <img className="w-full h-full object-cover" src={item.hinhAnh} alt="" />
      </div>
    );
  });

  return <Carousel autoplay>{bannerList}</Carousel>;
};

export default HomeBanner;
