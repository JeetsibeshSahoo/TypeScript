function makeChai(type : string, cups : number) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala", 3);

function getChaiPrice():number {  // it shows output/return datatype
    return 34;
}

function makeOrder(order : string) {
    if(!order) return null;
    return order;
}

function logChai(): void {  // means doesn't give anything
    console.log("Chai is ready");
}

// function orderChai(type? : string) {   // Optional type

// }

function orderChai(type : string = "Masala") {   // Default type

}

// complex value type
function createChai(order : {
    type : string,
    sugar : number,
    size : "small" | "large"
}) : number {
    return 4
}