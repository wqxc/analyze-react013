import React from "react";
import World1 from "./world1";
class World extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("world");
  }
  render() {
    return (
      <div>
        <div>this is world</div>
        <World1 />
      </div>
    );
  }
}

export default World;
