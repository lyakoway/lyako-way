import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Experience",
  skillsTitle: "Key skills",
  educationTitle: "Education",
  demoTitle: "Demo",
  resultTitle: "Key results",
  stackTitle: "Stack",
  projectsTitle: "Projects",
  downloadName: "Alexey-Mazurenko-en.pdf",
  downloadLabel: "Download PDF",
  viewLabel: "View",

  experience: [
    {
      id: "1",
      role: "AI Engineer",
      company: "MTC Web Services (MWS AI)",
      period: "Apr 2024 — present",
      meta: "Moscow · Software development, AI solutions",
      /* Описание продукта записи — абзацами, как summary у Senior Frontend. */
      // Описания проектов — заголовок с линией слева + абзацы описания:
      // описания соседних проектов не смешиваются.
      projectDescriptions: [
        {
          title: "AI assistant with Retrieval-Augmented Generation",
          text: "An AI assistant for working with documents — uploads PDF, Word and Excel files, answers questions about their content and provides links to the source pages and document fragments.",
          details: [
            {
              label: "RAG pipeline",
              text: "document indexing → chunking (tiktoken) → embeddings (fastembed) → hybrid BM25 + vector retrieval (RRF) → LLM answer generation → source citation.",
            },
            {
              label: "Architecture",
              text: "Python / FastAPI → ChromaDB → fastembed → LLM API (GLM / OpenAI / Anthropic) / Ollama → SSE → React / TypeScript; SQLAlchemy — conversation history.",
            },
            {
              label: "Quality",
              text: "Recall@1 92% on a golden set (evaluation script), LLM-as-judge 5.0/5.",
            },
          ],
        },
        {
          title: "AI Data Pilot",
          text: "A multi-agent analytics platform automating the path from a user's question to a ready analytical result.",
          details: [
            {
              label: "Oleg — AI analyst",
              text: "turns natural-language questions into SQL, runs multi-step data analysis, detects trends and deviations, and produces tables, charts and analytical conclusions.",
            },
            {
              label: "Ksyusha — RAG agent",
              text: "answers questions over internal technical documentation and uploaded files (PDF, Word, Excel), grounded in the retrieved sources.",
            },
            {
              label: "Architecture",
              text: "Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → analytics layer → SSE → React / TypeScript; Ksyusha's RAG core — hybrid retrieval BM25 + vector embeddings (fastembed) → LLM → source citation.",
            },
          ],
        },
      ],
      groups: [
        {
          title: "Core tasks",
          items: [
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
        },
      ],
      // Ключевые результаты — карточками по проектам внутри общей секции.
      resultGroups: [
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
      processes: {
        title: "Processes",
        items: ["Scrum", "Jira", "Confluence"],
      },
      // Демо записи — похожие проекты в портфолио: секция «Демо» в конце
      // карточки со ссылками на их страницы.
      portfolioIds: ["rag-chat", "ai-data-pilot"],
    },
    {
      id: "2",
      role: "Senior Frontend Developer",
      company: "MTC Web Services",
      period: "Feb 2019 — Apr 2024",
      meta: "Moscow · MTS Profile and Ecosystem widgets",
      // Описания продуктов — заголовок с линией слева + абзацы описания.
      projectDescriptions: [
        {
          title: "MTS Profile",
          text: "A module for storing and visualizing customer data with access management across ecosystem products.",
        },
        {
          title: "Ecosystem widgets",
          text: "An embeddable navigation and personalization module for b2c/b2b products.",
        },
      ],
      groups: [
        {
          title: "Core tasks",
          items: [
            "Building new features and evolving existing products.",
            "Requirements analysis, technical solution design and integration architecture scenarios.",
            "Frontend component development and reusable UI solutions with Storybook.",
            "Refactoring and code reviews, improving code quality and maintainability.",
            "Unit and integration testing, analysis and resolution of production incidents on 3rd-line support.",
            "Technical documentation, mentoring and helping onboard new team members.",
          ],
        },
        {
          title: "",
          items: [
            "Delivered a profile ownership transfer model and a linked-accounts management model.",
            "Automated user data verification via Gosuslugi with biometrics.",
            "Delivered the full access management and authorization cycle — access recovery, sign-in and an authentication-method change history.",
            "Integrated bank card payments and ecosystem widgets into the company’s digital products.",
          ],
        },
      ],
      stack: {
        title: "Stack",
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
      processes: {
        title: "Processes",
        items: ["Scrum", "Jira", "Confluence"],
      },
      // Демо записи — боевой сайт «МТС Профиля».
      link: { name: "MTS Profile", url: "https://id.mts.ru" },
    },
  ],

  skills: [
    {
      id: "1",
      category: "Languages",
      items: ["Python", "TypeScript / JavaScript"],
    },
    {
      id: "2",
      category: "LLM & AI Agents",
      items: [
        "Multi-Provider LLM API (GLM / OpenAI / Anthropic / Ollama)",
        "AI Agents",
        "Agent Loop (ReAct)",
        "Tool Calling",
        "Text-to-SQL",
        "Multi-Agent Orchestration",
        "Prompt Engineering",
        "Context / Token Optimization",
        "Latency & Cost Tuning (TTFT, $ per query)",
      ],
    },
    {
      id: "3",
      category: "RAG & Search",
      items: [
        "RAG",
        "Hybrid Search (BM25 + Vector)",
        "RRF",
        "Cross-Encoder Reranking",
        "Chunking (tiktoken)",
        "Cross-lingual Retrieval (RU / EN)",
        "Embeddings",
        "fastembed",
        "ChromaDB",
      ],
    },
    {
      id: "4",
      category: "Evaluation & Quality",
      items: [
        "Golden Sets",
        "Recall@K / MRR",
        "LLM-as-a-Judge",
        "Grounding / Anti-Hallucination",
        "Observability & Monitoring (GA4 / Metrika / feedback)",
        "Prompt Evaluation",
        "Regression Testing",
        "Edge Cases",
      ],
    },
    {
      id: "5",
      category: "AI Data & Backend",
      items: [
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "ClickHouse",
        "SQLite",
        "Redis",
        "SQL Guard (read-only, timeouts)",
        "SSE",
        "Node + Express",
      ],
    },
    {
      id: "6",
      category: "Frontend",
      items: [
        "React + Next",
        "Redux Toolkit",
        "Svelte",
        "Styled-Components",
        "Webpack",
        "Jest",
        "Vite",
      ],
    },
    {
      id: "7",
      category: "Infrastructure",
      items: ["Docker", "Kubernetes", "CI/CD", "Git"],
    },
  ],

  education: [
    {
      id: "1",
      title: "Master's degree",
      period: "MGSU",
      text: "Applied mathematics.",
    },
  ],
};
