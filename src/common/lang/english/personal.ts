import { PersonalProps } from "src/common/types/lang";

export const personal: PersonalProps = {
  title: "AI Engineer",
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
    "LangGraph",
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
      { value: "92%", label: "Recall@1 · RAG · golden set · 24 questions" },
      { value: "5.0 / 5", label: "LLM-as-a-Judge · 24 answers" },
    ],
    about: {
      title: "About me",
      items: [
        "**AI engineer** with 7+ years of commercial software development experience and a strong software engineering foundation. Main focus — LLM applications, RAG systems, AI agents and workflow automation with AI.",
        "**Building full-cycle AI products** — from problem research and AI architecture design to development, quality evaluation, integration and production delivery.",
        "**Working with real LLM use cases:** corporate knowledge search, natural-language data analysis, Text-to-SQL, multi-step AI agents and automation of repetitive processes.",
        "**Combining AI and classic engineering:** implementing backend and frontend on my own, integrating LLMs and external services, working with databases, APIs and infrastructure.",
      ],
    },
    create: {
      title: "What I build",
      cards: [
        {
          title: "RAG systems",
          text: "Working with corporate knowledge and documents: hybrid search, BM25 + Vector Search, embeddings, RRF, citations and evaluation.",
        },
        {
          title: "AI agents",
          text: "Agents that call tools, execute multi-step tasks and handle errors: ReAct, Tool Calling, routing, self-correction.",
        },
        {
          title: "AI for data",
          text: "Interfaces for analyzing data in natural language.",
          pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
        },
        {
          title: "Evaluation & Quality",
          text: "Measuring the quality of AI systems through Golden Sets, Recall@K, MRR, LLM-as-a-Judge and regression testing.",
        },
      ],
    },
    products: {
      title: "AI products",
      items: [
        {
          name: "AI Data Pilot",
          tagline: "Multi-agent platform for analyzing data and corporate documents.",
          paragraphs: [
            "**Oleg — data agent:** Natural Language → Text-to-SQL → Tool Calling → Analytics → Answer.",
            "**Ksyusha — RAG agent:** Hybrid Search → Documents → Answer + Citations.",
            "The system executes SQL on its own, analyzes data, builds results and handles errors through self-correction. Critical computations are performed by a deterministic Python layer, not the LLM.",
          ],
          result:
            "Result: analytical result preparation reduced from 2 hours to 2 minutes; 161 automated tests implemented.",
          stack: {
            label: "Stack",
            items: ["Python", "FastAPI", "ReAct", "Tool Calling", "Text-to-SQL", "RAG", "PostgreSQL", "ClickHouse", "React", "TypeScript"],
          },
        },
        {
          name: "RAG Chat",
          tagline: "AI system for searching and working with information in PDF, Word and Excel.",
          paragraphs: [
            "The user asks a question in natural language and gets an answer with citations of the source documents.",
            "**Key architecture:** hybrid BM25 + Vector Search → RRF → LLM, and for the AI Agent — its own Tool Loop on FastAPI.",
          ],
          result:
            "Result: Recall@1 92% on a golden set of 24 questions and 5.0/5 for Faithfulness, Relevance and Citations in LLM-as-a-Judge.",
          stack: {
            label: "Stack",
            items: ["Python", "FastAPI", "RAG", "ChromaDB", "fastembed", "BM25", "RRF", "React", "TypeScript", "Vite"],
          },
        },
      ],
    },
    approach: {
      title: "My approach to AI Engineering",
      intro:
        "I treat an AI product not as an «LLM + prompt», but as an engineering system where quality, reliability and behavior can be measured.",
      principles: [
        {
          num: "01",
          title: "Metrics before code",
          text: "First I define what «the system works» means and how to measure it:",
          items: ["quality · latency · cost · reliability"],
        },
        {
          num: "02",
          title: "Decisions driven by measurements",
          text: "Architecture decisions are made through experiments. In RAG Chat, hybrid BM25 + RRF raised Recall@1 from 50% to 92%, while the tested cross-encoder reranker dropped the result to 42% and added about 3 seconds of latency. So the decision was made based on data, not on the popularity of the approach.",
        },
        {
          num: "03",
          title: "LLM doesn't compute — code does",
          text: "The LLM should not do the tasks that deterministic code solves more reliably. In AI Data Pilot the sums, percentages, trends, top-N and z-scores are computed by the Python layer.",
        },
        {
          num: "04",
          title: "Agents need observable execution",
          text: "An agent must be a manageable system:",
          items: ["Tool Calling · ReAct · execution trace · step limits · retry · self-correction"],
        },
        {
          num: "05",
          title: "Failures are part of the design",
          text: "Errors are not hidden: SQL error → fix → re-execution → a clear error if the recovery failed.",
        },
        {
          num: "06",
          title: "Quality is reproducible",
          text: "The result must be reproducible and comparable between versions:",
          items: ["Golden Set → Tests → Measurement → Regression"],
        },
        {
          num: "07",
          title: "Production matters",
          text: "An AI system must account for:",
          items: ["latency · cost · observability · limits · failure handling · maintainability"],
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
      text: "I can independently cover the path from AI architecture and backend to frontend, evaluation and production.",
    },
    stack: {
      title: "Technology stack",
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
      title: "Where I'm heading",
      chips: ["Agentic AI", "Production LLM Systems", "AI Engineering"],
      text: "The focus is on building reliable AI systems capable of independently working with data, documents, tools and external systems, while maintaining control, measurability and predictability of the result.",
    },
  },
};
