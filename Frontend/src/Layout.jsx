import React from 'react'
import Header from './components/Header/index'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/index'
function Layout() {
  return (
    < >
      <Header />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout