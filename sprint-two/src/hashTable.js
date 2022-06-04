

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var innerArray = this._storage.get(index);
    for (var i = 0; i < innerArray.length; i++) {
      var isThere = false;
      if (innerArray[i][0] === k) {
        innerArray[i][1] = v;
        isThere = true;
      }
    }
    if (!isThere) {
      innerArray.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    if (this._storage.get(index).length > 1) {
      for (var i = 0; i < this._storage.get(index).length; i++) {
        if (this._storage.get(index)[i][0] === k) {
          delete this._storage.get(index)[i];
        }
      }
    }
    this._storage.set(index, undefined);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

