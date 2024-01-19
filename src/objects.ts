//Type
type Order ={
    productId:string;
    price:number;
}

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
    firstName: 'Gomes',
    age: 23,
    email: 'G.caiqueDev@gmail.com',
    orders: [{productId:"1", price:200}],
    register(){
        return "A"
    }
}

user.password
const printLog = (message?: string) => {}
printLog(user.password!);

//Unions
type Author = {
    books: string[]
}

const author: Author & User ={
    age:2,
    books:["1","2","3"],
    email:'author@gmail.com',
    firstName: 'Dotoievisck haha',
    orders: [],
    register(){
        return "A"
    }
};

// Interfaces
interface UserInterface {
    firstName: string;
    email:string;
    login(): string
};

const emailUser: UserInterface ={
    email: "G.caiqueDev@gmail.com",
    firstName: "Caique",
    login(){
        return "A"
    }
};

interface AuthorInterface{
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    email: " author@gmail.com",
    firstName: "Caique",
    books: [],
    login(){
        return "A"
    }
};

type Grade = number | string;
const grande: Grade = 1