import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: import.meta.env.POKEMON_TCG_KEY})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  </React.StrictMode>,
)
