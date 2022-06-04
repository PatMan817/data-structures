var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = BinarySearchTree(value);
  if (value > this.value) {
    this.right ? this.right.insert(value) : this.right = newTree;
  }

  if (value < this.value) {
    this.left ? this.left.insert(value) : this.left = newTree;
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  if (this.left) {
    var result = this.left.contains(value);
    if (result) {
      return true;
    }
  }
  if (this.right) {
    result = this.right.contains(value);
    if (result) {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(fn) {
  fn(this.value);
  if (this.left) {
    this.left.depthFirstLog(fn);
  }
  if (this.right) {
    this.right.depthFirstLog(fn);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
