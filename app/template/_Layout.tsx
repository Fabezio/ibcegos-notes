import React from 'react'
import Navbar from './Navbar'
// import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Outlet } from '@remix-run/react'
import { Container, Nav } from 'react-bootstrap'

const Layout = () => {
  const background='dark'
  // const theme="dark"
  return (
    <>
      <Navbar background={background} theme="dark" >
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/about">À Propos</Nav.Link>
      </Navbar>
      {/* <Header /> */}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <Footer background={background} theme='light'>
        <div>Footer</div>
      </Footer>
    </>
  )
}

export default Layout