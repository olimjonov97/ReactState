import React, { Component } from 'react';
import { Button } from './style';

class GenericButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { width, height } = this.props
    const {children}=this.props
    return <Button width={width} height={height}>{children}</Button>;
  }
}
export default GenericButton;
