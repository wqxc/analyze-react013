import React from "react";
import World1 from "./world1";
class World extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 1
    };
  }
  handleClick() {
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
    return (
      <div onClick={this.handleClick}>
        <div>this is world </div>
        {/* <World1 /> */}
      </div>
    );
  }
}

export default World;
