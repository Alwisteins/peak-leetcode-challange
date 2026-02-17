type Fn2 = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn2): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}
