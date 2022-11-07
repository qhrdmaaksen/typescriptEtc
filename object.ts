// 객체 값 타입 설정 및 함수 타입 설정
const printName = (person: { first: string, last: string }): void => {
	console.log(`${person.first} ${person.last}`);
}
printName({first: 'vitamin', last: '777'});
/*불필요한 프로퍼티는 전달하지 못하게 만들고요
직접 객체 리터럴을 전달하는 경우에는 오류를 띄우지만
사전에 별도의 변수로 정의하는 과정을 거치면 지정된 프로퍼티 외에는 그냥 무시하게 됩니다*/
printName({first: 'vitamin', last: '777', age: 333});
const singer = {first: 'vitamin', last: '777', age: 333};
printName(singer)

// ----------------------------------------------
/*객체 리터럴 형태의 반환 타입 애너테이션을 가지는 함수를 만들 수 있고
객체 타입을 사용하는 변수를 가질 수도 있고 물론 함수에 대한 파라미터 타입 애너테이션을 작성해
객체가 되게 할 수도 있습니다*/
const coordinate: {x: number, y: number} = {x: 34, y:2};
function randomCoordinate(): {x: number, y:number} {
	return {x: Math.random(), y: Math.random()}
}
console.log(randomCoordinate());
// -------------------타입 별칭---------------------------
// 타입 별칭은 타입을 새로 정의하는 것이 아니라 기존 타입에 새로운 이름을 붙이는 것입니다.
// 타입 별칭은 기존 타입에 새로운 이름을 붙이는 것이기 때문에 기존 타입과 같은 속성을 가집니다.
type IsNumber = {
	zero: number
	one: number
	two: number
	three: number
}
const family = (numberGame: IsNumber): IsNumber => {
	return {zero: numberGame.zero *2, one: numberGame.one *2, two: numberGame.two *2, three: numberGame.three *2}
}
console.log(family({zero: 1, one: 2, two: 3, three: 4}));
// ----------------------중첩 객체------------------------
type Song = {
	title: string
	artist: string
	numStreams: number
	credits: {
		producer: string
		writer: string
	}
}
const calculatePayout = (song: Song):number =>  {
	return song.numStreams * 3;
}
const printSong = (song: Song): void => {
		console.log(`${song.credits.producer} - ${song.credits.writer}`)
}
const mySong:Song ={
	title: 'mySong',
	artist: 'myArtist',
	numStreams: 1000000,
	credits: {
		producer: 'myProducer',
		writer: 'myWriter'
	}
}
console.log(calculatePayout(mySong));
printSong(mySong);
// ----------------------선택적 프로퍼티------------------------
type PointerPOPO = {
	x: number
	y: number
	z?: number
}
/*z 뒤에 물음표를 넣어주면 됩니다 타입 애너테이션 전에 필수는 아니라고 TypeScript에 전달하는 거죠
여기서 z를 없애도 아무 문제 없고요 하지만 물음표를 지우면 z가 꼭 필요하다면서 오류를 띄웁니다
이렇게 물음표를 넣어서 선택적 요소로 만들 수 있습니다*/
const printPointerPOPO:PointerPOPO = {x: 1, y: 2, z : 3}
// ----------------------readonly 제어자------------------------
/*객체의 프로퍼티를 readonly로 표시하면 TypeScript에서는 우리가 프로퍼티에 쓰기를 해서 변경할 때 경고를 해줘요
* 주의하실 점은, 참고하는 객체가 있는 경우 여기서는 id라는 숫자 자리에 객체나 배열을 놓으면
그 객체와 배열을 추가, 갱신 변경할 수 있습니다 참조하는 거니깐요
하지만 원시 타입인 숫자 프로퍼티를 완전히 재할당하는 건 불가능해요
프로퍼티에 손을 댈 수는 없고 접근만 할 수 있는 거죠*/
type User = {
	readonly id: number
	userName: string
}
const user:User = {
	id: 325234,
	userName: 'catGuy'
}
console.log(user.id)
// 변경 불가
user.id = 245234;
// ----------------------교차 타입------------------------
type Circle = {
	radius: number
}
type Colorful = {
	color: string
}
type CircleColorful = Circle & Colorful // 교차 타입
const happyFace: CircleColorful = {
	radius: 4,
	color: 'yellow'
}
console.log(happyFace);
type Cat = {
	numLives: number
}
type Dog = {
	breed: string
}
// 교차 타입을 사용하면 두 타입의 모든 프로퍼티를 가지는 타입을 만들 수 있습니다
// 이렇게 두 타입을 &로 연결하면 두 타입의 모든 프로퍼티를 가지는 타입을 만들 수 있습니다
// 만약 추가 프로퍼티를 넣고 싶다면 & 뒤에 추가 객체 타입을 넣어주면 됩니다
type CatDog = Cat & Dog & {age: number}
const woomi: CatDog = {
	numLives: 9,
	breed: 'maltiz',
	age: 15
}
console.log(woomi)