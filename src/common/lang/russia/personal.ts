import { PersonalProps } from "src/common/types/lang";

export const personal: PersonalProps = {
  title: "AI-инженер",
  titleText: "Подробнее обо мне",
  text1: "",
  text2: "",
  text3: "",
  stackTitle: "Работаю с",
  stack: [
    "Python",
    "TypeScript / JavaScript",
    "FastAPI",
    "LLM",
    "RAG",
    "AI-агенты",
    "Agent Loop (ReAct)",
    "Text-to-SQL",
    "AI API",
  ],
  page: {
    hero: {
      role: "AI / LLM Engineer",
      tagline:
        "Создаю production-ready AI-системы, которые работают с данными, документами и инструментами.",
    },
    stats: [
      { value: "2 часа → 2 минуты", label: "Подготовка аналитического результата" },
      { value: "87%", label: "Recall@1 · RAG · held-out · ~180 запросов" },
      { value: "~85%", label: "нормализованный SQL · held-out" },
    ],
    about: {
      title: "Обо мне",
      items: [
        "**AI-инженер** с 7+ годами коммерческого опыта в разработке ПО и сильной software engineering базой. Проектирую и разрабатываю AI-продукты в **MTC Web Services (MWS AI)** — AI-подразделении экосистемы МТС, одного из крупнейших телеком-операторов России (b2c-продукты). Основной фокус — LLM-приложения, RAG-системы, AI-агенты и автоматизация рабочих процессов с помощью AI.",
        "**Создаю AI-продукты полного цикла** — от исследования задачи и проектирования AI-архитектуры до разработки, оценки качества, интеграции и вывода решения в production.",
        "**Работаю с реальными сценариями применения LLM:** поиск и работа с корпоративными знаниями, анализ данных на естественном языке, Text-to-SQL, многошаговые AI-агенты и автоматизация повторяющихся процессов.",
        "**Сочетаю AI и классическую разработку:** самостоятельно реализую backend и frontend, интегрирую LLM и внешние сервисы, работаю с базами данных, API и инфраструктурой.",
      ],
    },
    create: {
      title: "Что я создаю",
      cards: [
        {
          title: "RAG-системы",
          text: "Работа с корпоративными знаниями и документами: hybrid search, BM25 + Vector Search, embeddings, RRF, citations и evaluation.",
        },
        {
          title: "AI-агенты",
          text: "Агенты, которые вызывают инструменты, выполняют многошаговые задачи и умеют обрабатывать ошибки: ReAct, Tool Calling, routing, self-correction.",
        },
        {
          title: "AI для работы с данными",
          text: "Интерфейсы для анализа данных на естественном языке.",
          pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
        },
        {
          title: "Evaluation & Quality",
          text: "Измерение качества AI-систем через Golden Sets, Recall@K, MRR, LLM-as-a-Judge и regression testing.",
        },
      ],
    },
    products: {
      title: "AI-продукты",
      items: [
        {
          name: "AI Data Pilot",
          href: "ai-data-pilot",
          tagline: "Multi-agent платформа для анализа данных и корпоративных документов.",
          paragraphs: [
            "**Олег — data agent:** Natural Language → Text-to-SQL → Tool Calling → Analytics → Answer.",
            "**Ксюша — RAG agent:** Hybrid Search → Documents → Answer + Citations.",
            "Система самостоятельно выполняет SQL, анализирует данные, строит результаты и обрабатывает ошибки через self-correction. Критические вычисления выполняются детерминированным Python-слоем, а не LLM.",
          ],
          result:
            "Результат: подготовка отчётности 2 часа → 2 минуты; ~85% нормализованной точности SQL на held-out оценке; 174 теста.",
          stack: {
            label: "Стек",
            items: ["Python", "FastAPI", "ReAct", "Tool Calling", "Text-to-SQL", "RAG", "PostgreSQL", "ClickHouse", "React", "TypeScript"],
          },
        },
        {
          name: "RAG Chat",
          href: "rag-chat",
          tagline: "AI-система для поиска и работы с информацией в PDF, Word и Excel.",
          paragraphs: [
            "Пользователь задаёт вопрос на естественном языке и получает ответ с цитатами на исходные документы.",
            "**Ключевая архитектура:** hybrid BM25 + Vector Search → RRF → LLM, а для AI Agent — собственный Tool Loop на FastAPI.",
          ],
          result:
            "Результат: held-out Recall@1 87% (~180 запросов) после гибрида BM25 + RRF.",
          stack: {
            label: "Стек",
            items: ["Python", "FastAPI", "RAG", "ChromaDB", "fastembed", "BM25", "RRF", "React", "TypeScript", "Vite"],
          },
        },
      ],
    },
    approach: {
      title: "Мой подход к AI Engineering",
      intro:
        "Я рассматриваю AI-продукт не как «LLM + prompt», а как инженерную систему, где качество, надёжность и поведение можно измерять.",
      principles: [
        {
          num: "01",
          title: "Metrics before code",
          text: "Сначала определяю, что означает «система работает» и как это измерить:",
          items: ["quality · latency · cost · reliability"],
        },
        {
          num: "02",
          title: "Evaluation before optimization",
          text: "Сначала измеряю, потом оптимизирую: held-out набор → Recall@K → эксперименты → решение. В RAG Chat гибрид BM25 + RRF поднял Recall@1 с 53% до 87%, а cross-encoder reranker снизил на −45 п.п. и добавил ~3 секунды латентности — решение принято по данным, а не по популярности подхода.",
        },
        {
          num: "03",
          title: "Data-driven architecture",
          text: "Любую развилку — retrieval, модель, конфигурацию пайплайна — закрываю сравнением на собственном evaluation-наборе. А то, что надёжнее решает детерминированный код, LLM не доверяю: суммы, проценты и тренды считает Python-слой.",
        },
        {
          num: "04",
          title: "Observable AI systems",
          text: "Tool-вызовы, шаги выполнения, ошибки, фидбек и латентность должны быть видимыми, а не спрятанными внутри:",
          items: ["Tool Calling · ReAct · execution trace · self-correction · honest errors"],
        },
        {
          num: "05",
          title: "Reproducible quality",
          text: "Результат должен быть воспроизводимым и сравнимым между версиями:",
          items: ["Golden Set → Tests → CI → Regression"],
        },
      ],
      cycle: {
        title: "Мой инженерный цикл",
        steps: [
          "Problem",
          "Hypothesis",
          "Implementation",
          "Tests",
          "Measurement",
          "Decision",
          "Production",
          "Feedback",
        ],
      },
    },
    engineering: {
      title: "End-to-End Engineering",
      steps: ["Architecture", "Backend", "AI", "Data", "Evaluation", "Frontend", "Infrastructure"],
      text: "Могу самостоятельно пройти путь от AI-архитектуры и backend до frontend, evaluation и production.",
    },
    stack: {
      title: "Технологический стек",
      groups: [
        { title: "Languages", items: ["Python", "TypeScript", "JavaScript"] },
        { title: "LLM & AI Agents", items: ["LLM API", "AI Agents", "ReAct", "Tool Calling", "Text-to-SQL", "Multi-Agent Orchestration", "Prompt Engineering", "Context / Token Optimization"] },
        { title: "RAG & Search", items: ["RAG", "Hybrid Search", "BM25", "Vector Search", "RRF", "Embeddings", "fastembed", "ChromaDB", "Cross-Encoder Reranking"] },
        { title: "Evaluation", items: ["Golden Sets", "Recall@K", "MRR", "LLM-as-a-Judge", "Regression Testing", "Prompt Evaluation", "Edge Cases", "Grounding"] },
        { title: "AI Data & Backend", items: ["FastAPI", "SQLAlchemy", "PostgreSQL", "ClickHouse", "Redis", "SQL Guard", "SSE"] },
        { title: "Frontend", items: ["React", "Next.js", "Vite"] },
        { title: "Infrastructure", items: ["Docker", "Kubernetes", "CI/CD", "Git"] },
      ],
    },
    growth: {
      title: "Сейчас я развиваюсь в сторону",
      chips: ["Agentic AI", "Production LLM Systems", "LLM Observability"],
      text: "Фокус — на создании надёжных AI-систем, способных самостоятельно работать с данными, документами, инструментами и внешними системами, сохраняя при этом контроль, измеримость и предсказуемость результата.",
    },
  },
};
