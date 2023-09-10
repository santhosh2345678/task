let num=121;
let temp=num;
let res=0;
function palidorme(){
    return new Promise((r,s)=>{
        while(num!=0){
            rem=num%10;
            num=(num-rem)/10;
            res=(res*10)+rem;
        } 
       r(res) 
    })
}
function palin(result){
    return new Promise((r,s)=>{
        if(temp=res){
            r("it is palidrome number");
        }
       else{
            s("it is not palidrome number");
       } 
    })
}
async function  check(){
    try{
        let x=await palidorme();
        let y=await palin(res);
        console.log(y);
    }
    catch{
        console.log("error");
    }
}
check()