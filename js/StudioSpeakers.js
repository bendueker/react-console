"use strict";
const { Tabs } = antd;
const { useState, useEffect } = React;
const { List, Avatar } = antd;


class StudioSpeakers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onChange = (e) => {
      console.log("Change:", e.target.value);
    };



/*     const data = [
      {
        title: "Ben Chodor",
        avatar:
          "https://files.onlinexperiences.com/FileLibrary/5948/6/Ben_Chodor_Studio.jpg",
        description: "President",
      },
      {
        title: "Dan Lotzof",
        avatar:
          "https://files.onlinexperiences.com/FileLibrary/5948/6/speaker-dlotzof.jpg",
        description: "SVP, Revenue & Chief of Staff",
      },
      {
        title: "Erik Carlson",
        avatar:
          "https://files.onlinexperiences.com/FileLibrary/5948/6/Erik_Carlson.png",
        description: "Chief Financial Officer",
      },


      ARRAY: "g_aStafferList"
Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam dui nec euismod efficitur. Aenean turpis eros, volutpat pulvinar nisi ac, vehicula iaculis eros. Donec nec erat eu risus lacinia sollicitudin. Vestibulum efficitur faucibus urna, at facilisis est dapibus vel. Donec consectetur purus at diam egestas tincidunt. Morbi vel faucibus turpis, at consequat elit. Cras vehicula elit purus, rhoncus fermentum mi placerat id. Duis lacinia eleifend urna non eleifend. Aenean sed tempus magna, eu hendrerit orci. Sed elementum ac erat vitae laoreet. Nam pellentesque luctus nulla ut dictum. Vivamus lacinia egestas tempor.\n\nCras suscipit sit amet risus et pulvinar. Vivamus placerat cursus rutrum. Praesent mollis urna nec lacus mattis posuere. Cras vitae pretium tellus, ut gravida neque. In hac habitasse platea dictumst. Vestibulum condimentum, diam a tristique accumsan, dui enim porttitor dolor, ut finibus ligula purus ut lorem. Duis viverra massa non neque gravida pharetra.\n\nFusce in justo ut purus vulputate porta. Nulla maximus, sapien sit amet dignissim vehicula, ipsum neque pharetra neque, ut hendrerit ipsum quam faucibus diam. Donec mollis, orci bibendum fringilla convallis, orci nulla pharetra augue, sit amet convallis ex ipsum non ante. Maecenas ipsum purus, pellentesque id lorem sed, porttitor vehicula ipsum. Curabitur dignissim dui tellus, sit amet vulputate magna dictum non. Mauris aliquam volutpat diam. Aliquam sit amet hendrerit ligula. Ut consectetur augue felis, id vehicula quam sagittis quis. Integer dapibus enim vel consectetur iaculis. Nunc vestibulum ac massa a convallis. Maecenas vulputate, orci nec dignissim semper, tellus magna semper massa, iaculis rhoncus turpis ex at neque. In sed mattis magna."
CompanyName: "Northwestern Medicine"
DisplayOrder: 1
EmoticonImage: "https://qa.onlinexperiences.com/FileLibrary/522/6/Jamie_Rush.jpg"
JobTitle: "Doctor of Physcian Science"
Name: "Jamie Rush"
OBJE: 0
OBJS: 0

test

    ]; */

const data = oData.ResultSet[25];

    return (
      <div>
      <h2
        style={{
          margin: "24px 12px 0 12px",
        }}
      >
        Speakers
      </h2>
      <List
        style={{
          margin: "24px 12px 0 12px",
        }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.EmoticonImage}
                  size={{
                    xs: 40,
                    sm: 40,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                  }}
                  alt={item.Name}
                />
              }
              title={item.Name}
              description={item.JobTitle}
            />
          </List.Item>
        )}
      ></List>
    </div>
    );
  }
}


