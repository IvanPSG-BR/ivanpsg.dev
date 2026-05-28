/**
 * back-to-top.js
 *
 * Lógica do botão "Voltar ao Topo".
 * Executa scroll suave até o topo da página ao clicar no botão.
 *
 * Estratégia:
 *  - Usa `window.scrollTo` com `behavior: 'smooth'` (nativo, zero dependências).
 *  - Foca o primeiro elemento focável do <main> após o scroll para melhor
 *    acessibilidade via teclado e leitores de tela.
 */

const btn = document.getElementById("back-to-top-btn");

if (btn) {
  btn.addEventListener("click", () => {
    // Scroll suave até o topo
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Acessibilidade: move o foco para o início do conteúdo principal
    // após o scroll terminar (aprox. 500 ms é suficiente para a maioria das páginas)
    setTimeout(() => {
      const main = document.getElementById("main-content");
      const focusTarget = main?.querySelector(
        'a[href], button, input, [tabindex="0"]'
      );
      if (focusTarget) {
        focusTarget.focus({ preventScroll: true });
      }
    }, 500);
  });
}
