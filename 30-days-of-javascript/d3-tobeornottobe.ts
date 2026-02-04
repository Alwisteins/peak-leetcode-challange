type ToBeOrNotToBe = {
  toBe: (val: any) => boolean | Error;
  notToBe: (val: any) => boolean | Error;
};

const expect = (val: any): ToBeOrNotToBe => {
  return {
    toBe: (val2: any) => {
      if (val === val2) return true;
      throw new Error("Not Equal");
    },
    notToBe: (val2: any) => {
      if (val !== val2) return true;
      throw new Error("Equal");
    },
  };
};

const result = expect(1).toBe(null);
console.log(result);
