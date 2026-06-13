// Type assertion
let response:any = "67";

let numericLength:number = (response as string).length  // Force full type assertion

// +++++++++++
type Book = {
    name : string
}

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);
// +++++++++++++++
const inputElement = document.getElementById("username") as HTMLInputElement;  // Forcefully tell 

// +++++++++++++++++
// Any
let value:any;

value = "chai"
value = [1, 2, 3];
value = 3.5
value.toUpperCase()  // In any you can assign values so many times and use also

// Unknown
let newValue:unknown;

newValue = "chai"
newValue = [1, 2, 3];
newValue = 3.5
// newValue.toUpperCase()
if (typeof newValue === "string") {
    newValue.toUpperCase();
}  // In unknown you can assign values so many time but not used
// +++++++++++++++++++
// try-catch

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}

const data:unknown = "chai aur code"
const strData: string = data as string

// never (it comes when you use all cases)
type Role = "admin" | "user" | "superAdmin";

function redirectBasedOnRole(role:Role):void {
    if (role === "admin") {
        console.log("Redirecting to admin Dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user Dashboard");
        return;
    }
    role;  //check the type 
}
// +++++++++++++++
function neverReturn():never {
    while(true){}
}