type Fn2 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn2, init: number): number {
  let result = init;
  nums.map((n) => (result = fn(result, n)));
  return result;
}
