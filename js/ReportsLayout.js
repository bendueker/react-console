"use strict";
const { Layout, Row, Col } = antd;
const { Header, Footer, Content } = Layout;

class ReportsLayout extends React.Component {
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
          id='report-container'
          style={{
            margin: "12px",
            background: "#fff",
          }}
        >
          <Row>
            <Col xs={24} xl={16}>
              <ReportGraph></ReportGraph>
            </Col>

            <Col xs={24} xl={8}>

            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

