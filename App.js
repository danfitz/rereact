import Rereact from "./Rereact/Rereact.js";
import RereactDOM from "./RereactDOM/RereactDOM.js";

const {createElement, Component} = Rereact;

class Item extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return createElement("li", [this.props.name]);
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Dan Fitz's App",
      items: ["item a", "item b", "item c", "item d", "item e"]
    };

    setTimeout(() => {
      // this.setState({
      //   title: this.state.title + "z"
      // });
    }, 1000);
  };

  render() {
    console.log(this);
    
    return createElement("div", [
      createElement("h1", [this.state.title]),
      createElement("p", ["This is a description"]),
      createElement("ul", this.state.items.map(item => { return new Item({ name: item }) }))
    ]);
  };
};

// Rendering virtual DOM object
RereactDOM.render(new App(), document.getElementById("root"));