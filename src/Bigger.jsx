import React from 'react';
import { getBiggerNum } from './functions';

class Bigger extends React.Component {
  render() {
    const { a, b } = this.props;
    return <div>getBiggerNum: {getBiggerNum(a, b)}</div>
  }
}

export default Bigger;
