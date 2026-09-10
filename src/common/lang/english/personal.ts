import { PersonalProps } from "src/common/types/lang";

export const personal: PersonalProps = {
  title: "AI / LLM Engineer",
  titleText: "More about me",
  text1: "",
  text2: "",
  text3: "",
  stackTitle: "Working with",
  stack: [
    "Python",
    "TypeScript / JavaScript",
    "FastAPI",
    "LLMs",
    "RAG",
    "AI agents",
    "Agent Loop (ReAct)",
    "Text-to-SQL",
    "AI APIs",
  ],
  page: {
    hero: {
      role: "AI / LLM Engineer",
      tagline:
        "Building production-ready AI systems that work with data, documents and tools.",
    },
    stats: [
      { value: "2 hours → 2 minutes", label: "Analytical result preparation" },
      { value: "87%", label: "Recall@1 · RAG · held-out · ~180 queries" },
      { value: "~85%", label: "normalized SQL · held-out" },
    ],
    about: {
      title: "About me",
      items: [
        "**AI / LLM engineer** with 7+ years in software engineering, including **2+ years building production LLM systems** at **MTS Web Services (MWS AI)** — the AI division of MTS (~80M+ subscribers). Focus — RAG, AI agents and Text-to-SQL.",
        "**Public GitHub demos** (RAG Chat and AI Data Pilot) are independently built personal projects of the same problem class — not MTS source code; production data stays under NDA.",
        "**Own the path from prototype to production:** Python / FastAPI, held-out evaluation, React / Next.js, Docker / Kubernetes / CI/CD.",
      ],
    },
    create: {
      title: "What I build",
      cards: [
        {
          title: "RAG systems",
          text: "Document Q&A with hybrid BM25 + vector search, citations and held-out evaluation.",
        },
        {
          title: "AI agents",
          text: "Tool calling, multi-step loops, routing and self-correction.",
        },
        {
          title: "AI for data",
          text: "Natural language → SQL → analytics → a ready result.",
          pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
        },
        {
          title: "Evaluation",
          text: "Held-out sets, Recall@K, LLM-as-a-judge, tests and CI.",
        },
      ],
    },
    products: {
      title: "AI products",
      items: [
        {
          name: "RAG Chat",
          href: "rag-chat",
          tagline: "Document Q&A over PDF, Word and Excel — answers grounded in source citations.",
          paragraphs: [
            "**Architecture:** hybrid BM25 + vector search → RRF → LLM, plus an AI Agent with its own FastAPI tool loop.",
          ],
          result:
            "Internal MTS usage (~2,000 docs, ~12 teams, ~200 questions/day). Held-out Recall@1 53% dense-only → 87% hybrid. Public demo: personal project, not MTS code.",
          stack: {
            label: "Stack",
            items: ["Python", "FastAPI", "RAG", "ChromaDB", "fastembed", "BM25", "RRF", "React", "TypeScript", "Vite"],
          },
        },
        {
          name: "AI Data Pilot",
          href: "ai-data-pilot",
          tagline: "A multi-agent platform from a natural-language question to a ready analytical result.",
          paragraphs: [
            "**Data Agent:** Natural Language → Text-to-SQL → Tool Calling → Analytics → Answer.",
            "**Knowledge Agent (RAG):** Hybrid Search → Documents → Answer + Citations. Critical computations run in deterministic Python, not the LLM.",
          ],
          result:
            "Internal MTS usage (~15 analysts, ~80 scenarios/week). Report prep 2 hours → 2 minutes; ~85% normalized SQL; 174 tests. Public demo: personal project, not MTS code.",
          stack: {
            label: "Stack",
            items: ["Python", "FastAPI", "ReAct", "Tool Calling", "Text-to-SQL", "RAG", "PostgreSQL", "ClickHouse", "React", "TypeScript"],
          },
        },
      ],
    },
    approach: {
      title: "My approach to AI Engineering",
      intro:
        "An AI product is not «LLM + prompt». Quality, reliability and behavior have to be measurable.",
      principles: [
        {
          num: "01",
          title: "Metrics before code",
          text: "First I define what «the system works» means and how to measure it:",
          items: ["quality · latency · cost · reliability"],
        },
        {
          num: "02",
          title: "Evaluation before optimization",
          text: "Held-out set → experiment → decision. In RAG Chat the hybrid won (53% → 87% Recall@1); the reranker lost (−45 p.p., +~3 s). Numbers are on the case study.",
        },
        {
          num: "03",
          title: "Deterministic where it matters",
          text: "Sums, percentages and trends are computed in Python. The LLM does not touch what code already solves reliably.",
        },
        {
          num: "04",
          title: "Observable systems",
          text: "Tool calls, steps, errors and latency stay visible:",
          items: ["Tool Calling · ReAct · execution trace · self-correction"],
        },
        {
          num: "05",
          title: "Reproducible quality",
          text: "Results have to be comparable between versions:",
          items: ["Golden Set → Tests → CI → Regression"],
        },
      ],
      cycle: {
        title: "My engineering cycle",
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
      text: "I cover the path from AI architecture and backend to frontend, evaluation and production.",
    },
    stack: {
      title: "Technology stack",
      groups: [
        { title: "Languages", items: ["Python", "TypeScript", "JavaScript"] },
        { title: "LLM & AI Agents", items: ["LLM API", "AI Agents", "ReAct", "Tool Calling", "Text-to-SQL", "Multi-Agent Orchestration", "Prompt Engineering", "Context / Token Optimization"] },
        { title: "RAG & Search", items: ["RAG", "Hybrid Search", "BM25", "Vector Search", "RRF", "Embeddings", "fastembed", "ChromaDB", "Held-out retrieval eval"] },
        { title: "Evaluation", items: ["Golden Sets", "Recall@K", "MRR", "LLM-as-a-Judge", "Regression Testing", "Prompt Evaluation", "Edge Cases", "Grounding"] },
        { title: "AI Data & Backend", items: ["FastAPI", "SQLAlchemy", "PostgreSQL", "ClickHouse", "Redis", "SQL Guard", "SSE"] },
        { title: "Frontend", items: ["React", "Next.js", "Vite"] },
        { title: "Infrastructure", items: ["Docker", "Kubernetes", "CI/CD", "Git"] },
      ],
    },
    growth: {
      title: "Where I'm heading",
      chips: ["Agentic AI", "Production LLM Systems", "LLM Observability"],
      text: "Reliable AI systems that work with data, documents and tools — with control, measurement and a predictable result.",
    },
  },
};
