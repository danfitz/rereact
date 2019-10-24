const RereactDOM = {
  // This function converts the virtual DOM object into actual nested DOM elements
  // USES RECURSION
  renderNode: function(node) {
    node = node.isComponent ? node.render() : node;
    
    const element = document.createElement(node.type);
    
    node.children.forEach(child => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else if (child.isComponent) {
        element.appendChild(this.renderNode(child.render()));
      } else {
        element.appendChild(this.renderNode(child));
      };
    });
    
    return element;
  },

  // This function is like ReactDOM.render: it takes a vDOM object and renders it to a chosen location in the DOM
  render(node, domDestination) {
    while (domDestination.firstChild) {
      domDestination.removeChild(domDestination.firstChild);
    };
    
    domDestination.appendChild(this.renderNode(node));
  }
};

export default RereactDOM;