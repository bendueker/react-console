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
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.myEffect = this.myEffect;
    this.state = {
      color: {
        primaryColor: "#26afc9",
        headingColor: "#000000",
        errorColor: "#ff4d4f",
        warningColor: "#faad14",
        successColor: "#52c41a",
        infoColor: "#ffffff",
        textColor: "#000000",
        iconColor: "#ffffff",
        layoutBodyBackground: "#000",
      },
      stylePath: "dark.css",
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
      prefixCls: "studio",
      theme: mergedNextColor,
    });
  }

  attachColor = (elem, id) => {
    var myPicker = new JSColor(id, {
      onChange: () => this.onColorChange({ [elem.id]: elem.value.toString() }),
    });
  };

  componentDidMount = () => {
    const elem = document.getElementById("primaryColor");
    this.attachColor(elem, "#primaryColor");
    const elem2 = document.getElementById("infoColor");
    this.attachColor(elem2, "#infoColor");
  };

  handleButtonClick = () => {
    this.state.stylePath = "dark.css";
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "dark.css";

    head.appendChild(link);
  };

  /*   myEffect = useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = stylePath;

    head.appendChild(link);

    return () => { head.removeChild(link); }

  }, []);
   */

  render() {
    return (
      <div className=".theme-box">
        <Input value={this.state.color.primaryColor} id="primaryColor" />

        <Input value={this.state.color.infoColor} id="infoColor" />

        <Button onClick={this.handleButtonClick}>Dark Mode</Button>
      </div>
    );
  }
}

/* 

  const [ stylePath, setStylePath ] = useState("dark.css");
    
  const handleButtonClick = () => {
    setStylePath({stylePath: 'style2.css'});
  }

  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = stylePath;

    head.appendChild(link);

    return () => { head.removeChild(link); }

  }, [stylePath]);

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Click to update stylesheet
      </button>
    </div>
  );
}; */
