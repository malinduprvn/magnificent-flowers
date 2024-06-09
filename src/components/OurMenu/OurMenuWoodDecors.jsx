import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/wood-candle.jpg";
import Img2 from "../../assets/wood-christmas.jpg";
import Img3 from "../../assets/wood-daisy.jpg";
import Img4 from "../../assets/wood-lights.jpg";
// import Img5 from "../../assets/alstromeria.jpg";

const MenuData = [
  {
    id: 1,
    name: "Decoration1",
    price: "Rs.1150",
    img: Img1,
  },
  {
    id: 2,
    name: "Decoration2",
    price: "Rs.2750",
    img: Img2,
  },
  {
    id: 3,
    name: "Decoration3",
    price: "Rs.4250",
    img: Img3,
  },
  {
    id: 4,
    name: "Decoration4",
    price: "Rs.22250",
    img: Img4,
  },
  // {
  //   id: 5,
  //   name: "Alstroemeria",
  //   price: "Rs.250",
  //   img: Img5,
  // },
  // {
  //   id: 4,
  //   name: "Alstroemeria",
  //   price: "Rs.250",
  //   img: Img5,
  // },
  // {
  //   id: 4,
  //   name: "Alstroemeria",
  //   price: "Rs.250",
  //   img: Img5,
  // },
  // {
  //   id: 4,
  //   name: "Alstroemeria",
  //   price: "Rs.250",
  //   img: Img5,
  // },
];

const OurMenuWoodDecors = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4, // Corrected to slidesToShow
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Corrected to slidesToShow
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Corrected to slidesToShow
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="py-16 bg-gradient-to-b from-white
    to-gray-400 text-rose-900"
    >
      <div className="container">
        {/* header section */}
        <div className="mb-10 space-y-5">
          <h1 data-aos="fade-up" className="text-center text-4xl font-bold">
            Wood Decor
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center sm:max-w-sm mx-auto
             text-xs opacity-75"
          >
            {""}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat in
            fuga, distinctio modi laborum adipisci assumenda quae odit eos error
            sequi velit, cumque impedit cupiditate maiores deleniti harum culpa
            voluptas.
          </div>
        </div>

        {/* slider section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {MenuData.map((menu) => (
              <div key={menu.id} className="my-16">
                <div
                  className="flex flex-col gap-4 py-8 px-6 mx-4
                rounded-xl"
                >
                  {/* image section */}
                  <div className="mb-3 flex justify-center">
                    <img
                      src={menu.img}
                      alt=""
                      className="rounded-md w-52 h-52 sm:max-w-[200px]
                    md:max-w-[250px] shadow-1"
                    />
                  </div>
                  {/* text content section */}
                  <div
                    className="flex flex-col items-center
                  gap-4"
                  >
                    <div className="space-y-3 text-center">
                      <h1 className="text-xl">{menu.name}</h1>
                      <p className="text-3xl font-semibold">
                        <span
                          className="text-2xl
                        font-cursive"
                        >
                          Only
                        </span>{" "}
                        {""}
                        {menu.price}.00
                      </p>
                      <a href="#" className="underline">
                        Buy Now
                      </a>
                    </div>
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

export default OurMenuWoodDecors;
