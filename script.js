// Year
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Motion System (SOL-style large type + scroll reveals) =====
window.addEventListener("DOMContentLoaded", () => {
  // Split the hero headline into characters for staggered entrance
  const titleEl = document.querySelector(".split");
  if (titleEl && window.SplitType) {
    const split = new SplitType(titleEl, { types: "words,chars" });
    gsap.from(split.chars, {
      opacity: 0,
      yPercent: 40,
      rotateX: -40,
      transformOrigin: "50% 100%",
      stagger: 0.015,
      duration: 0.65,
      ease: "power2.out",
      delay: 0.15
    });
  }

  // Section reveals on scroll
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  }

  // Count-up stats when visible
  const counters = document.querySelectorAll("[data-count-to]");
  const countUp = (el) => {
    const end = parseFloat(el.dataset.countTo);
    const obj = { val: 0 };
    gsap.to(obj, {
      val: end,
      duration: 1.2,
      ease: "power1.out",
      onUpdate: () => { el.textContent = Math.floor(obj.val); }
    });
  };
  counters.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => countUp(el)
    });
  });

  // Smooth scroll for top nav
  document.querySelectorAll('.nav__links a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Lightweight form handler
  const form = document.querySelector(".form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks — we’ll be in touch shortly.");
    e.target.reset();
  });
});
