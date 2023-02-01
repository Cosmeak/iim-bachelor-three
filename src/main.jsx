
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import pokemon from 'pokemontcgsdk';
pokemon.configure({apiKey: import.meta.env.POKEMON_TCG_KEY});

import ErrorPage from "./error-page.jsx";
import { default as TCGIndex } from "./pages/tcg/index.jsx";
import Index from "./pages/index.jsx";
import { default as BoosterIndex } from "./pages/booster/index.jsx" ;
import { default as BoosterShow } from "./pages/booster/show.jsx";
import { default as BoosterOpening } from './pages/booster/opening.jsx';
import { default as PokedexIndex } from './pages/pokedex/index.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <ErrorPage />},
  { path: '/tcg', element: <TCGIndex />, errorElement: <ErrorPage />},
  { path: '/booster', element: <BoosterIndex />, errorElement: <ErrorPage /> },
  { path: '/booster/:boosterId', element: <BoosterShow />, errorElement: <ErrorPage /> },
  { path: '/booster/:boosterId/opening', element: <BoosterOpening />, errorElement: <ErrorPage /> },
  { path: '/pokedex', element: <PokedexIndex /> , errorElement: <ErrorPage />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
