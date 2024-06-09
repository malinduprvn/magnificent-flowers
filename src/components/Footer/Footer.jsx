import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/mglogo-removebg-preview.png"; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="bg-green-300 text-gray-600 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={Logo} alt="Logo" className="w-36 opacity-90 mb-4" />
          <p>
            Your one-stop destination for fresh and beautiful flowers. We
            provide a variety of flowers for all occasions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-xl font-bold mb-4">Customer Service</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>&copy; {new Date().getFullYear()} Fresh Flowers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
