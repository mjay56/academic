// Copyright year.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

// Desktop: hover to rotate. Touch devices: tap to start, tap again to pause.
// The petals rotate around the SVG's 110,110 centre; the yellow centre remains still.
const daisy = document.querySelector('.daisy-button');
const petals = daisy?.querySelector('.petal-ring');
if (daisy && petals) {
  const hoverMouse = window.matchMedia('(hover: hover) and (pointer: fine)');
  let lastPointerType = '';
  let rotating = false;
  let angle = 0;
  let lastFrameTime = null;
  let frameId = null;

  function animateFrame(timestamp) {
    if (!rotating) return;
    if (lastFrameTime !== null) {
      const elapsed = Math.min(timestamp - lastFrameTime, 100);
      angle = (angle + elapsed * 360 / 6000) % 360;
      petals.setAttribute('transform', `rotate(${angle.toFixed(3)} 110 110)`);
    }
    lastFrameTime = timestamp;
    frameId = requestAnimationFrame(animateFrame);
  }

  function startRotation() {
    if (rotating) return;
    rotating = true;
    lastFrameTime = null;
    daisy.setAttribute('aria-pressed', 'true');
    frameId = requestAnimationFrame(animateFrame);
  }

  function pauseRotation() {
    if (!rotating) return;
    rotating = false;
    lastFrameTime = null;
    if (frameId !== null) cancelAnimationFrame(frameId);
    daisy.setAttribute('aria-pressed', 'false');
  }

  daisy.addEventListener('pointerdown', (event) => {
    lastPointerType = event.pointerType;
  });

  daisy.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse' && hoverMouse.matches) startRotation();
  });

  daisy.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse' && hoverMouse.matches) pauseRotation();
  });

  daisy.addEventListener('click', (event) => {
    // A desktop mouse click does not toggle: mouse hover is the control there.
    // Mobile taps and keyboard activation toggle, regardless of mobile hover quirks.
    const desktopMouseClick = event.detail !== 0 && lastPointerType === 'mouse' && hoverMouse.matches;
    if (desktopMouseClick) return;
    if (rotating) pauseRotation();
    else startRotation();
  });
}
