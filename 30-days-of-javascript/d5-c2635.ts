function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr.push(fn(arr[i], i));
  }
  return transformedArr;
}
