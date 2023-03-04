// **********************************************
// ******************* PART 1 *******************
// **********************************************
// 사람의 이름을 받는 "twoFer"라는 함수를 작성합니다.
// "one for <name>, one for me" 형식의 문자열을 반환해야 합니다.
// 이름이 제공되지 않으면 기본값은 "you"입니다.
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for " + name + ", One for me";
};
console.log(twoFer());
console.log(twoFer("Elton"));
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
