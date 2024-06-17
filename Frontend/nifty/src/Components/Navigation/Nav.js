import React from 'react';
import { Nav, NavLink, Container } from '../../Common/Styles/Styles'

const Navbar = () => {

  return (
    <Nav>
      <NavLink to="/">Nifty</NavLink>
      <Container>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </Container>
    </Nav>
  );
};

export default Navbar;
