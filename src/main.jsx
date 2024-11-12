import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter} from 'react-router-dom'
import Home from "../src/pages/Home.jsx"
import About from "./pages/About.jsx"
import Practice from "./pages/Practice.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,

      },{
        path:"/about",
        element:<About/>
      },{
        path:"/practice",
        element:<Practice/>
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
