import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Experience",
  skillsTitle: "Key skills",
  educationTitle: "Education",
  demoTitle: "Demo",
  resultTitle: "Key results",
  stackTitle: "Stack",
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
          text: "An AI assistant for working with documents — uploads PDF, Word and Excel files, answers questions about their content and provides links to the source pages and document fragments.\nRAG pipeline: document indexing → chunking (tiktoken) → embeddings (fastembed) → hybrid BM25 + vector retrieval (RRF) → LLM answer generation → source citation.\nArchitecture: Python / FastAPI → ChromaDB → fastembed → LLM API (GLM / OpenAI / Anthropic) / Ollama → SSE → React / TypeScript; SQLAlchemy — conversation history.\nQuality is measured: Recall@1 92% on a golden set (evaluation script), LLM-as-judge 5.0/5.",
        },
        {
          title: "AI Data Pilot",
          text: "A multi-agent analytics platform automating the path from a user's question to a ready analytical result.\nOleg — AI analyst: turns natural-language questions into SQL, runs multi-step data analysis, detects trends and deviations, and produces tables, charts and analytical conclusions.\nKsyusha — RAG agent: answers questions over internal technical documentation and uploaded files (PDF, Word, Excel), grounded in the retrieved sources.\nArchitecture: Python / FastAPI → SQLAlchemy → Agent Loop (ReAct) → Tool Calling → Text-to-SQL → SQL guard → PostgreSQL / ClickHouse → analytics layer → SSE → React / TypeScript; Ksyusha's RAG core: hybrid retrieval BM25 + vector embeddings (fastembed) → LLM → source citation.",
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
            "Requirements analysis and preparation of technical solutions.",
            "Designing internal architecture and integration scenarios.",
            "Development and integration of frontend components.",
            "Refactoring existing code and running code reviews.",
            "Building reusable components with Storybook.",
            "Writing unit and integration tests.",
            "Analysis and resolution of production incidents on 3rd-line support.",
            "Preparing technical documentation.",
            "Mentoring and helping onboard new team members.",
          ],
        },
        {
          title: "Key results",
          items: [
            "Delivered a profile ownership transfer model.",
            "Delivered user data verification via Gosuslugi with biometrics.",
            "Delivered access recovery, sign-in and a history of authentication-method changes.",
            "Delivered work with payment methods and bank cards.",
            "Rolled out a linked-accounts management model.",
            "Integrated ecosystem widgets into the company’s digital products.",
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
      category: "LLM & agents",
      items: [
        "LLM API",
        "LangChain",
        "prompt engineering",
        "multi-agent orchestration",
        "context & token-budget optimization",
      ],
    },
    {
      id: "3",
      category: "RAG & quality",
      items: [
        "RAG",
        "evaluation sets",
        "prompt testing (accuracy, stability, edge cases)",
      ],
    },
    {
      id: "4",
      category: "Backend",
      items: ["FastAPI", "PostgreSQL", "Redis", "Node + Express"],
    },
    {
      id: "5",
      category: "Frontend",
      items: [
        "React + Next",
        "Redux Toolkit",
        "Svelte",
        "Styled-Components",
        "Webpack",
        "Jest",
        "Node + Express",
      ],
    },
    {
      id: "6",
      category: "Infrastructure",
      items: ["Docker", "Kubernetes", "CI/CD", "Webpack", "Git"],
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
