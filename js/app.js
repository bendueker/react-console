"use strict";

const {Route, Link, HashRouter } = ReactRouterDOM;



class MainReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactRouterDOM.HashRouter>
        <ReactRouterDOM.Route path="/" exact component={StudioLayout} />
        <ReactRouterDOM.Route path="/slides" component={StudioLayoutSlides} />
        <ReactRouterDOM.Route path="/reports" component={ReportsLayout} />
      </ReactRouterDOM.HashRouter>
    );
  }
}

ReactDOM.render(<MainReact />, document.getElementById("root-react"));
