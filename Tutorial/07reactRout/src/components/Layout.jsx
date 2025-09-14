import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/> // It is static 
    <Outlet/> // to change main page we use Outlet form reactt dom 
    <Footer/> // It is also static
    </>
  )
}

export default Layout