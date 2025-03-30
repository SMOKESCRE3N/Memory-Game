import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter,createHashRouter} from "react-router-dom";
import Game from './components/Game/Game.jsx'
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
    <RouterProvider router={router} />
  </StrictMode>,
)
