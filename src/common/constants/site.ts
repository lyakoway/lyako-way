// Данные сайта для поисковиков: canonical, og-теги, карта сайта, разметка
// Schema.org. Абсолютный адрес нужен потому, что поисковики не принимают
// относительные URL в canonical/og:url/sitemap. При переезде на свой домен
// достаточно поменять SITE_URL здесь.
export const SITE_URL = "https://lyakoway.vercel.app";
export const SITE_NAME = "LYAKOWAY";

export const SITE_TITLE = "LYAKOWAY — Мазуренко Алексей, AI-инженер";

export const SITE_DESCRIPTION =
  "Мазуренко Алексей (lyakoway) — AI-инженер из Москвы: RAG-системы, " +
  "LLM-приложения, веб-разработка. Портфолио, резюме, услуги, блог.";

export const OG_IMAGE = `${SITE_URL}/static/og/lyakoway-og.png`;

// Разметка Schema.org: связывает бренд «lyakoway» с человеком и сайтом —
// по этому запросу поисковику иначе не за что зацепиться, кроме текста
// страницы (Google сейчас считает «lyakoway» опечаткой похожих доменов).
export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Мазуренко Алексей",
      alternateName: ["lyakoway", "LYAKOWAY", "Alexey Mazurenko"],
      jobTitle: "AI-инженер",
      url: SITE_URL,
      image: `${SITE_URL}/static/favicons/apple-icon.png`,
      email: "mailto:lyakoway@gmail.com",
      telephone: "+7-977-270-09-30",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Москва",
        addressCountry: "RU",
      },
      knowsAbout: [
        "AI",
        "LLM",
        "RAG",
        "Prompt engineering",
        "MLOps",
        "React",
        "Next.js",
      ],
      sameAs: ["https://github.com/lyakoway", "https://t.me/amazurenk"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "lyakoway",
      url: SITE_URL,
      inLanguage: "ru-RU",
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};
