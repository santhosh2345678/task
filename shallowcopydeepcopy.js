//1]shallow copy

let a={a:1,b:2,c:3}
let b=a;
a.d=4;
console.log(a,b);
b.e=5;
console.log(a,b);

//2]deep copy

var x=8;
var y=x;
x=-5;
console.log(x,y);


//1]spread operator

//speard operater using object
let s1={a:1,b:2}
let s2={...s1}
s2.f=3
console.log(s1,s2);

//speard perator using array

var a1=[1,2,3,4];
var a2=[...a1];
a2.push(5)
console.log(a1,a2);

//JSON.stringify using object

let object={name:"santhosh kumar",age:27,study:"BEECE"}
let person=(JSON.parse(JSON.stringify(object)))
person.course="FED HTML CSS JS"
console.log(object,person);

//object.assign using array

let arr1=["cat","dog","elephant"];
let arr2=Object.assign([],arr1);
arr2.push("monkey");
console.log(arr1,arr2);

//object.assign using object

const obj1={name:"john",player:"football",batch:25}
const obj2=Object.assign({},obj1)
obj2.country="India"
console.log(obj1,obj2);



