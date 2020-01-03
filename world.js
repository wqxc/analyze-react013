import React from "react";
import World1 from "./world1";
import APP from "./App";
import ReactDOM from "react-dom";
class World extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 1
    };
  }
  handleClick() {
    ReactDOM.render(<APP />, document.getElementById("app"));
    console.log("world");
    this.setState({
      count: 12
    });
    this.setState({
      count: 123
    });
    this.setState({
      count: 1234
    });
  }
  render() {
    // return null;
    return (
      <div onClick={this.handleClick}>
        this is world
        {/* <div>this is world </div> */}
        {/* <World1 /> */}
      </div>
    );
  }
}

export default World;
