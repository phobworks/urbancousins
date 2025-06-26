/* Navbar  */
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  nav.classList.remove("reverse"); // Remove reverse class in case it exists
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  // Add reverse animation class
  nav.classList.add("reverse");

  // Wait for the animation to finish before hiding the menu
  nav.addEventListener(
    "animationend",
    () => {
      nav.style.display = "none";
      openNavBtn.style.display = "inline-block";
      closeNavBtn.style.display = "none";
    },
    { once: true } // Ensures the event listener is removed after execution
  );
};

closeNavBtn.addEventListener("click", closeNav);

// Close nav on link click
nav.querySelectorAll("li a").forEach((navLink) => {
  navLink.addEventListener("click", closeNav);
});

// ========= Banner rating section Starts =========

const bannerRating = document.getElementById("bannerRating");

// Clone the star icon 4 more times (we already have 1 in HTML)
for (let i = 0; i < 4; i++) {
  const clone = bannerRating.cloneNode(true);
  bannerRating.parentNode.insertBefore(clone, bannerRating.nextSibling);
}

// ========= Banner rating section ends =========

// ========= Testimonial section starts =========

const testimonials = [
  {
    name: "Angela M.",
    role: "Daughter of a Service User",
    message: "Urban Cousins Care has been a lifeline for our family. Their carers are not just professional—they're genuinely kind and thoughtful.",
  },
  {
    name: "Peter J.",
    role: "Service User",
    message: "With their help, I feel confident living on my own. Their support has truly brought comfort and peace to my everyday life.",
  },
  {
    name: "Carol S.",
    role: "Family Member",
    message: "They treat my father with such patience and respect. It's clear their carers truly care from the heart.",
  },
  {
    name: "David L.",
    role: "Husband of a Client",
    message: "Every staff member we've met has been warm, attentive, and reliable. It makes all the difference knowing she's in safe hands.",
  },
  {
    name: "Betty N.",
    role: "Service User",
    message: "They're not just carers—they're great listeners and friends. I never feel alone when they're around.",
  },
  {
    name: "Melissa K.",
    role: "Daughter",
    message: "They made the whole process feel easy and reassuring. From the first visit, we knew we had made the right choice.",
  },
  {
    name: "Janet O.",
    role: "Service User",
    message: "They always include me in decisions and respect my choices. That kind of care makes me feel truly valued.",
  },
  {
    name: "Chris B.",
    role: "Family Member",
    message: "Urban Cousins Care is everything we hoped for—professional, caring, and always reliable.",
  },
  {
    name: "Emily R.",
    role: "Daughter",
    message: "The carers are like part of our family now. My mum lights up every time they arrive.",
  },
  {
    name: "The Olatunde Family",
    role: "Family",
    message: "Their 24/7 support brought us so much relief during a stressful time. We'll always be grateful for their care and kindness.",
  },
];

const container = document.getElementById("testimonial-container");
const dotsContainer = document.getElementById("pagination-dots");
let currentIndex = 0;

function renderTestimonials() {
  container.innerHTML = "";
  testimonials.forEach((t, index) => {
    const div = document.createElement("div");
    div.className = `testimonial${index === currentIndex ? " active" : ""}`;
    div.innerHTML = `
        <p class="message">"${t.message}"</p>
        <p class="author">${t.name}</p>
        <p class="role">${t.role}</p>
      `;
    container.appendChild(div);
  });

  renderDots();
}

function renderDots() {
  dotsContainer.innerHTML = "";
  testimonials.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `dot${index === currentIndex ? " active" : ""}`;
    dot.addEventListener("click", () => {
      currentIndex = index;
      renderTestimonials();
    });
    dotsContainer.appendChild(dot);
  });
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonials();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonials();
});

renderTestimonials();

// ========= Testimonial section ends ===========

// ===== Frequently Asked Questions Section starts
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ===== Frequently Asked Questions Section ends
