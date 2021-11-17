"use strict";
const { Tabs } = antd;
const { useState, useEffect } = React;


class StudioVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <video width={"100%"} controls={true} src={this.props.src}></video>
    );
  }
}


