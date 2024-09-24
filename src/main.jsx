import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import SignUp from "./pages/SignUp";
import AboutUS from "./pages/AboutUS";

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login.jsx';
import Layout from './Layout.jsx';


const router = createBrowserRouter([
  {
       path: "/",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <App />,
          },
          {
            path: "sign-up",
            element: <SignUp />,
          },
          {
            path: "/login",
            element: <Login />,
          },
    
          {
            path: "about-us",
            element: <AboutUS/>,
          },
          
          
       
        ]
      },
      

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
