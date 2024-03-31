import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';
import Statistics from './Component/Statistics/Statistics.jsx';
import Application from './Component/Application/Application.jsx';
import ErrorComponent from './Component/ErrorComponent/ErrorComponent.jsx';
 
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorComponent></ErrorComponent>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path :'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/application',
        element:<Application></Application>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
