"use strict";

const {Route, Link, HashRouter } = ReactRouterDOM;

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactRouterDOM.HashRouter>
        <ReactRouterDOM.Route path="/" exact component={StudioLayout} />
        <ReactRouterDOM.Route path="/edit" component={StudioLayoutSlides} />
        <ReactRouterDOM.Route path="/reports" component={ReportsLayout} />
      </ReactRouterDOM.HashRouter>
    );
  }
}

ReactDOM.render(<Registration />, document.getElementById("root-react"));
