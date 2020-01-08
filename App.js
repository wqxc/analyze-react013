import React from "react";
import World1 from "./world1";
import World from "./world";
import Stateless from "./stateless";
import App1 from "./APP1";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.state = {
      count: 1
    };
  }
  componentWillMount() {
    // console.log("this is  componentWillMount");
    this.setState({
      count: 12
    });
    this.setState({
      count: 13
    });
  }
  handleClick() {
    // ReactDOM.render(<World />, document.getElementById("app"));
    this.handleState();
    this.handleState();
    this.handleState();
  }
  handleState() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    // return null;
    return <div onClick={this.handleClick}>this is app {this.state.count}</div>;
  }
}

export default App;
