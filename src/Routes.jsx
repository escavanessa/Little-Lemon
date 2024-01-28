import api from './API.js';
import App from './App.jsx'
import Booking from '../Components/Booking.jsx'
import Confirmation from '../Components/Confirmation.jsx';

const Router = [
    {
      path: "/Little-Lemon",
      element: <App />,
    },
    {
      path: "/Little-Lemon/booking",
      element: <Booking api={api} /> ,
    },
    {
      path: "/Little-Lemon/confirmation",
      element: <Confirmation /> ,
    },
    
  ];

  export default Router