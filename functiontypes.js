//1]with arugment and with return 
function add(x,y){
    let z=x+y;
    return z;
}
let a=add(20,50);
console.log(a);

//2]with arguments and without return
function sub(sub1,sub2){
    let b=sub1-sub2;
    console.log(b);
}
sub(20,30)
//3]without arguments and with return
function mul(){
    var c=30;
    var d=40;
    var e=c*d;
    return e;
}
let f=mul()
console.log(f);
//4]without arguments and without return
function div(){
    let g=40;
    let h=10;
    let i=g/h;
    console.log(i);
}
div()