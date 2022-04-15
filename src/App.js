import React from 'react';

class App extends React.Component {

  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log("constrcutor called");
  }
  componentDidMount() {
    console.log("didMount called");
  }
  componentDidUpdate() {
    console.log("didUpdate called");
  }

  componentWillUnmount() {
    console.log("willUnmount called");
  }

  add = () => {
    this.setState(currentState => ({ count: currentState.count + 1 }));
  }
  minus = () => {
    this.setState(currentState => ({ count: currentState.count - 1 }));
  }
  render() {
    console.log("render called");
    return <div>
      <h1>The number is: {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>;
  }
}
export default App;
