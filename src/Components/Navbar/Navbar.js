import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../Assets/Images/logo.png';
import { AuthContext } from '../Contexts/AuthProvider';
import './Navbar.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/');
        toast.warning('Log out Success');
      })
      .catch((error) => console.log(error.message));
  };
  //console.log(user);

  return (
    <div className="mb-10">
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl text-white font-bold">
            {' '}
            <img style={{ width: '50px' }} src={logo} alt="" /> Watch Maker
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

            {user?.uid ? (
              <>
                <li>
                  <Link to={'/reviews'} className="px-3">
                    My Review
                  </Link>
                </li>

                <li>
                  <Link onClick={handleLogOut} className="px-3">
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={'/login'} className="px-3">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to={'/register'} className="px-3">
                    Register
                  </Link>
                </li>
              </>
            )}
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
              {user?.uid ? (
                <>
                  <li>
                    <Link to={'/reviews'} className="px-3">
                      My Review
                    </Link>
                  </li>

                  <li>
                    <Link onClick={handleLogOut} className="px-3">
                      Log Out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={'/login'} className="px-3">
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link to={'/register'} className="px-3">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
