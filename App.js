import React from "react";
import World from "./world";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("APPPPPP");
  }
  render() {
    return (
      <div>
           <World />             Hello World!          
      </div>
    );
  }
}

export default App;
