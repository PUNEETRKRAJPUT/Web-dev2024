let btn = document.querySelector("button");
btn.addEventListener("click",function ()  {
    //console.log("event listend");
    // for showing the current value of rgb in h3 
    let h3=document.querySelector("h3");
    
    let randomcolor=generaterandomcolor();
    h3.innerText=randomcolor;

    let div=document.querySelector("div");
    div.style.background=randomcolor;

});

function generaterandomcolor(){
    let red= Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}