// Array
const chaiFlavours : string[] = ["Masala", "Adrak"];
const chaiPrice : number[] = [15, 20];

const rating : Array<number> = [3.5, 4.6];

// Array of objects
type Chai = {
    name : string;
    price : number
}
const menu: Chai[] = [
    {name : "Masala", price : 15},
    {name : "Adrak", price : 10},
]


// Read only Array
const cities: readonly string[] = ["Delhi", "Mumbai"];
// cities.push("Goa");

// 2D array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

// Tuples
let chaiTuple: [string, number];  // maintain the format
chaiTuple = ["Masala", 20];
// chaiTuple = [30, "Ginger"];  // at the end all the values present in the tuples going to array

let userInfo: [string, number, boolean?];
userInfo = ["Godzilla", 45];
userInfo = ["Kong", 35, true];

// Readonly tuple
const location: readonly [number, number] = [28.45, 56.78];

// Named tuple return
const chaiItems: [name : string, price : number] = ["Masala", 30];


// Enum - it restrict the choices
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE;

// Automatic increment
enum Status {
    PENDING = 100,
    SERVED,  // 101
    CANCELLED  // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type : ChaiType) {
    console.log(`Making : ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("Masala") //wrong

// enum RandomEnum {
//     ID = 1,
//     NAME = "Masala"
// }  // It's not a standard practice so always keep same data type in enum

// using const
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const S = Sugars.HIGH

let t: [string, number] = ["Chai", 3];
t.push("extra");