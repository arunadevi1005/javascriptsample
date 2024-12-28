//callback-take function as a parameter to a function
function attendance (callback){
    setTimeout(()=>{
        console.log("attendance present");
        callback();
    },2000);
}
function lunch(callback){
    setTimeout(()=>{
        console.log("lunch finished");
        callback();
    },2000);
}


function goingtohome(callback){
    setTimeout(()=>{
        console.log("going to home");
        callback(); //callback;
    },200);

}

//callbackhell 
attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("day completed");
        })
    })
})
