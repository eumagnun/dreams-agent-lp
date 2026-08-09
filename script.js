const TRANSLATIONS = {
  'pt-BR': {
    meta: {
      title: 'Onírica — Espelho dos Sonhos',
      description: 'Interprete seus sonhos com a profundidade da psicologia junguiana, ganhe uma ilustração exclusiva e um relatório em PDF.',
    },
    nav: { login: 'Entrar' },
    hero: {
      headline: 'Descubra o que seus sonhos estão tentando te dizer',
      subtitle: 'A Onírica interpreta seus sonhos com a profundidade da psicologia junguiana, cria uma ilustração exclusiva da sua cena e entrega tudo em um relatório para guardar.',
      cta: 'Comece grátis',
      trust: '1 análise grátis ao se cadastrar. Sem necessidade de cartão.',
    },
    how: {
      title: 'Como funciona',
      step1: { title: 'Conte seu sonho', desc: 'Escreva ou grave em áudio o que você sonhou.' },
      step2: { title: 'Converse com a Onírica', desc: 'Ela faz 3 perguntas rápidas pra entender melhor o contexto.' },
      step3: { title: 'Receba sua interpretação', desc: 'Uma leitura simbólica, uma ilustração exclusiva e um relatório em PDF.' },
    },
    features: {
      f1: { title: 'Psicologia Junguiana', desc: 'Interpretação simbólica inspirada na tradição de Carl Jung, sem jargão acadêmico.' },
      f2: { title: 'Ilustração Exclusiva', desc: 'Uma imagem única gerada por IA a partir dos símbolos do seu sonho.' },
      f3: { title: 'Relatório em PDF', desc: 'Guarde ou compartilhe sua interpretação e ilustração quando quiser.' },
      f4: { title: '3 Idiomas', desc: 'Disponível em português, inglês e espanhol.' },
    },
    ctaBand: { title: 'Pronto para olhar para dentro?' },
    footer: {
      disclaimer: 'As interpretações são sugeridas por Inteligência Artificial e não substituem o acompanhamento de um profissional de saúde mental.',
      login: 'Já tem conta? <a href="https://onirica-app.web.app">Entrar</a>',
    },
  },
  en: {
    meta: {
      title: 'Onírica — Dream Mirror',
      description: 'Interpret your dreams with the depth of Jungian psychology, get an exclusive illustration and a PDF report.',
    },
    nav: { login: 'Log in' },
    hero: {
      headline: 'Discover what your dreams are trying to tell you',
      subtitle: "Onírica interprets your dreams with the depth of Jungian psychology, creates an exclusive illustration of your scene, and delivers it all in a report you can keep.",
      cta: 'Start for free',
      trust: '1 free analysis when you sign up. No card required.',
    },
    how: {
      title: 'How it works',
      step1: { title: 'Tell your dream', desc: 'Write it out or record it as audio.' },
      step2: { title: 'Talk with Onírica', desc: 'She asks 3 quick questions to understand the context better.' },
      step3: { title: 'Get your interpretation', desc: 'A symbolic reading, an exclusive illustration, and a PDF report.' },
    },
    features: {
      f1: { title: 'Jungian Psychology', desc: "Symbolic interpretation inspired by Carl Jung's tradition, without academic jargon." },
      f2: { title: 'Exclusive Illustration', desc: "A unique AI-generated image based on your dream's symbols." },
      f3: { title: 'PDF Report', desc: 'Keep or share your interpretation and illustration whenever you like.' },
      f4: { title: '3 Languages', desc: 'Available in Portuguese, English, and Spanish.' },
    },
    ctaBand: { title: 'Ready to look within?' },
    footer: {
      disclaimer: 'Interpretations are suggested by Artificial Intelligence and do not replace guidance from a mental health professional.',
      login: 'Already have an account? <a href="https://onirica-app.web.app">Log in</a>',
    },
  },
  es: {
    meta: {
      title: 'Onírica — Espejo de los Sueños',
      description: 'Interpreta tus sueños con la profundidad de la psicología junguiana, obtén una ilustración exclusiva y un informe en PDF.',
    },
    nav: { login: 'Iniciar sesión' },
    hero: {
      headline: 'Descubre lo que tus sueños intentan decirte',
      subtitle: 'Onírica interpreta tus sueños con la profundidad de la psicología junguiana, crea una ilustración exclusiva de tu escena y te lo entrega todo en un informe para guardar.',
      cta: 'Comienza gratis',
      trust: '1 análisis gratis al registrarte. No se necesita tarjeta.',
    },
    how: {
      title: 'Cómo funciona',
      step1: { title: 'Cuenta tu sueño', desc: 'Escríbelo o grábalo en audio.' },
      step2: { title: 'Conversa con Onírica', desc: 'Ella hace 3 preguntas rápidas para entender mejor el contexto.' },
      step3: { title: 'Recibe tu interpretación', desc: 'Una lectura simbólica, una ilustración exclusiva y un informe en PDF.' },
    },
    features: {
      f1: { title: 'Psicología Junguiana', desc: 'Interpretación simbólica inspirada en la tradición de Carl Jung, sin jerga académica.' },
      f2: { title: 'Ilustración Exclusiva', desc: 'Una imagen única generada por IA a partir de los símbolos de tu sueño.' },
      f3: { title: 'Informe en PDF', desc: 'Guarda o comparte tu interpretación e ilustración cuando quieras.' },
      f4: { title: '3 Idiomas', desc: 'Disponible en portugués, inglés y español.' },
    },
    ctaBand: { title: '¿Listo para mirar hacia adentro?' },
    footer: {
      disclaimer: 'Las interpretaciones son sugeridas por Inteligencia Artificial y no sustituyen el acompañamiento de un profesional de salud mental.',
      login: '¿Ya tienes cuenta? <a href="https://onirica-app.web.app">Inicia sesión</a>',
    },
  },
};

const SUPPORTED_LANGUAGES = Object.keys(TRANSLATIONS);

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function detectInitialLanguage() {
  const stored = localStorage.getItem('onirica_lang');
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) return stored;

  const browserLang = (navigator.language || 'pt-BR').toLowerCase();
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('es')) return 'es';
  return 'pt-BR';
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['pt-BR'];
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getNested(dict, key);
    if (value === undefined) return;

    if (el.hasAttribute('data-i18n-attr')) {
      el.setAttribute(el.getAttribute('data-i18n-attr'), value);
    } else {
      el.innerHTML = value;
    }
  });

  const switcher = document.getElementById('lang-switcher');
  if (switcher) switcher.value = lang;
}

function initLanguageSwitcher() {
  const switcher = document.getElementById('lang-switcher');
  if (!switcher) return;

  switcher.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('onirica_lang', lang);
    applyLanguage(lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  applyLanguage(detectInitialLanguage());
});
