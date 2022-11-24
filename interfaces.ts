// ------------------------INTERFACES--------------------------
//인터페이스는 객체의 형태를 묘사하는데 사용되며 오직 객체에만 사용된다
// 인터페이스는 객체에만 사용되기에 유니온 타입에 인터페이스를 쓰기는 불가능하지만 타입 별칭 사용은 가능
interface Point {
	x: number,
	y: number
}
const pt: Point = {x: 1, y: 2}
// ------------------------readonly 와 선택적 인터페이스 프로퍼티--------------------------
// 인터페이스 프로퍼티에 readonly를 사용하면 해당 프로퍼티를 수정할 수 없다
// 인터페이스 프로퍼티에 ?를 사용하면 해당 프로퍼티가 선택적 프로퍼티가 된다
// 선택적 프로퍼티는 인터페이스를 구현하는 객체에서 해당 프로퍼티를 생략할 수 있다
// 선택적 프로퍼티는 반드시 인터페이스의 모든 프로퍼티보다 뒤에 와야한다
interface Person {
	readonly id: number,
	first: string,
	last: string,
	nickname?: string,
}
const thomas: Person = {id:123, first: 'Thomas', last: 'Hardy', nickname: 'Tom'}
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
// ------------------------인터페이스 다시 열기 및 추가--------------------------
interface Dog {
	name: string,
	age: number
}
/*bark 리턴 값 string 타입 함수 추가*/
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
// ------------------------인터페이스 확장--------------------------
/*dog interface 를 상속받아 job object 추가된 ServiceDog
* "drug sniffer" | "bomb" | "guide dog" 중에 값 설정 가능*/
interface ServiceDog extends Dog {
	job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
	name: "Chewy",
	age: 3,
	breed: "Golden Retriever",
	bark () {
		return "woof woof";
	},
	job: "guide dog",
}
// ------------------------인터페이스 다중 상속--------------------------
interface Human {
	name: string
}
interface Employee {
	readonly id: number,
	email: string
}
interface Engineer extends Human, Employee {
	level: string,
	languages: string[]
}
const pierre: Engineer = {
	name: 'Pierre',
	id: 123,
	email: 'pierre@gmail.com',
	level: 'senior',
	languages: ['JS', 'PYTHON'],
}
// ------------------------인터페이스 vs 타입 별칭--------------------------
// 인터페이스는 객체에만 사용되기에 유니온 타입에 인터페이스를 쓰기는 불가능하지만 타입 별칭 사용은 가능 하다
// 타입 별칭은 인터페이스와 비슷하지만 타입 별칭은 새로운 이름을 만들지 않는다
// 타입 별칭은 새로운 이름을 만들지 않기에 확장이 불가능하다

/*리터럴 타입 등을 묘사하는 데에는 인터페이스를 사용할 수 없어요
반면에 type을 사용하게 되면 Color = 을 입력하고 red, blue 등의 색상 중 고를 수 있죠
이는 객체가 아닌 다른 타입이기 때문에 인터페이스를 사용할 수는 없습니다
두 개 리터럴 사이의 유니온 타입이죠 이게 바로 중요한 차이점입니다*/
type Color = 'Red' | 'Blue' | 'Yellow'


/*또 다른 차이점이 있죠 인터페이스로는 이미 생성한 인터페이스를 다시 열어서 내용을 추가하는 것이 가능합니다
타입 별칭으로는 그럴 수가 없죠*/

// 타입 별칭 으로 내용 추가하려면 에러 발생
type Chicken = {
	breed: string,
}
/*type: Chicken = {
	numEggs: number
}*/
// 타입 별칭으로 내용 추가한다면 아래와 같은 예제 코드
type Goat = {
	name: string
}
type Animal = Goat & {
	breed: string
}
const animals: Animal = {
	name: 'cute goat',
	breed: 'lovely goat'
}
console.log('animals',animals)
// 인터페이스로 내용 추가 가능 예제 코드
interface fish {
	name: string
}
interface fish {
	breed: string,
}
/*핵심적인 차이점은 다음과 같습니다 인터페이스는 객체 형태 묘사에만 사용이 됩니다
타입이 여러 개일 경우에는 사용할 수 없어요 타입 별칭은 어떤 타입이든지 묘사가 가능합니다, 타입의 이름일 뿐이죠
객체 타입일 수도, 함수 타입일 수도 유니온 타입일 수도 있습니다
하지만 객체 형태의 묘사에 있어서는 인터페이스가 아주 유용합니다
인터페이스를 다시 열어 확장할 수 있을 뿐만 아니라 다중 상속 또한 가능하며 사용 방법이 아주 직관적이죠
extends 키워드를 사용하면 됩니다 타입 별칭에서는 불가능하죠 여기까지가 중요 차이점*/