"use strict";
const { Tabs } = antd;
const { useState, useEffect } = React;

const { TabPane } = Tabs;

class StudioTabs extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    function LoadChat(params) {
      LoadGroupChat();
    }

    return (
      <Tabs
        style={{
          margin: "0 24px",
          background: "#fff",
          height: "500px",
        }}
      >
        <TabPane tab="Chat" key="1">
          <div id={"ChatIframeContainer"}></div>
        </TabPane>
        <TabPane tab="Transcription" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Questions" key="3">
          Content of Tab Pane 3
        </TabPane>
        {LoadChat()}
      </Tabs>

    );
  }
}


