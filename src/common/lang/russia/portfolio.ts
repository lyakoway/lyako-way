import { PortfolioListProps, PortfolioProps } from "src/common/types/lang";

export const portfolio: PortfolioProps = {
  title: "Недавно разработаны",
  buttonText: "Открыть портфолио",
  portfolioNameList: "Портфолио",
  portfolioTextTitle: "Добро пожаловать в портфолио!",
  portfolioText:
    "В портфолио представлены проекты, которые я разработал в сотрудничестве с веб-студиями так и для частных клиентов, а также несколько личных проектов.\nОсновная масса проектов содержит индивидуальные функции предназначенные для реализации особенностей работы веб-сайта.\nВ моем портфолио веб-разработчика указано название сайта, ссылка на сайт, цель сайта и описание выполненной работы.",
  all: "Все",
  filter: "Фильтр проектов",
  wip: "В разработке",
};

const ICON_META = { icon: "", widthIcon: "285px", heightIcon: "500px" };

export const propsPortfolioList: PortfolioListProps[] = [
  {
    id: "rag-chat",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "RAG Chat — чат с документами",
    portfolioDataTime: "2025",
    hrefNameList: "rag-chat",
    direction: "RAG и знания",
    technologies: ["Python", "FastAPI", "RAG", "ChromaDB", "React", "TypeScript"],
    github: "https://github.com/lyakoway/ai-RAG-chat",
    portfolioText:
      "AI-ассистент с Retrieval-Augmented Generation: загружаете PDF, Word или Excel и задаёте вопросы по содержимому — ответы приходят со ссылками на страницы-источники.\nBackend на FastAPI + ChromaDB (векторный поиск) и эмбеддингах; поддержка нескольких LLM-провайдеров (OpenAI, Anthropic, Ollama). Frontend — React 19 + TypeScript (Vite).",
    screenshots: [
      "/static/portfolio/rag-chat-dark.png",
      "/static/portfolio/rag-chat-light.png",
    ],
  },
  {
    id: "ai-agents",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Мульти-агентная система",
    portfolioDataTime: "",
    hrefNameList: "ai-agents",
    direction: "AI-агенты",
    wip: true,
    technologies: ["Python", "LangGraph", "function calling", "оркестрация"],
    portfolioText:
      "Проект в разработке. Команда AI-агентов с оркестрацией под бизнес-сценарии: workflow, function / tool calling, обработка ошибок и восстановление после сбоев. Скоро опубликую.",
  },
  {
    id: "prompt-engineering",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Промпт-инжиниринг и evaluation",
    portfolioDataTime: "",
    hrefNameList: "prompt-engineering",
    direction: "Промпт-инжиниринг",
    wip: true,
    technologies: ["prompt engineering", "evaluation", "Python"],
    portfolioText:
      "Проект в разработке. Фреймворк для промпт-сценариев и evaluation-наборов: тесты на точность, стабильность и edge cases, регрессионная проверка качества ответов. Скоро опубликую.",
  },
  {
    id: "llm-integration",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Интеграция LLM в продукт",
    portfolioDataTime: "",
    hrefNameList: "llm-integration",
    direction: "LLM-интеграция",
    wip: true,
    technologies: ["FastAPI", "LLM API", "Python", "Redis"],
    portfolioText:
      "Проект в разработке. Внедрение больших языковых моделей в продукт через API: надёжный backend на Python / FastAPI, кэширование, безопасная и предсказуемая работа. Скоро опубликую.",
  },
  {
    id: "mlops",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Инфраструктура для LLM-приложений",
    portfolioDataTime: "",
    hrefNameList: "mlops",
    direction: "MLOps",
    wip: true,
    technologies: ["Docker", "Kubernetes", "CI/CD", "мониторинг"],
    portfolioText:
      "Проект в разработке. Инфраструктура и деплой LLM-приложений: контейнеризация, оркестрация, CI/CD и мониторинг. Скоро опубликую.",
  },
  {
    id: "assistant",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "AI-ассистент / чат-бот",
    portfolioDataTime: "",
    hrefNameList: "assistant",
    direction: "Ассистенты",
    wip: true,
    technologies: ["LLM", "RAG", "function calling", "React"],
    portfolioText:
      "Проект в разработке. AI-ассистент / чат-бот с доступом к базе знаний (RAG) и инструментам (function calling) под конкретные задачи. Скоро опубликую.",
  },
];
