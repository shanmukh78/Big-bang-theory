// Optional: Add scroll animation or interaction later
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".event");
  const triggerBottom = window.innerHeight * 0.75;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add("visible");
    }
  });
});
