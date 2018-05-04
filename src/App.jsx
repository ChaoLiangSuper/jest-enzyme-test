import React from 'react';
import Add from './Add';
import Bigger from './Bigger';

class App extends React.Component {
  render() {
    const a = 1;
    const b = 3;
    const props = { a, b };
    return (
      <React.Fragment>
        <Add {...props} />
        <Bigger {...props} />
      </React.Fragment>
    );
  }
}

export default App;
