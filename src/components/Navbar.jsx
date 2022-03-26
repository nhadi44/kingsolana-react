import { useState } from "react";
import { Link } from "react-router-dom";
import * as Components from "../components";
import { Animated } from "react-animated-css";

import KingNav from "../assets/icons/King-solana-nav.svg";

export default function Navbar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleDropdown((prevState) => !prevState);
  };

  const closeToggle = () => {
    setToggleDropdown(false);
  };
  return (
    <div>
      <nav className="fixed w-full text-white p-6">
        <div className="component__navbar">
          <div className="component__navbar-lg hidden md:block">
            <div className="flex justify-between items-center">
              <div className="navbar__brand">
                <Link to="/">
                  <img src={KingNav} alt="king-nav" />
                </Link>
              </div>
              <div className="navbar__link">
                <div className="flex space-x-8 uppercase text-[25px]">
                  <a
                    href="/"
                    className="hover:bg-gradient-to-r hover:from-yellow-600 hover:to-gold hover:text-black p-3 rounded "
                  >
                    Home
                  </a>
                  <a
                    href="#roadmap"
                    className="hover:bg-gradient-to-r hover:from-yellow-600 hover:to-gold hover:text-black p-3 rounded "
                  >
                    roadmap
                  </a>
                  <a
                    href="#utility"
                    className="hover:bg-gradient-to-r hover:from-yellow-600 hover:to-gold hover:text-black p-3 rounded "
                  >
                    utility
                  </a>
                  <a
                    href="#role"
                    className="hover:bg-gradient-to-r hover:from-yellow-600 hover:to-gold hover:text-black p-3 rounded "
                  >
                    role
                  </a>
                  <a
                    href="#team"
                    className="hover:bg-gradient-to-r hover:from-yellow-600 hover:to-gold hover:text-black p-3 rounded "
                  >
                    Team
                  </a>
                  <a
                    href="#presale"
                    className="hover:bg-gradient-to-r hover:from-yellow-600 hover:to-gold hover:text-black p-3 rounded "
                  >
                    presale
                  </a>
                  <a
                    href="#joinus"
                    className="hover:bg-gradient-to-r hover:from-yellow-600 hover:to-gold hover:text-black p-3 rounded "
                  >
                    join us
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar Mobile */}
          <div className="component__navbar-mobile md:hidden">
            <div className="flex justify-between items-center">
              <div className="navbar__brand">
                <Link to="/" className="text-2xl">
                  King Solana
                </Link>
              </div>
              <div className="navbar__menu">
                <button
                  className="hover:bg-slate-900 p-1 rounded-sm transition duration-300"
                  onClick={handleToggle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {toggleDropdown && (
                  <Animated
                    animationIn="animate__fadeInDown"
                    animationOut="animate__fadeOut"
                    isVisible={true}
                  >
                    <Components.MobileDropdown closeToggle={closeToggle} />
                  </Animated>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
