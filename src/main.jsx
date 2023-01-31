import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: 'xxxxxxxxxx'})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  </React.StrictMode>,
)
