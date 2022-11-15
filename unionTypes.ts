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
// ---------------------리터럴 타입-----------------------------
// 리터럴 타입은 타입스크립트에서 특별한 타입입니다.
// 리터럴 타입은 변수에 할당할 수 있는 값이 고정된 타입을 의미합니다.
// 리터럴 타입은 문자열, 숫자, 불리언, 배열, 객체 등이 있습니다.
// 문자열 리터럴 타입 선언 방법 : '문자열' | "문자열" | `문자열`
// 숫자 리터럴 타입 선언 방법 : 1 | 2 | 3 | 4 | 5
// 불리언 리터럴 타입 선언 방법 : true | false
// 배열 리터럴 타입 선언 방법 : [1, 2, 3] | ['a', 'b', 'c'] | [true, false, true]
// 객체 리터럴 타입 선언 방법 : {name: 'Jack', age: 32} | {name: 'Jane', age: 27}
type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
let today : DayOfWeek = 'Mon'
console.log(today)

const giveAnswer = (answer: 'yes' | 'no' | 'maybe' ) => {
	return `the answer is ${answer}`;
}
console.log(giveAnswer('yes'))
