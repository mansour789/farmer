import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
        <>
      <div className="progress">
        <div className="indeterminate" />
      </div>
        <h3>We are processing you photo, Please hold on</h3>
        </>
    );
  }
}

export default Loading;
