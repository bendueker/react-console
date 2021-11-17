"use strict";
const { Layout, Row, Col } = antd;

class StudioLayout extends React.Component {
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
        </Header>
        <Content
          style={{
            margin: "12px",
            background: "#fff",
          }}
        >
          <Row>
            <Col xs={24} xl={16}>

            </Col>

            <Col
              xs={24}
              xl={8}
            >

            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

customElements.define("StudioLayout", StudioLayout);
