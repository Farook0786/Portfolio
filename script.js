// === Update year in footer ===
document.getElementById("year").textContent = new Date().getFullYear();

// === Highlight active navbar link on scroll ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// === Smooth scroll for navbar links (for older browsers) ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});



// === PROJECTS SLIDER ===
const projTrack = document.getElementById("projTrack");
const projLeft = document.getElementById("projLeft");
const projRight = document.getElementById("projRight");

let projIndex = 0;

projRight.addEventListener("click", () => {
  const cardWidth = document.querySelector(".project-card").offsetWidth + 30; 
  projIndex++;
  projTrack.style.transform = `translateX(-${projIndex * cardWidth}px)`;
});

projLeft.addEventListener("click", () => {
  if (projIndex > 0) projIndex--;
  const cardWidth = document.querySelector(".project-card").offsetWidth + 30;
  projTrack.style.transform = `translateX(-${projIndex * cardWidth}px)`;
});

