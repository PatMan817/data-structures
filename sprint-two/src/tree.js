var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// I : any value
// O : side effect of adding new children to the Tree it's called on
// C :
// E :

// J : to add another child tree to the base tree

// E : input value would be a property of a new object/Tree that will be added as a child of the parent tree

// Viz : take in a value and create a property of a new object/tree
// add that new tree object as a child to the parent tree

// A : declare a variable childTree, and store the newly created tree with the input value
//     push the childTree to the children property array of the base Tree

// Ver :
// tree.addChild(5)
// declare childTree = Tree(5) which has a value property of 5, and a children property with an empty array
// push childTree to the tree.children
//   tree.children = [childTree]

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

// I : target value
// O : boolean
// C :
// E : if the current tree has children or not

// J : to see if target value is inside the tree

// Ex : checks all of the tree and their children's value, and determines if the target is there

// Viz :
// if the value of the current tree is the target, return true
// otherwise, see if that tree has children, and check all of the child trees
// if the target is not found anywhere, return false

// A :
// base case
// if the value property of the current tree equals target, return true
// otherwise,
// if the children array's length is more than 0,
// iterate through the children array and run the function on each child
// return false if nothing found

// Verify :
// Tree = {value: 1, children: [{value:5, children:[]}]}
// Tree.contains(5)
// check if current tree.value equals 5, which doesn't
// so see if children array is greater than 0, which it is
// loop through the children array ([{value:5, children:[]}])
// recursively call function on each child -> {value:5, children:[]} and return its result
// check if current tree.value equals 5, which equals target, so return true

treeMethods.contains = function(target) {
  // base case
  // if the value property of the current tree equals target, return true
  if (this.value === target) {
    return true;
  }
  // otherwise,
  // if the children array's length is more than 0,
  if (this.children.length > 0) {
    // store the result
    var result = false;
    for (var i = 0; i < this.children.length; i++) {
      var currentTree = this.children[i];
      result = result || currentTree.contains(target);
      if (result) {
        return result;
      }
    }
  }
  // iterate through the children array and run the function on each child
  // return false if nothing found
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
