document.addEventListener('DOMContentLoaded', () => {
    const addClickListener = (selector, message) => {
      const element = document.querySelector(selector);
      if (element) {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          alert(message);
        });
      }
    };
  
    addClickListener('a[href="#menu"]', 'Das Menü ist bald verfügbar!');
    addClickListener('a[href="#specials"]', 'Unsere Spezialitäten werden Sie begeistern!');
    addClickListener('a[href="#events"]', 'Schauen Sie bei unseren Veranstaltungen vorbei!');
  });
  