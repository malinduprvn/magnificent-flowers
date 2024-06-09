import React, { useEffect, useState } from "react";
import "./Hero.css";
import HeroPng1 from "../../assets/flower1.png";
import HeroPng2 from "../../assets/rotate5-removebg-preview.png";
import HeroPng3 from "../../assets/rotate3-removebg-preview.png";
import HeroPng4 from "../../assets/monstera-removebg-preview.png";
import HeroPng5 from "../../assets/gerbera-removebg-preview.png";

const Hero = () => {
  const images = [HeroPng1, HeroPng2, HeroPng3, HeroPng4, HeroPng5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-[550px] sm:min-h-[600px] flex justify-center items-center bg-gradient-to-r from-green-500 to-green-300">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto relative z-10 pb-8 sm:pb-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* text content section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left text-white">
            <h1
              data-aos="fade-down"
              data-aos-once="true"
              className="text-6xl sm:text-8xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-100 to-white font-cursive"
            >
              Magnificent
              <span className="block text-4xl sm:text-5xl font-serif text-green-200 mt-4 sm:mt-0">
                Flowers
              </span>
            </h1>

            <p
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-base sm:text-lg font-medium text-green-100"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              voluptas quam impedit atque quia cumque, similique perferendis
              nisi quas animi vel id, sit neque placeat ab corporis molestias?
              Eum, explicabo.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-offset="0"
              className="mt-4"
            >
              <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105">
                Explore Flowers
              </button>
            </div>
          </div>
          {/* hero image section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`max-w-[350px] w-full mx-auto sm:scale-125 rotating-image ${currentImage === index ? "visible" : "hidden"}`}
                alt="Hero"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
