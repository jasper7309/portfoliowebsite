/* ===== PROJECT DATA ===== */
const projects = [
  {
    id: 1,
    title: "YouTube UI Clone",
    desc: "Frontend recreation of YouTube's interface using HTML, CSS, and JavaScript. Focused on layout accuracy, responsive grid design, and replicating real-world UI patterns.",
    image: "https://res.cloudinary.com/dgxsyq2tf/image/upload/v1773404432/youtubeclone_pekbu9.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://jasper7309.github.io/my-html-css/",
    code: null
  },
  {
    id: 2,
    title: "Spotify UI Clone",
    desc: "Recreation of Spotify's interface using modern CSS layout techniques including Flexbox and Grid. Built to match the original's visual structure and responsiveness.",
    image: "https://res.cloudinary.com/dgxsyq2tf/image/upload/v1773404432/spotifyclone_scuvjb.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://spotify-website-clone.vercel.app/",
    code: null
  },
  {
    id: 3,
    title: "Aptech Website",
    desc: "A structured website built to represent Aptech with clear navigation, organized content sections, and a fully responsive layout across devices.",
    image: "https://res.cloudinary.com/dgxsyq2tf/image/upload/v1773404153/aptechwebsite_d3uonb.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://aptech-website2.vercel.app/",
    code: null
  },
  {
    id: 4,
    title: "To-Do List App",
    desc: "A clean and functional task management app with the ability to add, complete, and delete tasks. Built with vanilla JavaScript and persistent local state.",
    image: "https://res.cloudinary.com/dgxsyq2tf/image/upload/v1773405571/todolistapp_hfk8qn.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://todolistapp-beryl-two.vercel.app/",
    code: null
  }
];
 
/* ===== RENDER PROJECTS ===== */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
 
  grid.innerHTML = projects.map(p => `
    <div class="project-card fade-in">
      ${p.image
        ? `<img class="project-card-img" src="${p.image}" alt="${p.title}" loading="lazy" />`
        : `<div class="project-card-img-placeholder">${p.title.charAt(0)}</div>`
      }
      <div class="project-card-body">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.desc}</p>
        <div class="project-card-tags tag-row">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="project-card-footer">
        ${p.code ? `<a href="${p.code}" target="_blank" class="btn btn-outline">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          Code
        </a>` : ""}
        <a href="${p.demo}" target="_blank" class="btn btn-dark">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          View Project
        </a>
      </div>
    </div>
  `).join("");
 
  // Trigger animations after render
  requestAnimationFrame(checkFadeIns);
}
 
/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 1px 20px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
}, { passive: true });
 
/* ===== MOBILE MENU ===== */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
 
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
 
// Close on link click
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
 
/* ===== SCROLL FADE-IN ANIMATIONS ===== */
function checkFadeIns() {
  const els = document.querySelectorAll(".fade-in");
  const winH = window.innerHeight;
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < winH - 60) {
      el.classList.add("visible");
    }
  });
}
 
// Add fade-in class to section children
function initFadeIns() {
  const targets = document.querySelectorAll(
    ".skill-card, .system-card, .ai-card, .timeline-item, .section-header"
  );
  targets.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
  });
}
 
/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
 
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    btn.textContent = "Sending...";
    btn.disabled = true;
 
    setTimeout(() => {
      formSuccess.classList.add("show");
      contactForm.reset();
      btn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Send Message
      `;
      btn.disabled = false;
      setTimeout(() => formSuccess.classList.remove("show"), 4000);
    }, 900);
  });
}
 
/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll(".nav-links a");
 
function setActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinksAll.forEach(link => {
        link.style.color = "";
        link.style.background = "";
        if (link.getAttribute("href") === `#${id}`) {
          link.style.color = "#0f0f0f";
          link.style.background = "#f3f4f6";
        }
      });
    }
  });
}
 
/* ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
 
/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initFadeIns();
  checkFadeIns();
  setActiveNav();
 
  window.addEventListener("scroll", () => {
    checkFadeIns();
    setActiveNav();
  }, { passive: true });
});
 