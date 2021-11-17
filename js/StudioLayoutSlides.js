"use strict";
const { Layout, Row, Col } = antd;
const { Header, Footer, Content } = Layout;

class StudioLayoutSlides extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "2px",
          }}
        >
          <StudioHeader></StudioHeader>
        </Header>
        <Content
          style={{
            margin: "12px",
            background: "#fff",
          }}
        >
          <Row>
            <Col xs={24} xl={16}>
              <StudioVideo
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={
                  "http://placehold.jp/5757f0/ffffff/1600x900.png?text=SLIDES"
                }
              ></StudioVideo>
              <StudioDetails></StudioDetails>
            </Col>

            <Col xs={24} xl={8}>
              <div
                style={{
                  height: "230px",
                  margin: "0 12px",
                  background: "#fff",
                }}
              >
                <StudioVideo
                  src={
                    "https://qa.onlinexperiences.com/customvts/Prototypes/Lighthouse/lighthouse-rp-v3/speaker.mp4"
                  }
                ></StudioVideo>
              </div>
              <StudioTabs></StudioTabs>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
