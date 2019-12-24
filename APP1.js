import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
class APP1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    ReactDOM.render(<App />, document.getElementById("app"));
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        这里是测试React的跟组件切换，从app上切换到app1 点击切换回app1
      </div>
    );
  }
}

export default APP1;
