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
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch(err => console.log("Service Worker Error:", err));
  });
}
/* Loader */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 600);

    }, 1800);

});
/* ===== Gallery Lightbox ===== */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
/* Counter Animation */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const increment = Math.ceil(target / 80);

if(current < target){

counter.innerText = current + increment;

setTimeout(update,20);

}else{

counter.innerText = target + "+";

}

};

update();

});
/* Before After Slider */

const slider = document.querySelector(".slider");
const before = document.querySelector(".before-wrapper");

if(slider && before){

slider.addEventListener("input",function(){

before.style.width=this.value+"%";

});

}
/* ===== Dark / Light Theme ===== */

const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
}

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        themeBtn.textContent="☀️";
    }else{
        localStorage.setItem("theme","dark");
        themeBtn.textContent="🌙";
    }

};
/* ===== Install PWA ===== */

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    if (installBtn) {
        installBtn.style.display = "inline-block";
    }
});

if (installBtn) {
    installBtn.addEventListener("click", async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
        installBtn.style.display = "none";
    });
}

window.addEventListener("appinstalled", () => {
    if (installBtn) {
        installBtn.style.display = "none";
    }
    alert("🎉 Sandeep ElectroFix App Installed Successfully!");
});
/* ===== Register Service Worker ===== */

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js")
        .then(() => console.log("Service Worker Registered"))
        .catch(err => console.log(err));
    });
}
