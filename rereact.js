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
    } else {
      element.appendChild(renderNode(child));
    };
  });
  
  return element;
};

// This function is like ReactDOM.render: it takes a vDOM object and renders it to a chosen location in the DOM
function render(node, domDestination) {
  domDestination.appendChild(renderNode(node));
};


// *******************************************


// Sample virtual DOM object
const app = createElement("div", [
  createElement("h1", ["App Title"]),
  createElement("p", ["This is a description"]),
  createElement("ul", [
    createElement("li", ["item 1"]),
    createElement("li", ["item 2"]),
    createElement("li", ["item 3"]),
    createElement("li", ["item 4"]),
    createElement("li", ["item 5"])
  ])
]);

// Rendering virtual DOM object
render(app, document.getElementById("root"));