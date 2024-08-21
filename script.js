let input=document.querySelector(".input");
let button=document.querySelector(".button");
let answer=document.querySelector(".answer");
answer.innerText="Factorial is..."
button.addEventListener('click',function(){
    let i;
    let n=input.value;
    let fact=1;
    for(i=1;i<=n;i++){
        fact=fact*i;
    }
  answer.innerText=fact;
})