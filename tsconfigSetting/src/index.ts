// ------------------ 감시 모드 test ----------------
// tsc index.ts --watch
// tsc index.ts -w

interface Chicken {
	breed: string,
	eggPerWeek: number,
	name: string,
	age: number,
}
const norma: Chicken ={
	breed: 'Silkie',
	eggPerWeek: 4,
	name: 'Norma',
	age: 12,
}

let users: string[] = ['vitamin', 'tom', 'jerry']
// users = null;
// users = undefined;