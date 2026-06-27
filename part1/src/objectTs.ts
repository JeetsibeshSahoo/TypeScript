const chai = {
    name : "Masala chai",
    price : 20,
    isHot : true
}
// TS behind the scene always infer
// {
//     name : string;
//     price : number;
//     isHOt : boolean 
// }

// Declaring object types
let tea : {
    name : string;
    price : number;
    isHOt : boolean
}
tea = {
    name : "Ginger Tea",
    price : 30,
    isHOt : true
}

// Type alias object
type Tea = {
    name : string;
    price : number;
    ingredients : string[]
}

const AdrakChai: Tea = {
    name : "Adrak Chai",
    price : 40,
    ingredients : ["adrak", "tea leaves"]
}

// doc type
type Cup = {size : string}

let smallCup : Cup = {size: "200ml"}
let bigCup = {size : "500ml", material : "steel"}

smallCup = bigCup
// Ex-2
type Brew = {brewTime : number}
const Coffee = {brewTime: 5, beans : "Arabica"}
const chaiBrew : Brew = Coffee

type User = {
    username : string;
    password : string
}
const u : User = {
    username : "Godzilla",
    password : "god1234"
}

// Datatype split out
type Item = {name : string, quantity : number}
type Address = {street : string, pin : number}

type Order = {
    id : string;
    item : Item[];
    address : Address[]
}

// Different use of Datatypes
// type Chai = {
//     name : string;
//     price : number;
//     isHOt : boolean
// }

// const updateChai = (updates : Partial<Chai>) => {  // Partially update and it may be pass empty object
//     console.log("Updating chai with", updates);
// }
// updateChai({price : 50});
// updateChai({isHOt : false});
// updateChai({}) // pass empty object that may arise problem

// OR
// type ChaiOrder = {
//     name?:string;
//     quantity?:number
// }

// const placeOrder = (order: Required<ChaiOrder>) => {   // It require all the data
//     console.log(order);
// }
// placeOrder({
//     name : "Masala Chai",
//     quantity : 3
// });

// OR

type Chai = {
    name : string;
    price : number;
    isHOt : boolean;
    ingredients : string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">  // You pick the required data types

const chaiInfo : BasicChaiInfo = {
    name : "Ginger Tea",
    price : 30
}

// Or
type ChaiNow = {
    name : string;
    price : number;
    isHOt : boolean;
    secretIngredients : string[]
}
type PublicChai = Omit<ChaiNow, "secretIngredients">; // it omit the data type