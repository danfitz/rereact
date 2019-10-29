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
        const childElement = this.renderNode(child.render());

        // This gets used by updateComponent method
        child.baseElement = childElement;
        
        element.appendChild(childElement);
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
  },

  // This function 
  updateComponent(component) {
    const oldElement = component.baseElement;
    const newElement = component.render();

    component.baseElement = diff(oldElement, newElement);
  },

  diff(oldElement, newElement) {
    // New element's name
    // name property if component, type property if normal element
    const elementName = newElement.isComponent ? newElement.name : newElement.type;

    if (oldElement.localName !== elementName) {
      
    };
  }
};

export default RereactDOM;