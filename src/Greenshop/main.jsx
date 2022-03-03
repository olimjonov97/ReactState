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
  constructor(props) {
    super(props)
    this.state = {
      count:0

    }
    this.minus=this.minus.bind(this)
  }
  minus = () => {
     this.setState({count:this.state.count-1})
   }
  render() {
    const plus = () => {
      this.setState({count:this.state.count+1})
    }
    return (
      <Container>
        <h1>React JS { this.state.count}</h1>
        <button onClick={this.minus}>-</button>
        <button onClick={plus}>+</button>
      </Container>
    );
  }
}
export default Main;
// {
//   this.state.data.map((value) => <Item value={value} />);
// }