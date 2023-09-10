function fun1(){
    return new Promise((c,d)=>
    {
    setTimeout(()=>
    {
    c("Hi")
    },2000)
    })
    }
    function fun2(){
    return new Promise((c,d)=>
    {
    setTimeout(()=>
    {
    c("How are you")
    },1000)
    })
    }
    function fun3(){
    return new Promise((c,d)=>
    {
    setTimeout(()=>
    {
    d("Loading")
    })
    })
    }
    Promise.all([fun1(),fun2(),fun3()])
    .then(console.log)
    .catch(console.log)
    