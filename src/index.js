import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Vines from './pages/Vines';
import Shops from './pages/Shops';
import Gallerys from './pages/Gallerys';
import About from './pages/About';
import NewsPage from './pages/News';
import SingleNewsPage from './pages/singleNews';
import { Layout } from './components/Layout';
import { LanguageProvider } from './LanguageContext';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>,
  },
  {
    path: 'vines',
    element: <Layout><Vines /></Layout>, 
  },
  {
    path: 'shop',
    element: <Layout><Shops /></Layout>, 
  },
  {
    path: 'gallery',
    element: <Layout><Gallerys /></Layout>, 
  },
  {
    path: 'about',
    element: <Layout><About /></Layout>, 
  },
  {
    path: 'news',
    element: <Layout><NewsPage /></Layout>, 
  },
  {
    path: 'news/:id',
    element: <Layout><SingleNewsPage /></Layout>, 
  },
  {
    path: 'contact',
    element: <Layout><App /></Layout>, 
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
