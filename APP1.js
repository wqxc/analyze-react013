import React from "react";
class APP1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("world1");
  }
  render() {
    return <div>这里是测试React的跟组件切换</div>;
  }
}

export default APP1;
