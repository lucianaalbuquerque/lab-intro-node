class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length++;
  }

  get(pos) {
    if (pos < this.items.length) {
      return  this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
   
  }

  max() {
    if (this.items.length > 0) {
      return this.items[this.items.length-1]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a,b)=>a+b)
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}


module.exports = SortedList;
