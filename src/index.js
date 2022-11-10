import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tw-elements';
import App from './App';
import AuthProvider from './Components/Contexts/AuthProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <ToastContainer position="top-center" />
    <App />
  </AuthProvider>
);
