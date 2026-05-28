/**
 * Terminal Typing Effect
 *
 * Como usar nos componentes:
 *   - Na <section>, adicionar: data-terminal-section
 *   - No <p> do prompt, adicionar: data-terminal-command="nome_do_comando"
 *   - Dentro do prompt, usar: <span data-terminal-text></span>
 *                             <span class="terminal-cursor"></span>
 *   - No container do conteúdo principal: class="section-content"
 *
 * Comportamento do cursor:
 *   - Pisca continuamente enquanto digita (via CSS animation)
 *   - Para de piscar brevemente ao terminar (classe "typing")
 *   - Volta a piscar depois de uma pausa, como um terminal real
 *   - O conteúdo é revelado logo após o fim da digitação
 */

// Velocidade base de digitação em ms por caractere (mais lento = mais natural)
const TYPING_SPEED = 60;
// Variação aleatória por caractere para simular ritmo humano (±ms)
const TYPING_JITTER = 35;
// Atraso entre fim da digitação e reveal do conteúdo (ms)
const REVEAL_DELAY = 280;

/**
 * Digita uma string no elemento alvo, caractere por caractere.
 * Adiciona pequena variação aleatória para parecer mais natural.
 * Retorna uma Promise que resolve quando a digitação terminar.
 */
function typeText(element, text) {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = "";

    function tick() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        // Jitter: cada caractere tem um tempo levemente diferente
        const delay =
          TYPING_SPEED + (Math.random() * TYPING_JITTER * 2 - TYPING_JITTER);
        setTimeout(tick, delay);
      } else {
        resolve();
      }
    }

    tick();
  });
}

/**
 * Executa o efeito completo para uma seção:
 * 1. Digita o comando no span de texto (cursor pisca durante)
 * 2. Pausa com cursor ainda visível
 * 3. Revela o conteúdo da seção
 * 4. Cursor volta a piscar normalmente (como terminal idle)
 */
async function runTerminalEffect(section) {
  const commandPrompt = section.querySelector("[data-terminal-command]");
  const textSpan = section.querySelector("[data-terminal-text]");
  const cursor = section.querySelector(".terminal-cursor");
  const content = section.querySelector(".section-content");

  if (!commandPrompt || !textSpan || !cursor || !content) return;

  const command = commandPrompt.dataset.terminalCommand ?? "";

  // Para a animação de piscar durante a digitação (cursor fixo = "ativo")
  cursor.classList.add("typing");

  // Digita o comando
  await typeText(textSpan, command);

  // Pausa breve com cursor visível antes do reveal
  await new Promise((r) => setTimeout(r, REVEAL_DELAY));

  // Revela o conteúdo
  content.classList.add("revealed");

  // Volta a piscar após o reveal (cursor idle, como terminal aguardando)
  cursor.classList.remove("typing");
}

// Inicializar o observer após o DOM estar pronto
document.addEventListener("DOMContentLoaded", () => {
  // Respeitar prefers-reduced-motion: revelar tudo imediatamente sem animação
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const sections = document.querySelectorAll("[data-terminal-section]");

  if (prefersReduced) {
    sections.forEach((section) => {
      const textSpan = section.querySelector("[data-terminal-text]");
      const command =
        section.querySelector("[data-terminal-command]")?.dataset
          .terminalCommand ?? "";
      const content = section.querySelector(".section-content");

      if (textSpan) textSpan.textContent = command;
      // section-content já é revelado via CSS em prefers-reduced-motion
      // mas forçamos aqui também para garantir
      content?.classList.add("revealed");
    });
    return;
  }

  // Observer dispara uma única vez por seção
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          runTerminalEffect(entry.target);
        }
      });
    },
    {
      // Dispara quando 15% da seção estiver visível
      threshold: 0.15,
    },
  );

  sections.forEach((section) => observer.observe(section));
});
