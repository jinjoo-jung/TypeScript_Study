// 1)
function add(a: string, b: string): string; // 타입 선언
function add(a: number, b: number): number; // 타입 선언
function add(a: any, b: any) {
  // 함수 구현
  return a + b;
}

add("hello", "world"); // hello world
add(1, 2); // 3
add("hello", 2); //에러
add("hello", 2); //에러
