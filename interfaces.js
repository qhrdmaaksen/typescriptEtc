var pt = { x: 1, y: 2 };
var thomas = { id: 123, first: 'Thomas', last: 'Hardy', nickname: 'Tom' };
//thomas.id = 456 // error : readonly 프로퍼티는 재할당이 불가능하다 읽기 전용
thomas.nickname = 'Tommy'; // ok
var myPhone = {
    id: 123,
    brand: 'Apple',
    model: 'iPhone 12',
    year: 2020,
    user: function () {
        return 'vitamin';
    }
};
console.log(myPhone);
console.log(myPhone.user());
var shoes = {
    name: 'Nike',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes);
console.log('할인된 가격:::', shoes.applyDiscount(0.4));
var elton = {
    name: 'Elton',
    age: 10,
    breed: 'Poodle',
    bark: function () {
        return 'walwal';
    }
};
var chewy = {
    name: "Chewy",
    age: 3,
    breed: "Golden Retriever",
    bark: function () {
        return "woof woof";
    },
    job: "guide dog"
};
var pierre = {
    name: 'Pierre',
    id: 123,
    email: 'pierre@gmail.com',
    level: 'senior',
    languages: ['JS', 'PYTHON']
};
var animals = {
    name: 'cute goat',
    breed: 'lovely goat'
};
console.log('animals', animals);
