import React,{useContext} from 'react';
import { Container } from './style';
import { FlowersContext } from '../../context';

const Navbar = (props) => {
  const [data] = useContext(FlowersContext);
  console.log('Navbar',data);
     return (
    <Container>
      <h1>Webbain Academy Count:{data.length}</h1>
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Contacts</h3>
      <h3>Services</h3>
      <h3>Profile</h3>
    </Container>
  );
};

export default Navbar;
