// ==========================================
// PAGE TRANSITION SYSTEM
// ==========================================

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");
const pageLinks = document.querySelectorAll(".page-link");

let currentPage = "home";
let isChangingPage = false;


// Change page function

function changePage(targetPage) {

    if (targetPage === currentPage || isChangingPage) {
        return;
    }

    isChangingPage = true;

    const oldPage = document.getElementById(currentPage);
    const newPage = document.getElementById(targetPage);

    // Fade old page

    oldPage.classList.add("fade-out");

    setTimeout(() => {

        oldPage.classList.remove("active-page");
        oldPage.classList.remove("fade-out");

        newPage.classList.add("active-page");

        // Start new page animation

        newPage.classList.add("fade-in");

        setTimeout(() => {
            newPage.classList.remove("fade-in");
        }, 650);

        currentPage = targetPage;

        // Update navbar

        navButtons.forEach(button => {

            button.classList.remove("active");

            if (button.dataset.page === targetPage) {
                button.classList.add("active");
            }

        });

        isChangingPage = false;

    }, 350);
}


// ==========================================
// NAVIGATION BUTTONS
// ==========================================

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        changePage(button.dataset.page);

        navMenu.classList.remove("show");

    });

});


// Home page buttons

pageLinks.forEach(button => {

    button.addEventListener("click", () => {

        changePage(button.dataset.page);

    });

});


// ==========================================
// MOBILE MENU
// ==========================================

const mobileMenu = document.getElementById("mobileMenu");
const navMenu = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// ==========================================
// MENU FILTER
// ==========================================

const categoryButtons =
    document.querySelectorAll(".category");

const menuItems =
    document.querySelectorAll(".menu-item");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selected =
            button.dataset.category;


        menuItems.forEach(item => {

            const type = item.dataset.type;

            if (
                selected === "all" ||
                selected === type
            ) {

                item.style.display = "grid";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ==========================================
// BOOKING FORM
// ==========================================

const bookingForm =
    document.getElementById("bookingForm");

const successMessage =
    document.getElementById("successMessage");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const people =
        document.getElementById("people").value;


    if (
        name === "" ||
        phone === "" ||
        people === ""
    ) {

        successMessage.textContent =
            "Please fill all the required details.";

        return;
    }


    successMessage.textContent =
        "✓ Table request received. See you at Luna & Bean! ☕";


    bookingForm.reset();

});
