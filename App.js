import React from "react";
import World1 from "./world1";
import World from "./world";
import App1 from "./APP1";
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
    // ReactDOM.render(<World />, document.getElementById("app"));
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
    ReactDOM.render(<App1 />, document.getElementById("app"));
  }
  fileChange(file) {
    console.log("file", file.nativeEvent);
  }
  render() {
    // return null;
    return (
      <div onClick={this.handleClick}>
        <World1 />
        {/* <World />
                      this is app   {this.state.count}
        <input type="file" onChange={this.fileChange} name="" id="" /> */}
        {/* <div onClick={this.handleClickAPP1} id="app1">
          切换到App1
        </div> */}
      </div>
    );
  }
}

export default App;
