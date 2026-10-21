/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   SEARCH OVERLAY
========================================================= */

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");


searchBtn.addEventListener("click", () => {

    searchOverlay.classList.add("active");

    setTimeout(() => {
        searchInput.focus();
    }, 300);

});


closeSearch.addEventListener("click", () => {

    searchOverlay.classList.remove("active");

});


/* Close search with ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("active");

    }

});


/* =========================================================
   PRODUCT SLIDER
========================================================= */

const productSlider = document.getElementById("productSlider");

const productNext = document.getElementById("productNext");

const productPrev = document.getElementById("productPrev");


productNext.addEventListener("click", () => {

    productSlider.scrollBy({
        left: 350,
        behavior: "smooth"
    });

});


productPrev.addEventListener("click", () => {

    productSlider.scrollBy({
        left: -350,
        behavior: "smooth"
    });

});


/* =========================================================
   CART
========================================================= */

const addButtons = document.querySelectorAll(".add-btn");

const cartCount = document.querySelector(".cart-count");

let cartItems = 0;


addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartItems++;

        cartCount.textContent = cartItems;

        /* Button animation */

        button.textContent = "ADDED ✓";

        button.style.background = "#168545";

        button.style.borderColor = "#168545";

        setTimeout(() => {

            button.textContent = "ADD TO CART";

            button.style.background = "";

            button.style.borderColor = "";

        }, 1200);

    });

});


/* =========================================================
   WISHLIST
========================================================= */

const wishlistButtons = document.querySelectorAll(".wishlist");


wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        icon.classList.toggle("bi-heart");

        icon.classList.toggle("bi-heart-fill");

        button.classList.toggle("liked");

    });

});


/* =========================================================
   HERO CAROUSEL
========================================================= */

const heroCarouselElement =
    document.getElementById("heroCarousel");

const heroCarousel =
    bootstrap.Carousel.getOrCreateInstance(
        heroCarouselElement,
        {
            interval: 5000,
            ride: "carousel",
            pause: false
        }
    );


/* =========================================================
   HERO TEXT ANIMATION
========================================================= */

heroCarouselElement.addEventListener(
    "slide.bs.carousel",
    event => {

        const currentSlide =
            event.relatedTarget;

        const content =
            currentSlide.querySelector(".hero-content");

        content.style.opacity = "0";
        content.style.transform =
            "translateY(30px)";

    }
);


heroCarouselElement.addEventListener(
    "slid.bs.carousel",
    event => {

        const content =
            event.relatedTarget.querySelector(
                ".hero-content"
            );

        setTimeout(() => {

            content.style.opacity = "1";

            content.style.transform =
                "translateY(0)";

        }, 100);

    }
);


/* =========================================================
   TOUCH / DRAG PRODUCT SLIDER
========================================================= */

let isDown = false;
let startX;
let scrollLeft;


productSlider.addEventListener("mousedown", e => {

    isDown = true;

    startX = e.pageX -
        productSlider.offsetLeft;

    scrollLeft =
        productSlider.scrollLeft;

});


productSlider.addEventListener("mouseleave", () => {

    isDown = false;

});


productSlider.addEventListener("mouseup", () => {

    isDown = false;

});


productSlider.addEventListener("mousemove", e => {

    if (!isDown) return;

    e.preventDefault();

    const x =
        e.pageX -
        productSlider.offsetLeft;

    const walk =
        (x - startX) * 1.5;

    productSlider.scrollLeft =
        scrollLeft - walk;

});


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        const query =
            searchInput.value.trim();

        if (query.length > 0) {

            alert(
                `Searching for: ${query}`
            );

        }

    }

});