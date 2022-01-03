"use strict";
const { Form, Input, Button, Checkbox, Card } = antd;
const { useState, useEffect } = React;


class StudioPolling extends React.Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.state = {
      value: 1,
      visible: false,
    };
  }

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  onFinish(values) {
    console.log("Success:", values);
  }
  onFinishFailed(errorInfo) {
    console.log("Error:", errorInfo);
  }

  render() {
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        autoComplete="off"
      >
        <Card title="Polling Question">
          <h3>What is your favorite Christmas movie?</h3>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Space direction="vertical">
              <Radio value={1}>It's a Wonderful Life</Radio>
              <Radio value={2}>Elf</Radio>
              <Radio value={3}>Christmas Vacation</Radio>
              <Radio value={4}>Christmas with the Kranks</Radio>
            </Space>
          </Radio.Group>
          <div>
            <Space
              style={{
                margin: "24px 0",
              }}
            >
              <Button type="primary" onClick={this.props.hidePollHandler}>
                Submit
              </Button>
            </Space>
          </div>
        </Card>
      </Form>
    );
  }
}
