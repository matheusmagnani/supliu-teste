import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewTrack from './pages/NewTrack'
import './index.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nova-musica" element={<NewTrack />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
  </React.StrictMode>
)
