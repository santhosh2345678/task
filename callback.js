function reverse(num){
    let rev=0;
    while(num!=0){
        let rem=num%10;
        num=(num-rem)/10;
        rev=(rev*10)+rem;
    }
    return rev
}
function display(num){
    let x=reverse(num);
    console.log(x);
}
display(123)