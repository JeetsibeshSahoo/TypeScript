// Generics is a template and it makes code reusable(General function)
function wrapInArray<T>(items : T): T[] {
    return [items]
}

wrapInArray("masala");
wrapInArray(20);
wrapInArray({
    flavour : "Ginger"
});

// 
function pair<A, B>(a : A, b : B) : [A, B] {
    return [a, b]
}

pair("Masala", "chai");
pair("Ginger", 15);
pair(20, "Lemon");
pair("Green", {type : "tea"});

// generic interface
interface Box<T> {
    content : T
}
// use
const numberBox : Box<number> = {
    content : 20
    // content : "chai"
}
const numberBoxCup : Box<string> = {
    content : "30"
    // content : 20
}

// 
interface ApiResponse<T> {
    status : number;
    data : T
}
const res : ApiResponse<{flavour : string}> = {
    status : 200,
    data : {flavour : "Ginger"}
}