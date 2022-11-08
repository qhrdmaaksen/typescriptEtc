// ---------------------유니온 타입-----------------------------
let age: number | string = 21;
age = '21';
age = 23;

type Point = {
	x: number;
	y: number;
}
type Loc = {
	lat: number
	long: number
}
let coordinates : Point | Loc = {x: 1, y: 2}
coordinates = {lat: 11, long: 22}
console.log(coordinates)
// ---------------------유니온 타입으로 타입 좁히기(Narrowing)-----------------------------
// 유니온 타입을 사용하면 타입을 좁힐 수 있습니다.
// 타입을 좁히는 방법은 두가지가 있습니다.
// 1. typeof 연산자	2. in 연산자 (keyof 연산자)
