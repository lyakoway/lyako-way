import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Experience",
  skillsTitle: "Key skills",
  educationTitle: "Education",
  demoTitle: "Demo",
  demoCaseLabel: "case study",
  demoCodeLabel: "code",
  resultTitle: "Key results",
  stackTitle: "Stack",
  projectsTitle: "Projects",
  downloadName: "Alexey-Mazurenko-en.pdf",
  downloadLabel: "Download PDF",
  viewLabel: "View",
  profileTitle: "Profile",
  profile: [
    "AI / LLM engineer with 7+ years in software engineering, including 2+ years building production LLM systems at MTS Web Services (MWS AI) — the AI division of MTS, one of Russia's largest telecom operators (~80M+ subscribers). Shipped two internal products end-to-end: a document RAG assistant (~2,000 docs; held-out Recall@1 53% dense-only → 87% hybrid) and a multi-agent analytics platform (~85% normalized SQL result correctness) that cut report preparation from 2 hours to 2 minutes.",
    "Internal production at MTS (~12 teams, ~200 RAG questions/day). Public GitHub demos are independently built personal projects of the same problem class — not MTS source code; production data stays under NDA. RAG production default is GLM-5.3-flash (TTFT ~2.5–3 s, cost vs GPT/Claude); OpenAI, Anthropic and Ollama are interchangeable.",
    "Own the path from prototype to production: Python / FastAPI, hybrid retrieval, held-out evaluation, React / Next.js, Docker / Kubernetes / CI/CD.",
  ],
  highlightsTitle: "Highlights",
  highlights: [
    "~2,000 docs · ~200 questions/day · Recall@1 87% held-out",
    "Report preparation: 2 hours → 2 minutes",
    "~85% normalized SQL result correctness (held-out)",
    "Open-source demos — RAG Chat and AI Data Pilot on GitHub",
  ],

  experience: [
    {
      id: "1",
      role: "AI / LLM Engineer",
      company: "MTS Web Services (MWS AI)",
      companyNote:
        "The AI division of the MTS ecosystem — one of Russia's largest telecom operators (~80M+ subscribers).",
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
              label: "Three modes",
              text: "RAG Chat → AI Agent → Vector Search — switching within one application.",
            },
            {
              label: "Architecture",
              text: "Python / FastAPI → ChromaDB → fastembed → GLM-5.3-flash default (OpenAI / Anthropic / Ollama) → SSE → React / TypeScript; SQLAlchemy — conversation history.",
            },
            {
              label: "Evaluation",
              text: "held-out ~180 queries not used to tune prompts or retrieval. Hybrid BM25 + RRF: Recall@1 53% (dense-only) → 87%. Cross-encoder on fused top-k rejected: RU/EN twins tied, gold chunk dropped (−45 p.p. Recall@1, +~3 s).",
            },
            {
              label: "Quality",
              text: "63 pytest tests + CI; TTFT ~2.5–3 s on GLM-5.3-flash.",
            },
          ],
        },
        {
          title: "AI Data Pilot",
          text: "A multi-agent analytics platform automating the path from a user's question to a ready analytical result.",
          details: [
            {
              label: "Data Agent",
              text: "turns natural-language questions into SQL, runs multi-step data analysis, detects trends and deviations, and produces tables, charts and analytical conclusions.",
            },
            {
              label: "Knowledge Agent (RAG)",
              text: "answers questions over internal technical documentation and uploaded files (PDF, Word, Excel), grounded in the retrieved sources.",
            },
            {
              label: "Architecture",
              text: "Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → analytics layer → SSE → React / TypeScript; GLM-4.6 default (OpenAI / Anthropic interchangeable); the Knowledge Agent's RAG core — hybrid retrieval BM25 + vector embeddings (fastembed) → LLM → source citation.",
            },
            {
              label: "Quality",
              text: "174 pytest tests + CI; held-out SQL eval — ~98% execution (query ran), ~85% normalized result correctness (bag of values after dropping aliases, ORDER BY and number format — not string exact-match); self-correction on failed SQL (GLM-4.6).",
            },
          ],
        },
      ],
      groups: [
        {
          title: "Core tasks",
          items: [
            "Designed and shipped production AI agents — tool calling, orchestration, error handling and recovery.",
            "Built and measured RAG pipelines — hybrid BM25 + vector search, source citations; rejected a slower reranker after testing on the held-out set.",
            "Built held-out evaluation suites — queries unused for prompt/retrieval tuning — for regression of retrieval, prompts and models.",
            "Implemented Text-to-SQL with SQL guardrails and self-correction.",
            "Owned AI platform services end-to-end — backend (Python / FastAPI), frontend (React / Next.js), infrastructure (Docker / Kubernetes / CI/CD).",
          ],
        },
      ],
      // Ключевые результаты — карточками по проектам внутри общей секции.
      resultGroups: [
        {
          title: "RAG Chat",
          items: [
            "Internal MTS production usage (~2,000 documents, ~20k chunks, ~12 teams, ~200 questions/day). Public demo: personal project, not MTS code; prod data under NDA.",
            "Held-out Recall@1 53% (dense-only) → 87% after hybrid BM25 + RRF; cross-encoder on fused top-k rejected (−45 p.p., +~3 s).",
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
      company: "MTS Web Services",
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
          title: "",
          items: [
            "Delivered a profile ownership transfer model and a linked-accounts management model.",
            "Automated user data verification via Gosuslugi (Russian government services portal) with biometrics.",
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
    },
  ],

  skills: [
    {
      id: "1",
      category: "LLM & AI Agents",
      items: [
        "LLM APIs (OpenAI / Anthropic / GLM-5.3-flash / Ollama)",
        "AI Agents",
        "Agent Loop (ReAct)",
        "Tool Calling",
        "Text-to-SQL",
        "Multi-agent router (2 specialists)",
        "Prompt Engineering",
        "Latency & Cost Tuning (TTFT, $ per query)",
      ],
    },
    {
      id: "2",
      category: "RAG & Retrieval",
      items: [
        "RAG",
        "Hybrid Search (BM25 + Vector)",
        "RRF",
        "Chunking (tiktoken)",
        "fastembed",
        "ChromaDB",
        "Source Citations",
      ],
    },
    {
      id: "3",
      category: "Evaluation & Quality",
      items: [
        "Held-out eval (no tuning leakage)",
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
        "SQL Guard (read-only, timeouts)",
        "SSE",
      ],
    },
    {
      id: "5",
      category: "Frontend & Infrastructure",
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
      title: "Master's degree — Applied Mathematics",
      period: "MGSU, 2014",
      text: "Moscow State University of Civil Engineering.",
    },
  ],
};
