"use strict";
const { useState, useEffect } = React;
const { Layout, Row, Col, Menu, Dropdown, Avatar, Image, Drawer } = antd;
const { UserOutlined, SettingFilled, AreaChartOutlined } = icons;
const { SubMenu } = Menu;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const handleClick = (e) => {
  setState({ current: e.key });
};

const menu = (showDrawer) => (
  <Menu>
    <Menu.ItemGroup title="Settings">
      <SubMenu title="Layouts" key={10}>
        <Menu.Item key={1}>
          <a href="#">Video Only</a>
        </Menu.Item>
        <Menu.Item key={52}>
          <a href="#slides">Video and Slides</a>
        </Menu.Item>
      </SubMenu>
    </Menu.ItemGroup>
    <SubMenu title="Design" key={20}>
      <Menu.Item key={89} onClick={() => showDrawer("color")}>
        Change Colors
      </Menu.Item>
    </SubMenu>
  </Menu>
);

const menuavatar  = (showDrawer) => (
  <Menu>
    <Menu.ItemGroup title="Ben Dueker">
      <Menu.Item key={0} onClick={() => showDrawer("profile")}>
        Profile
      </Menu.Item>
      <Menu.Item key={1}>Settings</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

const menureports = (
  <Menu>
    <Menu.ItemGroup title="Reports">
      <Menu.Item key={9}>
        <a href="#reports">Registration</a>
      </Menu.Item>
      <Menu.Item key={7}>Activity</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

class StudioHeader extends React.Component {
  constructor(props) {
    super(props);
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.renderDrawer = this.renderDrawer.bind(this);
    this.state = {
      setVisible: null,
      visible: false,
      mode: "color",
    };
  }

  showDrawer(mode) {
    this.setState({ setVisible: true, visible: true, mode: mode });
  }
  onClose() {
    this.setState({ setVisible: false, visible: false });
  }

  renderDrawer() {
    switch (this.state.mode) {
      case "color":
        return <StudioTheme></StudioTheme>;
      // ...
      case "profile":
        return <StudioProfileForm></StudioProfileForm>;
      // ...
      case "c":
      // ...
      default:
      // equivalent to the last else clause ...
    }
  }

  render() {
    return (
      <Row>
        <Col
          style={{
            marginRight: "auto ",
          }}
        >
          <a href="#">
            <Image
              className="HeaderImage"
              alt="Header Image"
              src="https://files.onlinexperiences.com/FileLibrary/3645/15/LogoRender.png"
              fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
            />
          </a>
        </Col>

        <Col>
          <Dropdown overlay={menureports} arrow={true}>
            <a
              href="/reports"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <AreaChartOutlined
                style={{
                  fontSize: "155%",
                  verticalAlign: "middle",
                  margin: "0 10px",
                }}
              />
            </a>
          </Dropdown>
          <Dropdown overlay={menu(this.showDrawer)} arrow={true}>
            <a
              href="/settings"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <SettingFilled
                style={{
                  fontSize: "155%",
                  verticalAlign: "middle",
                  margin: "0 10px",
                }}
              />
            </a>
          </Dropdown>

          <Dropdown overlay={menuavatar(this.showDrawer)} arrow={true}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <UserOutlined
                style={{
                  fontSize: "155%",
                  verticalAlign: "middle",
                  margin: "0 10px",
                }}
              />
            </a>
          </Dropdown>
        </Col>

        <Drawer
          title="Profile"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.renderDrawer()}
        </Drawer>
      </Row>
    );
  }
}
