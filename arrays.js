// ---------------------배열-----------------------------
// 문자열 배열
var activeUser = [];
activeUser.push('user1');
console.log(activeUser);
// 숫자형 배열
var ageList = [45, 56, 13];
ageList[0] = 99;
console.log(ageList);
// 배열의 타입을 지정하는 두가지 방법
//const bools: Array<boolean> = []
var bools = [];
var coords = [];
coords.push({ x: 1, y: 2 });
console.log(coords);
// ---------------------다차원 배열-----------------------------
var board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
];
console.log(board);
