import React from "react";
import World2 from "./world2";
class World1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("world1");
  }
  render() {
    return (
      <button onClick={this.handleClick}>
                      <div>this is World1 </div>
        {/* <World2 />      */}
      </button>
    );
  }
}

export default World1;
