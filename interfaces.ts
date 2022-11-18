// ------------------------INTERFACES--------------------------
//인터페이스는 객체의 형태를 묘사하는데 사용되며 오직 객체에만 사용된다
// 인터페이스는 객체에만 사용되기에 유니온 타입에 인터페이스를 쓰기는 불가능하지만 타입 별칭 사용은 가능
interface Point {
	x: number,
	y: number
}
const pt: Point = {x: 1, y: 2}
// ------------------------readonly 와 선택적 인터페이스 프로퍼티--------------------------
interface PERSON {
	readonly id: number,
	first: string,
	last: string,
	nickname?: string,
}
const thomas: PERSON = {id:123, first: 'Thomas', last: 'Hardy', nickname: 'Tom'}
//thomas.id = 456 // error : readonly 프로퍼티는 재할당이 불가능하다 읽기 전용
thomas.nickname = 'Tommy' // ok
// ------------------------인터페이스 메서드--------------------------
interface HANDPHONE {
	readonly id: number,
	brand: string,
	model: string,
	year?: number,
	// 메서드의 타입을 정의하는 방법
	//user: () => string
	user(): string
}
const myPhone: HANDPHONE = {
	id: 123,
	brand: 'Apple',
	model: 'iPhone 12',
	year: 2020,
	user: () => {
		return 'vitamin'
	}
}
console.log(myPhone)
console.log(myPhone.user())
// ------------------------인터페이스 메서드 파라미터--------------------------
interface Product {
	name: string,
	price: number,
	applyDiscount(discount: number): number
}
const shoes: Product = {
	name: 'Nike',
	price: 100,
	applyDiscount(amount: number): number {
		const newPrice = this.price * (1 - amount)
		this.price = newPrice
		return this.price
	}
}
console.log(shoes)
console.log('할인된 가격:::',shoes.applyDiscount(0.4))
// ------------------------인터페이스 다시 열기--------------------------
interface Dog {
	name: string,
	age: number
}
interface Dog {
	breed: string
	bark(): string
}
const elton: Dog = {
	name: 'Elton',
	age: 10,
	breed: 'Poodle',
	bark(){
		return 'walwal'
	}
}