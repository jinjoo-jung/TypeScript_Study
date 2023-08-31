interface UserA {
  name: string;
  age: number;
}
interface UserB extends UserA {
  isValid: boolean;
}
const heropy: UserA = {
  name: "heropy",
  age: 20,
};
const neo: UserB = {
  name: "neo",
  age: 20,
  isValid: true,
};
