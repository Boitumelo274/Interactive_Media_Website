//===================================
//JavaScript Navigation for each page
const navigation = document.querySelector("#nav");

navigation.innerHTML = `
 <nav class="nav-links">
<a href="../index.html">Home</a>
<a href="../Pages/about.html">About Me</a>
<a href="../Pages/music-hiphop-culture.html">Music & Hip-Hop Culture</a>
<a href="../Pages/contact.html">Contact</a></nav>
`;

//==========================================
//Hover highlight effect for current page
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
