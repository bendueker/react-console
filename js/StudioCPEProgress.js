"use strict";
const { useState, useEffect } = React;
const { Steps, Divider } = antd;
const { Step } = Steps;

class StudioCPEProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });  
  };

  render() {
    const { current } = this.state;
    return (
      <Steps current={current} onChange={this.onChange} direction="vertical">
        <Step status="finish" title="Required Viewing Duration" description="Studio - eA Testing Webcast (5min)" />
        <Step status="error" title="Required Polls" description="Polling Question" />
        <Step status="error" title="Required Tests" description="Pass test after presentation" />        
      </Steps>
    );
  }
}
