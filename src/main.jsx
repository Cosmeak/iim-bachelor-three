
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import pokemon from 'pokemontcgsdk';
pokemon.configure({apiKey: import.meta.env.POKEMON_TCG_KEY});

import ErrorPage from "./error-page.jsx";
import Tcg from "./routes/tcg.jsx";
import Index from "./routes/index.jsx";
import Booster from "./routes/booster.jsx";
import SingleBooster from "./routes/singleBooster.jsx";
import Opening from './routes/opening';

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <ErrorPage />},
  { path: '/tcg', element: <Tcg />, errorElement: <ErrorPage />},
  { path: '/booster', element: <Booster />, errorElement: <ErrorPage /> },
  { path: '/singleBooster/:boosterId', element: <SingleBooster />, errorElement: <ErrorPage /> },
  { path: '/opening', element: <Opening />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
