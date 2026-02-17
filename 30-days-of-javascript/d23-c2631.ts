interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
  let grouped: any = {};
  if (this.length === 0) return grouped;

  for (let i = 0; i < this.length; i++) {
      let key = fn(this[i]);
      let exist = grouped[key];
      if (exist) {
          exist.push(this[i])
          grouped[key] = exist
      } else {
          grouped[key] = [this[i]]
      }
  }
  return grouped;
}

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/