/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  //console.log(user);
  if (user && user?.uid) {
    return children;
  }
  return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default PrivateRoute;
