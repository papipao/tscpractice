//basic type
let id: number = 5;
let company: string = "The Company";
let isPublished: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "two", 3, "four"];

//tuple type
let perons: [number, string, boolean] = [1, "str", false];
let employee: [number, string][];
employee = [
  [1, "Glock"],
  [2, "Shanti"],
  [3, "Loons"],
];

//union
let pid: string | number;
pid = "22";

//enum
enum Direction1 {
  up = 1,
  down,
  left,
  right,
}

console.log(Direction1.down);

enum Direction2 {
  up = "down",
  down = "up",
  left = "right",
  right = "left",
}

console.log(Direction2.up);

//objects type
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

console.log(user);

//type assertion
let cid: any = 1;
// let customerId = <number>cid;
let cusId = cid as number;

//function
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 5));

//void

function log(message: string | number): void {
  console.log(message);
}

log(123);

//interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 2,
  name: "Jane",
};

console.log(user1.id, user1.name);

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(1, 9));
console.log(sub(10, 1));

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const employee1 = new Employee(1, "Jack", "Operator");

console.log(employee1.position);
