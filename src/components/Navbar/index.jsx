import React from 'react';
import { Container } from './style';

const Navbar = (props) => {
     return (
    <Container>
      <h1>Webbain Academy Count:{props.count}</h1>
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Contacts</h3>
      <h3>Services</h3>
      <h3>Profile</h3>
    </Container>
  );
};

export default Navbar;
