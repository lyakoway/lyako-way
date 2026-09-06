import { ServiceProps } from "src/common/types/lang";

export const service: ServiceProps = {
  hero: {
    role: "AI Engineering Services",
    tagline:
      "Создаю production-ready AI-системы, которые работают с данными, документами и инструментами",
    subtitle:
      "От исследования задачи и проектирования AI-архитектуры до разработки, evaluation, интеграции и production.",
  },
  services: [
    {
      num: "01",
      title: "AI Agents & Automation",
      text: "Разрабатываю AI-агентов, которые не просто генерируют текст, а самостоятельно выполняют последовательность действий через инструменты.",
      listTitle: "Что реализую",
      list: [
        "Agent Loop / ReAct",
        "Tool Calling / Function Calling",
        "Multi-Agent Orchestration",
        "routing между специализированными агентами",
        "self-correction и retry",
        "execution trace и контроль шагов",
        "интеграцию с API, базами данных и внутренними системами",
      ],
      footnote:
        "Подход проверен в production: в AI Data Pilot агентный контур покрыт 161 автоматическим тестом — agent loop, self-correction, SQL Guard, analytics, routers, источники данных. Подходит для автоматизации аналитики, работы с документами, внутренних процессов и повторяющихся операций.",
    },
    {
      num: "02",
      title: "RAG & Enterprise Knowledge",
      text: "Создаю AI-системы для работы с корпоративными знаниями и документами, где ответы основаны на найденных источниках, а не на предположениях модели.",
      listTitle: "Что реализую",
      list: [
        "document ingestion и chunking",
        "embeddings и Vector Search",
        "BM25 + Vector Search",
        "Hybrid Search и RRF",
        "reranking",
        "multilingual / cross-language retrieval",
        "citations и source grounding",
        "evaluation через Golden Sets и Recall@K",
      ],
      footnote:
        "Не ограничиваюсь подключением vector database — измеряю качество retrieval и выбираю архитектуру на основе экспериментов.",
    },
    {
      num: "03",
      title: "AI Data & Text-to-SQL",
      text: "Создаю AI-интерфейсы для работы с корпоративными данными на естественном языке.",
      pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
      extraListTitle: "AI-система может",
      extraList: [
        "понять запрос пользователя",
        "построить SQL",
        "выполнить запрос",
        "обнаружить ошибку",
        "исправить и повторить запрос",
        "провести аналитические расчёты",
        "определить тренды и аномалии",
        "сформировать таблицу, график и вывод",
      ],
      footnote:
        "Критические вычисления выполняются детерминированным кодом, а не LLM, что позволяет контролировать корректность результата.",
      techNote: "PostgreSQL · ClickHouse · SQLAlchemy · Excel / CSV",
    },
    {
      num: "04",
      title: "Evaluation & AI Quality",
      text: "Помогаю превратить AI-прототип в систему с измеримым и воспроизводимым качеством.",
      listTitle: "Что реализую",
      list: [
        "Golden Sets",
        "Recall@K / MRR",
        "LLM-as-a-Judge",
        "regression testing",
        "prompt evaluation",
        "edge-case testing",
        "grounding / anti-hallucination checks",
        "latency и cost analysis",
        "feedback и production monitoring",
      ],
      footnote:
        "В RAG Chat, например, качество retrieval измеряется на 24 golden questions: Recall@1 достиг 92%, а оценка качества ответов — 5.0/5 по LLM-as-a-Judge.",
    },
    {
      num: "05",
      title: "AI Integration & Production",
      text: "Интегрирую AI-возможности в существующие продукты и внутренние системы.",
      rows: [
        {
          label: "Backend",
          value: "Python · FastAPI · SQLAlchemy · REST API · SSE",
        },
        {
          label: "AI",
          value: "LLM API · RAG · AI Agents · Tool Calling · Text-to-SQL",
        },
        {
          label: "Data",
          value: "PostgreSQL · ClickHouse · Redis",
        },
        {
          label: "Frontend",
          value: "React · Next.js · TypeScript",
        },
        {
          label: "Infrastructure",
          value: "Docker · Kubernetes · CI/CD",
        },
      ],
      footnote:
        "Могу пройти полный цикл — от AI-архитектуры и backend до frontend, evaluation и production delivery.",
    },
    {
      num: "06",
      title: "Optimization & Reliability",
      text: "Улучшаю уже существующие AI-системы, когда прототип работает, но его качество, скорость или стоимость требуют оптимизации.",
      listTitle: "Фокус",
      list: [
        "latency и TTFT",
        "token budget и context optimization",
        "стоимость LLM-запросов",
        "retrieval quality",
        "reliability и error handling",
        "observability",
        "ограничения ресурсов",
        "regression testing",
      ],
      footnote:
        "Оптимизация строится на измерениях и экспериментах, а не на предположениях.",
      footnote2:
        "Например, в RAG Chat разные retrieval-подходы сравнивались на одном evaluation set: hybrid BM25 + RRF повысил Recall@1 с 50% до 92%, тогда как протестированный reranker снизил результат до 42%.",
    },
  ],
  process: {
    title: "Как я работаю",
    steps: [
      {
        num: "01",
        title: "Problem",
        text: "Определяю бизнес-задачу, ограничения, данные и критерии успеха.",
      },
      {
        num: "02",
        title: "Architecture",
        text: "Выбираю подход: RAG, Agent, Text-to-SQL, Tool Calling или комбинацию компонентов.",
      },
      {
        num: "03",
        title: "Build",
        text: "Разрабатываю AI-логику, backend, интеграции и интерфейс.",
      },
      {
        num: "04",
        title: "Measure",
        text: "Создаю evaluation set и проверяю качество через метрики и автоматические тесты.",
      },
      {
        num: "05",
        title: "Optimize",
        text: "Работаю с quality, latency, cost и reliability.",
      },
      {
        num: "06",
        title: "Production",
        text: "Добавляю validation, error handling, observability и CI/CD.",
      },
    ],
    cycle: [
      "Problem",
      "Architecture",
      "Build",
      "Measure",
      "Optimize",
      "Production",
    ],
  },
  results: {
    title: "Что получает заказчик",
    items: [
      {
        title: "AI-архитектуру",
        text: "Понятную схему компонентов и взаимодействий.",
      },
      {
        title: "Работающее решение",
        text: "AI-логика, backend, интеграции и пользовательский интерфейс.",
      },
      {
        title: "Контролируемое качество",
        text: "Evaluation set, автоматические тесты и измеримые метрики.",
      },
      {
        title: "Надёжность",
        text: "Validation, ограничения, error handling и контроль действий AI-агентов.",
      },
      {
        title: "Production readiness",
        text: "Infrastructure, CI/CD, observability и возможность дальнейшего развития.",
      },
      {
        title: "Измеримый результат",
        text: "Фокус на сокращении ручной работы, времени выполнения процессов и повышении доступности информации.",
      },
    ],
  },
  cta: {
    title: "Есть задача, которую можно решить с помощью AI?",
    texts: [
      "Расскажите, какой процесс вы хотите автоматизировать, с какими данными или системами нужно работать и какой результат должен получить пользователь.",
      "Я помогу определить подход — RAG, AI Agent, Text-to-SQL, LLM integration или комбинация этих технологий — и предложу архитектуру решения.",
    ],
    linkLabel: "Обсудить задачу",
    href: "/contacts",
    casesLabel: "Демо",
    cases: [
      { name: "RAG Chat", href: "/portfolio/rag-chat" },
      { name: "AI Data Pilot", href: "/portfolio/ai-data-pilot" },
    ],
  },
};
