import { getFullName, User } from "./user";

const heropy: User = {
  firstName: "Heropy",
  lastName: "Park",
  age: 36,
  isValid: true,
};

const fullName = getFullName(heropy);

console.log(fullName);
console.log(heropy.isValid);
