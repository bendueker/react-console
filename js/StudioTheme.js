"use strict";
const {
  ConfigProvider,
  Tag,
  Mentions,
  Steps,
  Button,
  Radio,
  Space,
  Form,
  Input,
  Row,
  Col,
  Typography,
  Menu,
  Dropdown,
  Divider,
  Pagination,
  Select,
  Checkbox,
  DatePicker,
  TimePicker,
  InputNumber,
  Slider,
  Switch,
  TreeSelect,
  Card,
  Table,
  Tabs,
  Timeline,
  Tree,
  Alert,
  Progress,
  Spin,
  Transfer,
} = antd;
const { DownOutlined, MailOutlined, SettingOutlined, ClockCircleOutlined } =
  icons;
const { useState, useEffect } = React;


const { TabPane } = Tabs;

class StudioTheme extends React.Component {
  constructor(props) {
    super(props);
    this.setColor = this.setColor.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      color: {
        primaryColor: "#1890ff",
        headingColor: "#000000",
        errorColor: "#ff4d4f",
        warningColor: "#faad14",
        successColor: "#52c41a",
        infoColor: "#1890ff",
        textColor: "#000000",
      },
    };
  }

  setColor(values) {
    this.setState({ color: values });
  }

  onColorChange(nextColor) {
    const mergedNextColor = {
      ...this.state.color,
      ...nextColor,
    };
  
    this.setColor(mergedNextColor);
    ConfigProvider.config({
      theme: mergedNextColor,
    });
  }

  render() {
    return (
      <div>
        <Input
          onChange={({ e }) => {
            this.onColorChange({
              textColor: event.target.value,

            });
          }}
        />

        <span style={{ color: "var(ant-text-color)" }}>
          var(`--text-color`)
        </span>
      </div>
    );
  }
}
