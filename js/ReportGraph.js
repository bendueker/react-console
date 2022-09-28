"use strict";
const { Button, Tooltip } = antd;
const { useState, useEffect } = React;
const { TinyLine } = G2Plot;

const data = [
  264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
  546, 983, 340, 539, 243, 226, 192,
];

class ReportGraph extends React.Component {
  constructor(props) {
    super(props);
    this.asyncFetch = this.asyncFetch.bind(this);
  }

  asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  render() {
    const tinyLine = new TinyLine("#report-container", {
      container:"#report-container",
      height: 60,
      autoFit: false,
      data,
      smooth: true,
      tooltip: false,
      annotations: [
        // 平均值
        {
          type: "line",
          start: ["min", "mean"],
          end: ["max", "mean"],
          text: {
            content: "平均值",
            offsetY: -2,
            style: {
              textAlign: "left",
              fontSize: 10,
              fill: "rgba(44, 53, 66, 0.45)",
              textBaseline: "bottom",
            },
          },
          style: {
            stroke: "rgba(0, 0, 0, 0.25)",
          },
        },
        {
          type: "line",
          start: ["min", 800],
          end: ["max", 800],
          text: {
            content: "目标值",
            offsetY: -2,
            style: {
              textAlign: "left",
              fontSize: 10,
              fill: "rgba(44, 53, 66, 0.45)",
              textBaseline: "bottom",
            },
          },
          style: {
            stroke: "rgba(0, 0, 0, 0.55)",
          },
        },
      ],
    });

    tinyLine.render();
  }
}
