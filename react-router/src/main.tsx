import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'

import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, useLoaderData } from 'react-router-dom'
import Home from './components/Home/Home.tsx'
import About from './components/About/About.tsx'
import Contact from './components/Contact/Contact.tsx'
import Github, { gitFollowers } from './components/Github/Github.tsx'
import Users from './components/Users/Users.tsx'
import Theme from './components/ThemeToggle/Theme.tsx'

// const router = createBrowserRouter([   // one method to create router
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="users/:id" element={<Users/>} />
      <Route path="github" element={<Github/>}  loader={gitFollowers} />
      <Route path="theme" element={<Theme/>} />
    </Route>
  )
);  // another method to create router
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
