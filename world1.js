import React from "react";

class World1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log('world')
  }
  render() {
    return <button onClick={this.handleClick}>              this is World          </button>;
  }
}

export default World1;
