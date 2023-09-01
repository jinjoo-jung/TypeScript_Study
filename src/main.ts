class User<P> {
  constructor(public payload: P) {}
  getpayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
}
interface UserBType {
  name: string;
  age: number;
  email: string[];
}

const heropy = new User<UserAType>({
  name: "heropy",
  age: 18,
  isValid: true,
});
const neo = new User<UserBType>({
  name: "neo",
  age: 18,
  email: ["wjdwlswn23@naver.com"],
});
