import { PersonalProps } from "src/common/types/lang";

export const personal: PersonalProps = {
  title: "AI / LLM Engineer",
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
        "В МТС вывожу в production RAG и Text-to-SQL агентов — пайплайн выбираю по held-out оценке, а не по популярной статье.",
    },
    stats: [
      { value: "2 часа → 2 минуты", label: "Подготовка отчётности" },
      { value: "87%", label: "Recall@1 · held-out RAG" },
      { value: "~85%", label: "нормализованный SQL · held-out" },
    ],
    about: {
      title: "Обо мне",
      items: [
        "**AI / LLM-инженер** с 7+ годами в разработке ПО, из них **2+ года — production LLM-системы** в **МТС Web Services (MWS AI)** — AI-подразделении МТС (~80 млн+ абонентов). Фокус — RAG, AI-агенты и Text-to-SQL.",
        "**Веду путь от прототипа до production:** Python / FastAPI, held-out evaluation, React / Next.js, Docker / Kubernetes / CI/CD.",
      ],
    },
    products: {
      title: "AI-продукты",
      note: "Публичные GitHub-демо — самостоятельные личные проекты того же класса задач, не исходный код МТС; продовые данные под NDA.",
      items: [
        {
          name: "RAG Chat",
          href: "rag-chat",
          tagline: "Ответы по PDF, Word и Excel с цитатами на исходные фрагменты.",
          paragraphs: [
            "**Архитектура:** гибрид BM25 + векторный поиск → RRF → LLM, плюс AI Agent с собственным Tool Loop на FastAPI.",
          ],
          result:
            "Внутреннее использование в МТС (~2 000 документов, ~12 команд, ~200 вопросов/день). Held-out Recall@1 53% dense-only → 87% hybrid.",
          stack: {
            label: "Стек",
            items: ["Python", "FastAPI", "RAG", "ChromaDB", "fastembed", "BM25", "RRF", "React", "TypeScript", "Vite"],
          },
        },
        {
          name: "AI Data Pilot",
          href: "ai-data-pilot",
          tagline: "Мультиагентная платформа: от вопроса на естественном языке до готового аналитического результата.",
          paragraphs: [
            "**Олег — data agent:** Natural Language → Text-to-SQL → Tool Calling → Analytics → Answer.",
            "**Ксюша — RAG-агент:** Hybrid Search → Documents → Answer + Citations. Критические вычисления — детерминированный Python, не LLM.",
          ],
          result:
            "Внутреннее использование в МТС (~15 аналитиков, ~80 сценариев/неделю). Подготовка отчётности 2 часа → 2 минуты; ~85% нормализованного SQL; 174 теста.",
          stack: {
            label: "Стек",
            items: ["Python", "FastAPI", "ReAct", "Tool Calling", "Text-to-SQL", "RAG", "PostgreSQL", "ClickHouse", "React", "TypeScript"],
          },
        },
      ],
    },
    approach: {
      title: "Мой подход к AI Engineering",
      intro:
        "AI-продукт — не «LLM + prompt». Качество, надёжность и поведение должны быть измеримы.",
      principles: [
        {
          num: "01",
          title: "Metrics before code",
          text: "Сначала определяю, что значит «система работает» и как это измерить:",
          items: ["quality · latency · cost · reliability"],
        },
        {
          num: "02",
          title: "Evaluation before optimization",
          text: "Held-out набор → эксперимент → решение. В RAG Chat гибрид выиграл (53% → 87% Recall@1), реранкер проиграл (−45 п.п., +~3 с). Цифры — в кейсе.",
        },
        {
          num: "03",
          title: "Детерминизм там, где он сильнее",
          text: "Суммы, проценты и тренды считает Python. LLM не трогает то, что код уже решает надёжно.",
        },
        {
          num: "04",
          title: "Наблюдаемые системы",
          text: "Вызовы инструментов, шаги, ошибки и латентность остаются видимыми:",
          items: ["Tool Calling · ReAct · execution trace · self-correction"],
        },
        {
          num: "05",
          title: "Воспроизводимое качество",
          text: "Результат должен сравниваться между версиями:",
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
      text: "Веду путь от AI-архитектуры и backend до frontend, evaluation и production.",
    },
    stack: {
      title: "Технологический стек",
      groups: [
        { title: "Languages", items: ["Python", "TypeScript", "JavaScript"] },
        { title: "LLM & agents", items: ["ReAct", "Tool Calling", "Text-to-SQL", "Multi-Agent", "Prompt / context"] },
        { title: "RAG & eval", items: ["Hybrid BM25 + vectors", "RRF", "fastembed", "ChromaDB", "Held-out Recall@K", "LLM-as-a-Judge"] },
        { title: "Backend & product", items: ["FastAPI", "PostgreSQL", "ClickHouse", "React", "Next.js", "Docker", "Kubernetes", "CI/CD"] },
      ],
    },
    growth: {
      title: "Сейчас я развиваюсь в сторону",
      chips: ["Agentic AI", "Production LLM Systems", "LLM Observability"],
      text: "Надёжные AI-системы, которые работают с данными, документами и инструментами — с контролем, измерением и предсказуемым результатом.",
    },
  },
};
