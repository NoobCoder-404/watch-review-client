import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="mb-10">
      <div className="navbar bg-base-100 px-10">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-2xl text-white font-bold">
            {' '}
            <img style={{ width: '50px' }} src={logo} alt="" /> Watch Time
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ol className="lg:flex hidden">
            <li>
              <Link to={'/home'} className="px-3">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/services'} className="px-3">
                Services
              </Link>
            </li>
            <li>
              <Link to={'/blog'} className="px-3">
                Blog
              </Link>
            </li>
            <li>
              <Link to={'/login'} className="px-3">
                Log in
              </Link>
            </li>
            <li>
              <Link to={'/logout'} className="px-3">
                Log Out
              </Link>
            </li>
          </ol>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost  avatar">
              <FaBars className="text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/home'} className="px-3">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/services'} className="px-3">
                  Services
                </Link>
              </li>
              <li>
                <Link to={'/blog'} className="px-3">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={'/login'} className="px-3">
                  Log in
                </Link>
              </li>
              <li>
                <Link to={'/logout'} className="px-3">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
