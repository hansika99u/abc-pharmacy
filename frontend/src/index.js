import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Invoices from './pages/Invoices';
import Items from './pages/Items';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/invoices",
    element: <Invoices/>,
  },
  {
    path: "/items",
    element: <Items/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
