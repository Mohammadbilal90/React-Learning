import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Awards from './components/Awards';
import Resources from './components/Resources';
import Contact from './components/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: '/services',
    element: (
      <>
        <Navbar />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: '/products',
    element: (
      <>
        <Navbar />
        <Products />
        <Footer />
      </>
    ),
  },
  {
    path: '/awards',
    element: (
      <>
        <Navbar />
        <Awards />
        <Footer />
      </>
    ),
  },
  {
    path: '/resources',
    element: (
      <>
        <Navbar />
        <Resources />
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
