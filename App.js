import React from "react";
import World from "./world";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.state = {
      count: 1
    };
  }
  handleClick() {
    this.handleState();
    this.handleState();
    this.handleState();
  }
  handleState() {
    this.setState({
      count: this.state.count + 1
    });
  }
  fileChange(file) {
    console.log("file", file.nativeEvent);
  }
  render() {
    return (
      <div onClick={this.handleClick}>
           <World />             Hello World!   {this.state.count}
        <input type="file" onChange={this.fileChange} name="" id="" />
      </div>
    );
  }
}

export default App;
