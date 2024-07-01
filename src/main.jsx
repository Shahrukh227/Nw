import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router/App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Cardlist from './Components/Cardlist.jsx'
import Forms from './Components/Forms.jsx'
// import { SocialAction } from './Components/Forms.jsx'


const router = createBrowserRouter([{
  path: "/" , element : <App/> , children : [{
    path : "/" , element : <Cardlist/>},
{path: "/createpost" , element : <Forms/>}]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
