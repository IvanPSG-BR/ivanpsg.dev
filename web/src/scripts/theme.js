// Função para aplicar o tema
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Carregar tema salvo ou usar preferência do sistema
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Detectar preferência do sistema
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
}

// Aplicar tema imediatamente (antes do DOM carregar)
loadTheme();

// Toggle de tema (será chamado pelo botão no Header)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

// Expor função globalmente para uso nos componentes
window["toggleTheme"] = toggleTheme;

// Listener para mudanças na preferência do sistema
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

// Botão de toggle no Header: sincroniza ícones e dispara troca de tema
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = themeToggle?.querySelector(".sun-icon");
  const moonIcon = themeToggle?.querySelector(".moon-icon");

  // Atualizar ícones baseado no tema atual
  function updateThemeIcons() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      sunIcon?.classList.add("hidden");
      moonIcon?.classList.remove("hidden");
      themeToggle?.setAttribute("aria-pressed", "false");
    } else {
      sunIcon?.classList.remove("hidden");
      moonIcon?.classList.add("hidden");
      themeToggle?.setAttribute("aria-pressed", "true");
    }
  }

  // Inicializar ícones
  updateThemeIcons();

  // Toggle ao clicar
  themeToggle?.addEventListener("click", () => {
    if (typeof window["toggleTheme"] === "function") {
      window["toggleTheme"]();
    }
    updateThemeIcons();
  });
});
