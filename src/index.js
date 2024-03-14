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
import SingleNewsPage from './pages/singleNews'


import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/vines',
    element: <Vines/>, 
  },
  {
    path: '/shop',
    element: <Shops/>, 
  },
  {
    path: '/gallery',
    element: <Gallerys/>, 
  },
  {
    path: '/about',
    element: <About/>, 
  },
  {
    path: '/news',
    element: <NewsPage/>, 
  },
  {
    path: '/news/:id',
    element: <SingleNewsPage/>, 
  },
]);


ReactDOM.render(
  
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
