let student1=new Object();
student1.name="abi";
student1.age=20;
student1.hello=function(){
    console.log("hello");
}
console.log(student1)  

// non parameterised +without return type
function apple(){
    console.log("apple");
}
apple();

//non parameterised +with return type
function apple(){
    let a= "apple";
    return a;
}
let b=apple();
console.log(b);

//or 
function apple(){

    return "apple";
}
//let b=apple();
console.log(apple());


//parameterised + without return type---normal function
function add(d,c){
    console.log(d+c);
}
let d,c;
add(5,6);

//arrow function--a
let apple = () => console.log("hello");
apple();

let banana = () => "hello";
console.log(banana()); 

let orange=()=> {
    console.log("Aruna");
    return 3+3;
}
//orange();
console.log(orange());