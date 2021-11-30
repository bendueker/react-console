"use strict";
const { Tabs } = antd;
const { useState, useEffect } = React;


class StudioIFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <iframe width={"100%"} height={"500px"} frameBorder={0}  src={this.props.src}></iframe>
    );
  }
}


