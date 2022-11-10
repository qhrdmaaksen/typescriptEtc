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
const printAge = (age: number | string): void => {
	console.log(`나이는 ${age} 입니다.`)
}
console.log(printAge(21))
console.log(printAge('21'))
// typeof 연산자를 사용하여 타입을 좁힙니다.
const calculateTax = (price: number | string, tax: number) => {
	if(typeof price === 'string'){
		price = parseFloat(price.replace('$', ''))
	}
	return price * tax ;
}
console.log(calculateTax(100, 0.2))
console.log(calculateTax('$100', 0.2))
// ---------------------유니온 타입과 배열-----------------------------
const coords: (Point | Loc)[] = []
coords.push({x: 10, y : 10})
console.log(coords)

