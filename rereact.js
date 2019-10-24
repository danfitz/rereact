// This function is what JSX compiles into
function createElement(type, children) {
  return {type, children};
};

// This function converts the virtual DOM object into actual nested DOM elements
// USES RECURSION
function renderNode(node) {
  node = node.isComponent ? node.render() : node;

  const element = document.createElement(node.type);
  
  node.children.forEach(child => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else if (child.isComponent) {
      element.appendChild(renderNode(child.render()));
    } else {
      element.appendChild(renderNode(child));
    };
  });
  
  return element;
};

// This function is like ReactDOM.render: it takes a vDOM object and renders it to a chosen location in the DOM
function render(node, domDestination) {
  while (domDestination.firstChild) {
    domDestination.removeChild(domDestination.firstChild);
  };

  domDestination.appendChild(renderNode(node));
};

class Component {
  constructor(props) {
    this.state = {};
    this.props = props;
  };
  
  setState(partialState) {
    this.state = Object.assign(this.state, partialState);
    render(this, document.getElementById("root"));
  };
};

Component.prototype.isComponent = true;

// *******************************************

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
    
    setInterval(() => {
      this.setState({
        title: this.state.title + "z"
      });
    }, 10000);
  };

  render() {
    return createElement("div", [
      createElement("h1", [this.state.title]),
      createElement("p", ["This is a description"]),
      createElement("ul", this.state.items.map(item => { return new Item({ name: item }) }))
    ]);
  };
};


// Rendering virtual DOM object
render(new App(), document.getElementById("root"));