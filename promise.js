//promise using armstrong number

let num=407;
function arm(num){
let sum=0;
let temp=num;
while(temp>0){
let rem=temp%10;
sum=sum+(rem*rem*rem);
temp=parseInt(temp/10);
}
console.log(temp,sum);
return new Promise((a,b)=>{
if(num==sum){
a("it is armstrong number")
}
else{
b("it is not armstrong number")
}
})
}
arm(num).then(console.log);
arm(num).catch(console.log);