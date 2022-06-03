var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// I
// O
// C
// E
setPrototype.add = function(item) {
  //Check if storage does not contain the item passed in
  //Then add item to storage the key of the item and value true
  if (!this.contains(item)) {
    this._storage[item] = true;
  }
};

// I : string
// O : boolean
// C :
// E :
setPrototype.contains = function(item) {
  // if the key exists in the storage, return true
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  // delete the item from storage
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
