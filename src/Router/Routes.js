import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Details from '../Components/Details/Details';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Review from '../Components/Review/Review';
import Services from '../Components/Services/Services';
import Main from '../Layouts/Main';
import PrivateRoute from './PrivateRoute';

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
        path: '/services/:id',
        element: <Details />,
        loader: ({ params }) =>
          fetch(`https://watch-review-server.vercel.app/services/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/reviews',
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        )
      }
    ]
  }
]);
