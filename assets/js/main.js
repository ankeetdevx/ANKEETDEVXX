document.addEventListener("DOMContentLoaded", () => {
  const revealNodes = document.querySelectorAll(".reveal");
  const menuButton = document.querySelector("#menuButton");
  const navLinks = document.querySelector("#navLinks");
  const menuBarButton = document.querySelector("#menuBarButton");
  const menuBarPanel = document.querySelector("#menuBarPanel");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  if (menuBarButton && menuBarPanel) {
    menuBarButton.addEventListener("click", (e) => {
      e.stopPropagation();
      menuBarPanel.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!menuBarPanel.contains(e.target) && e.target !== menuBarButton) {
        menuBarPanel.classList.remove("show");
      }
    });
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => io.observe(node));

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const demoForm = document.querySelector("#contactForm");
  if (demoForm) {
    demoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.querySelector("#contactStatus");
      if (status) {
        status.textContent = "Thanks, your message draft is ready. You can send it by email now.";
      }
      demoForm.reset();
    });
  }
});
