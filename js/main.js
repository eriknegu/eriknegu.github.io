// Navegació: destaca la secció que s'està llegint. El contingut funciona sense JS.
(() => {
  'use strict';

  const links = Array.from(document.querySelectorAll('.side-nav a[href^="#"]'));
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  function activate(id) {
    links.forEach(link => {
      const active = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function updateActiveSection() {
    // Contacte és una secció curta i està al final del document.
    // Aquesta comprovació evita que Formació quedi seleccionada al final.
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 16;
    if (atBottom) return activate('contact');

    const readingLine = window.scrollY + Math.min(window.innerHeight * 0.3, 240);
    let current = 'about';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top + window.scrollY <= readingLine) current = section.id;
    });
    activate(current);
  }

  let queued = false;
  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; updateActiveSection(); });
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  links.forEach(link => link.addEventListener('click', () => activate(link.hash.slice(1))));
  window.addEventListener('hashchange', updateActiveSection);
  updateActiveSection();

  const copyButton = document.querySelector('.copy-email');
  const feedback = document.querySelector('.copy-status');
  if (copyButton && feedback) {
    copyButton.addEventListener('click', async () => {
      const email = 'eriknepomnjastsihguix@gmail.com';
      feedback.textContent = '';
      try {
        if (!navigator.clipboard) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(email);
        feedback.textContent = currentLanguage === 'en' ? 'Email copied ✓' : 'Correu copiat ✓';
      } catch (_) {
        feedback.textContent = currentLanguage === 'en' ? 'You can select and copy the email above.' : 'Pots seleccionar i copiar el correu de sobre.';
      }
    });
  }

  // La pàgina conté sempre una versió catalana completa i accessible sense JS.
  // Desem els nodes de text originals per canviar l'idioma sense reemplaçar HTML
  // ni interferir amb enllaços, estils o seccions.
  const en = {
    "Erik Nepomnjastsih · CV i projectes": "Erik Nepomnjastsih · CV & Projects",
    "Salta al contingut": "Skip to content",
    "// NAVEGACIÓ": "// NAVIGATION",
    "Sobre mi": "About me",
    "Stack tècnic": "Technical stack",
    "Projectes": "Projects",
    "Experiència": "Experience",
    "Formació": "Education",
    "Contacte": "Contact",
    "Interessat en nous reptes": "Open to new opportunities",
    "Bigues i Riells · Catalunya": "Bigues i Riells · Catalonia",
    "Hola, soc l'Erik.": "Hello, I'm Erik.",
    "Programació": "Programming",
    "Enginyeria": "Engineering",
    "Aprenentatge": "Learning",
    "Estudio Enginyeria Informàtica a la": "I'm studying Computer Engineering at the",
    "Universitat de Girona": "University of Girona",
    ". M'interessa el desenvolupament de software, comprendre els sistemes i dissenyar solucions eficients a problemes reals.": ". I'm interested in software development, understanding how systems work, and designing effective solutions to real-world problems.",
    "Explora els projectes ↗": "Explore projects ↗",
    "UdG · des del 2023": "UdG · since 2023",
    "Desenvolupament de software": "Software development",
    "Enginyeria Informàtica · UdG": "Computer Engineering · UdG",
    "Anglès · First Certificate": "English · First Certificate",
    "Etapes professionals a Mango": "Periods working at Mango",
    "/ SOBRE MI": "/ ABOUT ME",
    "Una base tècnica.": "A technical foundation.",
    "Experiència pràctica.": "Practical experience.",
    "Motivació per aprendre i construir.": "Motivated to learn and build.",
    "Soc estudiant d'Enginyeria Informàtica i m'interessa aplicar els coneixements de programació i de sistemes a projectes concrets. M'agrada analitzar problemes, entendre'n les causes i treballar en solucions ben estructurades.": "As a Computer Engineering student, I am interested in applying programming and systems knowledge to concrete projects. I enjoy analysing problems, understanding their causes and developing well-structured solutions.",
    "L'experiència laboral en logística, comerç i instal·lacions esportives m'ha permès desenvolupar organització, responsabilitat, comunicació i capacitat d'adaptació.": "Working in logistics, retail and sports facilities has helped me develop organisational skills, responsibility, communication and adaptability.",
    "#resolució-de-problemes": "#problem-solving",
    "#organització": "#organisation",
    "#treball-en-equip": "#teamwork",
    "#aprenentatge": "#learning",
    "/ STACK TÈCNIC": "/ TECHNICAL STACK",
    "Tecnologies amb què": "Technologies I use",
    "treballo i aprenc.": "and keep learning.",
    "Llenguatges, tecnologies i eines que he utilitzat en assignatures i pràctiques acadèmiques.": "Languages, technologies and tools I have used in university coursework and practical assignments.",
    "Llenguatges utilitzats en pràctiques i exercicis": "Languages used in assignments and exercises",
    "Desenvolupament web": "Web development",
    "Estructura, presentació i interactivitat": "Structure, styling and interaction",
    "Eines i entorn": "Tools and environment",
    "Control de versions i sistemes": "Version control and systems",
    "/ PROJECTES PÚBLICS": "/ PUBLIC PROJECTS",
    "Projectes a GitHub.": "Projects on GitHub.",
    "Projectes documentats i accessibles al meu GitHub, amb enllaç directe al codi font.": "Documented projects available on my GitHub, with direct links to their source code.",
    "Pràctica d’Enginyeria del Software II centrada en el patró Strategy, el canvi de jugadors i l’assignació de rols.": "Software Engineering II assignment focused on the Strategy design pattern, player substitution and role assignment.",
    "Patrons de disseny · Programació orientada a objectes": "Design patterns · Object-oriented programming",
    "També pots consultar la resta de repositoris públics al": "You can also explore my other public repositories on",
    "meu perfil de GitHub ↗": "my GitHub profile ↗",
    "/ EXPERIÈNCIA": "/ EXPERIENCE",
    "professional.": "experience.",
    "Feines en entorns diversos que han reforçat el meu compromís, la col·laboració i la capacitat de gestionar responsabilitats.": "Roles across different workplaces that have strengthened my reliability, teamwork and ability to take responsibility.",
    "Mosso de magatzem": "Warehouse assistant",
    "Logística": "Logistics",
    "Operacions de magatzem, organització de mercaderia i suport a les tasques logístiques.": "Warehouse operations, inventory organisation and support for logistics tasks.",
    "Conserge d'instal·lacions esportives": "Sports facilities attendant",
    "Instal·lacions": "Facilities",
    "Pavelló i camp de futbol · l'Ametlla del Vallès": "Sports hall and football pitch · l'Ametlla del Vallès",
    "Tasques de consergeria i suport al funcionament de les instal·lacions durant tot el mes de juliol.": "Caretaking duties and support for the day-to-day operation of the facilities throughout July.",
    "Descàrrega, organització de mercaderia i preparació puntual de comandes.": "Unloading deliveries, organising stock and occasional order preparation.",
    "Venedor": "Sales assistant",
    "Comerç": "Retail",
    "Assessorament als clients, venda i manteniment del punt de venda.": "Customer advice, sales and upkeep of the shop floor.",
    "Atenció al client, venda de productes, reposició i suport a caixa.": "Customer service, product sales, restocking and support at the checkout.",
    "Veure experiència anterior ↘": "Show earlier experience ↘",
    "Ajudant de cuina": "Kitchen assistant",
    "· Pizzeria local · 2023": "· Local pizzeria · 2023",
    "Repartidor": "Delivery driver",
    "· Pizzeria local · 2022–2023": "· Local pizzeria · 2022–2023",
    "Entrenador de bàsquet": "Basketball coach",
    "/ FORMACIÓ": "/ EDUCATION",
    "Formació i": "Education and",
    "aprenentatge continu.": "continuous learning.",
    "2023 — actualitat": "2023 — present",
    "Grau en Enginyeria Informàtica": "BSc in Computer Engineering",
    "Universitat de Girona · Escola Politècnica Superior": "University of Girona · Polytechnic School",
    "Estudis universitaris": "University studies",
    "Universitat Oberta de Catalunya": "Open University of Catalonia",
    "Batxillerat científic": "Science-focused upper secondary education",
    "// LANGUAGES": "// LANGUAGES",
    "Idiomes": "Languages",
    "Català": "Catalan",
    "Nadiu": "Native",
    "Castellà": "Spanish",
    "Anglès": "English",
    "Rus": "Russian",
    "Bàsic": "Basic",
    "✳ Aprenentatge continu, dins i fora de l'aula.": "✳ Always learning, inside and outside the classroom.",
    "/ CONTACTE": "/ CONTACT",
    "Tens un projecte?": "Have a project in mind?",
    "Parlem-ne.": "Let's talk.",
    "Estic interessat en iniciatives on pugui continuar aprenent, aportar una base tècnica i col·laborar en el desenvolupament de solucions.": "I'm interested in opportunities where I can keep learning, contribute my technical skills and collaborate on practical solutions.",
    "Enviar un correu ↗": "Send an email ↗",
    "⧉ Copiar correu": "⧉ Copy email",
    "Tornar a dalt ↑": "Back to top ↑",
    "Navegació del portafolis": "Portfolio navigation",
    "Tornar a l'inici": "Back to top",
    "Seccions del portafolis": "Portfolio sections",
    "Perfil professional en format de codi": "Professional profile shown as code",
    "Currículum i portafolis tècnic d’Erik Nepomnjastsih Guix. Enginyeria Informàtica, competències, experiència i projectes de GitHub.": "Erik Nepomnjastsih Guix's CV and technical portfolio. Computer Engineering, skills, work experience and GitHub projects."
};
  const originals = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement && !node.parentElement.closest('script, style, pre, code')) {
      originals.set(node, node.nodeValue);
    }
  }
  const attrOriginals = new Map();
  document.querySelectorAll('[aria-label]').forEach(el => {
    attrOriginals.set(el, el.getAttribute('aria-label'));
  });
  const pageTitleCa = document.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  const descriptionCa = metaDescription ? metaDescription.content : '';
  const languageButtons = Array.from(document.querySelectorAll('[data-language]'));
  let currentLanguage = 'ca';

  function changeLanguage(language) {
    if (language !== 'ca' && language !== 'en') return;
    currentLanguage = language;
    originals.forEach((ca, node) => {
      const key = ca.trim();
      // Traducció contextual: al titular és 'Professional experience',
      // però al menú de navegació és 'Experience'.
      const translated = key === 'Experiència' && node.parentElement?.id === 'experience-title'
        ? 'Professional'
        : (en[key] ?? key);
      node.nodeValue = language === 'en'
        ? ca.replace(key, translated)
        : ca;
    });
    attrOriginals.forEach((ca, el) => {
      el.setAttribute('aria-label', language === 'en' ? (en[ca] ?? ca) : ca);
    });
    document.documentElement.lang = language;
    document.title = language === 'en' ? en[pageTitleCa.trim()] : pageTitleCa;
    if (metaDescription) metaDescription.content = language === 'en'
      ? (en[descriptionCa] ?? descriptionCa) : descriptionCa;
    languageButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    if (feedback) feedback.textContent = '';
    updateActiveSection();
    try { localStorage.setItem('cv-language', language); } catch (_) { /* Opcional */ }
  }
  languageButtons.forEach(button => button.addEventListener('click', () => changeLanguage(button.dataset.language)));
  let savedLanguage = 'ca';
  try { savedLanguage = localStorage.getItem('cv-language') || 'ca'; } catch (_) { /* Opcional */ }
  changeLanguage(savedLanguage === 'en' ? 'en' : 'ca');
})();
