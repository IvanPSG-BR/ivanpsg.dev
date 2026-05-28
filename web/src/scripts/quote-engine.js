/**
 * quote-engine.js
 *
 * Engine completo do efeito de citação interativa no Hero:
 *   - Aleatorização sem repetição sequencial (Fisher-Yates)
 *   - Controle de hover (desktop) e toque (mobile)
 */

import quotesData from '../json/quotes.json';

// ---------------------------------------------------------------------------
// Aleatorização
// ---------------------------------------------------------------------------

/**
 * Embaralha um array usando o algoritmo Fisher-Yates.
 * @param {string[]} arr
 * @returns {string[]}
 */
function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Retorna uma função que, a cada chamada, devolve a próxima frase da fila.
 * A fila é (re)embaralhada quando se esgota, garantindo que todas as frases
 * apareçam antes de qualquer repetição.
 *
 * @param {string[]} quotes
 * @returns {() => string}
 */
function createQuoteRandomizer(quotes) {
  let queue = [];
  return function nextQuote() {
    if (queue.length === 0) queue = shuffle(quotes);
    return queue.pop();
  };
}

const nextQuote = createQuoteRandomizer(quotesData.anime);

// ---------------------------------------------------------------------------
// Interação com o DOM
// ---------------------------------------------------------------------------

const wrapper   = document.getElementById('photo-interactive');
const photo     = document.getElementById('hero-photo');
const container = document.getElementById('hero-quote-container');
const quoteText = document.getElementById('hero-quote-text');

function showQuote() {
  quoteText.textContent = `\u201c${nextQuote()}\u201d`;
  photo.classList.add('scale-90');
  container.classList.remove('max-h-0', 'opacity-0');
  container.classList.add('max-h-40', 'opacity-100');
}

function hideQuote() {
  photo.classList.remove('scale-90');
  container.classList.add('max-h-0', 'opacity-0');
  container.classList.remove('max-h-40', 'opacity-100');
}

// Detecta se o dispositivo usa toque como entrada primária
const isTouchPrimary = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (isTouchPrimary) {
  // Mobile: toque mostra a citação por 3 s e depois esconde
  let touchTimer = null;
  wrapper.addEventListener('touchend', () => {
    if (touchTimer) clearTimeout(touchTimer);
    showQuote();
    touchTimer = setTimeout(hideQuote, 3000);
  }, { passive: true });
} else {
  // Desktop: hover clássico
  wrapper.addEventListener('mouseenter', showQuote);
  wrapper.addEventListener('mouseleave', hideQuote);
}

