// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle?.addEventListener("click", () => {
  const isExpanded =
    mobileMenuToggle.getAttribute("aria-expanded") === "true";
  mobileMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileMenu?.classList.toggle("hidden");
});

// Fechar menu mobile ao clicar em um link
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenuToggle?.setAttribute("aria-expanded", "false");
  });
});
