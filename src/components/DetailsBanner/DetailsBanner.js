import React from "react";
import "./DetailsBanner.scss";

const DetailsBanner = (props) => {
  // console.log(props);
  const { movieThumb, trailer, movieName, synopsis, premiere } = props;
  console.log(premiere)
  return (
    <>
      <section
        className="details-banner"
        style={{ backgroundImage: `url(${movieThumb})` }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="details-banner__wrapper flex text-white gap-6 ">
            <div className="details-banner__thumb w-1/5 rounded-lg border border-gray-600 overflow-hidden">
              <img src={movieThumb} alt="Movie Thumbnail" className="h-full w-auto" />
              <a href="#video" className="play-video details-banner__trailer">
                <i class="fa-regular fa-circle-play"></i>
              </a>
              <div id="video" className="video-popup mfp-hide" >
                <iframe src={trailer} allowFullScreen />
              </div>

            </div>
            <div className="details-banner__content w-4/5 h-80">
              <h3 className="details-banner__movie-name">{movieName}</h3>
              <p className="details-banner__languages mb-8">
                English, Vietnamese
              </p>
              <div className="details-banner__time flex gap-10">
                <div className="details-banner__date">
                  <i class="fa-regular fa-calendar-days"></i>
                  <span className="ml-2">
                    {moment(`${premiere}`).format(`DD-MM-YYYY`)}
                  </span>
                </div>
                <div className="details-banner__duration">
                  <i class="fa-regular fa-clock"></i>
                  <span className="ml-2">2 giờ 30 phút</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="movie-synopsis bg-gray-900 text-white py-6 h-48">
        <div className="max-w-screen-xl mx-auto pr-4 pl-72">
          <h2 className="text-xl font-semibold mb-3">Mô tả phim</h2>
          <p className="text-base">{synopsis}</p>
        </div>
      </section>
    </>
  );
};

export default DetailsBanner;
