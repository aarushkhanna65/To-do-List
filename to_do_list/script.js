let subbtn=document.querySelector("#subbtn");
let userinput=document.querySelector("#userinput")
let game=document.querySelector("#game");
let tasks=document.querySelector("#tasks");
let span=document.querySelectorAll(".span");
let li=document.querySelector("li");

subbtn.addEventListener("click",()=>{
    var inputvalue=userinput.value;
    if(inputvalue===""){
        alert("You must enter a task first!")
    }
    else{
    let para = document.createElement("li");
    para.innerText=inputvalue;
    para.classList.add("parastyle");
    tasks.append(para);
    let span=document.createElement("span");
    span.innerText="\u00d7";
    span.classList.add("span");
    para.append(span);
    }
    userinput.value="";
});

userinput.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        subbtn.click();
    }
});

tasks.addEventListener("click",function(event){
    if(event.target.tagName==="span");{
    event.target.parentElement.remove();
    }
});
