"use strict";
const { Form, Input, Button, Checkbox } = antd;
const { useState, useEffect } = React;

class StudioProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.state = {
      setVisible: null,
      visible: false
    };

  }

    onFinish(values) {
      console.log('Success:', values);
    }
    onFinishFailed(errorInfo) {
      console.log('Error:', errorInfo);
    }

  render() {
    return (
      <div>
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
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="EMailAddress"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>          

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Job Title"
            name="JobTitle"
            rules={[
              {
                required: false,
                message: "Please input your Job Title!",
              },
            ]}
          >
            <Input />
          </Form.Item>   

          <Form.Item
            label="Company Name"
            name="CompanyName"
            rules={[
              {
                required: false,
                message: "Please input your Company Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>                  

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
