import React from "react";
import App from "./app";
class World1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {}
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
