import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'

import Profile from './Components/PersonalComponents/Profile.jsx'
import LoginPage from './Components/PersonalComponents/LoginPage.jsx'
import DashBoard from './Components/PersonalComponents/DashBoard.jsx'
import Home from './Components/PersonalComponents/Home.jsx'

// creat router code here;
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'profile', Component: Profile },
      { path: 'login', Component: LoginPage },
      { path: 'dashBoard', Component: DashBoard },
    ]
  }
])

// contex code start hre;

export const MyContext = createContext();
const name = 'ar'

createRoot(document.getElementById('root')).render(


  <MyContext value={name}>
    <RouterProvider router={router}>

    </RouterProvider>
  </MyContext>


)
