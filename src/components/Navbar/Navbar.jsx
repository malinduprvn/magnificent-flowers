import React, { useState } from "react";
import Logo from "../../assets/mglogo-removebg-preview.png";
import { FaBars } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About Us",
    link: "#",
  },
  {
    id: 3,
    name: "Contact",
    link: "#",
  },
  {
    id: 4,
    name: "Blog",
    link: "#",
  },
  {
    id: 5,
    name: "Help Center",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = (menuId) => {
    setSelectedButton(menuId);
    setOpen(false); // Close the menu on mobile when an item is clicked
  };

  return (
    <div className="bg-gradient-to-r from-green-200 to-green-600 shadow-lg">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a href="#">
              <img src={Logo} alt="Logo" className="w-36 opacity-90" />
            </a>
          </div>

          {/* link section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="hidden lg:flex justify-between items-center gap-8"
          >
            <ul className="flex justify-between items-center gap-8 text-white text-lg font-semibold">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className={`inline-block p-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-500 hover:text-white ${
                      selectedButton === menu.id ? "bg-green-500" : ""
                    }`}
                    onClick={() => handleClick(menu.id)}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* responsive menu for mobile device */}
          <div className="lg:hidden">
            <button onClick={handleOpen} aria-label="Toggle menu">
              <FaBars className="text-3xl text-white" />
            </button>
          </div>
        </div>

        {/* dropdown menu */}
        {open && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col items-start p-4 space-y-2 bg-white rounded-lg shadow-lg text-gray-700">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block w-full p-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-500 hover:text-white"
                    onClick={() => handleClick(menu.id)}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
