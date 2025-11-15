// === Update year in footer ===
document.getElementById("year").textContent = new Date().getFullYear();


// === Highlight active navbar link on scroll ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90;
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


// === Smooth scroll for navbar links ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const id = this.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      e.preventDefault();
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});


// === PROJECTS SLIDER (FINAL, WORKING, LOOPING) ===
const projTrack = document.getElementById("projTrack");
const projCards = document.querySelectorAll(".project-card");
const projLeft = document.getElementById("projLeft");
const projRight = document.getElementById("projRight");

let projIndex = 0;

function updateProjects() {
  const cardWidth = projCards[0].offsetWidth + 30; // width + spacing
  projTrack.style.transform = `translateX(-${projIndex * cardWidth}px)`;
}

// RIGHT →
projRight.addEventListener("click", () => {
  projIndex++;
  if (projIndex >= projCards.length) projIndex = 0; // loop back
  updateProjects();
});

// LEFT ←
projLeft.addEventListener("click", () => {
  projIndex--;
  if (projIndex < 0) projIndex = projCards.length - 1; // loop to end
  updateProjects();
});

// Auto-scroll
setInterval(() => {
  projIndex = (projIndex + 1) % projCards.length;
  updateProjects();
}, 5000);




// === CERTIFICATES CAROUSEL ===
let certIndex = 0;

const certTrack = document.querySelector(".certificate-track");
const certItems = document.querySelectorAll(".certificate");
const certLeft = document.getElementById("certLeft");
const certRight = document.getElementById("certRight");

function updateCertificateCarousel() {
  const cardWidth = certItems[0].offsetWidth + 25;
  certTrack.style.transform = `translateX(-${certIndex * cardWidth}px)`;
}

certRight.addEventListener("click", () => {
  certIndex = (certIndex + 1) % certItems.length;
  updateCertificateCarousel();
});

certLeft.addEventListener("click", () => {
  certIndex = (certIndex - 1 + certItems.length) % certItems.length;
  updateCertificateCarousel();
});

// Auto-scroll for certificates
setInterval(() => {
  certIndex = (certIndex + 1) % certItems.length;
  updateCertificateCarousel();
}, 4000);
