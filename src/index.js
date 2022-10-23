import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Users from './pages/Users'
import Repos from './pages/Repos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import Main from './pages/Main';
import './config/axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/search',
    element: <Layout />,
    children: [
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'repos',
        element: <Repos />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
