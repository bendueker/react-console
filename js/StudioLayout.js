"use strict";
const { Layout, Row, Col } = antd;
const { Header, Footer, Content } = Layout;



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
  }

  const [darkMode, setDarkMode] = useState(false);

  render() {
    return (
    <div className={`App ${darkMode && "dark-mode"}`}>
      <Layout
        className="layout-body-background"
        style={{
          height: "97vh",
          overflowY: "hidden",
          background: "var(--ant-primary-1)",
        }}
      >
        <Header
          style={{
            background: "var(--ant-primary-color)",
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
                  "https://qa.onlinexperiences.com/customvts/Prototypes/Lighthouse/lighthouse-rp-v4/Noteworthey.mp4"
                }
              ></StudioVideo>
              <StudioDetails></StudioDetails>
            </Col>

            <Col xs={24} xl={8}>
              <StudioTabs></StudioTabs>
            </Col>
          </Row>
        </Content>
      </Layout>
      </div>
    );
  }
}
