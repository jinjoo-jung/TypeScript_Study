class UserA {
  constructor(
    public first: string = "",
    public last: string,
    public age: number
  ) {}
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserB extends UserA {
  getAge(): string {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserC extends UserB {
  getAge(): string {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

const neo = new UserA("John", "Doe", 30);
console.log(neo.first);
console.log(neo.last);
console.log(neo.age);
