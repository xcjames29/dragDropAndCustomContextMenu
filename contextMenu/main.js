let rightClick = document.getElementById("rightClick");
let context = document.getElementById("contextContainer");
let mainContainer = document.getElementById("mainContainer");

rightClick.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    console.log("success");
    let x= e.clientX;
    let y = e.clientY;
    console.log(x,y)

    context.style.top = y+"px";
    context.style.left = x+"px";
    context.classList.add("show");
    context.classList.remove("hide");
})


mainContainer.addEventListener("mousedown",()=>{
     context.classList.add("hide");
    context.classList.remove("show");
})


context.addEventListener("click",()=>{
    context.classList.add("hide");
    context.classList.remove("show");
})