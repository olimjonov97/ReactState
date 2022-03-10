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

class Item extends Component {
  state = {
    count: 1,
  };
  render() {
    const { value } = this.props;
    return (
      <Card>
        <Image src={value.src} />
        <h1>{value.name}</h1>
        <h3>$ {value.price}</h3>
        <h2>
          Count:{this.state.count}
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>{' '}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>{' '}
        </h2>
        <Cardwrapper className='icon'>
          <ShoppingIcon />
          <HeartIcon />
          <SearchIcon />
        </Cardwrapper>
      </Card>
    );
  }
}
export default Item;
