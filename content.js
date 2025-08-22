setTimeout(() => {
  // THE TWO HALVES, YKNOW
  document.getElementById('topHalf').classList.add('fly-top');
  document.getElementById('bottomHalf').classList.add('fly-bottom');
  document.getElementById('loader').style.animation = 'none';

  // BLOCKS
  document.getElementById('topCurtain').classList.add('fly-curtain-top');
  document.getElementById('bottomCurtain').classList.add('fly-curtain-bottom');

  // MIDDLE FLASH THINGY
  document.getElementById('staticCircle').classList.add('static-circle-flash');

  // REMOVE LOADER
  setTimeout(() => {
    document.getElementById('loaderOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 3500);
}, 4000);
