import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Booking from '../Components/Booking.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import api from './API.js';
import Confirmation from '../Components/Confirmation.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "booking",
    element: <Booking api={api} /> ,
  },
  {
    path: "confirmation",
    element: <Confirmation /> ,
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
