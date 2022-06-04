var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    var result = false;
    for (var i = 0; i < this.children.length; i++) {
      var currentTree = this.children[i];
      result = result || currentTree.contains(target);
      if (result) {
        return result;
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
