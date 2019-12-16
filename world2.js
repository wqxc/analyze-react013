import React from "react";

class World2 extends React.Component {
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
                      <div>this is World2 </div>
      </button>
    );
  }
}

export default World2;
