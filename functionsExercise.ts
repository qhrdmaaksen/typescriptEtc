// **********************************************
// ******************* PART 1 *******************
// **********************************************
// 사람의 이름을 받는 "twoFer"라는 함수를 작성합니다.
// "one for <name>, one for me" 형식의 문자열을 반환해야 합니다.
// 이름이 제공되지 않으면 기본값은 "you"입니다.

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

const twoFer = (name: string = "you"): string => {
	return `One for ${name}, One for me`;
}
console.log(twoFer());
console.log(twoFer("Elton"))

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// 연도를 받아들이고 연도가 윤년인지 여부에 따라 truefalse를 반환하는 isLeapyear() 함수를 작성하십시오.
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// 연도가 윤년인지 확인하려면 이 "공식"을 사용하십시오.:
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

const isLeapYear = (year: number): boolean => {
	return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}
console.log(isLeapYear(2012))
console.log(isLeapYear(2013))