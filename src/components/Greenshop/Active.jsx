import React, { Component } from 'react';
import {
  Container,
  Card,
  Image,
  Left,
  Right,
  SearchIcon,
  HeartIcon,
  ShoppingIcon,
  Cardwrapper,
  OptionImage,
} from './GreenShopStyle';
import { Flowers } from '../MockData';
import Item from './card';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Flowers,
      selected: null,
      id:0,
    };
  }

  render() {
    const getSelect = (selected) => {
      this.setState({ selected });
    };
    const findID = (value) => {
      console.log(value.id);
      this.setState({
        id:value.id-1
      })
    }
    console.log(this.state.selected);
    return (
      <Container>
        <Left>
          {this.state.data.map((value) => (
            <Card key={value.id} onClick={() => getSelect(value)}>
              <Image src={value.src[0].src} />.<h3>{value.name}</h3>
              <h4>$ {value.price}</h4>
            </Card>
          ))}
        </Left>
        <Right>
          <div>
            <h2>Options</h2>
            {this.state.selected?.src.map((value) => {
              return <OptionImage onClick={ ()=>findID(value)}src={value.src} />
            })}
          </div>
          <div>
            {this.state.selected ? (
              <Card>
                <Image src={this.state.selected.src[this.state.id].src} />.
                <h3>{this.state.selected.name}</h3>
                <h4>$ {this.state.selected.price}</h4>
              </Card>
            ) : (
              <h2>Not Selected</h2>
            )}
          </div>
        </Right>
      </Container>
    );
  }
}
export default Active;
