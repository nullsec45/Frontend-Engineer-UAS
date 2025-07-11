import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #06d6a0;
  padding: 1rem;
  color: white;
  /* HAPUS position sticky */
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const NavbarBrand = styled.div`
  margin-left: 1rem;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding-left: 0;
  margin-right: 2rem;

  li {
    margin: 0 1rem;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
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
            <a href="/">Global</a>
          </li>
          <li>
            <a href="/indonesia">Indonesia</a>
          </li>
          <li>
            <a href="/province">Provinsi</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </NavbarList>
      </Navbar>
    </Container>
  );
};

export default Footer;
