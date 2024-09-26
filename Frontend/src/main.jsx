import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import './index.css'
import ErrorPage from './components/ErrorPage/index.jsx';
import Home from './components/Home/index.jsx';
import Layout from './Layout.jsx';
import About from './components/About/index.jsx';
import Events from './components/Events/index.jsx';
import Contact from './components/Contact/index.jsx';
import Internships from './components/Intrenships/index.jsx';
import SupportUs from './components/SupportUs/index.jsx';

// Routers
const router =createBrowserRouter([
  {
    path :'/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/events',
        element: <Events />
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:'/internships',
        element: <Internships />
      },
      {
        path:'/supportus',
        element: <SupportUs />
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
