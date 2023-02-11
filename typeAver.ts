// 타입 단언
const mystery: unknown = 'hello'
/*numChars = mystery.length 는 타입식별이 불가능하기에 조회되지않음
* 아래와 같이 mystery 가 문자열인 것을 알고있다면 별칭 string 을 선언해주면 문자열 타입으로 인식하고 조회 가능*/
const numChars = (mystery as string).length