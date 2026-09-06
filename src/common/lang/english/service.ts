import { ServiceProps } from "src/common/types/lang";

export const service: ServiceProps = {
  hero: {
    role: "AI Engineering Services",
    tagline:
      "Building production-ready AI systems that work with data, documents and tools",
    subtitle:
      "From problem research and AI architecture design to development, evaluation, integration and production.",
  },
  services: [
    {
      num: "01",
      title: "AI Agents & Automation",
      text: "I build AI agents that don't just generate text but independently execute sequences of actions through tools.",
      listTitle: "What I deliver",
      list: [
        "Agent Loop / ReAct",
        "Tool Calling / Function Calling",
        "Multi-Agent Orchestration",
        "routing between specialized agents",
        "self-correction and retry",
        "execution trace and step control",
        "integration with APIs, databases and internal systems",
      ],
      footnote:
        "Proven in production: in AI Data Pilot the agent loop is covered by 161 automated tests — agent loop, self-correction, SQL Guard, analytics, routers, data sources. Fits analytics automation, document processing, internal workflows and repetitive operations.",
    },
    {
      num: "02",
      title: "RAG & Enterprise Knowledge",
      text: "I build AI systems for corporate knowledge and documents, where answers are grounded in retrieved sources rather than model assumptions.",
      listTitle: "What I deliver",
      list: [
        "document ingestion and chunking",
        "embeddings and Vector Search",
        "BM25 + Vector Search",
        "Hybrid Search and RRF",
        "reranking",
        "multilingual / cross-language retrieval",
        "citations and source grounding",
        "evaluation with Golden Sets and Recall@K",
      ],
      footnote:
        "I don't stop at plugging in a vector database — I measure retrieval quality and choose the architecture based on experiments.",
    },
    {
      num: "03",
      title: "AI Data & Text-to-SQL",
      text: "I build AI interfaces for working with corporate data in natural language.",
      pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
      extraListTitle: "The AI system can",
      extraList: [
        "understand the user's request",
        "build the SQL",
        "execute the query",
        "detect an error",
        "fix and retry the query",
        "run analytical calculations",
        "detect trends and anomalies",
        "produce a table, a chart and a conclusion",
      ],
      footnote:
        "Critical computations run as deterministic code, not the LLM, which keeps the result verifiable.",
      techNote: "PostgreSQL · ClickHouse · SQLAlchemy · Excel / CSV",
    },
    {
      num: "04",
      title: "Evaluation & AI Quality",
      text: "I help turn an AI prototype into a system with measurable, reproducible quality.",
      listTitle: "What I deliver",
      list: [
        "Golden Sets",
        "Recall@K / MRR",
        "LLM-as-a-Judge",
        "regression testing",
        "prompt evaluation",
        "edge-case testing",
        "grounding / anti-hallucination checks",
        "latency and cost analysis",
        "feedback and production monitoring",
      ],
      footnote:
        "In RAG Chat, for example, retrieval quality is measured on 24 golden questions: Recall@1 reached 92%, and answer quality scored 5.0/5 in LLM-as-a-Judge.",
    },
    {
      num: "05",
      title: "AI Integration & Production",
      text: "I integrate AI capabilities into existing products and internal systems.",
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
        "I can cover the full cycle — from AI architecture and backend to frontend, evaluation and production delivery.",
    },
    {
      num: "06",
      title: "Optimization & Reliability",
      text: "I improve existing AI systems when a prototype works but its quality, speed or cost need optimization.",
      listTitle: "Focus",
      list: [
        "latency and TTFT",
        "token budget and context optimization",
        "LLM request cost",
        "retrieval quality",
        "reliability and error handling",
        "observability",
        "resource limits",
        "regression testing",
      ],
      footnote: "Optimization is driven by measurements and experiments, not assumptions.",
      footnote2:
        "For example, in RAG Chat different retrieval approaches were compared on the same evaluation set: hybrid BM25 + RRF raised Recall@1 from 50% to 92%, while the tested reranker dropped the result to 42%.",
    },
  ],
  process: {
    title: "How I work",
    steps: [
      {
        num: "01",
        title: "Problem",
        text: "I define the business problem, constraints, data and success criteria.",
      },
      {
        num: "02",
        title: "Architecture",
        text: "I choose the approach: RAG, Agent, Text-to-SQL, Tool Calling or a combination of components.",
      },
      {
        num: "03",
        title: "Build",
        text: "I develop the AI logic, backend, integrations and the interface.",
      },
      {
        num: "04",
        title: "Measure",
        text: "I create an evaluation set and verify quality through metrics and automated tests.",
      },
      {
        num: "05",
        title: "Optimize",
        text: "I work on quality, latency, cost and reliability.",
      },
      {
        num: "06",
        title: "Production",
        text: "I add validation, error handling, observability and CI/CD.",
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
    title: "What you get",
    items: [
      {
        title: "AI architecture",
        text: "A clear diagram of components and interactions.",
      },
      {
        title: "A working solution",
        text: "AI logic, backend, integrations and the user interface.",
      },
      {
        title: "Controlled quality",
        text: "Evaluation set, automated tests and measurable metrics.",
      },
      {
        title: "Reliability",
        text: "Validation, limits, error handling and control over AI agent actions.",
      },
      {
        title: "Production readiness",
        text: "Infrastructure, CI/CD, observability and room for further growth.",
      },
      {
        title: "Measurable result",
        text: "Focus on reducing manual work, process time and making information more accessible.",
      },
    ],
  },
  cta: {
    title: "Have a problem that AI could solve?",
    texts: [
      "Tell me which process you want to automate, which data or systems it should work with, and what result the user should get.",
      "I will help determine the approach — RAG, AI Agent, Text-to-SQL, LLM integration or a combination of these technologies — and propose a solution architecture.",
    ],
    linkLabel: "Discuss the task",
    href: "/contacts",
    casesLabel: "Demo",
    cases: [
      { name: "RAG Chat", href: "/portfolio/rag-chat" },
      { name: "AI Data Pilot", href: "/portfolio/ai-data-pilot" },
    ],
  },
};
