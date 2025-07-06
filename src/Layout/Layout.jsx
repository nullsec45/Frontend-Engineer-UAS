import React from 'react'
import {
    Navbar,
    Footer,
    Container,
    Hero
} from '../components'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
            <Container>
                {children}
            </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
