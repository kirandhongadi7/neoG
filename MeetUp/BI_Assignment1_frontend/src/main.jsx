import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import EventDetails from './pages/EventDetails.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />
},
{
  path: "/events/:eventId",
  element: <EventDetails />
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
