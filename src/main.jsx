import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import equipos from './data/equipos.js'
//importamos router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProyectoVistas from "./views/ProyectoVistas.jsx"



const router = [
  {
    path: "/",
    element: <App></App>
  },
];

equipos.forEach((len)=>{
  router.push({
    path: len.nproyecto,
    element: <ProyectoVistas len = {len}></ProyectoVistas>,
  });
});

const routes = createBrowserRouter(router)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
