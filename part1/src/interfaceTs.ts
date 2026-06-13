// +++++++++++++++++
// function makeChai(order : {type : string; sugar : number; strong : boolean}) {
//     console.log(order);
// }

// function serveChai(order : {type : string; sugar : number; strong : boolean}) {
//     console.log(order);
// }

// ++++++++++++
type ChaiOrder = {
    type : string; 
    sugar : number; 
    strong : boolean
};

function makeChai(order : ChaiOrder) {
    console.log(order);
}

function serveChai(order : ChaiOrder) {
    console.log(order);
}

// ++++++++++++
// type TeaRecipe = {
//     water : number;
//     milk : number
// }

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 80;
// }        // It's work properly but below


// +++++++++++++++++++++++=
// type CupSize = "small" | "large";

// // A class can only implement an object type or intersection of object types with statically known members
// class Chai implements CupSize {
                                 
// }

// +++++++++++++++++++++++
// Interface
// interface TeaRecipe  {
//     water : number;
//     milk : number
// }

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 80;
// }

interface CupSize {
    size : "small" | "large";
} 


class Chai implements CupSize {
    size: "small" | "large" = "large";                           
}

// +++++++++++

// this also not going to the class
// type response = {ok : true} | {ok : false}
// class myRes implements Response {
//     ok: boolean = true;
// }  // make it to interface

// ++++++++++
// Union

type TeaType = "masala" | "ginger" | "lemon";  // union  (Literals Types)

function orderChai(t:TeaType) {
    console.log(t);
}

// Intersection

type BaseChai = {
    teaLeaves : number
}
type Extra = {
    masala : number
}

type MasalaChai = BaseChai & Extra;  // Intersection

const cup : MasalaChai = {
    teaLeaves : 3,
    masala : 4
}

// +++++++++++++++++++
// optional

type User = {
    username : string;
    bio? : string
}

const u1 : User = {username : "Godzilla"};
const u2 : User = {username : "Kong", bio : "Powerful Punch"};

// Read only
type Config = {
    readonly appName: string;
    version : number
}

const cfg: Config = {
    appName : "Godzilla",
    version : 4
}

// cfg.appName = "Kong" // Cannot assign to 'appName' because it is a read-only property