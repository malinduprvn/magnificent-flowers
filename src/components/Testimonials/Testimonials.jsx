import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/Shangri-La-Logo-removebg-preview.png";
import Img2 from "../../assets/cinnamon-lakeside-colombo-logo-vector-removebg-preview.png";
import Img3 from "../../assets/cgrand-removebg-preview.png";
import Img4 from "../../assets/itc_hotels_colombo_logo-removebg-preview.png";

const TestimonialsData = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img3,
  },
  {
    id: 4,
    img: Img4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-6xl font-bold font-cursive text-orange-600"
          >
            Our Clients
          </h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col shadow-lg mx-4 rounded-xl relative items-center">
                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt=""
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
