import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <header className="header relative">
        <div className="my-container">
          <div className="flex justify-between items-center py-5">
            <Link
              className="flex items-center gap-2"
              to="/"
            >
              <img className="size-10 md:size-12" alt="Logo" src={logoImg} />
              <h3 className="text-3xl font-black text-dark">Law<span className='text-green-500'>Connect</span></h3>
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex gap-8 items-center">
                <li>
                    <NavLink className={`navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/'}>Home</NavLink>
                </li>

                <li>
                    <NavLink className={`navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/my-bookings'}>My Bookings</NavLink>
                </li>

                <li>
                    <NavLink className={`navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/blogs'}>Blogs</NavLink>
                </li>

                <li>
                    <NavLink className={`navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/contact'}>Contact</NavLink>
                </li>
                
              </ul>
            </nav>
            <button className="hidden lg:inline-block px-7 py-4 font-bold text-xl rounded-full bg-green-500 text-white outline-0 border-0 hover:bg-green-600 transition ease-in-out duration-300">
              Emergency
            </button>
            <button className="lg:hidden block text-3xl text-gray-700 hover:text-green-500 transition-all ease-in-out duration-300 bg-white p-3 rounded-lg cursor-pointer">
 
            </button>
            <nav className="block lg:hidden absolute right-0 z-50 w-[300px] py-3 px-5 shadow bg-linear-to-t from-[#ffffff] to-gray-200 rounded-b-lg border-3 border-white top-25 opacity-0 invisible pointer-events-none transition-all duration-300 ease-in-out">
              <ul className="flex flex-col gap-4">
              <li>
                    <NavLink className={`navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/'}>Home</NavLink>
                </li>

                <li>
                    <NavLink className={`navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/my-bookings'}>My Bookings</NavLink>
                </li>

                <li>
                    <NavLink className={`navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/blogs'}>Blogs</NavLink>
                </li>

                <li>
                    <NavLink className={`navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-green-500 transition ease-in-out duration-300`} to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
};

export default Navbar;