import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, RouterProvider,createBrowserRouter,createHashRouter} from "react-router-dom";
import{BrowserRouter} from 'react-router-dom';
import Game from './components/Game/Game.jsx';
import Grid from './components/Grid/Grid.jsx'
import Home from './components/Home/Home.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,  
  },
  {
    path:"play",
    element:<Game/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter basename="/Memory_Game/"> 
    <RouterProvider router={router} />
  </BrowserRouter>
  </StrictMode>,
)
