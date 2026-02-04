function createHelloWorld() {
  return function (...args): string {
    return "Hello World";
  };
}

console.log(createHelloWorld()([], null, ""));
