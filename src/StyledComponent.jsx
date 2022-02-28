import React, { Component } from 'react';
// import { navbar } from './MockData';
import { Container, Title, Box, Input } from './style';
import GenericButton  from'./Button'

class StyledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className='container'>
        <h1>StyledComponent</h1>
        <Title>Styledtitle</Title>
        <Input />
        <GenericButton width={150} height={20}>Click me</GenericButton>
        <Box type='large'>large</Box>
        <Box type='medium'>medium</Box>
        <Box type='small'>small</Box>
      </Container>
    );
  }
}
export default StyledComponent;
