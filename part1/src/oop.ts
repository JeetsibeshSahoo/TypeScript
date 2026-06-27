// class Chai {
//     flavour : string;
//     price : number

//     constructor(flavour : string, price : number) {
//         this.flavour = flavour
//         this.price = price
//     }
// };

// const masalaChai = new Chai("Ginger", 15);
// masalaChai.flavour = "Masala"


// class Chai {
//     flavour : string;

//     constructor(flavour : string) {
//         this.flavour = flavour
//         console.log(this);
//     }
// }

// const masalaChai = new Chai("Ginger");
// masalaChai.flavour = "Masala"

// Access modifier
// class Chai {
//     public flavour : string = "Masala"

//     private secretIngredients = "Cardamom"

//     reveal(){
//         return this.secretIngredients  // ok
//     }

// }

// const c = new Chai();
// c.reveal();
// Direct access
class shop {
    protected shopName = "Chai Corner"
}

class Branch extends shop {
    getName(){
        return this.shopName  // ok
    }
}


// private (#)

class Walet {
    #balance = 1000

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

// readonly properties
class Cup {
    readonly capacity : number = 300

    constructor(capacity : number){
        this.capacity = capacity
    }
}

// getter & setter
class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value : number){
        if(value > 5) throw new Error
        this._sugar = value
    }
}
// use
const c = new ModernChai();
c.sugar = 1;

// Static members
class EkChai {
    static shopName = "Chai Corner"

    constructor(public flavour : string){}
}
console.log(EkChai.shopName);

// Don't create object using class if
// abstract classes
abstract class Drink {
    abstract make(): void
}

class myChai extends Drink {
    make(){
        console.log("Brewing chai")
    }
}

// Composition
class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}