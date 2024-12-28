
function f1 (callback,name){
    setTimeout(()=>{
        console.log(`file ${name} is downloading`);
        callback(name);
    });
}
function f2(name){
    setTimeout(()=>{
        console.log(`file ${name} got downloaded`);
    });
}
f1(f2,"abc");
function f3(){
    setTimeout(()=>{
        console.log("download completed");
    },200);
}
f3();
