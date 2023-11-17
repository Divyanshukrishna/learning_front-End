var counter=document.querySelector(".counter");
var followers=document.querySelector(".followers")

counter.innerHTML=1002;
let count=1;
setInterval(()=> {
    if(count<1000)
    count++;
    counter.innerText=count;
},1)

setInterval( ()=> {
    followers.innerText="followers in instagram!";
},5000)