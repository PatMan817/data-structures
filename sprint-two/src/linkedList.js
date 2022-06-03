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
    //if head is null, return
    if (list.head === null) {
      return;
    }
    //if head.next is null make head null
    if (list.head.next === null) {
      var oldHead = list.head;
      list.head = null;
      return oldHead.value;
    } else {
      //point list.head to list.head.next
      var oldHead = list.head;
      list.head = list.head.next;
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    //base case
    var innerNodeCheck = function(currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      //recursive case
      //if currentnode.next !== null
      if (currentNode.next !== null) {
        return innerNodeCheck(currentNode.next);
      }
      return false;
    };
    return innerNodeCheck(list.head);
    //call contains on list.contains.apply(currentnode.next, target)
    //return false
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
