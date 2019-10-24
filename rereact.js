// This function is what JSX compiles into
function createElement(type, children) {
  return {type, children};
};

// This function converts the virtual DOM object into actual nested DOM elements
// USES RECURSION
function renderNode(node) {
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
  node = node.isComponent ? node.render() : node;

  while (domDestination.firstChild) {
    domDestination.removeChild(domDestination.firstChild);
  };

  domDestination.appendChild(renderNode(node));
};

class Component {
  constructor() {
    this.state = {};
  };
  
  setState(partialState) {
    this.state = Object.assign(this.state, partialState);
    render(this, document.getElementById("root"));
  };
};

Component.prototype.isComponent = true;

// *******************************************

// Sample virtual DOM object
const renderApp = (title) => {
  return createElement("div", [
    createElement("h1", [title]),
    createElement("p", ["This is a description"]),
    createElement("ul", [
      createElement("li", ["item 1"]),
      createElement("li", ["item 2"]),
      createElement("li", ["item 3"]),
      createElement("li", ["item 4"]),
      createElement("li", ["item 5"])
    ])
  ]);
};

class App extends Component {
  constructor() {
    super();
    this.state = { title: "Dan Fitz's App" };
    
    setInterval(() => {
      this.setState({
        title: this.state.title + "z"
      });
    }, 10000);
  };

  render() {
    return renderApp(this.state.title);
  };
};


// Rendering virtual DOM object
render(new App(), document.getElementById("root"));