// Keep the footer year current.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

// Use mouse hover on desktop, but tap-to-toggle on mobile/touch screens.
const daisy = document.querySelector('.daisy-wrap');
if (daisy) {
  const touchLayout = window.matchMedia('(hover: none), (pointer: coarse)');
  let lastInputWasTouch = false;

  daisy.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      lastInputWasTouch = true;
      daisy.classList.add('touch-mode');
    } else {
      lastInputWasTouch = false;
      daisy.classList.remove('touch-mode');
    }
  });

  daisy.addEventListener('click', () => {
    if (!lastInputWasTouch && !touchLayout.matches && navigator.maxTouchPoints === 0) return;
    daisy.classList.add('has-started');
    const spinning = daisy.classList.toggle('is-spinning');
    daisy.setAttribute('aria-pressed', String(spinning));
  });
}
