import React from "react";
import World from "./world";
import ReactDOM from "react-dom";
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
    ReactDOM.render(<World />, document.getElementById("app1"));
    this.handleState();
    this.handleState();
    this.handleState();
  }
  handleState() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleClickAPP1() {
    ReactDOM.render(<World1 />, document.getElementById("app1"));
  }
  fileChange(file) {
    console.log("file", file.nativeEvent);
  }
  render() {
    return (
      <div onClick={this.handleClick}>
           <World />             Hello World!   {this.state.count}
        <input type="file" onChange={this.fileChange} name="" id="" />
        <div onClick={this.handleClickAPP1} id="app1"></div>
      </div>
    );
  }
}

export default App;
