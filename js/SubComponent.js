"use strict";

class SubComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
          <span> SubComponent-is-working </span>
        )              
    }
}

customElements.define('SubComponent', SubComponent);