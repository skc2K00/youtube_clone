import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Subscriptions from './Components/Subscriptions.jsx'
import VideoCards from './Components/VideoCards.jsx'
const Body = lazy(() => import('./Components/Body.jsx'))
const WatchVideo = lazy(() => import('./Components/WatchVideo.jsx'))
import You from './Components/You.jsx'
// import Body from './Components/Body.jsx'
// import WatchVideo from './Components/WatchVideo.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : '/',
        element : <VideoCards />
      },
      {
        path : "/watch/:id",
        element : <Suspense fallback={<p>loading</p>} ><WatchVideo /></Suspense>
      },
      {
        path : "/subscriptions",
        element : <Subscriptions />
      },
      {
        path : "/you",
        element : <You />
      }
    ],
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
