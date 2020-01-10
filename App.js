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
    this.state = {
      count: 1
    };
  }
  componentWillMount() {
    this.setState({
      count: 13
    });
  }
  handleClick() {
    ReactDOM.render(<App />, document.getElementById("app"));
    // this.handleState();
  }
  handleState() {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log("state 改变了");
      }
    );
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        this is app {this.state.count}
        <Stateless />
      </div>
    );
  }
}
export default App;
