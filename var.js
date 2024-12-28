/*function cat(){
    if(true){
        var a=5;
        console.log(a);
    }
    console.log(a);
}*/


//console.log(a);
 //var a=5 //let a=5

/*data type
let a =BigInt123 or 12345n; */

/** let student1={
    name:["abi","rahul"],
    age:29,
    isstudent:true,
    address:{
        city:"perunudrai",
        state:"tn"
    },
    hello: function(){
        console.log("hi");

    }
}
student1.hello();
console.log(student1.name); */

let student1=new Object();
student1.name="abi";
student1.age=20;
student1.hello=function(){
    console.log("hello");
}
console.log(student1)