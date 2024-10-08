import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { insertCoin } from "playroomkit";
import { GameEngineProvider } from './hooks/useGameEngine.jsx'


insertCoin().then(()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <GameEngineProvider>
        <App />
      </GameEngineProvider>
    </React.StrictMode>,
  )
});