// Генератор PDF-резюме: собирает HTML (ru/en × light/dark + print) и печатает
// PDF через headless Chrome. Контент синхронизирован со страницей /cv
// (src/common/lang/*/resumeCv.ts) — при изменении /cv правим здесь и запускаем:
//   node scripts/resume/generate.mjs
//
// Результат: public/static/resume/Alexey-Mazurenko-<lang>[-dark|-print].pdf

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
    role: "AI Engineer / LLM Engineer",
    sectionTitles: {
      profile: "Профиль",
      contacts: "Контакты",
      skills: "Навыки",
      about: "Обо мне",
      experience: "Опыт работы",
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
      format: {
        label: "Формат",
        value: "офис / гибрид / удалённо",
        icon: "briefcase",
      },
      website: {
        label: "Сайт",
        value: "lyakoway.vercel.app/contacts",
        href: "https://lyakoway.vercel.app/contacts",
        icon: "globe",
      },
    },
    about: [
      "**AI-инженер** с 7+ годами коммерческого опыта в разработке ПО и сильной software engineering базой. Основной фокус — LLM-приложения, RAG-системы, AI-агенты и автоматизация рабочих процессов с помощью AI.",
      "**Создаю AI-продукты полного цикла** — от исследования задачи и проектирования AI-архитектуры до разработки, оценки качества, интеграции и вывода решения в production.",
      "**Работаю с реальными сценариями применения LLM:** поиск и работа с корпоративными знаниями, анализ данных на естественном языке, Text-to-SQL, многошаговые AI-агенты, автоматизация повторяющихся процессов.",
      "**Фокусируюсь на качестве и надёжности AI-систем,** а не только на генерации ответа: использую evaluation-наборы, golden sets, Recall@K, LLM-as-a-Judge, регрессионное тестирование, контроль контекста и token-бюджета.",
      "**Сочетаю AI и классическую разработку** — самостоятельно реализую backend и frontend, интегрирую LLM и внешние сервисы, работаю с базами данных и инфраструктурой.",
      "**Люблю превращать AI-прототипы в работающие продукты,** где важны не только возможности модели, но и скорость, воспроизводимость, устойчивость к ошибкам и удобство для конечного пользователя.",
      "**Постоянно исследую новые AI-подходы и инструменты,** проверяю гипотезы на практике и внедряю то, что действительно улучшает продукт.",
    ],
    profile: [
      "**AI / LLM Engineer** с 7+ годами коммерческого опыта в разработке ПО. Специализируюсь на создании production-ready AI-решений: RAG-систем, AI-агентов и LLM-приложений на Python.",
      "Разрабатываю **AI-системы полного цикла** — от обработки и поиска данных до генерации, валидации и оценки качества ответов. Реализую **RAG и hybrid search (BM25 + Vector Search, RRF), embeddings, Agent Loop (ReAct), Tool Calling, Text-to-SQL и мультиагентную оркестрацию.**",
      "Фокусируюсь на **качестве и надёжности LLM-систем:** golden sets, Recall@K, LLM-as-a-Judge, регрессионное тестирование, обработка ошибок и self-correction, оптимизация контекста и token-бюджета. Работаю с облачными и локальными LLM через API, включая **GLM, OpenAI, Anthropic и Ollama.**",
      "Имею сильную **software engineering базу** и опыт разработки end-to-end AI-продуктов: Python / FastAPI, PostgreSQL / ClickHouse, React / Next.js, Docker / Kubernetes / CI/CD. Способен самостоятельно пройти путь **от AI-прототипа до production-решения.**",
    ],
    siteLink: {
      value: "lyakoway.vercel.app",
      href: "https://lyakoway.vercel.app",
      text: "Подробнее о моих проектах и опыте — на моём сайте:",
    },
    skills: [
      { title: "Языки", items: ["Python", "TypeScript / JavaScript"] },
      { title: "LLM и AI-агенты", items: ["Multi-Provider LLM API (GLM / OpenAI / Anthropic / Ollama)", "AI Agents", "Agent Loop (ReAct)", "Tool Calling", "Text-to-SQL", "Multi-Agent Orchestration", "Prompt Engineering", "Context / Token Optimization", "Latency & Cost Tuning (TTFT, $/запрос)"] },
      { title: "RAG и поиск", items: ["RAG", "Hybrid Search (BM25 + Vector)", "RRF", "Cross-Encoder Reranking", "Chunking (tiktoken)", "Кросс-языковой retrieval (RU / EN)", "Embeddings", "fastembed", "ChromaDB"] },
      { title: "Evaluation и качество", items: ["Golden Sets", "Recall@K / MRR", "LLM-as-a-Judge", "Grounding / Anti-Hallucination", "Observability & Monitoring (GA4 / Метрика / фидбек)", "Prompt Evaluation", "Regression Testing", "Edge Cases"] },
      { title: "AI Data & Backend", items: ["FastAPI", "SQLAlchemy", "PostgreSQL", "ClickHouse", "SQLite", "Redis", "SQL Guard (read-only, таймауты)", "SSE", "Node + Express"] },
      { title: "Frontend", items: ["React + Next", "Redux Toolkit", "Svelte", "Styled-Components", "Webpack", "Jest", "Vite"] },
      { title: "Инфраструктура", items: ["Docker", "Kubernetes", "CI/CD", "Git"] },
    ],
    experience: [
      {
        role: "AI Engineer",
        company: "MTC Web Services (MWS AI)",
        period: "апрель 2024 — н. в.",
        place: "Москва",
        projects: [
          {
            title: "RAG Chat — AI-ассистент с Retrieval-Augmented Generation",
            text: "AI-ассистент для работы с документами — загружает PDF, Word и Excel, отвечает на вопросы по содержимому и предоставляет ссылки на исходные страницы и фрагменты.",
            details: [
              { label: "RAG pipeline", text: "индексация документов → разбиение на фрагменты (tiktoken) → embeddings (fastembed) → гибридный поиск BM25 + вектора (RRF) → генерация ответа LLM → цитирование источников." },
              { label: "Архитектура", text: "Python / FastAPI → ChromaDB → fastembed → LLM API (GLM / OpenAI / Anthropic) / Ollama → SSE → React / TypeScript; SQLAlchemy — история диалогов." },
              { label: "Качество", text: "Recall@1 92% на golden set (evaluation-скрипт), LLM-as-judge 5.0/5." },
              { label: "GitHub / Демо", text: "github.com/lyakoway/ai-RAG-chat · lyakoway-rag-chat.hf.space" },
            ],
          },
          {
            title: "AI Data Pilot — мультиагентная аналитическая платформа",
            text: "Автоматизирует путь от вопроса пользователя до готового аналитического результата.",
            details: [
              { label: "Олег — AI-аналитик", text: "переводит вопросы на естественном языке в SQL, выполняет многошаговый анализ данных, выявляет динамику и отклонения, формирует таблицы, графики и аналитические выводы." },
              { label: "Ксюша — RAG-агент", text: "отвечает на вопросы по внутренней технической документации и загруженным документам (PDF, Word, Excel) с опорой на найденные источники." },
              { label: "Архитектура", text: "Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → аналитический слой → SSE → React / TypeScript; RAG-ядро Ксюши — гибридный поиск BM25 + векторные эмбеддинги (fastembed) → LLM → цитирование источников." },
              { label: "GitHub / Демо", text: "github.com/lyakoway/ai-data-pilot · lyakoway-ai-data-pilot.hf.space" },
            ],
          },
        ],
        tasks: [
          "Проектировал и реализовывал AI-агентов для бизнес-сценариев — workflow, function / tool calling, оркестрация, обработка ошибок и восстановление после сбоев.",
          "Создавал AI-агентов для генерации контента и автоматизации процессов разработки.",
          "Разрабатывал и итеративно улучшал prompt-сценарии, тестировал их на точность, стабильность и edge cases.",
          "Формировал evaluation-наборы для регрессионной проверки качества ответов и контроля изменений в моделях и промптах.",
          "Оптимизировал работу с контекстом LLM — сжатие, приоритизация и управление token-бюджетом.",
          "Исследовал и внедрял подходы к оркестрации мультиагентных систем, следил за актуальными практиками индустрии.",
          "Участвовал в построении AI-платформы end-to-end — backend (Python, FastAPI), frontend (React / Next.js), инфраструктура (Docker, Kubernetes, CI/CD).",
          "Создавал скрипты и вспомогательные инструменты на Python / Bash, вёл документацию API и работал с open-source проектами.",
          "Исследовал новые подходы, проверял гипотезы и внедрял лучшие практики в production.",
        ],
        results: [
          {
            title: "RAG Chat",
            items: [
              "Продукт готов и используется в компании.",
              "Сокращает поиск информации с минут до секунд — пользователь задаёт вопрос своими словами и получает ответ с ссылкой на конкретный фрагмент исходного документа.",
              "Уменьшает количество повторяющихся обращений в поддержку — клиент самостоятельно получает ответы из технической документации без участия специалиста.",
              "Ускоряет работу с внутренними документами — сотрудники быстро находят нужные положения в регламентах, инструкциях и HR-политиках без ручного поиска по папкам.",
              "Ускоряет проверку юридических и финансовых документов — система находит нужные условия, суммы и показатели в договорах и отчётах за секунды.",
            ],
          },
          {
            title: "AI Data Pilot",
            items: [
              "Продукт готов и используется в компании.",
              "Сокращает подготовку отчётности с 2 часов до 2 минут — пользователь задаёт вопрос на естественном языке или запускает сохранённый сценарий одной кнопкой и получает готовые данные, график и вывод.",
              "Убирает ручную подготовку SQL — агент самостоятельно переводит запрос пользователя в SQL, выполняет его и формирует результат анализа.",
              "Снижает количество ошибок при работе с данными — агент проверяет результат выполнения, обнаруживает ошибки SQL, самостоятельно исправляет запрос и повторяет выполнение.",
              "Автоматизирует путь от вопроса до готового аналитического вывода — система рассчитывает показатели, определяет динамику и отклонения, выделяет ключевые изменения и объясняет их пользователю.",
              "Превращает повторяющиеся запросы в готовые сценарии — аналитик сохраняет часто используемый запрос и запускает его повторно без ручной подготовки SQL и настройки анализа.",
              "Объединяет разнородные данные под одним интерфейсом — корпоративные БД (PostgreSQL, ClickHouse) и загруженные Excel-файлы доступны агенту одновременно, SQL-диалект подстраивается автоматически.",
            ],
          },
        ],
        stack: [
          { title: "RAG Chat", items: ["Python", "FastAPI", "SQLAlchemy", "RAG", "AI Agents", "LLM API", "ChromaDB", "fastembed", "Ollama", "SSE", "React", "TypeScript", "Vite"] },
          { title: "AI Data Pilot", items: ["Python", "FastAPI", "SQLAlchemy", "Text-to-SQL", "Agent Loop (ReAct)", "Tool Calling", "RAG", "BM25 + Vector Search", "fastembed", "PostgreSQL", "ClickHouse", "SSE", "React 19", "TypeScript", "pytest"] },
        ],
        processes: ["Scrum", "Jira", "Confluence"],
        demo: [
          { name: "RAG Chat", url: "https://lyakoway.vercel.app/portfolio/rag-chat" },
          { name: "AI Data Pilot", url: "https://lyakoway.vercel.app/portfolio/ai-data-pilot" },
        ],
      },
      {
        role: "Senior Frontend Developer",
        company: "MTC Web Services",
        period: "февраль 2019 — апрель 2024",
        place: "Москва",
        projects: [
          { title: "МТС Профиль", text: "Модуль хранения и визуализации клиентских данных с управлением доступом для продуктов экосистемы." },
          { title: "Экосистемные виджеты", text: "Встраиваемый модуль навигации и персонализации для b2c/b2b-продуктов." },
        ],
        tasks: [
          "Разработка нового функционала и развитие существующих продуктов.",
          "Анализ требований, подготовка технических решений и проектирование архитектуры интеграционных сценариев.",
          "Разработка frontend-компонентов и переиспользуемых UI-решений с использованием Storybook.",
          "Рефакторинг и code review, повышение качества и поддерживаемости кодовой базы.",
          "Разработка unit- и интеграционных тестов, анализ и устранение production-инцидентов в рамках 3-й линии поддержки.",
          "Подготовка технической документации, менторство и помощь в адаптации новых сотрудников.",
        ],
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
        processes: ["Scrum", "Jira", "Confluence"],
        demo: [{ name: "МТС Профиль", url: "https://id.mts.ru" }],
      },
    ],
    education: [
      {
        title: "Магистратура — прикладная математика",
        text: "МГСУ — Институт фундаментального образования в 2014 год.",
      },
    ],
  },

  en: {
    name: "Alexey Mazurenko",
    role: "AI Engineer / LLM Engineer",
    sectionTitles: {
      profile: "Profile",
      contacts: "Contacts",
      skills: "Skills",
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      tasks: "Core tasks",
      results: "Key results",
      stack: "Stack",
      processes: "Processes",
      demo: "Demo",
      education: "Education",
    },
    contacts: {
      phone: { label: "Phone", value: "+7 (977) 270-09-30", icon: "phone" },
      email: { label: "Email", value: "lyakoway@gmail.com", icon: "mail" },
      format: {
        label: "Format",
        value: "office / hybrid / remote",
        icon: "briefcase",
      },
      website: {
        label: "Website",
        value: "lyakoway.vercel.app/contacts",
        href: "https://lyakoway.vercel.app/contacts",
        icon: "globe",
      },
    },
    about: [
      "**AI engineer** with 7+ years of commercial software development experience and a strong software engineering foundation. Main focus — LLM applications, RAG systems, AI agents and workflow automation with AI.",
      "**Building full-cycle AI products** — from problem research and AI architecture design to development, quality evaluation, integration and production delivery.",
      "**Working with real LLM use cases:** corporate knowledge search, natural-language data analysis, Text-to-SQL, multi-step AI agents, automation of repetitive processes.",
      "**Focused on the quality and reliability of AI systems,** not just answer generation: evaluation sets, golden sets, Recall@K, LLM-as-a-Judge, regression testing, context and token-budget control.",
      "**Combining AI and classic engineering** — implementing backend and frontend on my own, integrating LLMs and external services, working with databases and infrastructure.",
      "**Love turning AI prototypes into working products,** where not only model capabilities matter, but also speed, reproducibility, error resilience and end-user convenience.",
      "**Constantly exploring new AI approaches and tools,** testing hypotheses in practice and adopting what truly improves the product.",
    ],
    profile: [
      "**AI / LLM Engineer** with 7+ years of commercial software development experience. Specialized in building production-ready AI solutions: RAG systems, AI agents and LLM applications with Python.",
      "Building **full-cycle AI systems** — from data processing and retrieval to generation, validation and answer quality evaluation. Implementing **RAG and hybrid search (BM25 + Vector Search, RRF), embeddings, Agent Loop (ReAct), Tool Calling, Text-to-SQL and multi-agent orchestration.**",
      "Focused on the **quality and reliability of LLM systems:** golden sets, Recall@K, LLM-as-a-Judge, regression testing, error handling and self-correction, context and token-budget optimization. Working with cloud and local LLMs via API, including **GLM, OpenAI, Anthropic and Ollama.**",
      "Strong **software engineering foundation** and end-to-end AI product development experience: Python / FastAPI, PostgreSQL / ClickHouse, React / Next.js, Docker / Kubernetes / CI/CD. Able to independently take **an AI prototype all the way to a production solution.**",
    ],
    siteLink: {
      value: "lyakoway.vercel.app",
      href: "https://lyakoway.vercel.app",
      text: "More about my projects and experience — on my website:",
    },
    skills: [
      { title: "Languages", items: ["Python", "TypeScript / JavaScript"] },
      { title: "LLM & AI Agents", items: ["Multi-Provider LLM API (GLM / OpenAI / Anthropic / Ollama)", "AI Agents", "Agent Loop (ReAct)", "Tool Calling", "Text-to-SQL", "Multi-Agent Orchestration", "Prompt Engineering", "Context / Token Optimization", "Latency & Cost Tuning (TTFT, $ per query)"] },
      { title: "RAG & Search", items: ["RAG", "Hybrid Search (BM25 + Vector)", "RRF", "Cross-Encoder Reranking", "Chunking (tiktoken)", "Cross-lingual Retrieval (RU / EN)", "Embeddings", "fastembed", "ChromaDB"] },
      { title: "Evaluation & Quality", items: ["Golden Sets", "Recall@K / MRR", "LLM-as-a-Judge", "Grounding / Anti-Hallucination", "Observability & Monitoring (GA4 / Metrika / feedback)", "Prompt Evaluation", "Regression Testing", "Edge Cases"] },
      { title: "AI Data & Backend", items: ["FastAPI", "SQLAlchemy", "PostgreSQL", "ClickHouse", "SQLite", "Redis", "SQL Guard (read-only, timeouts)", "SSE", "Node + Express"] },
      { title: "Frontend", items: ["React + Next", "Redux Toolkit", "Svelte", "Styled-Components", "Webpack", "Jest", "Vite"] },
      { title: "Infrastructure", items: ["Docker", "Kubernetes", "CI/CD", "Git"] },
    ],
    experience: [
      {
        role: "AI Engineer",
        company: "MTC Web Services (MWS AI)",
        period: "Apr 2024 — present",
        place: "Moscow",
        projects: [
          {
            title: "RAG Chat — AI assistant with Retrieval-Augmented Generation",
            text: "An AI assistant for working with documents — uploads PDF, Word and Excel files, answers questions about their content and provides links to the source pages and document fragments.",
            details: [
              { label: "RAG pipeline", text: "document indexing → chunking (tiktoken) → embeddings (fastembed) → hybrid BM25 + vector retrieval (RRF) → LLM answer generation → source citation." },
              { label: "Architecture", text: "Python / FastAPI → ChromaDB → fastembed → LLM API (GLM / OpenAI / Anthropic) / Ollama → SSE → React / TypeScript; SQLAlchemy — conversation history." },
              { label: "Quality", text: "Recall@1 92% on a golden set (evaluation script), LLM-as-judge 5.0/5." },
              { label: "GitHub / Demo", text: "github.com/lyakoway/ai-RAG-chat · lyakoway-rag-chat.hf.space" },
            ],
          },
          {
            title: "AI Data Pilot — multi-agent analytics platform",
            text: "Automates the path from a user's question to a ready analytical result.",
            details: [
              { label: "Oleg — AI analyst", text: "turns natural-language questions into SQL, runs multi-step data analysis, detects trends and deviations, and produces tables, charts and analytical conclusions." },
              { label: "Ksyusha — RAG agent", text: "answers questions over internal technical documentation and uploaded files (PDF, Word, Excel), grounded in the retrieved sources." },
              { label: "Architecture", text: "Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → analytics layer → SSE → React / TypeScript; Ksyusha's RAG core — hybrid retrieval BM25 + vector embeddings (fastembed) → LLM → source citation." },
              { label: "GitHub / Demo", text: "github.com/lyakoway/ai-data-pilot · lyakoway-ai-data-pilot.hf.space" },
            ],
          },
        ],
        tasks: [
          "Designed and built AI agents for business scenarios — workflows, function / tool calling, orchestration, error handling and failure recovery.",
          "Created AI agents for content generation and development-process automation.",
          "Developed and iteratively improved prompt scenarios, testing them for accuracy, stability and edge cases.",
          "Built evaluation sets for regression checks of answer quality and for tracking changes in models and prompts.",
          "Optimized LLM context handling — compression, prioritization and token-budget management.",
          "Researched and adopted multi-agent orchestration approaches, keeping up with current industry practices.",
          "Helped build the AI platform end-to-end — backend (Python, FastAPI), frontend (React / Next.js), infrastructure (Docker, Kubernetes, CI/CD).",
          "Wrote scripts and helper utilities in Python / Bash, maintained API documentation and worked with open-source projects.",
          "Explored new approaches, tested hypotheses and shipped best practices to production.",
        ],
        results: [
          {
            title: "RAG Chat",
            items: [
              "The product is finished and used across the company.",
              "Cuts information lookup from minutes to seconds — the user asks a question in their own words and gets an answer with a link to the specific fragment of the source document.",
              "Reduces repetitive support requests — customers get answers from the technical documentation on their own, without involving a specialist.",
              "Speeds up work with internal documents — employees quickly find the right clauses in regulations, instructions and HR policies without manually digging through folders.",
              "Speeds up legal and financial document review — the system finds the right terms, amounts and figures in contracts and reports in seconds.",
            ],
          },
          {
            title: "AI Data Pilot",
            items: [
              "The product is finished and used across the company.",
              "Cuts reporting preparation from 2 hours to 2 minutes — the user asks a question in natural language or launches a saved scenario with one click and gets ready data, a chart and a conclusion.",
              "Eliminates manual SQL work — the agent translates the user's request into SQL, executes it and produces the analysis result on its own.",
              "Reduces data-related errors — the agent validates execution results, detects SQL failures, rewrites the query itself and re-runs it.",
              "Automates the path from question to analytical conclusion — the system computes metrics, detects trends and deviations, highlights key changes and explains them to the user.",
              "Turns recurring requests into ready-made scenarios — an analyst saves a frequently used query and re-runs it without manual SQL or analysis setup.",
              "Brings heterogeneous data under one interface — corporate databases (PostgreSQL, ClickHouse) and uploaded Excel files are available to the agent simultaneously, with the SQL dialect adapted automatically.",
            ],
          },
        ],
        stack: [
          { title: "RAG Chat", items: ["Python", "FastAPI", "SQLAlchemy", "RAG", "AI Agents", "LLM API", "ChromaDB", "fastembed", "Ollama", "SSE", "React", "TypeScript", "Vite"] },
          { title: "AI Data Pilot", items: ["Python", "FastAPI", "SQLAlchemy", "Text-to-SQL", "Agent Loop (ReAct)", "Tool Calling", "RAG", "BM25 + Vector Search", "fastembed", "PostgreSQL", "ClickHouse", "SSE", "React 19", "TypeScript", "pytest"] },
        ],
        processes: ["Scrum", "Jira", "Confluence"],
        demo: [
          { name: "RAG Chat", url: "https://lyakoway.vercel.app/portfolio/rag-chat" },
          { name: "AI Data Pilot", url: "https://lyakoway.vercel.app/portfolio/ai-data-pilot" },
        ],
      },
      {
        role: "Senior Frontend Developer",
        company: "MTC Web Services",
        period: "Feb 2019 — Apr 2024",
        place: "Moscow",
        projects: [
          { title: "MTS Profile", text: "A module for storing and visualizing customer data with access management across ecosystem products." },
          { title: "Ecosystem widgets", text: "An embeddable navigation and personalization module for b2c/b2b products." },
        ],
        tasks: [
          "Building new features and evolving existing products.",
          "Requirements analysis, technical solution design and integration architecture scenarios.",
          "Frontend component development and reusable UI solutions with Storybook.",
          "Refactoring and code reviews, improving code quality and maintainability.",
          "Unit and integration testing, analysis and resolution of production incidents on 3rd-line support.",
          "Technical documentation, mentoring and helping onboard new team members.",
        ],
        results: [
          {
            title: "",
            items: [
              "Delivered a profile ownership transfer model and a linked-accounts management model.",
              "Automated user data verification via Gosuslugi with biometrics.",
              "Delivered the full access management and authorization cycle — access recovery, sign-in and an authentication-method change history.",
              "Integrated bank card payments and ecosystem widgets into the company's digital products.",
            ],
          },
        ],
        stack: [
          { title: "", items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Svelte", "Styled-Components", "Webpack", "Jest", "Node.js", "Express"] },
        ],
        processes: ["Scrum", "Jira", "Confluence"],
        demo: [{ name: "MTS Profile", url: "https://id.mts.ru" }],
      },
    ],
    education: [
      {
        title: "Master's degree — Applied Mathematics",
        text: "MGSU — Institute of Fundamental Education, 2014",
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
  globe:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
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
          ? `<a href="${c.href}">${esc(c.value)}</a>`
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

  <div class="side-title">${esc(data.sectionTitles.about)}</div>
  <ul class="about">
    ${data.about.map((item) => `<li>${bold(item)}</li>`).join("")}

  </ul>

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
const jobHtml = (job, data, t) => `
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

      <section class="jsec"><div class="sub-title">${esc(data.sectionTitles.tasks)}</div>
      <ul class="details">
        ${job.tasks.map((task) => `<li>${esc(task)}</li>`).join("")}
      </ul></section>

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
        .map(
          (group) => `
        <div class="stack-group">
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
                     `<li>${esc(d.name)} — <a href="${d.url}">${d.url.replace(/^https?:\/\//, "")}</a></li>`
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

  <section class="jsec"><div class="sub-title">${esc(data.sectionTitles.processes)}</div>
  <div class="chips chips-light">
    ${data.experience[0].processes.map((item) => `<span class="chip">${esc(item)}</span>`).join("")}
  </div></section>

  <section class="jsec"><div class="sub-title">${esc(data.sectionTitles.demo)}</div>
  <ul class="details">
    ${data.experience[0].demo
      .map(
        (d) => `<li>${esc(d.name)} — <a href="${d.url}">${d.url}</a></li>`
      )
      .join("")}
  </ul>

  <div class="job-divider"></div>

  <h2 class="content-title">${esc(data.sectionTitles.experience)}</h2>
  ${jobHtml(data.experience[1], data, t)}
`;



const html = (lang, themeName) => {
  const data = content[lang];
  const t = themes[themeName];
  return `<!DOCTYPE html>
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
    margin-bottom: 9px;
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
</html>`;
};

/* ——— Печать ——— */

const variants = [
  { lang: "ru", theme: "light", file: "Alexey-Mazurenko-ru.pdf" },
  { lang: "ru", theme: "dark", file: "Alexey-Mazurenko-ru-dark.pdf" },
  { lang: "ru", theme: "light", file: "Alexey-Mazurenko-ru-print.pdf" },
  { lang: "en", theme: "light", file: "Alexey-Mazurenko-en.pdf" },
  { lang: "en", theme: "dark", file: "Alexey-Mazurenko-en-dark.pdf" },
  { lang: "en", theme: "light", file: "Alexey-Mazurenko-en-print.pdf" },
];

mkdirSync(outDir, { recursive: true });

for (const variant of variants) {
  const htmlPath = join(outDir, `.tmp-${variant.file}.html`);
  writeFileSync(htmlPath, html(variant.lang, variant.theme));
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
