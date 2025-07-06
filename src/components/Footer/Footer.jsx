import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Navbar = styled.footer`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
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

  @media (min-width: 768px) {
    display: flex !important;
    flex-direction: row;
    margin-right: 2rem;
  }

  li {
    margin: 0.5rem 0;

    @media (min-width: 768px) {
      margin: 0 1rem;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Navbar>
        <NavbarBrand>
          <h1>Covid ID</h1>
          <p>Developed By NUllsec45</p>
        </NavbarBrand>

        <NavbarList>
          <li>
            <a href="">Global</a>
          </li>
          <li>
            <a href="">Indonesia</a>
          </li>
          <li>
            <a href="">Provinsi</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </NavbarList>
      </Navbar>
    </Container>
  );
};

export default Footer;
