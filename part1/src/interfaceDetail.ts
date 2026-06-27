//  Interface - Shape the data (It define the object structure)
interface Chai {
    flavour : string;
    price : number;
    milk? : boolean;  // optional
}

const masala : Chai = {
    flavour : "masala",
    price : 30
};

// readonly property
interface Shop {
    readonly id : number
    name : string
}

const s : Shop = {id : 1, name : "Chai Cafe"};
// s.id = 3 // wrong


// Defination
interface DiscountCalculator {
    (price : number) : number
}
// Use
const apply50: DiscountCalculator = (p) => p * 3;


interface TeaMachine {
    start() : void;
    stop() : void
}

const machine: TeaMachine = {
    start() {
        console.log("Start");
    },
    stop() {
        console.log("Stop");
    }
}

// 
interface ChaiRatings {
    [flavour : string] : number  // Signature define
}

const ratings : ChaiRatings = {
    masala : 4.7,
    ginger : 4.3
}

// Automatically merge Interface when calling and may be multiple interfaces are there so you satisfy all of these
interface User {
    name : string
}
interface User {
    age : number
}

const u : User = {
    name : "Godzilla",
    age : 29
}

// Extend interface
interface A {a : string}
interface B {b: string}

interface C extends A,B {}

// 
