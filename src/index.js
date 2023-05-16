import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Link from './Link';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <h1>this is a Error</h1>,
  },
  {
    path: "/Link",
    element:  <Link />,
    errorElement: <h1>this is a Error</h1>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

