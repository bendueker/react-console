"use strict";
const { Layout, Row, Col } = antd;
const { Header, Footer, Content } = Layout;
//const {Animate} = rc-animate

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

class StudioLayout extends React.Component {
  constructor(props) {
    super(props);
    this.windowDimensions = getWindowDimensions();
    this.onColorChange = this.onColorChange.bind(this);
    this.showPoll = this.showPoll.bind(this);
    this.hidePoll = this.hidePoll.bind(this);
    this.state = {
      showComponent: false,
    };
  }

  onColorChange() {
    ConfigProvider.config({
      prefixCls: "studio",
      theme: {
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
    });
  }

  showPoll() {
    this.setState({
      showComponent: true,
    });
  }

  hidePoll() {
    console.log("hide")
    this.setState({
      showComponent: false,
    });
  }

  //const [darkMode, setDarkMode] = useState(false);

  render() {
    return (
      <div>
        {this.onColorChange()}
        <Layout
          //className="dark-mode"
          style={{
            height: "97vh",
            overflowY: "hidden",
          }}
        >
          <Header
            className="ovr_bg"
            style={{
              padding: "2px",
            }}
          >
            <StudioHeader></StudioHeader>
          </Header>
          <Content
            style={{
              margin: "12px",
              /*             background: "#fff", */
            }}
          >
            <Row>
              <Col
                xs={24}
                xl={16}
                style={
                  {
                    //overflowY: "auto",
                  }
                }
              >
                <StudioVideo
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={
                    "Ryan-WCAG.mp4"
                  }
                ></StudioVideo>
                <StudioDetails></StudioDetails>
              </Col>

              <Col xs={24} xl={8}>
               {this.state.showComponent && <StudioPolling hidePollHandler={this.hidePoll} />}
                <StudioTabs></StudioTabs>
              </Col>
            </Row>
          </Content>
        
        </Layout>
        <Button onClick={this.showPoll}>Poll</Button>
      </div>
    );
  }
}
