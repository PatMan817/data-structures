

// Instantiate a new graph
var Graph = function() {
  //   1 -- 2
  //   |
  //   3    4

  // nodes = [1, 2, 3, 4, 5] {1: , }
  // edges = 1 & 2, 1 & 3
  //I: None
  //O: Graph Obj
  //C:
  //E: Could be nodes without edges
  //J: Create a graph to store data
  //E: Creating a graph with connected nodes to access data
  //Vis: Create nodes property as an empty array
  // Create edge property as an empty object
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
//I: value
//O: add node to graph
//C:
//E:
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removalTarget = this.nodes.indexOf(node);
  this.nodes.splice(removalTarget, 1);
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(node)) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    //hasEdge(3,2)
    //edges = [[1,2],[2,3],[3,4]
    //edges[0] = [1,2]
    if ((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || (this.edges[i][1] === fromNode && this.edges[i][0] === toNode)) {
      return true;
    }
  } return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    //removeEdge(3,2)
    //edges = [[1,2],[2,3],[3,4]
    //edges[0] = [1,2]
    if ((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || (this.edges[i][1] === fromNode && this.edges[i][0] === toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


