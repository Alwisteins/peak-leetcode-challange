type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter2(init: number): Counter {
  let result = init;
  return {
    increment: () => {
      result++;
      return result;
    },
    decrement: () => {
      result--;
      return result;
    },
    reset: () => {
      result = init;
      return result;
    },
  };
}
