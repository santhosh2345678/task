const a=[1,2,3,4,5,6,7,8];
const[b,...c]=a;
console.log(b,c);

var obj={e:1,f:2}
const{e,f}=obj;
console.log(e,f);

var arr=["apple","banana","pineapple","mango"];
var[g,h,...i]=arr;
console.log(g,h,i);