import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import Features from './components/Features.jsx'
import LearnMore from './components/LearnMore.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}>
        <Route path='features' element={<Features />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='services' element={<Services />} />
      <Route path='learn' element={<LearnMore />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
