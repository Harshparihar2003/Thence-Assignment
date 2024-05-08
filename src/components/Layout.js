import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      {isHomePage && <Navbar />}
      {children}
      <Outlet />
    </>
  )
}

export default Layout
