/* ==================================
   Sandeep ElectroFix
   Premium Website Script
================================== */


/* Mobile Menu */

document.addEventListener("DOMContentLoaded", function(){


const nav = document.querySelector("nav");

const header = document.querySelector(".header");



const menuBtn = document.createElement("div");

menuBtn.className = "menu-btn";

menuBtn.innerHTML = "☰";



header.insertBefore(menuBtn, nav);



menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

    menuBtn.classList.toggle("open");

});



/* Close menu after clicking link */


document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{

    nav.classList.remove("active");

});


});







/* Scroll Animation */


const animatedItems = document.querySelectorAll(

"section, .card, .review-card, .gallery img"

);



animatedItems.forEach(item=>{

item.classList.add("hidden");

});





const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.15

});





animatedItems.forEach(item=>{

observer.observe(item);

});








/* Booking Form Success Popup */


const form = document.querySelector("form");



if(form){


form.addEventListener("submit",function(){


setTimeout(()=>{


alert(
"✅ Thank You!\n\nYour service request has been submitted.\nSandeep ElectroFix team will contact you soon."
);


},500);



});


}







/* Button Ripple Effect */


document.querySelectorAll(".btn,button").forEach(button=>{


button.addEventListener("click",function(e){


let ripple=document.createElement("span");


ripple.className="ripple";


this.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},600);



});


});



});
