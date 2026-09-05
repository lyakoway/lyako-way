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
      { value: "92%", label: "Recall@1 · RAG · golden set" },
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
    profile: {
      title: "AI / LLM Engineer",
      paragraphs: [
        "**AI / LLM Engineer** with 7+ years of commercial software development experience. Specialized in building production-ready AI solutions: RAG systems, AI agents and LLM applications with Python.",
        "Building **full-cycle AI systems** — from data processing and retrieval to generation, validation and answer quality evaluation. Implementing **RAG and hybrid search (BM25 + Vector Search, RRF), embeddings, Agent Loop (ReAct), Tool Calling, Text-to-SQL and multi-agent orchestration.**",
        "Focused on the **quality and reliability of LLM systems:** golden sets, Recall@K, LLM-as-a-Judge, regression testing, error handling and self-correction, context and token-budget optimization. Working with cloud and local LLMs via API, including **GLM, OpenAI, Anthropic and Ollama.**",
        "Strong **software engineering foundation** and end-to-end AI product development experience: Python / FastAPI, PostgreSQL / ClickHouse, React / Next.js, Docker / Kubernetes / CI/CD. Able to independently take **an AI prototype all the way to a production solution.**",
      ],
    },
    create: {
      title: "What I build",
      cards: [
        {
          title: "RAG systems",
          text: "AI systems for working with corporate knowledge and documents.",
          items: [
            "search across PDF, Word, Excel and other sources;",
            "hybrid search: BM25 + Vector Search;",
            "embeddings and reranking;",
            "answers with citations of the source documents;",
            "retrieval quality evaluation via golden sets.",
          ],
        },
        {
          title: "AI agents",
          text: "Agents that do not just generate text, but call tools and execute sequences of actions.",
          items: [
            "Agent Loop / ReAct;",
            "Tool Calling;",
            "multi-step task execution;",
            "self-correction;",
            "routing between specialized agents;",
            "execution observability via execution trace.",
          ],
        },
        {
          title: "AI for working with data",
          text: "Interfaces that let you ask questions to data in natural language.",
          pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
          footnote:
            "The LLM handles understanding the task and managing the process, while critical computations are performed by deterministic code.",
        },
        {
          title: "Evaluation & Quality",
          text: "I build AI systems not only around the model, but around measurable quality.",
          items: [
            "golden sets;",
            "Recall@K / MRR;",
            "LLM-as-a-Judge;",
            "regression testing;",
            "edge case testing;",
            "comparison of models and retrieval approaches;",
            "latency and quality analysis.",
          ],
        },
      ],
    },
    products: {
      title: "AI products",
      items: [
        {
          name: "RAG Chat",
          tagline: "AI system for searching and working with information in PDF, Word and Excel.",
          modes: ["RAG Chat", "AI Agent", "Vector Search"],
          paragraphs: [
            "RAG uses hybrid BM25 + RRF and multilingual embeddings. The AI Agent runs through its own tool loop on FastAPI. Vector Search lets you find relevant fragments without using the LLM.",
          ],
          result:
            "Key result — Recall@1 92% on a golden set of 24 questions and 5.0/5 for Faithfulness, Relevance and Citations in LLM-as-a-Judge.",
          stack: {
            label: "Stack",
            items: ["Python", "FastAPI", "RAG", "ChromaDB", "fastembed", "BM25", "RRF", "SQLAlchemy", "SSE", "React", "TypeScript", "Vite", "LLM API", "Ollama"],
          },
        },
        {
          name: "AI Data Pilot",
          tagline: "Multi-agent platform for analyzing data and corporate documents.",
          paragraphs: [
            "The user asks a question in natural language, after which the system determines the right agent and data source.",
          ],
          result:
            "Quality is covered by 161 automated tests: agent loop, self-correction, SQL Guard, analytics, routers and data sources.",
          flows: [
            { name: "Oleg — data agent", steps: "Natural Language → Text-to-SQL → Tool Calling → Analytics → Answer" },
            { name: "Ksyusha — RAG agent", steps: "Question → Hybrid Search → Relevant Documents → Answer + Citations" },
          ],
          notes: [
            "Oleg uses a ReAct Agent Loop, independently calling tools to work with the DB, calculations, analysis and chart building. SQL errors are passed back to the agent for self-correction.",
            "The numbers are not generated by the LLM — trends, percentages, top-N and z-score anomalies are computed by a deterministic Python layer.",
          ],
          stack: {
            label: "Stack",
            items: ["Python", "FastAPI", "SQLAlchemy", "Text-to-SQL", "ReAct", "Tool Calling", "RAG", "BM25", "fastembed", "PostgreSQL", "ClickHouse", "SSE", "React", "TypeScript", "pytest"],
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
          title: "Success metrics before code",
          text: "First I define what «the system works» means and how to measure it:",
          items: [
            "quality · latency · cost · reliability",
            "For RAG this can be Recall@K and MRR, for AI agents — tool execution correctness and error handling, for Text-to-SQL — query execution success rate and result accuracy.",
          ],
        },
        {
          num: "02",
          title: "Decisions driven by measurements",
          text: "Architecture decisions are made through experiments, not by what approach is currently popular. For example, in RAG Chat the hybrid BM25 + RRF raised Recall@1 from 50% to 92%, while the tested cross-encoder reranker, on the contrary, dropped the result to 42% and added about 3 seconds of latency. So the reranker was rejected based on data.",
        },
        {
          num: "03",
          title: "LLM doesn't compute — code does",
          text: "I do not pass to the LLM the tasks that deterministic code solves more reliably. In AI Data Pilot the sums, percentages, trends, top-N and z-score anomalies are calculated by the Python layer. The LLM receives ready results and is responsible for understanding the task and forming the explanation.",
        },
        {
          num: "04",
          title: "Agents need observable execution",
          text: "An AI agent must be not a «black box», but a manageable system: Tool Calling, Agent Loop / ReAct, execution trace, step limits, retry and self-correction. The user and the developer must understand what actions the agent performed and where the error occurred.",
        },
        {
          num: "05",
          title: "Failures are part of the design",
          text: "Errors must not be hidden: if SQL fails, the agent tries to fix the query; if the fix does not help — the system shows the error instead of a plausible result. For data protection I use restrictions like SELECT-only, row limits and query timeouts.",
        },
        {
          num: "06",
          title: "Quality is reproducible",
          text: "The evaluation runs repeatedly and gives a comparable result: Golden Sets → Automated Tests → Recall@K / MRR → LLM-as-a-Judge → Regression Testing. In RAG Chat the evaluation is built on 24 golden questions, in AI Data Pilot — a suite of 161 automated tests: agent loop, self-correction, SQL Guard, analytics, routers, data sources.",
        },
        {
          num: "07",
          title: "Production matters",
          text: "An AI system must account for not only the answer quality, but also:",
          items: [
            "latency · cost · observability · limits · failure handling · maintainability",
          ],
        },
      ],
      cycle: {
        title: "My engineering cycle",
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
          "This cycle is the foundation of AI Engineering for me: my task is not just to make the LLM «answer something», but to build a system whose result can be trusted and whose quality can be verified.",
      },
    },
    engineering: {
      title: "End-to-End Engineering",
      intro: "My strong side — the ability to independently cover the whole path from an idea to a working AI product.",
      areas: [
        { title: "Architecture", text: "Designing the AI architecture and component interactions." },
        { title: "Backend", text: "Python, FastAPI, API, SSE, business logic." },
        { title: "AI Layer", text: "LLM, RAG, agents, tool calling, Text-to-SQL, prompt engineering." },
        { title: "Data", text: "PostgreSQL, ClickHouse, SQLAlchemy, vector search." },
        { title: "Evaluation", text: "Golden sets, automated tests, retrieval evaluation, LLM-as-a-Judge." },
        { title: "Frontend", text: "React, Next.js, TypeScript, Vite." },
        { title: "Infrastructure", text: "Docker, Kubernetes, CI/CD, Git." },
      ],
    },
    stack: {
      title: "Technology stack",
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
      title: "Key principles",
      items: [
        "AI must solve the task, not just demonstrate the model's capabilities.",
        "Quality must be measurable, not determined by a subjective feeling about the answer.",
        "Deterministic logic must stay deterministic.",
        "System errors must be transparent to the user.",
        "Production-ready AI is not only the LLM, but architecture, data, evaluation, observability and engineering discipline.",
      ],
    },
    growth: {
      title: "Where I am heading",
      chips: ["Agentic AI", "Production LLM Systems", "AI Engineering"],
      text: "The focus is on building reliable AI systems capable of independently working with data, documents, tools and external systems, while maintaining control, measurability and predictability of the result.",
    },
  },
};
