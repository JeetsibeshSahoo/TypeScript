// import axios from "axios";

// axios.get("https://google.com/data")
// .then(response => {
//     console.log(response.data);
// });


// {
//     "userId" : 1,
//     "id" : 1,
//     "title" : "delectus aut autem",
//     "completed" : false 
// }

import axios from "axios";  // functionality
import type { AxiosResponse } from "axios";   // Explicitly tells  // type 

interface Todo {
    userId : number;
    id : number;
    title : string;
    completed : boolean
}

const fetchData = async () => {
    try {
        const response : AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    } catch (error : any) {
        if(axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);
            if(error.response) {
                console.log(error.response.status);
            }
        }
    }
}