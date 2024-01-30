let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=inp.value;

    let delli=document.createElement("button");
    delli.innerText="complete";
    delli.classList.add("delete");

    li.appendChild(delli);

    ul.appendChild(li);
    
    console.log(inp.value);


    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
});

// let delibtns=document.querySelectorAll(".delete");
// for(delibtn of delibtns){
//     delibtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove;
//     });
// 