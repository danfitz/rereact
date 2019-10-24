import { Component } from "./rereactClasses.js";

const Rereact = {
  // This function is what JSX compiles into
  createElement: function(type, children) {
    return {type, children};
  },
  
  // Base component class
  Component
};

export default Rereact;