type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
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
