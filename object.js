// 객체 값 타입 설정 및 함수 타입 설정
var printName = function (person) {
    console.log(person.first + " " + person.last);
};
printName({ first: 'vitamin', last: '777' });
/*불필요한 프로퍼티는 전달하지 못하게 만들고요
직접 객체 리터럴을 전달하는 경우에는 오류를 띄우지만
사전에 별도의 변수로 정의하는 과정을 거치면 지정된 프로퍼티 외에는 그냥 무시하게 됩니다*/
printName({ first: 'vitamin', last: '777', age: 333 });
var singer = { first: 'vitamin', last: '777', age: 333 };
printName(singer);
// ----------------------------------------------
/*객체 리터럴 형태의 반환 타입 애너테이션을 가지는 함수를 만들 수 있고
객체 타입을 사용하는 변수를 가질 수도 있고 물론 함수에 대한 파라미터 타입 애너테이션을 작성해
객체가 되게 할 수도 있습니다*/
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());
var family = function (numberGame) {
    return { zero: numberGame.zero * 2, one: numberGame.one * 2, two: numberGame.two * 2, three: numberGame.three * 2 };
};
console.log(family({ zero: 1, one: 2, two: 3, three: 4 }));
var calculatePayout = function (song) {
    return song.numStreams * 3;
};
var printSong = function (song) {
    console.log(song.credits.producer + " - " + song.credits.writer);
};
var mySong = {
    title: 'mySong',
    artist: 'myArtist',
    numStreams: 1000000,
    credits: {
        producer: 'myProducer',
        writer: 'myWriter'
    }
};
console.log(calculatePayout(mySong));
printSong(mySong);
/*z 뒤에 물음표를 넣어주면 됩니다 타입 애너테이션 전에 필수는 아니라고 TypeScript에 전달하는 거죠
여기서 z를 없애도 아무 문제 없고요 하지만 물음표를 지우면 z가 꼭 필요하다면서 오류를 띄웁니다
이렇게 물음표를 넣어서 선택적 요소로 만들 수 있습니다*/
var printPointerPOPO = { x: 1, y: 2, z: 3 };
var user = {
    id: 325234,
    userName: 'catGuy'
};
console.log(user.id);
// 변경 불가
user.id = 245234;
var happyFace = {
    radius: 4,
    color: 'yellow'
};
console.log(happyFace);
var woomi = {
    numLives: 9,
    breed: 'maltiz',
    age: 15
};
console.log(woomi);
