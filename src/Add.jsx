import React from 'react';
import { add } from './functions';

class Add extends React.Component {
  render() {
    const { a, b } = this.props;
    return <div>add: {add(a, b)}</div>
  }
}

Add.defaultProps = {
  a: 0,
  b: 0
};

export default Add;
