import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {

  const linkClass = "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  const activeLinkClass = "text-white bg-black";
  return (
    <nav className="bg-blue-950 border-b border-blue-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="logo" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">CosmicLens</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}>
                  Home
                </NavLink>
                <NavLink 
                  to="/chatbot" 
                  className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}>
                  Chatbot
                </NavLink>
                <NavLink 
                  to="/feedback" 
                  className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}>
                  Feedback
                </NavLink>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
