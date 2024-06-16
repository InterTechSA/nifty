import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #002244;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: #037B4A;
    border-radius: 5px;
  }
`;

const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {

  return (
    <Nav>
      <NavLogo to="/">Nifty</NavLogo>
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
