function fun1(){
    return new Promise((r,s)=>{
        r("santhosh kumar");
    })
}
function fun2(){
    return new Promise((r,s)=>{
        r("sankaraligam")
    })
}
fun1().then((x)=>{
    console.log(x);
})
fun2().catch((y)=>{
    console.log(y);
})
