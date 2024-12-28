function attendance (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let attendance=true;
            if(attendance){
                resolve("attendance present");
            }
            else
                reject("attendance absent");
            
        },2000);

    })
}
function lunch (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lunch=true;
            if(lunch){
                resolve("had lunch");
            }
            else
                reject("not yet");
            
        },2000);

    })
}
function goingtohome (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let goingtohome=true;
            if(goingtohome){
                resolve("Boarded the bus");
            }
            else
                reject("missed the bus");
            
        },2000);

    })
}
attendance().then((value) => {console.log(value); return lunch();})
            .then((value) => {console.log(value); return goingtohome(); })
            .then((value) => {console.log(value); })
            .catch((error) => {console.error(error);})

/** async function finalday(){
    try{
        let att=await attendance();
        console.log(att);
        let lun =await lunch();
        console.log(lun);
        let home=await goingtohome();
        console.log(home);
    } catch(error){
        console.error(error);
    }
    
}
finalday(); */
