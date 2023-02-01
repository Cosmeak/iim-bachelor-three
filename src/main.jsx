
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import pokemon from 'pokemontcgsdk';
pokemon.configure({apiKey: import.meta.env.POKEMON_TCG_KEY});

import ErrorPage from "./error-page.jsx";
import Search from "./routes/search.jsx";
import Index from "./routes/index.jsx";

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <ErrorPage />},
  { path: '/search', element: <Search />, errorElement: <ErrorPage />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
