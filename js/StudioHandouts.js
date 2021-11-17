"use strict";
const { useState, useEffect } = React;
const { List, Avatar } = antd;
const { FilePdfOutlined } = icons;

class StudioHandouts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onChange = (e) => {
      console.log("Change:", e.target.value);
    };

    const data = [
      {
        title: "Ant Design Title 1",
      },
      {
        title: "Ant Design Title 2",
      },
      {
        title: "Ant Design Title 3",
      },
      {
        title: "Ant Design Title 4",
      },
    ];

    return (
      <div>
        <h2
          style={{
            margin: "12px",
          }}
        >
          Handouts
        </h2>
        <List
          style={{
            margin: "12px",
          }}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <FilePdfOutlined
                    style={{
                      fontSize: "40px",
                    }}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}


