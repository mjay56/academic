// Update the copyright year.
const yearElement = document.querySelector('#year');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

// Desktop: CSS hover. Touch devices: first tap rotates, second tap pauses.
const daisy = document.querySelector('.daisy-button');
if (daisy) {
  const touchDevice = window.matchMedia('(hover: none), (pointer: coarse)');
  daisy.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      daisy.classList.add('touch-mode');
    } else if (event.pointerType === 'mouse' && !touchDevice.matches) {
      daisy.classList.remove('touch-mode', 'is-spinning');
      daisy.setAttribute('aria-pressed', 'false');
    }
  });
  daisy.addEventListener('click', event => {
    const touchInput = touchDevice.matches || daisy.classList.contains('touch-mode');
    // Keyboard users may also toggle the animation.
    if (!touchInput && event.detail !== 0) return;
    daisy.classList.add('touch-mode');
    const active = daisy.classList.toggle('is-spinning');
    daisy.setAttribute('aria-pressed', String(active));
  });
}
