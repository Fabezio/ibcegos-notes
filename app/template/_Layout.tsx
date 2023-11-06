import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Outlet } from '@remix-run/react'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Layout