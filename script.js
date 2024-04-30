// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Select all menu items
let menuItems = document.querySelectorAll(".navbar .menu a");

// Add click event listeners to menu items
menuItems.forEach(item => {
  item.addEventListener("click", function(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Get the target section ID from the href attribute
    let targetId = item.getAttribute("href").substring(1);

    // Find the target section by ID
    let targetSection = document.getElementById(targetId);

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Close the side navigation menu
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });
});

menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}


// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Popup JavaScript
let boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        let imageUrl = box.getAttribute("data-image");
        if (imageUrl) {
            document.getElementById("popup-image").src = imageUrl;
            document.getElementById("popup").style.display = "flex";
        }
    });
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Get the image element
const image = document.querySelector('.left img');

// Create an IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If the image is intersecting with the viewport, add the 'active' class to trigger the transition effect
      image.classList.add('active');
    } else {
      // Otherwise, remove the 'active' class
      image.classList.remove('active');
    }
  });
});

// Observe the target element (the 'left' div)
observer.observe(document.querySelector('.left'));
