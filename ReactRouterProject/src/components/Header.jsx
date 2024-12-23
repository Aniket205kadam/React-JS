import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({isActive}) =>
              `
                ${isActive ? "text-orange-700" : "text-gray-700"}
                hover:text-blue-400
              `
            }
          >Home</NavLink>

          <NavLink
            to="/about"
            className={({isActive}) => 
            `
                ${isActive ? "text-orange-700" : "text-gray-700"}
                hover:text-blue-400
            `
            }
          >About</NavLink>

          <NavLink
            to="/services"
            className={({isActive}) => 
            `
                ${isActive ? "text-orange-700" : "text-gray-700"}
                hover:text-blue-400
            `
            }
          >Services</NavLink>

          <NavLink
            to="/contact"
            className={({isActive}) => 
            `
              ${isActive ? "text-orange-700" : "text-gray-700"}
              hover:text-blue-400
            `
            }
          >Contact</NavLink>
        </nav>

        <button className="md:hidden text-xl focus:outline-none">
          ☰
        </button>
      </div>
    </header>
    );
}

export default Header;