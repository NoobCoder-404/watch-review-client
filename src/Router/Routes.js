import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Services from '../Components/Services/Services';
import Main from '../Layouts/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);
