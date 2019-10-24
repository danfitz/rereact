import RereactDOM from "./rereactDOM.js";

export class Component {
  constructor(props) {
    this.state = {};
    this.props = props;
  };
  
  setState(partialState) {
    this.state = Object.assign(this.state, partialState);
    RereactDOM.render(this, document.getElementById("root"));
  };
};

Component.prototype.isComponent = true;