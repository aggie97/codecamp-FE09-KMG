import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("없어지기 전에 실행");
  }

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState((prev: { count: number }) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    console.log("채팅방을 나갑니다.");
    void Router.push("/");
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}
