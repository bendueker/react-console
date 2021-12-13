"use strict";
const { useState, useEffect } = React;
const { List, Avatar, Space } = antd;
const { FilePdfOutlined } = icons;

class StudioHandouts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onChange = (e) => {
      console.log("Change:", e.target.value);
    };

    /*
AttachmentKey: 125961
Description: "Technical Solutions Team Technical Solutions Team"
FileName: "HomeBanner_1280.jpg"
FileSize: "27 KB"
FileTypeImage: "/cfr/Images/FileTypes/Lib4/150x150/FileType_IMAGE.png"
MAP: "M125961"
SortOrder: 0
Title: "Technical Solutions Team "
Type: 1
VAR: "g_oHandouts"
    
    */

    //
    const data = oData.ResultSet[8];

    const ListTextBlock = ({ description, filesize }) => (
      <Space direction="vertical">
        {description}
        {filesize}
      </Space>
    );

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
                  <Avatar
                    icon={<FilePdfOutlined />}
                    size={{
                      xs: 40,
                      sm: 40,
                      md: 40,
                      lg: 64,
                      xl: 80,
                      xxl: 100,
                    }}
                    alt={item.Name}
                    type="primary"
                  />
                }
                description={
                  <ListTextBlock
                    description={item.Description}
                    filesize={item.FileSize}
                  ></ListTextBlock>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
