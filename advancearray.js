//advanced array methods

//1]map
let a=[{name:"john"},{player:"football"},{batch:28}];
let b=a.map((val,index)=>{
    return{...val,player:"football",batch:28,study:"BE"}
})
console.log(b);

//2]filter

let c=[{name:"santhosh", position:"fresher"},
{name:"bala", position:"fresher"},
{name:"mathialagan", position:"junior"},
{name:"david", position:"mid level"},
{name:"edwin", position:"senior"}]
let d=c.filter((val,index)=>{
    return val.position=="fresher"
})
console.log(d);

//3]find
let e=[2,3,4,5,9,13];
let f=e.find((value,index)=>{
    return value>5
})
console.log(f);

//4]every

let g=[1,5,3,4,7];
let h=g.every((value,index)=>{
    return value>2
})
console.log(h);

//5]reduce

var i=[1,2,3,4,5,6,7,8];
var j=i.reduce((val,index)=>{
    return val*index
})
console.log(j);

//6]some
let arrays=[{name:" yugesh",position:"fresher"},{name:" matrin",position:"fresher"},
{name:" ashwinth",position:"junior"},{name:" kalai",position:"midlevel"},
{name:" Durga",position:"senior"}]
let n=arrays.some((val,index)=>{
return val.name.length<10;
});
console.log(n);

//7]sort
let k=[{name:"santhosh", age:27},
{name:"ashwin", age:19},
{name:"kalai", age:25},
{name:"kumar",age:30 }]
let l=k.sort((value,index)=>{
    return  value.age-index.age
})
console.log(l);



