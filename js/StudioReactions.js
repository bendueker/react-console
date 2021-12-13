"use strict";
const { Button, Tooltip } = antd;
const { useState, useEffect } = React;
const { LikeFilled, SmileFilled, HeartFilled } = icons;

class StudioReactions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tooltip title="Like">
          <Button
            style={{
              margin: "0 8px 0 0",
            }}
            type="primary"
            size="large"
            shape="circle"
            icon={<LikeFilled />}
          />
        </Tooltip>

        <Tooltip title="Smile">
          <Button
            style={{
              margin: "0 8px 0 0",
              backgroundColor:"#ffc107",
              color:"#fff"              
            }}
            type="primary"
            size="large"
            shape="circle"
            icon={<SmileFilled />}
          />
        </Tooltip>
        <Tooltip title="Love">
          <Button
            style={{
              margin: "0 8px 0 0",
              backgroundColor:"#f44336",
              color:"#fff"
            }}
            size="large"
            shape="circle"
            icon={<HeartFilled />}
          />
        </Tooltip>

      </div>
    );
  }
}
