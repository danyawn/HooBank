import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`w-full flex py-6 justify- items-center navbar`}>
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      {/* Navbar for Desktop */}
      <ul className={`list-none sm:flex hidden justify-end items-center flex-1 `}>
        {navLinks.map((nav,index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } text-white `}         
          >
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* End of Navbar for Desktop */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Navbar for Mobile */}
        <div 
          className={`${toggle ? 'flex' : 'hidden'}
          p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav,index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' } text-white `}         
                >
                  <a href={`#${nav.id}`} >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
        </div>
        {/* End Navbar for Mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
