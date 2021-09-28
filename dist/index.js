"use strict";
//basic type
let id = 5;
let company = "The Company";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, "two", 3, "four"];
//tuple type
let perons = [1, "str", false];
let employee;
employee = [
    [1, "Glock"],
    [2, "Shanti"],
    [3, "Loons"],
];
//union
let pid;
pid = "22";
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.down);
var Direction2;
(function (Direction2) {
    Direction2["up"] = "down";
    Direction2["down"] = "up";
    Direction2["left"] = "right";
    Direction2["right"] = "left";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.up);
const user = {
    id: 1,
    name: "John",
};
console.log(user);
//type assertion
let cid = 1;
// let customerId = <number>cid;
let cusId = cid;
//function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 5));
//void
function log(message) {
    console.log(message);
}
log(123);
const user1 = {
    id: 2,
    name: "Jane",
};
console.log(user1.id, user1.name);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(1, 9));
console.log(sub(10, 1));
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is very good boy`;
    }
}
const john = new Person(1, "john");
const jane = new Person(2, "jane");
console.log(john);
console.log(jane);
console.log(john.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee1 = new Employee(1, "Jack", "Operator");
console.log(employee1.position);
