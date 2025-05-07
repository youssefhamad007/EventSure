import { useState } from 'react'
import './App.css'
import { Route, Routes,useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import NavbarHead from './components/Navbar'
import Home from './Pages/Home'
import Event from './Pages/Event'
import Login from './Pages/Login'
import { CartProvider } from './components/CartContext'
import Cart from './Pages/Cart'



function App() {
  const location = useLocation();
   /**
   * App Route Structure with Animated Page Transitions
   *
   * - Uses `react-router-dom` for routing and `framer-motion` for animated transitions between pages.
   * - `AnimatePresence` and `motion.div` handle enter/exit animations on route change.
   * - Routes:
   *    "/" or "/Home"   → Renders the Home page
   *    "/Event"         → Renders the Event page
   *    "/Login"         → Renders the Login page
   *    "/Cart"          → Renders the Cart page (wrapped in CartProvider context)
   * - All pages are wrapped in motion.div using shared `pageVariants` for smooth transition animations.
   * - `NavbarHead` is rendered globally on all pages.
   */
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 50,
      y: 20,
      scale: 0.97,
      overflowY: 'hidden',
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      overflowY: 'auto',
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      x: -50,
      y: 20,
      scale: 0.97,
      overflowY: 'hidden',
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };
  return (
    <CartProvider>
    <AnimatePresence mode="wait">
    <motion.div
    key={location.pathname}
    initial={{ opacity: 0, x: 50, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -50, scale: 0.98 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
    <NavbarHead></NavbarHead>
    
      <Routes location={location} key={location.pathname}>
      <Route
          path="/Home"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/Event"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Event />
            </motion.div>
          }
        />
        <Route
          path="/Login"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/Cart"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Cart />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Home />
            </motion.div>
          }
        />
      </Routes>
      
    </motion.div>
    </AnimatePresence>
    </CartProvider>
  )
}

export default App
