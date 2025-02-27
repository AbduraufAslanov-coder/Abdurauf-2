import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from "./components/ui/provider"
import React from 'react'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
  <Provider>
    <App />
  </Provider>
  </StrictMode>
  </BrowserRouter>
)
