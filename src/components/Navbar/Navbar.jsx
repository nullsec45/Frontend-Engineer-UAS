import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router'


const Container = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavbarEl = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  margin-right: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: 0.4s;
`;

const NavbarBrand = styled.div`
  margin-left: 1rem;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  margin: 1rem 0;
  padding-left: 0;

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
    `}

  @media (min-width: 768px) {
    display: flex !important;
    flex-direction: row;
    margin-right: 2rem;
  }
`;

const NavbarItem = styled.li`
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <Container>
      <NavbarEl>
        <Hamburger onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>

        <NavbarBrand>
          <h1>Covid ID</h1>
        </NavbarBrand>

        <NavbarList isOpen={isOpen}>
          <NavbarItem>
            <Link to="/">Global</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/indonesia">Indonesia</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/province">Province</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/about">About</Link>
          </NavbarItem>
        </NavbarList>
      </NavbarEl>
    </Container>
  );
};

export default Navbar;
