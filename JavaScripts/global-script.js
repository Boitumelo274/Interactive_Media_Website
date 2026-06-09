//JavaScript Navigation for each page
const navigation = document.querySelector("#nav");

navigation.innerHTML = `
<nav class="nav-links">
    <a href="#" data-page="index.html" onclick="goHome()">Home</a>
    <a href="#" data-page="about.html" onclick="goAbout()">About Me</a>
    <a href="#" data-page="music-hiphop-culture.html" onclick="goMusic()">Music & Hip-Hop Culture</a>
    <a href="#" data-page="contact.html" onclick="goContact()">Contact</a>
</nav>
`;

const goHome = () => {
  if (window.location.pathname.includes("/Pages/")) {
    window.location.href = "../index.html";
  } else {
    window.location.href = "index.html";
  }
};

const goAbout = () => {
  if (window.location.pathname.includes("/Pages/")) {
    window.location.href = "about.html";
  } else {
    window.location.href = "Pages/about.html";
  }
};

const goMusic = () => {
  if (window.location.pathname.includes("/Pages/")) {
    window.location.href = "music-hiphop-culture.html";
  } else {
    window.location.href = "Pages/music-hiphop-culture.html";
  }
};

const goContact = () => {
  if (window.location.pathname.includes("/Pages/")) {
    window.location.href = "contact.html";
  } else {
    window.location.href = "Pages/contact.html";
  }
};

//Current page state handling on desktop and smaller tablets
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  const linkPage = link.dataset.page;
  if (linkPage === currentPage) {
    link.classList.add("current");
  }
});

//MobileMenu
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

mobileMenu.innerHTML = `
<div class="menu-header">Menu</div>
<a href="#" data-page="index.html" onclick="goHome()">Home</a>
    <a href="#" data-page="about.html" onclick="goAbout()">About Me</a>
    <a href="#" data-page="music-hiphop-culture.html" onclick="goMusic()">Music & Hip-Hop Culture</a>
    <a href="#" data-page="contact.html" onclick="goContact()">Contact</a>
`;

//Current page state handling on mobile menu
const menuLinks = document.querySelectorAll(".mobile-menu a");

menuLinks.forEach((link) => {
  const menuLinkPage = link.dataset.page;
  if (menuLinkPage === currentPage) {
    link.classList.add("current-link");
  }
});

//Get About Page collapsible content
const childhoodHeader = document.querySelector(".childhood-header");
const favouritesHeading = document.querySelector(".favourites-heading");
const secondParagraph = document.querySelector(".second-paragraph");
const favouriteInfo = document.querySelector(".favourite-info");

//Hide and show content when clicking each header icon
if (childhoodHeader && secondParagraph) {
  const icon = childhoodHeader.querySelector(".collapse-icon");

  childhoodHeader.classList.add("collapsible");
  secondParagraph.classList.add("content");

  childhoodHeader.addEventListener("click", () => {
    childhoodHeader.classList.toggle("active");
    secondParagraph.classList.toggle("active");
  });
}

if (favouritesHeading && favouriteInfo) {
  favouritesHeading.classList.add("collapsible1");
  favouriteInfo.classList.add("content1");

  favouritesHeading.addEventListener("click", () => {
    favouritesHeading.classList.toggle("active");
    favouriteInfo.classList.toggle("active");
  });
}

//Hide the menu button/icon after clicking
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("visible");
  });
}

//Get an element to handle the backgroud visibily / opacity when the menu button is clicked.
const menuOverlay = document.getElementById("menuOverlay");

const openMenu = () => {
  mobileMenu.classList.add("visible");
  if (menuOverlay) menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  mobileMenu.classList.remove("visible");
  if (menuOverlay) menuOverlay.classList.remove("active");
  document.body.style.overflow = "";
};

if (menuBtn) {
  menuBtn.addEventListener("click", openMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}

// Close with Escape key
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    mobileMenu &&
    mobileMenu.classList.contains("visible")
  ) {
    closeMenu();
  }
});

// Close when clicking a link
if (mobileMenu) {
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

//Get tying words span class
const typingWords = document.querySelector(".typing-words");

//Run the typing animation only on the home page
if (typingWords) {
  var typed = new Typed(".typing-words", {
    strings: ["Welcome to my personal portfolio."],
    typeSpeed: 80,
  });
}
