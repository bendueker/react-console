"use strict";
const { Layout, Row, Col } = antd;
const { Header, Footer, Content } = Layout;

class StudioLayoutSlides extends React.Component {
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
    console.log("hide");
    this.setState({
      showComponent: false,
    });
  }

  render() {
    {
      this.onColorChange();
    }

    return (
      <div>
        <Layout>
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
            }}
          >
            <Row>
              <Col xs={24} xl={16}>
                <StudioIFrame
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={"slideframe.htm"}
                ></StudioIFrame>
                <StudioDetails></StudioDetails>
              </Col>

              <Col xs={24} xl={8}>
                <div
                  style={{
                    margin: "0 12px",
                  }}
                >
                  <StudioVideo src={"Ryan-WCAG.mp4"}></StudioVideo>
                </div>
                {this.state.showComponent && (
                  <StudioPolling hidePollHandler={this.hidePoll} />
                )}
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
