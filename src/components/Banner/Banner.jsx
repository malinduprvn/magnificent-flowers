import React from "react";
import BannerImage from "../../assets/monstera-removebg-preview.png";

const Banner = () => {
  return (
    <>
      <div
        className="min-h-[620px] flex justify-center
      items-center py-12 sm:py-0 bg-gradient-to-r from-green-900
      to-green-300"
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* image section */}
            <div
              data-aos="zoom-in"
              className="flex justify-center items-center"
            >
              <img
                src={BannerImage}
                alt=""
                className="max-w-[450px] 
              w-full mx-auto shadow-1 "
              />
            </div>

            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              {/* <p
                data-aos="fade-up"
                className="uppercase text-3xl font-semibold
              text-dark"
              >
                about
              </p> */}
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-5xl
              text-green-950 font-bold font-cursive2"
              >
                Greenery
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sm text-white
              tracking-wide leading-5"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate nemo veniam eum dolorum ratione, facilis quo labore
                laudantium natus omnis qui quia debitis atque est nesciunt
                tempore blanditiis nisi vitae.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="primary-btn">Explore Greenery</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
