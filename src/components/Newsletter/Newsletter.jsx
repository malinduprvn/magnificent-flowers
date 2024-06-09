import React from "react";
import BgPng from "../../assets/food2-plate.png";

const backgroundStyle = {
  // backgroundImage: `url(${BgPng})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right",
  height: "100%",
  width: "100%",
};

const Newsletter = () => {
  return (
    <>
      <div className="bg-green-600 text-white" style={backgroundStyle}>
        <div className="container bg-black/60 sm:bg-transparent py-16 px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="space-y-4 text-center lg:text-left">
              {/* text section */}
              <h1
                data-aos="fade-up"
                className="text-2xl sm:text-3xl font-semibold text-white/90 mb-4"
              >
                Ready to get Started
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-sm sm:text-base text-white/70 mb-4"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* input section */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row items-center lg:text-left gap-4"
            >
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full sm:max-w-[400px] px-4 py-2 rounded-md sm:rounded-r-none focus:outline-none text-dark"
              />
              <button
                className="w-full sm:w-auto bg-white text-green-600 px-4 py-2 rounded-md sm:rounded-l-none"
              >
                <span className="text-sm uppercase font-semibold">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
