const domNodeCollection = require('./dom_node_collection.js');
// import * as domNodeCollection from "./dom_node_collection.js";

//take a html element and return an object
//pass the string to get object
//document function
window.$l = function(arg) {
  let nodeArr = [];
  if (arg instanceof HTMLElement){
    nodeArr.push(arg);
  }
  else if (typeof(arg) === 'string') {
    let nodeList = document.querySelectorAll(arg);
    for (var i = 0; i < nodeList.length; i++) {
      nodeArr.push(nodeList[i]);
    }
  }
  return new domNodeCollection(nodeArr);
};
