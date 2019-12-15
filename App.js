import React from "react";
import World from "./world";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log('xxxxx')
  }
  render(){
    return (
      <div>
           <World onClick={this.handleClick} />             Hello World!          
      </div>
    );
  }
}

export default App;
