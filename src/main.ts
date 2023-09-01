type TypeA = string;
type TypeB = string | number | boolean;
type User =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];

const userA: User = {
  name: "John",
  age: 30,
  isValid: true,
};

const userB: User = ["John", 30, true];

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case "string":
      return param.toUpperCase();
    case "number":
      return param.toFixed(2);
    default:
      return true;
  }
}
