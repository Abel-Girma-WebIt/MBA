let selection=document.querySelectorAll("li");
let addToCart=document.querySelectorAll("a");

let imagAll=document.querySelectorAll(".imageDivs");
let sumbitBtn=document.querySelector("#commentSubmit");
let inputfield=document.querySelectorAll(".contact-deatil");
// let imagLap=document.querySelectorAll(".laptops");
// let imagSho=document.querySelectorAll(".shoes");
// let imagWatch=document.querySelectorAll(".watch");
// let imagPhone=document.querySelectorAll(".phones");



selection.forEach(function(btn){


btn.addEventListener("click", function(){


imagAll.forEach(function(item){


if(item.classList.contains(btn.id)){

    item.style.display="block";

    item.style.display="grid";
}

else{
item.style.display="none";
}})})
})




addToCart.forEach(function(btn){


btn.addEventListener("click", function(e){

e.preventDefault();

btn.innerHTML="Item added";

btn.style.background="yellow";




})
})

sumbitBtn.addEventListener("click", function(e){

e.preventDefault();

alert("Thank you for contacting us. One of our customer service represenatatives will reach out to you shortly")


inputfield.forEach((inputara=>{


    inputara.value="";

}))








})




















































































