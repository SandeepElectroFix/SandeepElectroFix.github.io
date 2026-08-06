/* ==================================
   Sandeep ElectroFix
   Premium Website Script
================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Mobile Menu
    ========================== */

    const nav = document.querySelector("nav");
    const header = document.querySelector(".header");

    if (nav && header) {

        const menuBtn = document.createElement("div");
        menuBtn.className = "menu-btn";
        menuBtn.innerHTML = "☰";

        header.insertBefore(menuBtn, nav);

        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        document.querySelectorAll("nav a").forEach(link => {

            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });

        });

    }

    /* ==========================
       Scroll Animation
    ========================== */

    const animatedItems = document.querySelectorAll(
        "section, .card, .review-card, .gallery img"
    );

    animatedItems.forEach(item => item.classList.add("hidden"));

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    animatedItems.forEach(item => observer.observe(item));

    /* ==========================
       Booking Form
    ========================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", () => {

            setTimeout(() => {

                alert(
`✅ Thank You!

Your service request has been submitted.

Sandeep ElectroFix team will contact you soon.`
                );

            }, 500);

        });

    }

    /* ==========================
       Ripple Effect
    ========================== */

    document.querySelectorAll(".btn, button").forEach(button => {

        button.addEventListener("click", function () {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });

});


/* ==================================
   Loader
================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);

        }

    }, 1800);

});


/* ==================================
   Gallery Lightbox
================================== */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


/* ==================================
   Counter Animation
================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = Number(counter.dataset.target);

        if (!target) return;

        const current = Number(counter.innerText) || 0;

        const increment = Math.ceil(target / 80);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(update, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});


/* ==================================
   Before / After Slider
================================== */

const slider = document.querySelector(".slider");
const before = document.querySelector(".before-wrapper");

if (slider && before) {

    slider.addEventListener("input", function () {

        before.style.width = this.value + "%";

    });

}


/* ==================================
   Dark / Light Theme
================================== */

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");
            themeBtn.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "🌙";

        }

    });

}


/* ==================================
   Install PWA
================================== */

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

    console.log("PWA Installed Successfully");

});


/* ==================================
   Service Worker
================================== */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./service-worker.js")

        .then(() => {
            console.log("✅ Service Worker Registered");
        })

        .catch((err) => {
            console.log("❌ Service Worker Error:", err);
        });

    });

}
