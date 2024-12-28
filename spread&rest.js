//spread operator(...)--spread the values
let a=[1,2,3]
let y=[4,9,8]
let b=[...a,...y]
console.log(b)
function spread(values){
    console.log(values);
}
spread(...b);

/** let c=[1,2,3,4,5]
let d=c;
d[2]=10;
console.log(c)  //output: [1,2,10,4,5]--why because in array we pass the address only..so it change the value accordingly
*/


//rest operator--combine the values into array or object
function spread(...values){  //spead(x,...values)--x=1 values=2,3,4,5
    console.log(values);
}
spread(1,2,3,4,5);

let student1={
    name:["abi","rahul"],
    age: 20
}
let values= {...student1};
console.log(values)