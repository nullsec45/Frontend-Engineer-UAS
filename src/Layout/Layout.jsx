import React from 'react'
import {
    Navbar,
    Footer,
    Container,
    Hero
} from '../components'
import styled from 'styled-components';


const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`;


const Layout = ({children,showHero=true}) => {
  return (
    <>
      <Root>
        <Navbar />
        {showHero && Hero && <Hero />}
        <Main>{children}</Main>
        <Footer />
    </Root>
    </>
  )
}

export default Layout
