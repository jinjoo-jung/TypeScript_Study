interface MyData<T extends string | num> {
  name: string;
  vlaue: T;
}

const dataA: MyData<string> = {
  name: "data A",
  vlaue: "Hello World",
};

const dataB: MyData<number> = {
  name: "Data B",
  vlaue: 1234,
};
const dataC: MyData<boolean> = {
  name: "Data C",
  vlaue: true,
};
const dataD: MyData<number[]> = {
  name: "Data D",
  vlaue: [1, 2, 3, 4],
};
