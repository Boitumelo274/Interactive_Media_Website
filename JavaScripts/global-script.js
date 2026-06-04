//JavaScript Navigation for each page
const navigation = document.querySelector("#nav");

navigation.innerHTML = `
 <nav class="nav-links">
<a href="index.html">Home</a>
<a href="about.html">About Me</a>
<a href="music-hiphop-culture.html">Music & Hip-Hop Culture</a>
<a href="contact.html">Contact</a></nav>
`;

//Hover highlight effect for current page
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("current");
  }
});

//MobileMenu
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

mobileMenu.innerHTML = `
<a href="/Interactive_Media_Exam_Website/index.html">Home</a>
<a href="/Interactive_Media_Exam_Website/Pages/about.html">About Me</a>
<a href="/Interactive_Media_Exam_Website/Pages/music-hiphop-culture.html">Music & Hip-Hop Culture</a>
<a href="/Interactive_Media_Exam_Website/Pages/contact.html">Contact</a></nav>
`;

//About Page collapsible content
const childhoodHeader = document.querySelector(".childhood-header");
const favouritesHeading = document.querySelector(".favourites-heading");
const secondParagraph = document.querySelector(".second-paragraph");
const favouriteInfo = document.querySelector(".favourite-info");

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

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("visible");
  });
}

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
