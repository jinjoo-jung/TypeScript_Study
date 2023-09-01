interface Cat {
  name: string;
  age: number;
}

const cat: Cat = {
  name: "Lucy",
  age: 3,
};

function hello(this: Cat, message: string) {
  // 화살표 함수가 아닌 일반 함수에서 this는 호출되는 위치에서 정의가 된다.
  console.log(`Hello ${this.name}, ${message}`);
}
hello.call(cat, "you are preetty cool!");
// 어떤 대상에서 실행이 되고 그 대상을 첫번째 인수로 넣고 두번째 인수로 문자데이터
