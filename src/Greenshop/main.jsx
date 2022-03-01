import React, { Component } from 'react';
import {
  Container,
  Card,
  Image,
  SearchIcon,
  HeartIcon,
  ShoppingIcon,
  Cardwrapper,
} from './GreenShopStyle';
import { Flowers } from '../MockData';
import Item from './card';

class Main extends Component {
  state = {
    data: Flowers,
    count: 1,
  };
  render() {
    return (
      <Container>
        {this.state.data.map((value) => (
          <Item value={ value}/>
          ))}
      </Container>
    );
    
  }
}
export default Main;
