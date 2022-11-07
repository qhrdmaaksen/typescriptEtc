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
// ----------------------------------------------