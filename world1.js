import React from "react";
import App from "./app";
import "./world1.css";

const style = {
  color: "pink"
};
class World1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this is text node"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "BABABABABBBABABAABBA"
    });
    style.fontSize = "24";
    style.color = "yellow";
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello World</h1>
        {this.state.text}
        <div> 测试</div>
        <textarea
          style={style}
          className="textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          defaultValue="123"
          value={this.state.text}
          onChange={this.handleClick}
        ></textarea>
      </div>
    );
  }
}
World1.defaultValue = {
  name: "王十三郎"
};
export default World1;
