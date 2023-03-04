// ------------------------튜플 타입--------------------------
// 튜플은 배열과 비슷하지만, 배열과 달리 튜플은 고정된 길이를 가진다.
// 튜플은 배열과 달리, 배열의 인덱스를 통해 접근할 때, 타입이 정해져 있다.
var stuff = ['vitamin', '777']; // 문자열 배열
var stuff2 = ['vitamin', 777]; // 문자열 또는 숫자 배열
//길이와 타입이 고정된 배열이며 JavaScript에는 튜플이 없습니다 백그라운드에서 실행되는 정규 배열임
var color = [255, 255, 255]; // 튜플
var goodRes = [200, 'ok']; // 200, 'ok'로 구성된 튜플
var badRes = [404, 'Not Found']; // 404, 'Not Found'로 구성된 튜플
// 튜플은 고정된 길이와 타입을 갖지만 아래와 같이 배열에 push 메서드를 사용하여 요소를 추가할 수 있습니다.
goodRes.push(200, 'ok', 200);
console.log(goodRes);
var responses = [[200, 'ok'], [404, 'Not Found']]; // HTTPResponse 타입의 배열
// ------------------------enum--------------------------
// enum은 TypeScript에서 사용할 수 있는 특별한 타입입니다.
// enum은 숫자형 값 집합에 이름을 지정할 수 있습니다.
//enum 은 코드 안에 반복적으로 참조하는 값의 집합이 있을 경우에 사용합니다
// enum은 코드 전체에서 재사용할 수 있는 명명된 상수의 집합임
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED; // 2
console.log(myStatus);
var isDelivered = function (status) {
    return status === OrderStatus.DELIVERED;
};
console.log(isDelivered(OrderStatus.DELIVERED)); // true
console.log(isDelivered(OrderStatus.RETURNED)); // false
