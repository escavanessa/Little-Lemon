import api from './API.js';
import App from './App.jsx'
import Booking from '../Components/Booking.jsx'
import Confirmation from '../Components/Confirmation.jsx';

const Router = [
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
    
  ];

  export default Router