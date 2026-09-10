import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Опыт работы",
  skillsTitle: "Ключевые навыки",
  educationTitle: "Образование",
  demoTitle: "Демо",
  demoCaseLabel: "кейс",
  demoCodeLabel: "код",
  resultTitle: "Ключевые результаты",
  stackTitle: "Стек",
  projectsTitle: "Проекты",
  downloadName: "Alexey-Mazurenko-ru.pdf",
  downloadLabel: "Скачать PDF",
  viewLabel: "Просмотреть",
  profileTitle: "Профиль",
  profile: [
    "AI-инженер с 7+ годами в разработке ПО, из них 2+ года — production LLM-системы в МТС Web Services (MWS AI) — AI-подразделении МТС, одного из крупнейших телеком-операторов России (~80 млн+ абонентов). Вывел в production два внутренних продукта: RAG-ассистент для документов (~2 000 документов; held-out Recall@1 53% → 87%) и мультиагентную аналитическую платформу (~85% нормализованной точности SQL), сократившую подготовку отчётности с 2 часов до 2 минут.",
    "Прод внутренний, в МТС (~12 команд, ~200 RAG-вопросов/день). Публичный сайт и GitHub-демо — тестовый корпус. Для RAG в production — GLM-5.3-flash (TTFT ~2,5–3 с); OpenAI, Anthropic и Ollama взаимозаменяемы.",
    "Веду путь от прототипа до production: Python / FastAPI, гибридный поиск, held-out evaluation, React / Next.js, Docker / Kubernetes / CI/CD.",
  ],
  highlightsTitle: "В цифрах",
  highlights: [
    "~2 000 документов · ~200 вопросов/день · Recall@1 87% held-out",
    "Подготовка отчётности: 2 часа → 2 минуты",
    "~85% нормализованной точности SQL (held-out)",
    "Open-source демо — RAG Chat и AI Data Pilot на GitHub",
  ],

  experience: [
    {
      id: "1",
      role: "AI Engineer",
      company: "МТС Web Services (MWS AI)",
      companyNote:
        "AI-подразделение экосистемы МТС — одного из крупнейших телеком-операторов России (~80 млн+ абонентов).",
      period: "апр. 2024 — н.в.",
      meta: "Москва · Разработка ПО, AI-решения",
      /* Описание продукта записи — абзацами, как summary у Senior Frontend. */
      // Описания проектов — заголовок с линией слева + абзацы описания:
      // описания соседних проектов не смешиваются.
      projectDescriptions: [
        {
          title: "AI-ассистент с Retrieval-Augmented Generation",
          text: "AI-ассистент для работы с документами — загружает PDF, Word и Excel, отвечает на вопросы по содержимому и предоставляет ссылки на исходные страницы и фрагменты.",
          details: [
            {
              label: "RAG pipeline",
              text: "индексация документов → разбиение на фрагменты (tiktoken) → embeddings (fastembed) → гибридный поиск BM25 + вектора (RRF) → генерация ответа LLM → цитирование источников.",
            },
            {
              label: "Три режима",
              text: "RAG Chat → AI Agent → Vector Search — переключение в одном приложении.",
            },
            {
              label: "Архитектура",
              text: "Python / FastAPI → ChromaDB → fastembed → GLM-5.3-flash по умолчанию (OpenAI / Anthropic / Ollama) → SSE → React / TypeScript; SQLAlchemy — история диалогов.",
            },
            {
              label: "Оценка",
              text: "held-out набор (~180 запросов): гибрид BM25 + RRF поднял Recall@1 с 53% до 87%; cross-encoder-реранкер проверен и отклонён (−45 п.п., +~3 с).",
            },
            {
              label: "Качество",
              text: "63 pytest-теста + CI; TTFT ~2,5–3 с на GLM-5.3-flash.",
            },
          ],
        },
        {
          title: "AI Data Pilot",
          text: "Мультиагентная аналитическая платформа, автоматизирующая путь от вопроса пользователя до готового аналитического результата.",
          details: [
            {
              label: "Олег — AI-аналитик",
              text: "переводит вопросы на естественном языке в SQL, выполняет многошаговый анализ данных, выявляет динамику и отклонения, формирует таблицы, графики и аналитические выводы.",
            },
            {
              label: "Ксюша — RAG-агент",
              text: "отвечает на вопросы по внутренней технической документации и загруженным документам (PDF, Word, Excel) с опорой на найденные источники.",
            },
            {
              label: "Архитектура",
              text: "Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → аналитический слой → SSE → React / TypeScript; RAG-ядро Ксюши — гибридный поиск BM25 + векторные эмбеддинги (fastembed) → LLM → цитирование источников.",
            },
            {
              label: "Качество",
              text: "174 pytest-теста + CI; held-out SQL-оценка — ~98% execution, ~85% нормализованной точности результата; самокоррекция при ошибке SQL (GLM-4.6).",
            },
          ],
        },
      ],
      groups: [
        {
          title: "Основные задачи",
          items: [
            "Проектировал и выводил в production AI-агентов — tool calling, оркестрация, обработка ошибок и восстановление после сбоев.",
            "Строил и измерял RAG-пайплайны — гибрид BM25 + вектора, цитирование источников; отклонил более медленный реранкер по данным.",
            "Формировал held-out evaluation-наборы для регрессии retrieval, промптов и моделей.",
            "Реализовал Text-to-SQL с SQL-guard и самокоррекцией запросов.",
            "Вёл сервисы AI-платформы end-to-end — backend (Python / FastAPI), frontend (React / Next.js), инфраструктура (Docker / Kubernetes / CI/CD).",
          ],
        },
      ],
      // Ключевые результаты — карточками по проектам внутри общей секции.
      resultGroups: [
        {
          title: "RAG Chat",
          items: [
            "Прод внутренний, в МТС: ~2 000 документов (~20 тыс. чанков), ~12 команд, ~200 вопросов/день. Публичное демо — тестовый корпус.",
            "Held-out Recall@1 53% → 87% после гибрида BM25 + RRF; ответ со ссылкой на фрагмент источника.",
            "Сокращает поиск с минут до секунд по регламентам, договорам и HR-политикам.",
          ],
        },
        {
          title: "AI Data Pilot",
          items: [
            "Прод внутренний, в МТС: ~15 аналитиков, ~80 сценариев отчётности/неделю по PostgreSQL, ClickHouse и Excel. Публичное демо — тестовые данные.",
            "Held-out SQL: ~85% нормализованной точности результата; подготовка отчётности 2 часа → 2 минуты — агент сам пишет, выполняет и чинит SQL.",
            "Один интерфейс к PostgreSQL, ClickHouse и Excel, с автоподстройкой SQL-диалекта.",
          ],
        },
      ],
      // Стек — карточками по проектам внутри общей секции «Стек».
      stackGroups: [
        {
          title: "RAG Chat",
          items: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "RAG",
            "AI Agents",
            "LLM API",
            "ChromaDB",
            "fastembed",
            "Ollama",
            "SSE",
            "React",
            "TypeScript",
            "Vite",
          ],
        },
        {
          title: "AI Data Pilot",
          items: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "Text-to-SQL",
            "Agent Loop (ReAct)",
            "Tool Calling",
            "RAG",
            "BM25 + Vector Search",
            "fastembed",
            "PostgreSQL",
            "ClickHouse",
            "SSE",
            "React 19",
            "TypeScript",
            "pytest",
          ],
        },
      ],
      // Демо записи — похожие проекты в портфолио: секция «Демо» в конце
      // карточки со ссылками на их страницы.
      portfolioIds: ["rag-chat", "ai-data-pilot"],
    },
    {
      id: "2",
      role: "Senior Frontend Developer",
      company: "МТС Web Services",
      period: "фев. 2019 — апр. 2024",
      meta: "Москва · МТС Профиль и Экосистемные виджеты",
      // Описания продуктов — заголовок с линией слева + абзацы описания.
      projectDescriptions: [
        {
          title: "МТС Профиль",
          text: "Модуль хранения и визуализации клиентских данных с управлением доступом для продуктов экосистемы.",
        },
        {
          title: "Экосистемные виджеты",
          text: "Встраиваемый модуль навигации и персонализации для b2c/b2b-продуктов.",
        },
      ],
      groups: [
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
      stack: {
        title: "Стек",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "Svelte",
          "Styled-Components",
          "Webpack",
          "Jest",
          "Node.js",
          "Express",
        ],
      },
    },
  ],

  skills: [
    {
      id: "1",
      category: "LLM и AI-агенты",
      items: [
        "LLM API (OpenAI / Anthropic / GLM-5.3-flash / Ollama)",
        "AI-агенты",
        "Agent Loop (ReAct)",
        "Tool Calling",
        "Text-to-SQL",
        "Мультиагентный роутер (2 специалиста)",
        "Prompt Engineering",
        "Latency & Cost Tuning (TTFT, $/запрос)",
      ],
    },
    {
      id: "2",
      category: "RAG и поиск",
      items: [
        "RAG",
        "Hybrid Search (BM25 + Vector)",
        "RRF",
        "Chunking (tiktoken)",
        "fastembed",
        "ChromaDB",
        "Цитирование источников",
      ],
    },
    {
      id: "3",
      category: "Evaluation и качество",
      items: [
        "Held-out Golden Sets",
        "Recall@K / MRR",
        "LLM-as-a-Judge",
        "Grounding / Anti-Hallucination",
        "Prompt Evaluation",
        "Regression Testing",
      ],
    },
    {
      id: "4",
      category: "AI Data & Backend",
      items: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "ClickHouse",
        "SQL Guard (read-only, таймауты)",
        "SSE",
      ],
    },
    {
      id: "5",
      category: "Frontend и инфраструктура",
      items: [
        "React / Next.js",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
      ],
    },
  ],

  education: [
    {
      id: "1",
      title: "Магистратура — прикладная математика",
      period: "МГСУ, 2014",
      text: "Московский государственный строительный университет.",
    },
  ],
};
