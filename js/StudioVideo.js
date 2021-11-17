"use strict";
const { Tabs } = antd;
const { useState, useEffect } = React;


class StudioVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <video width={"100%"} controls={true} src="https://qa.onlinexperiences.com/customvts/Prototypes/Lighthouse/lighthouse-rp-v4/Noteworthey.mp4"></video>
    );
  }
}

customElements.define("StudioVideo", StudioVideo);
