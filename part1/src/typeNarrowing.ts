// Type Narrowing

function getChai(kind : string | number){
    if(typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`
}

function serverChai(msg?: string) {
    if(msg) {
        return `Serving ${msg}`;
    }
    return "Serving default masala chai"
}

// Exhaustive check
function orderChai(size: "small" | "medium" | "large") {
    if(size === "small") {
        return `Small cutting chai...`;
    }
    if(size === "medium" || size === "large") {
        return "Make extra chai";
    }
    return `chai order ${size}`;
}

// +++++++++++++++++
class KulhadChai{
    serve(){
        return "Serving Kulhad chai";
    }
}
class CuttingChai{
    serve(){
        return "Serving Cutting chai";
    }
}

function serve(chai : KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}
// ++++++++++++++++++++

type ChaiOrder = {
    type : string
    sugar : number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`;
}
// ++++++++++++++++++++++++++++

type MasalaChai = {type : "Masala"; spiceLevel : number};
type GingerChai = {type : "Ginger"; amount : number};
type ElaichiChai = {type : "Elaichi"; aroma : number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order : Chai){
    switch (order.type) {
        case "Masala":
            return "Masala Chai"
            break;
        case "Elaichi":
            return "Elaichi Chai"
            break;
        case "Ginger":
            return "Ginger Chai"
            break;
    }
}

function brew(order : MasalaChai | GingerChai){
    if("spiceLevel" in order) {
        return "Masala Chai";
    }
}
// ++++++++++++++++++++++

// Unknown (When data is present in array)
