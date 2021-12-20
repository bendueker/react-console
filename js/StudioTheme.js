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

const dark = {
  color: {
    primaryColor: "#fff",
    headingColor: "#fff",
    errorColor: "#fff",
    warningColor: "#faad14",
    successColor: "#52c41a",
    infoColor: "#1890ff",
    textColor: "#000000",
    iconColor: "#ffffff",
  },
};

class StudioTheme extends React.Component {
  constructor(props) {
    super(props);
    this.setColor = this.setColor.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      color: {
        primaryColor: "#ffffcc",
        headingColor: "#000000",
        errorColor: "#ff4d4f",
        warningColor: "#faad14",
        successColor: "#52c41a",
        infoColor: "#1890ff",
        textColor: "#000000",
        iconColor: "#ffffff",
        layoutBodyBackground: "#000",
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
      prefixCls: "ant",
      theme: mergedNextColor,
    });
  }

  attachColor = (elem, id) => {
    var myPicker = new JSColor(id, {
      onChange: () =>
        this.onColorChange({ [elem.id]: elem.value.toString() }),
    });
    //var myPicker = new JSColor(id, {onChange: () => {}})
  };

  componentDidMount = () => {
    const elem = document.getElementById("primaryColor");
    this.attachColor(elem, "#primaryColor");
    const elem2 = document.getElementById("infoColor");
    this.attachColor(elem2, "#infoColor");
  };

  render() {
    /*     const ColorPicker = ({ color }) => (
        <Input
          onChange={({ e }) => {
            this.onColorChange({
              primaryColor: event.target.value,
            });
          }}
          value={props.color}
          id="primaryColor"
          data-js-color="{}"
        />

    ); */

    return (
      <div className=".theme-box">
        <Input
          value={this.state.color.primaryColor}
          id="primaryColor"
        />



        <Input
          value={this.state.color.infoColor}
          id="infoColor"
        />


      </div>
    );
  }
}
