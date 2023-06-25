import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from './components/Navbar/Navbar.jsx';
import FooterWithSocialMediaIcons from './components/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar />
      <App />
      <FooterWithSocialMediaIcons />
    </BrowserRouter>
  </React.StrictMode>,
)
