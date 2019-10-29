import RereactDOM from "../RereactDOM/RereactDOM.js";

export class Component {
  constructor(props) {
    this.state = {};
    this.props = props;
  };
  
  setState(partialState) {
    this.state = Object.assign(this.state, partialState);
    RereactDOM.updateComponent(this);
  };
};

Component.prototype.isComponent = true;