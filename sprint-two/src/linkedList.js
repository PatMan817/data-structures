var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.tail === null) {
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = newTail;
    }
    if (list.head === null) {
      list.head = newTail;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    if (list.head.next === null) {
      var oldHead = list.head;
      list.head = null;
      return oldHead.value;
    } else {
      var oldHead = list.head;
      list.head = list.head.next;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    var innerNodeCheck = function(currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.next !== null) {
        return innerNodeCheck(currentNode.next);
      }
      return false;
    };
    return innerNodeCheck(list.head);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
