// Генератор PDF-резюме: собирает HTML (ru/en × light/dark + одноколоночный ATS/print)
// и печатает PDF через headless Chrome. Контент синхронизирован со страницей /cv
// (src/common/lang/*/resumeCv.ts) — при изменении /cv правим здесь и запускаем:
//   node scripts/resume/generate.mjs
//
// Результат: public/static/resume/Alexey-Mazurenko-<lang>[-dark|-print].pdf
// *-print.pdf — одноколоночная ATS-версия для порталов (Greenhouse/Lever).

import { execFileSync } from "node:child_process";
import { writeFileSync, mkdirSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const outDir = join(root, "public", "static", "resume");
// HTML пишется в ту же папку — аватар подтягивается по относительному пути.
const avatar = "avatar.jpg";
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/* ——— Контент ——— */

const content = {
  ru: {
    name: "Алексей Мазуренко",
    role: "AI / LLM Engineer",
    sectionTitles: {
      profile: "Профиль",
      contacts: "Контакты",
      skills: "Навыки",
      highlights: "В цифрах",
      experience: "Опыт работы",
      experienceContinued: "Опыт работы",
      projects: "Проекты",
      tasks: "Основные задачи",
      results: "Ключевые результаты",
      stack: "Стек",
      processes: "Процессы",
      demo: "Демо",
      education: "Образование",
    },
    contacts: {
      phone: { label: "Телефон", value: "+7 (977) 270-09-30", icon: "phone" },
      email: { label: "Email", value: "lyakoway@gmail.com", icon: "mail" },
      github: {
        label: "GitHub",
        value: "github.com/lyakoway",
        href: "https://github.com/lyakoway",
        icon: "github",
      },
      linkedin: {
        label: "LinkedIn",
        value: "linkedin.com/in/alexey-mazurenko-63068941b",
        href: "https://www.linkedin.com/in/alexey-mazurenko-63068941b/",
        icon: "linkedin",
      },
      website: {
        label: "Сайт",
        value: "lyakoway.vercel.app/contacts",
        href: "https://lyakoway.vercel.app/contacts",
        icon: "globe",
      },
      format: {
        label: "Локация",
        value: "Москва (UTC+3) · удалёнка / готов к переезду",
        icon: "briefcase",
      },
      languages: {
        label: "Языки",
        value: "English — B2 · русский — родной",
        icon: "languages",
      },
    },
    highlights: [
      "**~2 000 документов · ~200 вопросов/день · Recall@1 87% held-out**",
      "**Подготовка отчётности: 2 часа → 2 минуты**",
      "**~85% нормализованной точности SQL** (held-out)",
      "**Публичные GitHub-демо** — RAG Chat и AI Data Pilot",
    ],
    profile: [
      "**AI / LLM-инженер** с 7+ годами в разработке ПО, из них **2+ года — production LLM-системы** в МТС Web Services (MWS AI) — AI-подразделении МТС, одного из крупнейших телеком-операторов России (~80 млн+ абонентов). Вывел в production два внутренних продукта: RAG-ассистент для документов (**~2 000 документов; held-out Recall@1 53% dense-only → 87% hybrid**) и мультиагентную аналитическую платформу (**~85% нормализованной точности SQL**), сократившую подготовку отчётности **с 2 часов до 2 минут.**",
      "**Продакшн развёрнут внутри МТС (~12 команд, ~200 RAG-вопросов/день). Публичные GitHub-демо — самостоятельные личные проекты того же класса задач, не исходный код МТС; продовые данные под NDA.** Для RAG в production — **GLM-5.3-flash** (TTFT ~2,5–3 с, стоимость vs GPT/Claude); OpenAI, Anthropic и Ollama взаимозаменяемы.",
      "Веду путь **от прототипа до production:** Python / FastAPI, гибридный поиск, held-out evaluation, React / Next.js, Docker / Kubernetes / CI/CD.",
    ],
    siteLink: {
      value: "lyakoway.vercel.app",
      href: "https://lyakoway.vercel.app",
      text: "Подробнее о моих проектах и опыте — на моём сайте:",
    },
    skills: [
      { title: "LLM и AI-агенты", items: ["LLM API (OpenAI / Anthropic / GLM-5.3-flash / Ollama)", "AI-агенты", "Agent Loop (ReAct)", "Tool Calling", "Text-to-SQL", "Мультиагентный роутер (2 специалиста)", "Prompt Engineering", "Latency & Cost Tuning (TTFT, $/запрос)"] },
      { title: "RAG и поиск", items: ["RAG", "Hybrid Search (BM25 + Vector)", "RRF", "Chunking (tiktoken)", "fastembed", "ChromaDB", "Цитирование источников"] },
      { title: "Evaluation и качество", items: ["Held-out eval (без утечки в настройку)", "Recall@K / MRR", "LLM-as-a-Judge", "Grounding / Anti-Hallucination", "Prompt Evaluation", "Regression Testing"] },
      { title: "AI Data & Backend", items: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "ClickHouse", "SQL Guard (read-only, таймауты)", "SSE"] },
      { title: "Frontend и инфраструктура", items: ["React / Next.js", "TypeScript", "Docker", "Kubernetes", "CI/CD", "Git"] },
    ],
    experience: [
      {
        role: "AI / LLM Engineer",
        company: "МТС Web Services (MWS AI)",
        period: "апрель 2024 — н. в.",
        place: "Москва",
        projects: [
          {
            title: "RAG Chat — AI-ассистент с Retrieval-Augmented Generation",
            text: "AI-ассистент для работы с документами — загружает PDF, Word и Excel, отвечает на вопросы по содержимому и предоставляет ссылки на исходные страницы и фрагменты.",
            details: [
              { label: "RAG pipeline", text: "индексация документов → разбиение на фрагменты (tiktoken) → embeddings (fastembed) → гибридный поиск BM25 + вектора (RRF) → генерация ответа LLM → цитирование источников." },
              { label: "Три режима", text: "RAG Chat → AI Agent → Vector Search — переключение в одном приложении." },
              { label: "Архитектура", text: "Python / FastAPI → ChromaDB → fastembed → GLM-5.3-flash по умолчанию (OpenAI / Anthropic / Ollama) → SSE → React / TypeScript; SQLAlchemy — история диалогов." },
              { label: "Оценка", text: "held-out ~180 запросов, не использовавшихся для настройки промптов и retrieval. Гибрид BM25 + RRF: Recall@1 53% (dense-only) → 87%. Cross-encoder на fused top-k отклонён: RU/EN-дубликаты одного документа получали равный скор и вытесняли золотой чанк из fused top-k (−45 п.п. Recall@1, +~3 с)." },
              { label: "Качество", text: "63 pytest-теста + CI; TTFT ~2,5–3 с на GLM-5.3-flash." },
            ],
          },
          {
            title: "AI Data Pilot — мультиагентная аналитическая платформа",
            text: "Автоматизирует путь от вопроса пользователя до готового аналитического результата.",
            details: [
              { label: "Олег — AI-аналитик", text: "переводит вопросы на естественном языке в SQL, выполняет многошаговый анализ данных, выявляет динамику и отклонения, формирует таблицы, графики и аналитические выводы." },
              { label: "Ксюша — RAG-агент", text: "отвечает на вопросы по внутренней технической документации и загруженным документам (PDF, Word, Excel) с опорой на найденные источники." },
              { label: "Архитектура", text: "Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → аналитический слой → SSE → React / TypeScript; GLM-4.6 по умолчанию (OpenAI / Anthropic взаимозаменяемы); RAG-ядро Ксюши — гибридный поиск BM25 + векторные эмбеддинги (fastembed) → LLM → цитирование источников." },
              { label: "Качество", text: "174 pytest-теста + CI; held-out SQL-оценка — ~98% execution (запрос выполнился), ~85% нормализованной точности результата (мультимножество значений без алиасов, ORDER BY и формата чисел — не string exact-match); самокоррекция при ошибке SQL (GLM-4.6)." },
            ],
          },
        ],
        tasks: [
          "Проектировал и выводил в production AI-агентов — tool calling, оркестрация, обработка ошибок и восстановление после сбоев.",
          "Строил и измерял RAG-пайплайны — гибрид BM25 + вектора, цитирование источников; отклонил более медленный реранкер после проверки на held-out наборе.",
          "Формировал held-out evaluation-наборы — запросы не использовались для настройки промптов и retrieval — для регрессии поиска, промптов и моделей.",
          "Реализовал Text-to-SQL с SQL-guard и самокоррекцией запросов.",
          "Вёл сервисы AI-платформы end-to-end — backend (Python / FastAPI), frontend (React / Next.js), инфраструктура (Docker / Kubernetes / CI/CD).",
        ],
        results: [
          {
            title: "RAG Chat",
            items: [
              "Внутреннее использование в МТС (~2 000 документов, ~20 тыс. чанков, ~12 команд, ~200 вопросов/день). Публичное демо: личный проект, не код МТС; прод-данные под NDA.",
              "Held-out Recall@1 87% после гибрида BM25 + RRF.",
              "Сокращает поиск с минут до секунд по регламентам, договорам и HR-политикам.",
            ],
          },
          {
            title: "AI Data Pilot",
            items: [
              "Внутреннее использование в МТС (~15 аналитиков, ~80 сценариев отчётности/неделю по PostgreSQL, ClickHouse и Excel). Публичное демо: личный проект, не код МТС; продовые базы под NDA.",
              "Held-out SQL: ~98% execution, ~85% нормализованной точности (мультимножество значений, не exact-match); подготовка отчётности 2 часа → 2 минуты.",
              "Один интерфейс к PostgreSQL, ClickHouse и Excel, с автоподстройкой SQL-диалекта.",
            ],
          },
        ],
        stack: [
          { title: "RAG Chat", items: ["Python", "FastAPI", "SQLAlchemy", "RAG", "AI Agents", "LLM API", "ChromaDB", "fastembed", "Ollama", "SSE", "React", "TypeScript", "Vite"] },
          { title: "AI Data Pilot", items: ["Python", "FastAPI", "SQLAlchemy", "Text-to-SQL", "Agent Loop (ReAct)", "Tool Calling", "RAG", "BM25 + Vector Search", "fastembed", "PostgreSQL", "ClickHouse", "SSE", "React 19", "TypeScript", "pytest"] },
        ],
        demo: [
          { name: "RAG Chat — кейс", url: "https://lyakoway.vercel.app/portfolio/rag-chat" },
          { name: "RAG Chat — код", url: "https://github.com/lyakoway/ai-RAG-chat" },
          { name: "AI Data Pilot — кейс", url: "https://lyakoway.vercel.app/portfolio/ai-data-pilot" },
          { name: "AI Data Pilot — код", url: "https://github.com/lyakoway/ai-data-pilot" },
        ],
      },
      {
        role: "Senior Frontend Developer",
        company: "МТС Web Services",
        period: "февраль 2019 — апрель 2024",
        place: "Москва",
        projects: [
          { title: "МТС Профиль", text: "Модуль хранения и визуализации клиентских данных с управлением доступом для продуктов экосистемы." },
          { title: "Экосистемные виджеты", text: "Встраиваемый модуль навигации и персонализации для b2c/b2b-продуктов." },
        ],
        tasks: [],
        results: [
          {
            title: "",
            items: [
              "Реализовал смену владельца профиля и модель управления связанными аккаунтами.",
              "Автоматизировал подтверждение данных пользователей через Госуслуги по биометрии.",
              "Реализовал полный цикл управления доступом и авторизацией — восстановление доступа, вход и историю изменений способов авторизации.",
              "Интегрировал оплату банковскими картами и экосистемные виджеты в цифровые продукты компании.",
            ],
          },
        ],
        stack: [
          { title: "", items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Svelte", "Styled-Components", "Webpack", "Jest", "Node.js", "Express"] },
        ],
      },
    ],
    education: [
      {
        title: "Магистратура — прикладная математика",
        text: "МГСУ (Московский государственный строительный университет), 2014.",
      },
    ],
  },

  en: {
    name: "Alexey Mazurenko",
    role: "AI / LLM Engineer",
    sectionTitles: {
      profile: "Profile",
      contacts: "Contacts",
      skills: "Skills",
      highlights: "Highlights",
      experience: "Experience",
      experienceContinued: "Experience",
      projects: "Projects",
      tasks: "Core tasks",
      results: "Key results",
      stack: "Stack",
      processes: "Processes",
      demo: "Demo",
      education: "Education",
    },
    contacts: {
      email: { label: "Email", value: "lyakoway@gmail.com", icon: "mail" },
      github: {
        label: "GitHub",
        value: "github.com/lyakoway",
        href: "https://github.com/lyakoway",
        icon: "github",
      },
      linkedin: {
        label: "LinkedIn",
        value: "linkedin.com/in/alexey-mazurenko-63068941b",
        href: "https://www.linkedin.com/in/alexey-mazurenko-63068941b/",
        icon: "linkedin",
      },
      website: {
        label: "Website",
        value: "lyakoway.vercel.app/contacts",
        href: "https://lyakoway.vercel.app/contacts",
        icon: "globe",
      },
      format: {
        label: "Location",
        value: "Moscow (UTC+3) · open to remote and relocation",
        icon: "briefcase",
      },
      languages: {
        label: "Languages",
        value: "English — B2 · Russian — native",
        icon: "languages",
      },
      phone: { label: "Phone", value: "+7 (977) 270-09-30", icon: "phone" },
    },
    highlights: [
      "**~2,000 docs · ~200 questions/day · Recall@1 87% held-out**",
      "**Report preparation: 2 hours → 2 minutes**",
      "**~85% normalized SQL result correctness** (held-out)",
      "**Public GitHub demos** — RAG Chat and AI Data Pilot",
    ],
    profile: [
      "**AI / LLM engineer** with 7+ years in software engineering, including **2+ years building production LLM systems** at MTS Web Services (MWS AI) — the AI division of MTS, one of Russia's largest telecom operators (~80M+ subscribers). Shipped two internal products end-to-end: a document RAG assistant (**~2,000 docs; held-out Recall@1 53% dense-only → 87% hybrid**) and a multi-agent analytics platform (**~85% normalized SQL result correctness**) that **cut report preparation from 2 hours to 2 minutes.**",
      "**Internal production at MTS (~12 teams, ~200 RAG questions/day). Public GitHub demos are independently built personal projects of the same problem class — not MTS source code; production data stays under NDA.** RAG production default is **GLM-5.3-flash** (TTFT ~2.5–3 s, cost vs GPT/Claude); OpenAI, Anthropic and Ollama are interchangeable.",
      "**Own the path from prototype to production:** Python / FastAPI, hybrid retrieval, held-out evaluation, React / Next.js, Docker / Kubernetes / CI/CD.",
    ],
    siteLink: {
      value: "lyakoway.vercel.app",
      href: "https://lyakoway.vercel.app",
      text: "More about my projects and experience — on my website:",
    },
    skills: [
      { title: "LLM & AI Agents", items: ["LLM APIs (OpenAI / Anthropic / GLM-5.3-flash / Ollama)", "AI Agents", "Agent Loop (ReAct)", "Tool Calling", "Text-to-SQL", "Multi-agent router (2 specialists)", "Prompt Engineering", "Latency & Cost Tuning (TTFT, $ per query)"] },
      { title: "RAG & Retrieval", items: ["RAG", "Hybrid Search (BM25 + Vector)", "RRF", "Chunking (tiktoken)", "fastembed", "ChromaDB", "Source Citations"] },
      { title: "Evaluation & Quality", items: ["Held-out eval (no tuning leakage)", "Recall@K / MRR", "LLM-as-a-Judge", "Grounding / Anti-Hallucination", "Prompt Evaluation", "Regression Testing"] },
      { title: "AI Data & Backend", items: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "ClickHouse", "SQL Guard (read-only, timeouts)", "SSE"] },
      { title: "Frontend & Infrastructure", items: ["React / Next.js", "TypeScript", "Docker", "Kubernetes", "CI/CD", "Git"] },
    ],
    experience: [
      {
        role: "AI / LLM Engineer",
        company: "MTS Web Services (MWS AI)",
        period: "Apr 2024 — present",
        place: "Moscow",
        projects: [
          {
            title: "RAG Chat — AI assistant with Retrieval-Augmented Generation",
            text: "An AI assistant for working with documents — uploads PDF, Word and Excel files, answers questions about their content and provides links to the source pages and document fragments.",
            details: [
              { label: "RAG pipeline", text: "document indexing → chunking (tiktoken) → embeddings (fastembed) → hybrid BM25 + vector retrieval (RRF) → LLM answer generation → source citation." },
              { label: "Three modes", text: "RAG Chat → AI Agent → Vector Search — switching within one application." },
              { label: "Architecture", text: "Python / FastAPI → ChromaDB → fastembed → GLM-5.3-flash default (OpenAI / Anthropic / Ollama) → SSE → React / TypeScript; SQLAlchemy — conversation history." },
              { label: "Evaluation", text: "held-out ~180 queries not used to tune prompts or retrieval. Hybrid BM25 + RRF: Recall@1 53% (dense-only) → 87%. Cross-encoder on fused top-k rejected: RU/EN duplicates of the same document tied in score and pushed the gold chunk out of the fused top-k (−45 p.p. Recall@1, +~3 s)." },
              { label: "Quality", text: "63 pytest tests + CI; TTFT ~2.5–3 s on GLM-5.3-flash." },
            ],
          },
          {
            title: "AI Data Pilot — multi-agent analytics platform",
            text: "Automates the path from a user's question to a ready analytical result.",
            details: [
              { label: "Data Agent", text: "turns natural-language questions into SQL, runs multi-step data analysis, detects trends and deviations, and produces tables, charts and analytical conclusions." },
              { label: "Knowledge Agent (RAG)", text: "answers questions over internal technical documentation and uploaded files (PDF, Word, Excel), grounded in the retrieved sources." },
              { label: "Architecture", text: "Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → analytics layer → SSE → React / TypeScript; GLM-4.6 default (OpenAI / Anthropic interchangeable); the Knowledge Agent's RAG core — hybrid retrieval BM25 + vector embeddings (fastembed) → LLM → source citation." },
              { label: "Quality", text: "174 pytest tests + CI; held-out SQL eval — ~98% execution (query ran), ~85% normalized result correctness (bag of values after dropping aliases, ORDER BY and number format — not string exact-match); self-correction on failed SQL (GLM-4.6)." },
            ],
          },
        ],
        tasks: [
          "Designed and shipped production AI agents — tool calling, orchestration, error handling and recovery.",
          "Built and measured RAG pipelines — hybrid BM25 + vector search, source citations; rejected a slower reranker after testing on the held-out set.",
          "Built held-out evaluation suites — queries unused for prompt/retrieval tuning — for regression of retrieval, prompts and models.",
          "Implemented Text-to-SQL with SQL guardrails and self-correction.",
          "Owned AI platform services end-to-end — backend (Python / FastAPI), frontend (React / Next.js), infrastructure (Docker / Kubernetes / CI/CD).",
        ],
        results: [
          {
            title: "RAG Chat",
            items: [
              "Internal MTS production usage (~2,000 documents, ~20k chunks, ~12 teams, ~200 questions/day). Public demo: personal project, not MTS code; prod data under NDA.",
              "Held-out Recall@1 87% after hybrid BM25 + RRF.",
              "Cuts lookup from minutes to seconds on regulations, contracts and HR policies.",
            ],
          },
          {
            title: "AI Data Pilot",
            items: [
              "Internal MTS production usage (~15 analysts, ~80 reporting scenarios/week over PostgreSQL, ClickHouse and Excel). Public demo: personal project, not MTS code; prod databases under NDA.",
              "Held-out SQL: ~98% execution, ~85% normalized result correctness (bag of values, not exact-match); report prep 2 hours → 2 minutes.",
              "One interface over PostgreSQL, ClickHouse and Excel, with the SQL dialect adapted automatically.",
            ],
          },
        ],
        stack: [
          { title: "RAG Chat", items: ["Python", "FastAPI", "SQLAlchemy", "RAG", "AI Agents", "LLM API", "ChromaDB", "fastembed", "Ollama", "SSE", "React", "TypeScript", "Vite"] },
          { title: "AI Data Pilot", items: ["Python", "FastAPI", "SQLAlchemy", "Text-to-SQL", "Agent Loop (ReAct)", "Tool Calling", "RAG", "BM25 + Vector Search", "fastembed", "PostgreSQL", "ClickHouse", "SSE", "React 19", "TypeScript", "pytest"] },
        ],
        demo: [
          { name: "RAG Chat — case study", url: "https://lyakoway.vercel.app/portfolio/rag-chat" },
          { name: "RAG Chat — code", url: "https://github.com/lyakoway/ai-RAG-chat" },
          { name: "AI Data Pilot — case study", url: "https://lyakoway.vercel.app/portfolio/ai-data-pilot" },
          { name: "AI Data Pilot — code", url: "https://github.com/lyakoway/ai-data-pilot" },
        ],
      },
      {
        role: "Senior Frontend Developer",
        company: "MTS Web Services",
        period: "Feb 2019 — Apr 2024",
        place: "Moscow",
        projects: [
          { title: "MTS Profile", text: "A module for storing and visualizing customer data with access management across ecosystem products." },
          { title: "Ecosystem widgets", text: "An embeddable navigation and personalization module for b2c/b2b products." },
        ],
        tasks: [],
        results: [
          {
            title: "",
            items: [
              "Delivered a profile ownership transfer model and a linked-accounts management model.",
              "Automated user data verification via Gosuslugi (Russian government services portal) with biometrics.",
              "Delivered the full access management and authorization cycle — access recovery, sign-in and an authentication-method change history.",
              "Integrated bank card payments and ecosystem widgets into the company's digital products.",
            ],
          },
        ],
        stack: [
          { title: "", items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Svelte", "Styled-Components", "Webpack", "Jest", "Node.js", "Express"] },
        ],
      },
    ],
    education: [
      {
        title: "Master's degree — Applied Mathematics",
        text: "Moscow State University of Civil Engineering (MGSU), 2014",
      },
    ],
  },
};

/* ——— Темы ——— */

const themes = {
  light: {
    page: "#ffffff",
    sidebarBg: "#26313f",
    sidebarText: "#eef1f4",
    sidebarMuted: "#a7b2bd",
    sidebarLabel: "#93a0ac",
    chipBg: "rgba(255, 255, 255, 0.1)",
    chipBorder: "rgba(255, 255, 255, 0.16)",
    chipText: "#eef1f4",
    separator: "rgba(255, 255, 255, 0.14)",
    contentBg: "#ffffff",
    text: "#2b3138",
    muted: "#5b636b",
    label: "#7a828a",
    heading: "#232a31",
    cardBorder: "#e3e6e9",
    jobDivider: "#c3cad1",
    accent: "#ff8560",
  },
  dark: {
    page: "#12181f",
    sidebarBg: "#1c242e",
    sidebarText: "#e6eaee",
    sidebarMuted: "#a7b2bd",
    sidebarLabel: "#8d99a5",
    chipBg: "rgba(255, 255, 255, 0.08)",
    chipBorder: "rgba(255, 255, 255, 0.14)",
    chipText: "#e6eaee",
    separator: "rgba(255, 255, 255, 0.12)",
    contentBg: "#151c24",
    text: "#dde2e7",
    muted: "#9aa4ad",
    label: "#7f8a93",
    heading: "#eef1f4",
    cardBorder: "rgba(255, 255, 255, 0.12)",
    jobDivider: "rgba(255, 255, 255, 0.4)",
    accent: "#ff8560",
  },
};

/* ——— HTML ——— */

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Chrome при переносе строки вставляет soft hyphen (U+00AD) в слова с
// дефисом: held-out → held[SHY]out. ATS читает битые токены. Неразрывный
// span + hyphens:none в CSS это закрывают.
const protectCompounds = (html) => {
  const splitAt = html.indexOf("</style>");
  if (splitAt < 0) return html;
  const head = html.slice(0, splitAt + "</style>".length);
  const rest = html.slice(splitAt + "</style>".length);
  return (
    head +
    rest.replace(/>([^<]+)</g, (_, text) => {
      const next = text.replace(
        /\b[\w]+(?:-[\w]+)+\b/g,
        (m) => `<span class="nowrap">${m}</span>`
      );
      return `>${next}<`;
    })
  );
};

const hyphenCss = `
  html, body, p, li, div, span, a, h1, h2 {
    hyphens: none !important;
    -webkit-hyphens: none !important;
    -ms-hyphens: none !important;
    hyphenate-character: "";
    -webkit-hyphenate-character: "";
    overflow-wrap: normal;
    word-break: normal;
  }
  .nowrap { white-space: nowrap; }
`;

// Инлайн-выделение **жирным** (после esc — теги вставляются безопасно).
const bold = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

// Иконки контактов (stroke, currentColor — цвет задаёт CSS).
const contactIcons = {
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  briefcase:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  languages:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14"/><path d="M5 12h8"/><path d="m14 16 3 5 3-5"/><path d="M4 4h7a4 4 0 0 1 4 4v1"/></svg>',
};

const sidebarMain = (data, t) => `
  <img class="avatar" src="${avatar}" alt="" />
  <h1 class="name">${esc(data.name)}</h1>
  <div class="role">${esc(data.role)}</div>

  <div class="side-title">${esc(data.sectionTitles.contacts)}</div>
  <div class="contacts">
    ${Object.values(data.contacts)
      .map((c) => {
        const value = c.href
          ? `<a class="nowrap" href="${c.href}">${esc(c.value)}</a>`
          : esc(c.value);
        return `<div class="contact-row">
          <span class="contact-icon">${contactIcons[c.icon] || ""}</span>
          <div class="contact-info">
            <div class="contact-label">${esc(c.label)}</div>
            <div class="contact-value">${value}</div>
          </div>
        </div>`;
      })
      .join("")}
  </div>

  <div class="side-title">${esc(data.sectionTitles.highlights)}</div>
  <ul class="about">
    ${data.highlights.map((item) => `<li>${bold(item)}</li>`).join("")}
  </ul>
`;

// Сайдбар второй страницы: навыки + образование.
const sidebarSkills = (data, t) => `
  <div class="side-title">${esc(data.sectionTitles.skills)}</div>
  ${data.skills
    .map(
      (group) => `
    <div class="skill-group">
      <div class="skill-group-title">${esc(group.title)}</div>
      <div class="chips">
        ${group.items.map((item) => `<span class="chip">${esc(item)}</span>`).join("")}
      </div>
    </div>`
    )
    .join("")}

  <div class="side-title">${esc(data.sectionTitles.education)}</div>
  ${data.education
    .map(
      (edu) => `
    <div class="edu-item">
      <div class="edu-title">${esc(edu.title)}</div>
      <div class="edu-place">${esc(edu.text)}</div>
    </div>`
    )
    .join("")}
`;

// Рендер одной записи опыта: секции с разделителями.
// Рендер одной записи опыта: секции с разделителями между ними.
const jobHtml = (job, data, t, { plain = false } = {}) => `
    <div class="job">
      <div class="job-head">
        <span class="job-role">${esc(job.role)}</span>
        <span class="job-period">${esc(job.period)} · ${esc(job.place)}</span>
      </div>
      <div class="job-company">${esc(job.company)}</div>

      ${
        job.projects
          ? `<section class="jsec"><div class="sub-title">${esc(data.sectionTitles.projects)}</div>
             ${job.projects
               .map(
                 (p) => `
               <div class="project">
                 <div class="project-title">${esc(p.title)}</div>
                 <p class="para">${esc(p.text)}</p>
                 ${
                   p.details
                     ? `<ul class="details">
                          ${p.details
                            .map(
                              (d) =>
                                `<li><span class="detail-label">${esc(d.label)}:</span> ${esc(d.text)}</li>`
                            )
                            .join("")}
                        </ul>`
                     : ""
                 }
               </div>`
               )
               .join("")}</section>`
          : ""
      }

      ${
        job.tasks && job.tasks.length > 0
          ? `<section class="jsec"><div class="sub-title">${esc(data.sectionTitles.tasks)}</div>
      <ul class="details">
        ${job.tasks.map((task) => `<li>${esc(task)}</li>`).join("")}
      </ul></section>`
          : ""
      }

      <section class="jsec"><div class="sub-title">${esc(data.sectionTitles.results)}</div>
      ${job.results
        .map(
          (group) => `
        <div class="result-group">
          ${group.title ? `<div class="result-group-title">${esc(group.title)}</div>` : ""}
          <ul class="details">
            ${group.items.map((item) => `<li>${esc(item)}</li>`).join("")}
          </ul>
        </div>`
        )
        .join("")}
      </section>

      ${
        job.stack && job.stack.length > 0
          ? `<section class="jsec"><div class="sub-title">${esc(data.sectionTitles.stack)}</div>
      ${job.stack
        .map((group) =>
          plain
            ? `<p class="plain-line">${
                group.title
                  ? `<span class="detail-label">${esc(group.title)}:</span> `
                  : ""
              }${esc(group.items.join(", "))}</p>`
            : `<div class="stack-group">
          ${group.title ? `<div class="stack-group-title">${esc(group.title)}</div>` : ""}
          <div class="chips chips-light">
            ${group.items.map((item) => `<span class="chip">${esc(item)}</span>`).join("")}
          </div>
        </div>`
        )
        .join("")}
      </section>`
          : ""
      }

      ${
        job.processes && job.processes.length > 0
          ? `<section class="jsec"><div class="sub-title">${esc(data.sectionTitles.processes)}</div>
      <div class="chips chips-light">
        ${job.processes.map((item) => `<span class="chip">${esc(item)}</span>`).join("")}
      </div></section>`
          : ""
      }

      ${
        job.demo && job.demo.length > 0
          ? `<section class="jsec"><div class="sub-title">${esc(data.sectionTitles.demo)}</div>
             <ul class="details">
               ${job.demo
                 .map(
                   (d) =>
                     `<li>${esc(d.name)} — <a class="nowrap" href="${d.url}">${d.url.replace(/^https?:\/\//, "")}</a></li>`
                 )
                 .join("")}
             </ul></section>`
          : ""
      }
    </div>`;

// Первая страница контента: профиль + первая запись (AI Engineer).
const contentMain = (data, t) => `
  <h2 class="content-title">${esc(data.sectionTitles.profile)}</h2>
  ${data.profile.map((p) => `<p class="para">${bold(p)}</p>`).join("")}
  <p class="para">${esc(data.siteLink.text)} <a href="${data.siteLink.href}">${data.siteLink.value}</a></p>

  <h2 class="content-title">${esc(data.sectionTitles.experience)}</h2>
  ${jobHtml(
    {
      ...data.experience[0],
      results: [data.experience[0].results[0]],
      stack: [],
      processes: [],
      demo: [],
    },
    data,
    t
  )}
`;

// Вторая страница контента: результаты AI Data Pilot, линия, Senior, образование.
const contentSenior = (data, t) => `
  <div class="job-divider"></div>

  <section class="jsec"><div class="sub-title">${esc(data.sectionTitles.results)}</div>
  <div class="result-group">
    <div class="result-group-title">AI Data Pilot</div>
    <ul class="details">
      ${data.experience[0].results[1].items.map((item) => `<li>${esc(item)}</li>`).join("")}
    </ul>
  </div>

  <section class="jsec"><div class="sub-title">${esc(data.sectionTitles.stack)}</div>
  ${data.experience[0].stack
    .map(
      (group) => `
    <div class="stack-group">
      <div class="stack-group-title">${esc(group.title)}</div>
      <div class="chips chips-light">
        ${group.items.map((item) => `<span class="chip">${esc(item)}</span>`).join("")}
      </div>
    </div>`
    )
    .join("")}
  </section>

  <section class="jsec"><div class="sub-title">${esc(data.sectionTitles.demo)}</div>
  <ul class="details">
    ${data.experience[0].demo
      .map(
        (d) => `<li>${esc(d.name)} — <a class="nowrap" href="${d.url}">${d.url.replace(/^https?:\/\//, "")}</a></li>`
      )
      .join("")}
  </ul>

  <div class="job-divider"></div>

  <h2 class="content-title">${esc(data.sectionTitles.experienceContinued)}</h2>
  ${jobHtml(data.experience[1], data, t)}
`;



const html = (lang, themeName, isPrint = false) => {
  const data = content[lang];
  const t = themes[themeName];
  return protectCompounds(`<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body {
    margin: 0;
    padding: 0;
    background: ${t.page};
    color: ${t.text};
    font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 9.2px;
    line-height: 1.42;
  }
  ${hyphenCss}
  /* Два листа: естественная высота + принудительный разрыв перед вторым
     (Навыки и продолжение опыта начинаются с нового листа).
     Табличная раскладка — flex при печати фрагментируется с развалом колонок. */
  /* Обёртка листа: фикс-высота чуть меньше A4 + обрезка по низу
     (контент подогнан), второй лист — с нового листа. */
  .page-wrap {
    height: 296.5mm;
    overflow: hidden;
    page-break-after: always;
    break-after: page;
  }
  .page-wrap:last-child {
    page-break-after: auto;
    break-after: auto;
  }
  .page-wrap { position: relative; }
  .page-num {
    position: absolute;
    bottom: 6mm;
    right: 7mm;
    font-size: 12px;
    font-weight: 700;
    color: ${t.muted};
  }
  .page { display: table; width: 100%; height: 296.5mm; }

  /* ——— Сайдбар ——— */
  .sidebar {
    display: table-cell;
    vertical-align: top;
    width: 62mm;
    background: ${t.sidebarBg};
    color: ${t.sidebarText};
    padding: 10mm 6mm 8mm;
  }
  .avatar {
    display: block;
    width: 118px;
    height: 118px;
    margin: 0 auto 20px;
    border-radius: 50%;
    object-fit: cover;
  }
  /* Print-версия (для откликов) — без фото: требование рынка US/UK и ATS. */
  ${isPrint ? ".avatar { display: none; }" : ""}
  .name {
    margin: 0 0 4px;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.2px;
  }
  .role {
    margin: 0 0 18px;
    text-align: center;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: ${t.sidebarText};
  }
  .side-title {
    margin: 18px 0 8px;
    padding-top: 12px;
    border-top: 1px solid ${t.separator};
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${t.sidebarText};
  }
  .contacts { margin: 0; }
  .contact-row {
    display: flex;
    gap: 7px;
    align-items: flex-start;
    margin-bottom: 5px;
  }
  .contact-icon {
    flex-shrink: 0;
    width: 13px;
    height: 13px;
    margin-top: 1px;
    color: ${t.sidebarText};
  }
  .contact-icon svg { width: 100%; height: 100%; }
  .contact-label {
    font-size: 7.6px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: ${t.sidebarText};
  }
  .contact-value { font-size: 9px; color: ${t.sidebarText}; }
  .contact-value a { color: inherit; text-decoration: none; }
  /* Навыки на втором листе — без линии-разделителя сверху
     (только первый заголовок; у «Образования» линия остаётся). */
  .sidebar-skills .side-title:first-child {
    border-top: 0;
    padding-top: 0;
    margin-top: 0;
  }
  .skill-group {
    position: relative;
    padding-left: 10px;
    margin-bottom: 8px;
  }
  .skill-group::before {
    content: "";
    position: absolute;
    left: 0;
    top: 4.5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${t.sidebarText};
  }
  .edu-item { margin-bottom: 10px; }
  .edu-item:last-child { margin-bottom: 0; }
  .edu-title { font-size: 9px; font-weight: 600; color: ${t.sidebarText}; }
  .edu-place { color: ${t.sidebarText}; }
  .skill-group-title { font-size: 9px; font-weight: 600; margin-bottom: 4px; color: ${t.sidebarText}; }
  .chips { display: flex; flex-wrap: wrap; gap: 4px; }
  .chip {
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 7.8px;
    background: ${t.chipBg};
    border: 1px solid ${t.chipBorder};
    color: ${t.chipText};
  }
  .about { margin: 0; padding: 0; list-style: none; }
  .about li {
    position: relative;
    padding-left: 10px;
    margin-bottom: 6px;
    color: ${t.sidebarText};
  }
  .about a { color: ${t.accent}; text-decoration: none; }
  .about strong { color: ${t.sidebarText}; }
  .about li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 4.5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${t.sidebarText};
  }

  /* ——— Контент ——— */
  .content {
    display: table-cell;
    vertical-align: top;
    padding: 10mm 7mm 8mm;
    background: ${t.contentBg};
  }
  .content-title {
    margin: 16px 0 8px;
    padding-bottom: 3px;
    font-size: 12.5px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: ${t.heading};
    border-bottom: 2px solid ${t.accent};
    display: inline-block;
  }
  .content-title:first-child { margin-top: 0; }
  .para { margin: 0 0 6px; color: ${t.text}; }
  .para a { color: ${t.accent}; text-decoration: none; }

  .job { margin-bottom: 12px; }
  .job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
  .job-role { font-size: 10.5px; font-weight: 700; color: ${t.heading}; }
  .job-period { font-size: 8.5px; color: ${t.heading}; white-space: nowrap; }
  .job-company { margin: 1px 0 8px; font-size: 9px; color: ${t.heading}; }

  .sub-title {
    margin: 10px 0 5px;
    font-size: 8.2px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: ${t.heading};
  }
  .details { margin: 0; padding: 0; list-style: none; }
  .details li {
    position: relative;
    margin-bottom: 4px;
    padding-left: 10px;
    color: ${t.text};
  }
  .details li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 4.5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${t.accent};
  }
  .details a { color: ${t.accent}; text-decoration: none; }

  .project { margin-bottom: 10px; break-inside: avoid; }
  .project-title {
    margin: 0 0 4px;
    padding-left: 6px;
    border-left: 2px solid ${t.accent};
    font-size: 9.5px;
    font-weight: 700;
    color: ${t.heading};
  }
  .detail-label { font-weight: 600; color: ${t.heading}; }

  .result-group { margin-bottom: 6px; break-inside: avoid; }
  .result-group-title {
    margin: 0 0 3px;
    padding-left: 6px;
    border-left: 2px solid ${t.accent};
    font-size: 8.6px;
    font-weight: 700;
    color: ${t.heading};
  }
  .stack-group { display: flex; gap: 8px; margin-bottom: 5px; align-items: baseline; }
  .stack-group-title {
    flex-shrink: 0;
    width: 88px;
    padding-left: 6px;
    border-left: 2px solid ${t.accent};
    font-size: 8.4px;
    font-weight: 700;
    color: ${t.heading};
  }
  /* Горизонтальные разделители между секциями работы — как на /cv.
     Хвостовые отступы контента гасим, чтобы зазор до линии был
     одинаковый у всех секций. */
  .jsec > :last-child { margin-bottom: 0; }
  .jsec + .jsec {
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid ${t.separator};
  }
  .jsec .sub-title { margin-top: 0; }
  .chips-light .chip { background: rgba(127, 130, 138, 0.14); border-color: ${t.cardBorder}; color: ${t.text}; }
</style>
</head>
<body>
  <div class="page-wrap">
    <div class="page">
      <aside class="sidebar">${sidebarMain(data, t)}</aside>
      <main class="content">${contentMain(data, t)}</main>
    </div>
    <div class="page-num">1</div>
  </div>
  <div class="page-wrap">
    <div class="page">
      <aside class="sidebar sidebar-skills">${sidebarSkills(data, t)}</aside>
      <main class="content">${contentSenior(data, t)}</main>
    </div>
    <div class="page-num">2</div>
  </div>
</body>
</html>`);
};

const htmlAts = (lang) => {
  const data = content[lang];
  const t = themes.light;
  const contacts = Object.values(data.contacts)
    .map((c) => {
      const value = c.href
        ? `<a class="nowrap" href="${c.href}">${esc(c.value)}</a>`
        : esc(c.value);
      return `<div class="ats-row"><span class="detail-label">${esc(c.label)}:</span> ${value}</div>`;
    })
    .join("");
  const skills = data.skills
    .map(
      (group) =>
        `<p class="plain-line"><span class="detail-label">${esc(group.title)}:</span> ${esc(group.items.join(", "))}</p>`
    )
    .join("");
  const education = data.education
    .map(
      (edu) =>
        `<p class="plain-line"><span class="detail-label">${esc(edu.title)}.</span> ${esc(edu.text)}</p>`
    )
    .join("");

  return protectCompounds(`<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<style>
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #222;
    font-family: "Times New Roman", Times, Georgia, serif;
    font-size: 11px;
    line-height: 1.38;
  }
  ${hyphenCss}
  h1 { margin: 0 0 2px; font-size: 22px; font-weight: 700; }
  .role { margin: 0 0 10px; font-size: 13px; font-weight: 600; }
  h2 {
    margin: 14px 0 6px;
    padding-bottom: 2px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    border-bottom: 1px solid #222;
  }
  p, .plain-line, .ats-row, .para { margin: 0 0 5px; }
  a { color: #111; text-decoration: none; }
  ul { margin: 0; padding: 0 0 0 16px; }
  li { margin-bottom: 3px; }
  .detail-label { font-weight: 700; }
  .job { margin-bottom: 10px; }
  .job-head { display: flex; justify-content: space-between; gap: 10px; }
  .job-role { font-weight: 700; font-size: 12px; }
  .job-period { white-space: nowrap; }
  .job-company { margin: 0 0 6px; }
  .sub-title { margin: 8px 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
  .details { margin: 0; padding: 0 0 0 16px; list-style: disc; }
  .details li { position: static; padding-left: 0; margin-bottom: 3px; }
  .details li::before { content: none; }
  .project { margin-bottom: 8px; }
  .project-title { font-weight: 700; margin: 0 0 3px; }
  .result-group { margin-bottom: 6px; }
  .result-group-title { font-weight: 700; margin: 0 0 2px; }
  .jsec + .jsec { margin-top: 6px; }
</style>
</head>
<body>
  <h1>${esc(data.name)}</h1>
  <div class="role">${esc(data.role)}</div>

  <h2>${esc(data.sectionTitles.contacts)}</h2>
  ${contacts}

  <h2>${esc(data.sectionTitles.highlights)}</h2>
  <ul>
    ${data.highlights.map((item) => `<li>${bold(item)}</li>`).join("")}
  </ul>

  <h2>${esc(data.sectionTitles.profile)}</h2>
  ${data.profile.map((p) => `<p>${bold(p)}</p>`).join("")}
  <p>${esc(data.siteLink.text)} <a href="${data.siteLink.href}">${esc(data.siteLink.value)}</a></p>

  <h2>${esc(data.sectionTitles.experience)}</h2>
  ${jobHtml(data.experience[0], data, t, { plain: true })}
  ${jobHtml(data.experience[1], data, t, { plain: true })}

  <h2>${esc(data.sectionTitles.skills)}</h2>
  ${skills}

  <h2>${esc(data.sectionTitles.education)}</h2>
  ${education}
</body>
</html>`);
};

/* ——— Печать ——— */

const variants = [
  { lang: "ru", theme: "light", file: "Alexey-Mazurenko-ru.pdf" },
  { lang: "ru", theme: "dark", file: "Alexey-Mazurenko-ru-dark.pdf" },
  { lang: "ru", theme: "light", file: "Alexey-Mazurenko-ru-print.pdf", ats: true },
  { lang: "en", theme: "light", file: "Alexey-Mazurenko-en.pdf" },
  { lang: "en", theme: "dark", file: "Alexey-Mazurenko-en-dark.pdf" },
  { lang: "en", theme: "light", file: "Alexey-Mazurenko-en-print.pdf", ats: true },
];

mkdirSync(outDir, { recursive: true });

for (const variant of variants) {
  const htmlPath = join(outDir, `.tmp-${variant.file}.html`);
  writeFileSync(
    htmlPath,
    variant.ats
      ? htmlAts(variant.lang)
      : html(variant.lang, variant.theme, variant.print)
  );
  const pdfPath = join(outDir, variant.file);
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      `file://${htmlPath}`,
    ],
    { stdio: "pipe" }
  );
  // Временный HTML больше не нужен — в репозиторий и на сайт не попадает.
  // KEEP_HTML=1 — оставить для отладки вёрстки (сервится dev-сервером).
  if (!process.env.KEEP_HTML) unlinkSync(htmlPath);
  console.log("✓", variant.file);
}
