function createHelloWorld() {
  return function (...args: any): string {
    return "Hello World";
  };
}

console.log(createHelloWorld()([], null, ""));
