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
    "LangGraph",
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
      { value: "92%", label: "Recall@1 · RAG · golden set" },
      { value: "5.0 / 5", label: "LLM-as-a-Judge · 24 ответа" },
    ],
    about: {
      title: "Обо мне",
      items: [
        "**AI-инженер** с 7+ годами коммерческого опыта в разработке ПО и сильной software engineering базой. Основной фокус — LLM-приложения, RAG-системы, AI-агенты и автоматизация рабочих процессов с помощью AI.",
        "**Создаю AI-продукты полного цикла** — от исследования задачи и проектирования AI-архитектуры до разработки, оценки качества, интеграции и вывода решения в production.",
        "**Работаю с реальными сценариями применения LLM:** поиск и работа с корпоративными знаниями, анализ данных на естественном языке, Text-to-SQL, многошаговые AI-агенты и автоматизация повторяющихся процессов.",
        "**Сочетаю AI и классическую разработку:** самостоятельно реализую backend и frontend, интегрирую LLM и внешние сервисы, работаю с базами данных, API и инфраструктурой.",
      ],
    },
    profile: {
      title: "AI / LLM Engineer",
      paragraphs: [
        "**AI / LLM Engineer** с 7+ годами коммерческого опыта в разработке ПО. Специализируюсь на создании production-ready AI-решений: RAG-систем, AI-агентов и LLM-приложений на Python.",
        "Разрабатываю **AI-системы полного цикла** — от обработки и поиска данных до генерации, валидации и оценки качества ответов. Реализую **RAG и hybrid search (BM25 + Vector Search, RRF), embeddings, Agent Loop (ReAct), Tool Calling, Text-to-SQL и мультиагентную оркестрацию.**",
        "Фокусируюсь на **качестве и надёжности LLM-систем:** golden sets, Recall@K, LLM-as-a-Judge, регрессионное тестирование, обработка ошибок и self-correction, оптимизация контекста и token-бюджета. Работаю с облачными и локальными LLM через API, включая **GLM, OpenAI, Anthropic и Ollama.**",
        "Имею сильную **software engineering базу** и опыт разработки end-to-end AI-продуктов: Python / FastAPI, PostgreSQL / ClickHouse, React / Next.js, Docker / Kubernetes / CI/CD. Способен самостоятельно пройти путь **от AI-прототипа до production-решения.**",
      ],
    },
    create: {
      title: "Что я создаю",
      cards: [
        {
          title: "RAG-системы",
          text: "AI-системы для работы с корпоративными знаниями и документами.",
          items: [
            "поиск по PDF, Word, Excel и другим источникам;",
            "hybrid search: BM25 + Vector Search;",
            "embeddings и reranking;",
            "ответы с цитатами на исходные документы;",
            "оценка качества retrieval через golden sets.",
          ],
        },
        {
          title: "AI-агенты",
          text: "Агенты, которые не просто генерируют текст, а вызывают инструменты и выполняют последовательность действий.",
          items: [
            "Agent Loop / ReAct;",
            "Tool Calling;",
            "многошаговое выполнение задач;",
            "self-correction;",
            "маршрутизация между специализированными агентами;",
            "наблюдаемость выполнения через execution trace.",
          ],
        },
        {
          title: "AI для работы с данными",
          text: "Интерфейсы, позволяющие задавать вопросы к данным на естественном языке.",
          pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
          footnote:
            "LLM отвечает за понимание задачи и управление процессом, а критические вычисления выполняются детерминированным кодом.",
        },
        {
          title: "Evaluation & Quality",
          text: "Строю AI-системы не только вокруг модели, но и вокруг измеримого качества.",
          items: [
            "golden sets;",
            "Recall@K / MRR;",
            "LLM-as-a-Judge;",
            "regression testing;",
            "тестирование edge cases;",
            "сравнение моделей и retrieval-подходов;",
            "анализ latency и качества.",
          ],
        },
      ],
    },
    products: {
      title: "AI-продукты",
      items: [
        {
          name: "RAG Chat",
          tagline: "AI-система для поиска и работы с информацией в PDF, Word и Excel.",
          modes: ["RAG Chat", "AI Agent", "Vector Search"],
          paragraphs: [
            "RAG использует hybrid BM25 + RRF и multilingual embeddings. AI Agent работает через собственный tool loop на FastAPI. Vector Search позволяет искать релевантные фрагменты без использования LLM.",
          ],
          result:
            "Ключевой результат — Recall@1 92% на golden set из 24 вопросов и 5.0/5 по Faithfulness, Relevance и Citations в LLM-as-a-Judge.",
          stack: {
            label: "Стек",
            items: ["Python", "FastAPI", "RAG", "ChromaDB", "fastembed", "BM25", "RRF", "SQLAlchemy", "SSE", "React", "TypeScript", "Vite", "LLM API", "Ollama"],
          },
        },
        {
          name: "AI Data Pilot",
          tagline: "Multi-agent платформа для анализа данных и корпоративных документов.",
          paragraphs: [
            "Пользователь задаёт вопрос на естественном языке, после чего система определяет нужного агента и источник данных.",
          ],
          result:
            "Качество покрыто 161 автоматическим тестом: agent loop, self-correction, SQL Guard, analytics, routers и источники данных.",
          flows: [
            { name: "Олег — data agent", steps: "Natural Language → Text-to-SQL → Tool Calling → Analytics → Answer" },
            { name: "Ксюша — RAG agent", steps: "Question → Hybrid Search → Relevant Documents → Answer + Citations" },
          ],
          notes: [
            "Олег использует ReAct Agent Loop, самостоятельно вызывает инструменты для работы с БД, расчётов, анализа и построения графиков. SQL-ошибки передаются обратно агенту для self-correction.",
            "При этом числа не генерируются LLM — тренды, проценты, top-N и z-score аномалии рассчитываются детерминированным Python-слоем.",
          ],
          stack: {
            label: "Стек",
            items: ["Python", "FastAPI", "SQLAlchemy", "Text-to-SQL", "ReAct", "Tool Calling", "RAG", "BM25", "fastembed", "PostgreSQL", "ClickHouse", "SSE", "React", "TypeScript", "pytest"],
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
          title: "Success metrics before code",
          text: "Сначала определяю, что означает «система работает» и как это измерить:",
          items: [
            "quality · latency · cost · reliability",
            "Для RAG это могут быть Recall@K и MRR, для AI-агентов — корректность выполнения инструментов и обработка ошибок, для Text-to-SQL — успешность выполнения запросов и точность результата.",
          ],
        },
        {
          num: "02",
          title: "Decisions driven by measurements",
          text: "Архитектурные решения принимаю через эксперименты, а не по принципу «этот подход сейчас популярен». Например, в RAG Chat hybrid BM25 + RRF повысил Recall@1 с 50% до 92%, а протестированный cross-encoder reranker, наоборот, снизил результат до 42% и добавил около 3 секунд latency. Поэтому reranker был отклонён на основании данных.",
        },
        {
          num: "03",
          title: "LLM doesn't compute — code does",
          text: "Не передаю LLM задачи, которые надёжнее решаются детерминированным кодом. В AI Data Pilot суммы, проценты, тренды, top-N и z-score аномалии рассчитываются Python-слоем. LLM получает готовые результаты и отвечает за понимание задачи и формирование объяснения.",
        },
        {
          num: "04",
          title: "Agents need observable execution",
          text: "AI-агент должен быть не «чёрным ящиком», а управляемой системой: Tool Calling, Agent Loop / ReAct, execution trace, ограничения количества шагов, retry и self-correction. Пользователь и разработчик должны понимать, какие действия выполнил агент и где произошла ошибка.",
        },
        {
          num: "05",
          title: "Failures are part of the design",
          text: "Ошибки нельзя скрывать: если SQL не выполнился, агент пытается исправить запрос; если исправление не помогло — система показывает ошибку, а не подставляет правдоподобный результат. Для защиты данных использую ограничения вроде SELECT-only, row limits и query timeouts.",
        },
        {
          num: "06",
          title: "Quality is reproducible",
          text: "Оценка запускается повторно и даёт сопоставимый результат: Golden Sets → Automated Tests → Recall@K / MRR → LLM-as-a-Judge → Regression Testing. В RAG Chat evaluation построен на 24 golden questions, в AI Data Pilot — 161 автоматический тест: agent loop, self-correction, SQL Guard, analytics, routers, источники данных.",
        },
        {
          num: "07",
          title: "Production matters",
          text: "Учитываю latency, стоимость, observability, тестирование, ограничения ресурсов и поведение системы при ошибках.",
        },
      ],
      cycle: {
        title: "Мой инженерный цикл",
        steps: [
          "Problem",
          "Hypothesis",
          "Implementation",
          "Golden Set / Tests",
          "Measurement",
          "Decision",
          "Production",
          "Feedback",
        ],
        closing:
          "Именно этот цикл считаю основой AI Engineering: моя задача — не просто заставить LLM «что-то ответить», а построить систему, результату которой можно доверять и качество которой можно проверить.",
      },
    },
    engineering: {
      title: "End-to-End Engineering",
      intro: "Мой сильная сторона — возможность самостоятельно пройти весь путь от идеи до работающего AI-продукта.",
      areas: [
        { title: "Architecture", text: "Проектирование AI-архитектуры и взаимодействия компонентов." },
        { title: "Backend", text: "Python, FastAPI, API, SSE, бизнес-логика." },
        { title: "AI Layer", text: "LLM, RAG, agents, tool calling, Text-to-SQL, prompt engineering." },
        { title: "Data", text: "PostgreSQL, ClickHouse, SQLAlchemy, vector search." },
        { title: "Evaluation", text: "Golden sets, automated tests, retrieval evaluation, LLM-as-a-Judge." },
        { title: "Frontend", text: "React, Next.js, TypeScript, Vite." },
        { title: "Infrastructure", text: "Docker, Kubernetes, CI/CD, Git." },
      ],
    },
    stack: {
      title: "Технологический стек",
      groups: [
        { title: "Languages", items: ["Python", "TypeScript", "JavaScript"] },
        { title: "LLM & AI Agents", items: ["LLM API", "AI Agents", "Tool Calling", "Agent Loop (ReAct)", "Text-to-SQL", "Prompt Engineering", "Multi-Agent Orchestration", "Context / Token Optimization"] },
        { title: "RAG & Search", items: ["RAG", "Hybrid Search", "BM25", "Vector Search", "RRF", "Embeddings", "fastembed", "ChromaDB"] },
        { title: "Evaluation & Quality", items: ["Golden Sets", "Recall@K", "MRR", "LLM-as-a-Judge", "Regression Testing", "Prompt Evaluation", "Edge Cases"] },
        { title: "AI Data & Backend", items: ["FastAPI", "SQLAlchemy", "PostgreSQL", "ClickHouse", "Redis", "SQL Guard", "SSE"] },
        { title: "Frontend", items: ["React", "Next.js", "Vite"] },
        { title: "Infrastructure", items: ["Docker", "Kubernetes", "CI/CD", "Git"] },
      ],
    },
    principles: {
      title: "Ключевые принципы",
      items: [
        "AI должен решать задачу, а не просто демонстрировать возможности модели.",
        "Качество должно быть измеримо, а не определяться субъективным ощущением от ответа.",
        "Детерминированная логика должна оставаться детерминированной.",
        "Ошибки системы должны быть прозрачными для пользователя.",
        "Production-ready AI — это не только LLM, а архитектура, данные, evaluation, observability и инженерная дисциплина.",
      ],
    },
    growth: {
      title: "Сейчас я развиваюсь в сторону",
      chips: ["Agentic AI", "Production LLM Systems", "AI Engineering"],
      text: "Фокус — на создании надёжных AI-систем, способных самостоятельно работать с данными, документами, инструментами и внешними системами, сохраняя при этом контроль, измеримость и предсказуемость результата.",
    },
  },
};
