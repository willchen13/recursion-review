// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node, nodes
) {
  //array of all the noes in the document body
  //check if the classes in the node match the argument given

  var node = node || document.body;
  //element.nodeList
  //if element.classList.contains(className) ... return elements
  // if no classlist, create default return value

  var nodes = nodes || [];

  // build helper function that collects nodes
  if (node.classList && node.classList.contains(className)) {
    nodes.push(node);
  }

  //check each children of the parent node
  for (var i = 0; i < node.childNodes.length; i++) {
    getElementsByClassName(className,node.childNodes[i], nodes);
  }
  // run on document.body


  return nodes;
};
