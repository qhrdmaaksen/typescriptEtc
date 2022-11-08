// ---------------------배열-----------------------------
// 문자열 배열
const activeUser: string[] = [];
activeUser.push('user1');
console.log(activeUser);
// 숫자형 배열
const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
console.log(ageList);

// 배열의 타입을 지정하는 두가지 방법
//const bools: Array<boolean> = []
const bools: boolean[] = []

// 커스텀 타입의 배열 타입 선언
type Point = {
	x: number,
	y: number
}
const coords: Point[] = []
coords.push({x: 1, y: 2})
console.log(coords)
// ---------------------다차원 배열-----------------------------
const board: string[][] = [
	['X', 'O', 'X'],
	['O', 'X', 'O'],
	['X', 'O', 'X'],
	['O', 'X', 'O'],
]
console.log(board)