type Fn2 = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn2, t: number): Fn2 {
  return async function (...args) {
    const failed = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    return Promise.race([failed, fn(...args)]).then((value) => value);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
