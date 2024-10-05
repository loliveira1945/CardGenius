import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import Header from './pages/Header';
import Footer from './pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col h-screen">
      <div className="h-[20%]"><Header /></div>
      <div className="h-[70%] flex "><AppRoutes /></div>
      <div className="h-[15%]"><Footer /></div>

    </div>
  </React.StrictMode>
);
