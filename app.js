let h2=document.querySelector("h2");
let btn=document.querySelector("button");
let div=document.querySelector(".inner");

btn.addEventListener("click",()=>{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    h2.innerText=color;
    div.style.backgroundColor=color;
})
