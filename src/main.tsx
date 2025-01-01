import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar'
import './index.css'
import ScrollToTop from './Components/ScrolltoTop.tsx'
import App from './App.tsx'
import Footer from './Components/Footer.tsx'
import About from './Pages/About.tsx'
import Courses from './Pages/Courses.tsx'
import Contact from './Pages/Contact.tsx'
import Login from './Pages/Login.tsx'
import Signup from './Pages/Signup.tsx'
import Pricingpage from './Pages/Pricingpage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><ScrollToTop /><Navbar /> <App /><Footer /></>,
    errorElement: <div>404</div>,
  },
  {
    path: '/about',
    element: <><ScrollToTop /><Navbar /> <About /> <Footer /></>,
  },
  {
    path: '/courses',
    element: <><ScrollToTop /><Navbar /> <Courses /> <Footer /></>,
  },
  {
    path: '/pricing',
    element: <><ScrollToTop /><Navbar /> <Pricingpage /> <Footer /></>,
  },
  {
    path: '/contact',
    element: <><ScrollToTop /><Navbar /> <Contact /> <Footer /></>,
  },
  {
    path: '/login',
    element: <><ScrollToTop /><Navbar /> <Login /> <Footer /></>,
  },
  {
    path: '/signup',
    element: <><ScrollToTop /><Navbar /> <Signup /> <Footer /></>,
  },

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
