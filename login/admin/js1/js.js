var li_items = document.querySelectorAll(".sidebar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");
var main=document.querySelector(".admin-dashboard");
var queries=document.querySelector(".queries-section");
li_items.forEach((li_item)=>{
    li_item.addEventListener("mouseenter", ()=>{
       main.style.paddingLeft="25rem";
 
     li_item.closest(".wrapper").classList.remove("hover_collapse");
 
   })
 })
 li_items.forEach((li_item)=>{
    li_item.addEventListener("mouseleave", ()=>{
      main.style.paddingLeft="10rem";
     
 
     li_item.closest(".wrapper").classList.add("hover_collapse");
 
    })
 })

 hamburger.addEventListener("click", () => {
   main.style.paddingLeft="25rem";
    hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})