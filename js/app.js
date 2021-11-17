"use strict";

class MainReact extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
        <div>
            <StudioLayout />
        </div>
    )
  }
}

ReactDOM.render(<MainReact />, document.getElementById("root-react"));