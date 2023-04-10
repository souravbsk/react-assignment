import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <header className=" md:absolute static right-0 left-0 top-0">
      <nav className="flex container flex-col md:flex-row gap-4 md:gap-0 md:items-center py-6 justify-between">
        <div className="flex items-center justify-between flex-row">
          <h4 className="text-xl md:text-4xl font-bold">Job-Cafe</h4>
          <div className=" md:hidden flex items-center gap-4">
            <button className="bg-gradient-to-r from-indigo-400 to-violet-400 px-2 text-sm text-white font-semibold py-2 rounded-md">
              Star Applying
            </button>
            <button onClick={() => setToggle(!toggle)} >
              <Bars3Icon className="w-8 h-8 text-gray-400"></Bars3Icon>
            </button>
          </div>
        </div>
        <ul className={`flex flex-col absolute md:static md:flex-row bg-gray-100 h-screen md:h-auto md:bg-transparent md:items-center p-5 md:p-0 top-20 transition-left duration-300 gap-3 ${toggle ? "left-0" : "-left-36"}`}>
          <li>
            <NavLink to="/" className="text-md text-slate-500 font-semibold">Home</NavLink>
          </li>
          <li>
            <NavLink to="statistics" className="text-md text-slate-500 font-semibold">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/appliedjobs" className="text-md text-slate-500 font-semibold">Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="text-md text-slate-500 font-semibold">Blog</NavLink>
          </li>
          
        </ul>
        <div className="hidden md:block">
          <button className="primary-btn">
            Star Applying
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
