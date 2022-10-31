console.log('Hello World');
const myName: string = 'vitamin';
console.log(myName);

const multiplication = (num: number) => {
	return num * num;
}
multiplication(3);

/*const greet = (person: string) => {
	return `hello ${person}`
}
greet('vitamin');
*/
const doSomething = (person: string, age: number, isFunny: boolean) => {
	console.log(person, age, isFunny);
}
doSomething("vitamin", 30, true);

const greet = (person: string = 'vitamin') => {
	return `hello ${person} !`;
}
greet();
greet('min');

const square = (num: number): number => {
	return num * num;
}
square(3);
console.log(square)

const color = ['red', 'green', 'blue'];
const myUpperCaseColorName = color.map(color => {
	return color.toUpperCase();
})
console.log(myUpperCaseColorName);


/*void 와 never 차이점
* never과 void와 비교하면 void는 엄밀히 값입니다 void를 반환한 함수죠 undefined 상태로 반환됩니다
이 함수가 무엇을 반환해도 상관하지 않고 사용하지 않죠 void는 신경 쓸 필요 없는 걸 반환하죠
반면에 never은 이 함수가 절대 반환할 기회를 가지면 안 된다고 하죠 이게 차이입니다*/

// never 는 절대 리턴되지 않는다는 의미, 무한루프에 사용 가능
const makeError = (msg: string): never =>{
	throw new Error(msg);
}
// never 는 절대 리턴되지 않는다는 의미, 무한루프에 사용 가능
const gameLoop = (): never => {
	while(true){
		console.log('안녕 나는 무한 루프야');
	}
}
