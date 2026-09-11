import { PortfolioListProps, PortfolioProps } from "src/common/types/lang";

export const portfolio: PortfolioProps = {
  title: "Newly developed",
  buttonText: "Open portfolio",
  portfolioNameList: "Portfolio",
  portfolioTextTitle: "Welcome to portfolio!",
  portfolioText:
    "The portfolio shows production-oriented AI systems I designed and built end-to-end — RAG, AI agents, Text-to-SQL and evaluation.\nPublic demos are independently built personal projects of the same problem class as internal MTS systems — not MTS source code.\nEach case lists the problem, architecture, stack and measured results.",
  all: "All",
  filter: "Project filter",
  wip: "In progress",
  likeLabel: "Like",
  hero: {
    role: "AI / LLM engineering",
    title:
      "Two production systems: document RAG and multi-agent analytics. The pipeline is chosen on a held-out eval, not on the popular paper.",
    chips: "RAG · AI Agents · Text-to-SQL · Evaluation",
  },
  intro:
    "Public GitHub demos are independently built personal projects of the same problem class — not MTS source code. Production data stays under NDA.",
  numbersTitle: "AI engineering in numbers",
  stats: [
    {
      value: "87%",
      label: "Recall@1",
      note: "RAG Chat · held-out · ~180 queries",
    },
    {
      value: "~85%",
      label: "normalized SQL",
      note: "AI Data Pilot · held-out result correctness",
    },
    {
      value: "174",
      label: "tests + LLM evaluation",
      note: "AI Data Pilot · Agents · SQL Guard · Analytics · Golden Set",
    },
    {
      value: "2h → 2min",
      label: "analytical result preparation",
      note: "AI Data Pilot",
    },
  ],
  featuredTitle: "Projects",
  caseLink: "View case study",
  focusTitle: "Engineering focus",
  focus: [
    {
      title: "RAG & Retrieval",
      items:
        "Hybrid Search · BM25 · Vector Search · RRF · Embeddings · Citations",
    },
    {
      title: "Agentic Systems",
      items:
        "ReAct · Tool Calling · Multi-Agent · Self-Correction · Execution Trace",
    },
    {
      title: "AI Data",
      items: "Text-to-SQL · PostgreSQL · ClickHouse · Deterministic Analytics",
    },
    {
      title: "Evaluation",
      items: "Held-out Golden Sets · Recall@K · LLM-as-a-Judge · Regression Testing",
    },
  ],
  researchTitle: "Research & experiments",
};

const ICON_META = { icon: "", widthIcon: "285px", heightIcon: "500px" };

export const propsPortfolioList: PortfolioListProps[] = [
  {
    id: "rag-chat",
    ...ICON_META,
    hrefPortfolio: "https://lyakoway-rag-chat.hf.space",
    portfolioNameList: "RAG Chat",
    portfolioDataTime: "August 10, 2026",
    hrefNameList: "rag-chat",
    likeable: true,
    thumbLight: "/static/portfolio/rag-chat-light.png",
    thumbDark: "/static/portfolio/rag-chat-dark.png",
    direction: "RAG & knowledge",
    cardDescription:
      "An AI system for searching and working with PDF, Word and Excel — answers grounded in source citations.",
    cardMetrics: ["MTS internal prod · test corpus on site", "87% Recall@1 · held-out"],
    tagline:
      "Document Q&A with source citations. Internal MTS production. This page is a personal demo on a public test corpus — not MTS code.",
    keyResultsTitle: "Scale and evaluation",
    keyResultsColumns: 3,
    keyResults: [
      { value: "~2,000", label: "documents · MTS production" },
      { value: "~12", label: "teams" },
      { value: "~200", label: "questions / day" },
      { value: "87%", label: "Recall@1 · held-out (~180)" },
      { value: "~20k", label: "chunks · MTS production" },
      { value: "63", label: "pytest tests" },
    ],
    keyResultsNote:
      "Scale is MTS production. Demo, latency and judge scores on this page use a public pack (6 files → 12 chunks) — not MTS source or production documents.",
    keyResultsLimitation:
      "Production corpus stays at MTS (NDA) and is not published.",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "AI agents",
      "ChromaDB",
      "fastembed",
      "SQLAlchemy",
      "SSE",
      "LLM API",
      "Ollama",
      "React",
      "TypeScript",
      "Vite",
    ],
    github: "https://github.com/lyakoway/ai-RAG-chat",
    portfolioText:
      "A document Q&A app with three modes side by side: classic RAG Chat, an AI Agent and Vector Search — so the difference is visible on the same question.\nRAG mode: one retrieve → grounded answer with citations.;Agent mode: a custom FastAPI tool loop (list documents → search → refine) with a live step timeline in the UI — no LangGraph.;Vector search mode: fastembed semantic search over chunks without an LLM — relevance scores and a jump to the exact document page.\nUpload PDF, Word or Excel and ask questions.;Answers link to source pages, with 👍/👎 feedback buttons and one-click follow-up suggestions.;In-browser preview for PDF, DOCX and Excel plus downloads from the documents panel.;Multilingual: RU/EN demo pack, files in any language — ask in yours, get the answer in the UI language.;Questions can be dictated by voice (Web Speech API) — in chat and in vector search.;Demo mode works without keys. GLM-5.3-flash is the production default, and OpenAI, Anthropic and local Ollama are interchangeable.;Chat titles are named by the LLM in the background, with no extra delay on the answer.\nBackend — FastAPI, ChromaDB, fastembed, hybrid BM25 + RRF. Frontend — React 19 / TypeScript (Vite). 63 tests and CI. Live demo on Hugging Face Spaces.",
    aiEngineering: {
      sectionTitle: "Engineering approach",
      intro:
        "I compare retrieval, models and pipeline tweaks on a held-out set, then keep or reject. This page is three such decisions: hybrid vs dense, a reranker that lost, and a model default set by latency — not by a tutorial.",
      useCasesTitle: "What the project is for",
      useCasesListTitle: "Several scenarios where it already works",
      useCasesIntro:
        "Knowledge is locked inside PDF, Word and Excel files, and people spend hours digging through them. The live demo and latency on this page use a public test pack (6 files), not the MTS production corpus.",
      useCases: [
        {
          title: "Company knowledge base",
          detail:
            "HR policies, regulations and handbooks: “how many vacation days”, “how is internet reimbursed” — an answer in seconds instead of digging through folders. This is exactly what the app's demo pack shows.",
        },
        {
          title: "Customer support over product docs",
          detail:
            "Product manuals, pricing and FAQ — a customer asks in their own words and gets an answer linked to the manual section. Support sees fewer repetitive tickets.",
        },
        {
          title: "Legal and financial documents",
          detail:
            "Find a clause, deadline or figure in contracts and reports: the citation points to the exact page, so verifying an answer takes seconds rather than a separate investigation.",
        },
      ],
      diagramTitle: "Project architecture",
      diagram: [
        {
          title: "Frontend",
          nodes: [
            {
              label: "React 19 + Vite",
              note: "SSE streaming, theme and RU/EN language",
            },
            {
              label: "Citations & preview",
              note: "PDF / DOCX / XLSX in a modal",
            },
            { label: "👍/👎 feedback", note: "stored in DB + analytics" },
            {
              label: "Follow-ups & auto-titles",
              note: "suggestions from retrieval, LLM title in background",
            },
          ],
        },
        {
          title: "API — FastAPI",
          nodes: [
            {
              label: "POST /api/chat (SSE)",
              note: "RAG and agent modes",
              accent: true,
            },
            { label: "GET /api/search", note: "vector search with scores" },
            { label: "/api/documents", note: "file uploads and the demo pack" },
          ],
        },
        {
          title: "RAG core",
          nodes: [
            { label: "Parsers", note: "PDF · DOCX · XLSX + page numbers" },
            { label: "Chunking", note: "tiktoken, 800 / 120 tokens" },
            { label: "Embeddings", note: "fastembed, multilingual MiniLM" },
            {
              label: "Hybrid BM25 + RRF",
              note: "reranker tested and rejected",
              accent: true,
            },
          ],
        },
        {
          title: "Storage",
          nodes: [
            { label: "ChromaDB", note: "vectors and chunks" },
            { label: "SQLite", note: "conversations, messages, feedback" },
            { label: "Files", note: "uploaded documents" },
          ],
        },
        {
          title: "LLM providers",
          nodes: [
            {
              label: "Z.ai (GLM)",
              note: "5.3-flash default · 5.2 / 4.5-flash",
              accent: true,
            },
            { label: "OpenAI · Anthropic", note: "via API keys" },
            { label: "Ollama · offline demo", note: "local and keyless" },
          ],
        },
        {
          title: "Operations",
          nodes: [
            { label: "Evaluation", note: "Recall@k, MRR + LLM-as-judge" },
            { label: "Analytics", note: "feedback + session in the demo UI" },
            { label: "pytest + CI", note: "63 tests, GitHub Actions" },
          ],
        },
      ],
      diagramNote:
        "Top to bottom: a user question → a streamed answer with citations. One RAG pipeline serves all three modes — chat, agent and vector search. LLM providers are interchangeable, and the offline mode runs without keys.",
      principlesTitle: "AI engineer's checklist",
      principles: [
        {
          title: "01 — Metrics before code",
          check: "Define quality, latency, cost and reliability before swapping models.",
          result:
            "Recall@1, TTFT, $/question and pytest coverage — measured on this page, not claimed.",
        },
        {
          title: "02 — Evaluation before optimization",
          check: "Golden set → Recall@K → experiment → keep or reject.",
          result:
            "Held-out ~180 queries. Hybrid became default. Reranker rejected (−45 p.p., +~3 s).",
        },
        {
          title: "03 — Data-driven architecture",
          check: "Compare retrieval, models and pipeline config on the same eval set.",
          result:
            "GLM-5.3-flash is the production default: GLM-4.5-flash sits at 25–50 s TTFT on the same pipeline.",
        },
        {
          title: "04 — Observable AI systems",
          check: "Tool calls, steps, errors, feedback and latency must be visible.",
          result:
            "SSE done/error events, agent step timeline, 👍/👎 in the DB, latency logged.",
        },
        {
          title: "05 — Reproducible quality",
          check: "Tests, CI, isolated eval environment and regression control.",
          result:
            "Eval index rebuilt from scratch every run. 63 pytest tests + GitHub Actions.",
        },
      ],
      metricsTitle: "Measurements",
      tables: [
        {
          title: "Why hybrid search? — held-out ~180 queries, retrieval experiment",
          columns: ["Configuration", "Recall@1", "Recall@3", "MRR@5", "Search"],
          rows: [
            { cells: ["Vector search", "53.2%", "91.5%", "0.727", "11 ms"] },
            {
              cells: [
                "Hybrid BM25 + RRF — default",
                "87.2%",
                "97.9%",
                "0.926",
                "17 ms",
              ],
              highlight: true,
            },
            {
              cells: ["Hybrid + reranker", "41.7%", "100%", "0.694", "~2.9 s"],
            },
          ],
          footnote:
            "Decision: hybrid BM25 + RRF became the default retrieval strategy — the best measured trade-off between retrieval quality and latency on the bilingual held-out set (~180 queries). CPU, paraphrase-multilingual-MiniLM embeddings. The index is rebuilt from scratch on every run — the numbers are reproducible. The reranker row was tested and rejected (−45 p.p., +~3 s).",
        },
        {
          title: "Per-category breakdown — held-out hybrid (default)",
          columns: ["Category", "Questions", "Recall@1", "Recall@3"],
          rows: [
            { cells: ["fact — direct fact", "~60", "100%", "100%"] },
            { cells: ["numeric — numbers and deadlines", "~60", "87%", "100%"] },
            {
              cells: [
                "paraphrase — no verbatim keywords",
                "~35",
                "89%",
                "100%",
              ],
            },
            {
              cells: ["cross-lingual — mixed language", "~25", "—", "—"],
            },
          ],
          footnote:
            "Held-out hybrid retrieval: overall Recall@1 87%. Mixed-language queries are a known next step (RU/EN synonym dictionary and a multilingual reranker) — not a headline metric.",
        },
        {
          title: "System measurements — live API run",
          columns: ["Scenario", "Result"],
          rows: [
            {
              cells: [
                "Demo pack indexing: 6 files → 12 chunks",
                "0.7 s (≈59 ms/chunk)",
              ],
            },
            { cells: ["Vector search via API, server-side p50", "18 ms"] },
            {
              cells: [
                "RAG answer, GLM-5.3-flash: first token / complete",
                "2.5–3.0 s / 3.3–3.9 s",
              ],
            },
            {
              cells: [
                "RAG answer, GLM-5.3: first token / complete",
                "2.6 s / 3.0 s",
              ],
            },
            {
              cells: [
                "RAG answer, local Llama 3.2 3B (Ollama, CPU): first token / complete",
                "1.2–3.6 s / 2.5–5.4 s",
              ],
            },
            {
              cells: [
                "Llama 3.2 3B: cold start (loading the 2 GB model into RAM)",
                "+13.7 s to first token",
              ],
            },
            { cells: ["Agent mode: UI tool steps + two LLM calls", "9.2 s"] },
            { cells: ["Keyless demo mode (mock): first token", "87 ms"] },
          ],
          footnote:
            "Public test corpus. Indexing: 6 files → 12 chunks. TTFT = time to first token. GLM-4.5-flash (free generation) yields 25–50 s TTFT on the same pipeline — not recommended.",
        },
        {
          title: "Answer quality — LLM-as-judge, held-out set",
          columns: ["Evaluation axis", "Average score"],
          rows: [
            { cells: ["Faithfulness — no hallucinations", "5.0 / 5"] },
            { cells: ["Relevance — answers the question", "5.0 / 5"] },
            { cells: ["Citations — citations are correct", "5.0 / 5"] },
          ],
          footnote:
            "This is an LLM-based evaluation and should be treated as a supporting signal on the held-out set (Faithfulness, Relevance, Citations). Stricter validation should use an independent judge model or human evaluation. Answers and judge — glm-4.5-flash, hybrid retrieval.",
        },
        {
          title: "What shipped — decisions from the loop",
          columns: ["Decision", "Measurement", "Why it shipped"],
          rows: [
            {
              cells: [
                "Retrieval",
                "Hybrid BM25 + RRF · +34 p.p. Recall@1 vs dense",
                "Kept: dense-only hit 53% on RU/EN twins, lexical fusion is required, not optional",
              ],
              highlight: true,
            },
            {
              cells: [
                "Reranker",
                "−45 p.p. Recall@1 · +~3 s",
                "Rejected: the cross-encoder promotes language twins and adds latency",
              ],
              highlight: true,
            },
            {
              cells: [
                "Default model",
                "GLM-5.3-flash · TTFT ~2.5–3.0 s",
                "Shipped: GLM-4.5-flash sits at 25–50 s on the same pipeline, the pipeline itself adds <1%",
              ],
              highlight: true,
            },
            {
              cells: [
                "Held-out retrieval",
                "Recall@1 87.2% · Recall@3 97.9%",
                "Supporting number on the public pack — not MTS production quality. Mixed-language still open",
              ],
            },
            {
              cells: [
                "Answer judge",
                "5.0/5 on three axes, same model family",
                "Supporting only. A strict eval needs an independent judge or a human",
              ],
            },
            {
              cells: [
                "Reliability",
                "63 pytest tests + CI",
                "Critical paths (errors, empty docs, agent loops) are under automated tests",
              ],
            },
          ],
          footnote:
            "Highlighted rows are keep / reject decisions. Absolute scores below them are supporting measurements, not the claim.",
        },
      ],
      production: {
        title: "Production & reliability",
        items: [
          {
            title: "MTS production",
            text: "Scale is in the numbers above. Latency and judge scores on this page are from the public test pack, not the NDA corpus.",
          },
          {
            title: "Streaming",
            text: "SSE with explicit done / error events.",
          },
          {
            title: "Failure handling",
            text: "Provider timeout, tool-step errors and graceful recovery.",
          },
          {
            title: "Observability",
            text: "Model, sources, latency, errors and user feedback.",
          },
          {
            title: "Testing",
            text: "63 pytest tests: RAG pipeline · Hybrid Retrieval · Document Parsing · Citations · API/SSE · Error Handling. CI on GitHub Actions.",
          },
          {
            title: "Reproducibility",
            text: "Evaluation index rebuilt from scratch on every run.",
          },
        ],
      },
      pipelinesTitle: "Pipelines",
      pipelines: [
        {
          title: "RAG pipeline",
          steps: [
            "Documents",
            "Parsing",
            "Chunking",
            "Embeddings",
            "BM25 + Vector Search",
            "RRF",
            "Context",
            "LLM",
            "Grounded Answer",
            "Citations",
          ],
        },
        {
          title: "Agent pipeline",
          steps: [
            "User",
            "Agent Loop",
            "List Documents",
            "Search",
            "Refine",
            "Answer",
          ],
        },
      ],
      findingsTitle: "What the measurements showed",
      findings: [
        "Language “twins” are the main trap of multilingual corpora. Embeddings align RU and EN, so a Russian question can surface the English document (vector-only Recall@1 53%). Lexical BM25 in the fusion is not optional — it is required (+34 p.p. Recall@1).",
        "A reranker is not a free upgrade. The cross-encoder scores semantic relevance, and a “twin” is just as semantically relevant — Recall@1 dropped −45 p.p. and added ~3 seconds. Tested and rejected with data.",
        "The model generation defines latency more than any pipeline tweak. GLM-4.5-flash with thinking disabled answers in 25–50 s. GLM-5.3-flash on the same pipeline — ~3 s. A local Llama 3.2 3B on CPU can answer in 2–5 s for free, with spikes under load and weaker citations.",
        "Anti-hallucination was probed with an out-of-corpus question — the model declines and points to the context instead of inventing a fact.",
        "“Trim the context, get a faster first token” was tested and rejected: top_k 5→4 and chunk 800→400 leave Recall unchanged, TTFT stays ~2.5 s. The latency is the provider floor, the pipeline adds ~20 ms (<1%).",
        "LLM-as-judge scored held-out answers 5.0 on every axis. Treat it as a supporting signal — a strict eval needs a judge from another family.",
        "Critical paths are under tests: corrupted files, empty documents, a question without context, agent runaway loops — 63 pytest tests on isolated stores and fake providers.",
      ],
      conclusionLabel: "The takeaway",
      conclusionSteps: [
        "Keep hybrid",
        "Drop reranker",
        "Default GLM-5.3-flash",
      ],
      conclusion:
        "The result is three measured decisions — not the chatbot.\nKeep hybrid (+34 p.p. vs dense on RU/EN twins). Reject the reranker (−45 p.p., +~3 s). Default GLM-5.3-flash (previous generation sits at 25–50 s TTFT).\n87% Recall@1 and 5.0/5 are supporting scores on a public pack, not MTS production quality.",
      footnote:
        "All numbers are reproducible: see backend/scripts/evaluate.py in the project repo.",
    },
    screenshots: [
      "/static/portfolio/rag-chat-dark.png",
      "/static/portfolio/rag-chat-light.png",
      "/static/portfolio/rag-chat-dark-pr-en.png",
      "/static/portfolio/agent-chat-light-pr-ru.png",
    ],
  },
  {
    id: "ai-data-pilot",
    ...ICON_META,
    hrefPortfolio: "https://lyakoway-ai-data-pilot.hf.space/",
    portfolioNameList: "AI Data Pilot",
    portfolioDataTime: "August 10, 2026",
    hrefNameList: "ai-data-pilot",
    likeable: true,
    direction: "AI agents",
    cardDescription:
      "A multi-agent analytics platform that turns a natural-language question into SQL, data analysis and a ready analytical result.",
    cardMetrics: [
      "MTS internal prod · test data on site",
      "~85% normalized SQL · 2h → 2min",
    ],
    tagline:
      "Natural-language analytics: SQL, a chart and an explanation. Internal MTS production. This page is a personal demo on test data — not MTS code.",
    keyResultsTitle: "Scale and validation",
    keyResults: [
      { value: "~15", label: "analysts · MTS internal" },
      { value: "~80", label: "scenarios / week" },
      { value: "~85%", label: "normalized SQL · held-out" },
      { value: "2h→2min", label: "report prep · MTS" },
      { value: "174", label: "pytest tests" },
      { value: "Python", label: "counts · LLM writes prose" },
    ],
    keyResultsNote:
      "Scale is MTS production. Demo and SQL eval on this page use a test dataset (RideGo ~21k rides) — not MTS source or production databases.",
    keyResultsLimitation:
      "Production databases stay at MTS (NDA). Headline SQL quality is held-out normalized result correctness (~85%), not strict exact-match.",
    technologies: [
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
    github: "https://github.com/lyakoway/ai-data-pilot",
    portfolioText:
      "The user asks a question in natural language → the system picks the agent and data source → generates and executes SQL → repairs it if needed → runs deterministic analytics → returns a table, a chart and an explanation of the result.\nUsers watch agents work step-by-step in real time (SSE execution trace) with self-correction: if SQL fails, the agent rewrites the query itself.\nData sources: PostgreSQL, ClickHouse, uploaded CSV/Excel/PDF/Word/TXT/MD with auto-schema and cross-file JOINs, plus a virtual 'All uploads' source.\nEvery figure is computed by a deterministic Python layer — the LLM only writes prose. The Knowledge Agent's search is a hybrid of BM25 + vector embeddings (fastembed, 50+ languages).",
    descCaptions: ["Transparency", "Data sources", "Trust in the numbers"],
    deployCaption: "Validation & deployment",
    deployLine:
      "174 tests + held-out SQL eval (~85% normalized result correctness, ~98% means the query ran). Self-correction and latency measured · Hugging Face Spaces.",
    features: [
      "Multi-agent routing",
      "Text-to-SQL + Tool Calling",
      "Self-correcting Agent Loop",
      "Deterministic Analytics",
      "Hybrid RAG",
      "LLM Evaluation (Golden Set)",
    ],
    productFeaturesTitle: "Product capabilities",
    featuresCaption: "Core AI capabilities",
    productFeatures: [
      "Single file upload: SQL table + search (both agents)",
      "SSE execution trace",
      "Document viewer (PDF · DOCX · XLSX)",
      "Feedback 👍/👎 and analytics",
      "Parameterized scenarios",
      "Status indicators: ok / demo / partial / error",
    ],
    aiEngineering: {
      sectionTitle: "An AI engineer's view: agency and reliability",
      intro:
        "I compare routing, SQL repair and who computes the numbers — then keep or reject. This page is three such decisions: Python counts, a failed SQL is never hidden, and two specialized agents beat one universal prompt.",
      useCasesTitle: "What the project is for",
      useCasesListTitle: "Scenarios where this already works",
      useCasesIntro:
        "Data lives in databases and Excel, and getting a number usually means an analyst ticket. SQL quality and latency on this page are from a test dataset, not MTS production databases.",
      useCases: [
        {
          title: "Self-service analytics for business",
          detail:
            "A manager asks 'revenue by region for 90 days' and gets a table with a chart — no analyst ticket, no queue. End-to-end latency is tens of seconds (LLM plan + answer), not a page-load.",
        },
        {
          title: "Root-cause analysis of metric drops",
          detail:
            "'Why did revenue drop in July?' — the agent compares periods, computes the change, finds contributing factors via an agent loop and shows the analysis step by step.",
        },
        {
          title: "Analyzing uploaded Excel exports",
          detail:
            "Drag a data file into the window and ask questions about it: the Data Agent builds SQL over the auto-generated schema, the Knowledge Agent searches the content, cross-file JOINs work out of the box.",
        },
        {
          title: "A single entry point to heterogeneous databases",
          detail:
            "PostgreSQL for transactions and ClickHouse for billion-row analytics under one interface, with the SQL dialect adapted automatically per source.",
        },
      ],
      diagramTitle: "Project architecture",
      diagram: [
        {
          title: "Frontend",
          nodes: [
            { label: "React 19 + Vite", note: "SSE streaming, RU/EN, dark/light" },
            { label: "Execution trace", note: "live agent step-by-step view" },
            { label: "Document viewer", note: "PDF · DOCX · XLSX" },
          ],
        },
        {
          title: "Routing (two levels)",
          nodes: [
            { label: "Agent router", note: "data → Data Agent, docs → Knowledge Agent", accent: true },
            { label: "Source router", note: "question → the right DB (LLM + heuristic)", accent: true },
            { label: "Manual override", note: "checkboxes and the source selector" },
          ],
        },
        {
          title: "Data Agent — SQL",
          nodes: [
            { label: "Agent Loop (ReAct)", note: "prompt-based tool calling, up to 6 steps" },
            { label: "Tools", note: "database_query · calculate · analyze · chart · finish" },
            { label: "Self-correction", note: "SQL error → rewrite (2 attempts)", accent: true },
            { label: "Insights (Python)", note: "trends · top-N · z-score · LLM never counts", accent: true },
          ],
        },
        {
          title: "Knowledge Agent — RAG",
          nodes: [
            { label: "Hybrid BM25 + vector", note: "fastembed, 50+ languages" },
            { label: "Russian stemming", note: "IDF weighting, fallback chunks" },
            { label: "Citations [1] + viewer", note: "PDF page N · DOCX · XLSX table" },
          ],
        },
        {
          title: "Data sources",
          nodes: [
            { label: "RideGo (SQLite)", note: "test domain only, ~21k rides — not MTS production data" },
            { label: "PostgreSQL · ClickHouse", note: "schema introspection, dialect prompts" },
            { label: "CSV / Excel", note: "SQL table + text chunks from one upload" },
            { label: "'All uploads'", note: "virtual source, cross-file JOINs" },
          ],
        },
        {
          title: "Operations",
          nodes: [
            { label: "SQL guard", note: "SELECT-only, row limit, 8/30 s timeouts" },
            { label: "Feedback", note: "👍/👎 persisted + analytics panel" },
            { label: "pytest + evaluation", note: "174 tests + golden set, temp DBs" },
          ],
        },
      ],
      diagramNote:
        "Top to bottom: a question → dual routing (agent + source) → step-by-step execution with trace → an answer with citations and a chart. LLM providers are interchangeable, and the demo mode runs without keys on deterministic scripts.",
      pipelinesTitle: "Two specialized agents",
      routerLine: "Auto-router → Data Agent / Knowledge Agent",
      pipelines: [
        {
          title: "Data Agent",
          steps: [
            "Natural Language",
            "Text-to-SQL",
            "Tool Calling",
            "Database",
            "Analytics",
            "Chart / Answer",
          ],
        },
        {
          title: "Knowledge Agent",
          steps: [
            "Question",
            "BM25 + Vector Search",
            "Relevant chunks",
            "LLM",
            "Citations",
          ],
        },
      ],
      principlesTitle: "AI engineer's checklist",
      principles: [
        {
          title: "01 — Deterministic numbers",
          check: "The LLM writes prose, Python computes the numbers.",
          result:
            "Trends, percentages, top-N and z-score run in a Python layer. The LLM never calculates business figures.",
        },
        {
          title: "02 — SQL failure is part of the contract",
          check: "Failed SQL → self-correction → retry → honest error.",
          result:
            "SQL Guard (SELECT-only) + two rewrites. No silent substitute after a failed query.",
        },
        {
          title: "03 — Specialized agents over universal prompts",
          check: "Routing selects the right agent and data source.",
          result:
            "Data Agent for SQL, Knowledge Agent for docs. Dual router, the decision is visible in the trace.",
        },
        {
          title: "04 — Hybrid retrieval",
          check: "BM25 + vector search handles exact terms, semantics and multilingual queries.",
          result:
            "Knowledge Agent only. Russian stemming on BM25. The retrieval ablation lives on the RAG Chat case.",
        },
        {
          title: "05 — Transparent execution",
          check: "SSE exposes routing, tool calls, retries and the final status.",
          result: "ok / demo / partial / error on every response. No silent fallback.",
        },
        {
          title: "06 — Reproducible verification",
          check: "174 tests, isolated databases and fake providers. Golden-set LLM evaluation runs as a separate pass.",
          result:
            "Headline SQL quality is ~85% normalized result correctness on GLM-4.6 — not ~98% execution.",
        },
      ],
      metricsTitle: "Automated verification",
      tables: [
        {
          title: "Test coverage — 174 pytest tests",
          stacked: true,
          columns: ["Component", "Tests", "Covers"],
          rows: [
            { cells: ["Agent Loop (ReAct)", "22", "tool calling, self-correction, step limit, fallback"] },
            { cells: ["SQL guard", "18", "DML bans, multi-statement, timeouts, row limit"] },
            { cells: ["Analytics layer", "16", "trends, z-score threshold, top-N, RU/EN highlights"] },
            { cells: ["Sources (CSV/Excel/PG/CH)", "27", "parsers, introspection, name dedup, password masking"] },
            { cells: ["Routers (agent + source)", "26", "heuristic, LLM fallback, honest errors"] },
            { cells: ["Knowledge Agent RAG + app.db", "20", "steps, sources, citations, feedback stats"] },
            { cells: ["Parameterized scenarios", "10", "substitution, defaults, migration"] },
            { cells: ["Other (app_db, export)", "22", "CRUD, feedback, DB isolation"] },
            { cells: ["Retrieval quality + analytics contracts", "13", "Recall@1/5, MRR (BM25/Vector/Hybrid), numeric golden contracts"] },
          ],
          footnote:
            "Tests run on isolated temp SQLite databases with fake providers — no API keys required, production data untouched. Full run ~50 s.",
        },
        {
          title: "SQL quality — held-out eval, live GLM-4.6 run",
          columns: ["Metric", "Result"],
          rows: [
            {
              cells: [
                "Normalized result correctness — same numbers after canonicalization",
                "~85%",
              ],
              highlight: true,
            },
            {
              cells: [
                "SQL Execution Accuracy — generated SQL ran (not the same as correct)",
                "~98%",
              ],
            },
          ],
          footnote:
            "GLM-4.6 held-out SQL eval on the public test pack, not MTS production databases. Headline quality is normalized result correctness (~85%): same numbers after ignoring column aliases, row order and number format. Strict string exact-match is not a headline. ~98% only means the query executed.",
        },
        {
          title: "Latency measurements — medians of 3 runs per model",
          columns: ["Model", "Plan (LLM)", "Execution (DB)", "Answer (LLM)", "Total", "SQL ok"],
          rows: [
            { cells: ["GLM-4.6 (Z.ai) — default", "13.5 s", "12 ms", "16.3 s", "~29.8 s", "2/3"], highlight: true },
            { cells: ["GLM-5.2 (Z.ai)", "7.0 s", "6 ms", "9.4 s", "~16.4 s", "3/3"] },
            { cells: ["GLM-5.3-flash (Z.ai)", "7.0 s", "8 ms", "4.8 s", "~11.9 s", "2/3"] },
            { cells: ["GLM-5.3 (Z.ai)", "13.8 s", "11 ms", "5.1 s", "~19.0 s", "1/3"] },
          ],
          footnote:
            "Medians of 3 runs of one question through the full cycle (plan → DB → answer). External API latency varies. GLM-4.6 stays the default: the ~85% SQL eval was run on it. GLM-5.2 is faster on this sample. GLM-5.3-flash is faster still but weaker SQL (2/3 and 1/3). Script: python scripts/latency_benchmark.py.",
        },
        {
          title: "System limits — degradation protection",
          columns: ["Mechanism", "Value"],
          rows: [
            { cells: ["SQL timeout: local sources", "8 s"] },
            { cells: ["SQL timeout: PostgreSQL / ClickHouse (remote)", "30 s"] },
            { cells: ["Row limit per query", "500 rows"] },
            { cells: ["Self-correction rounds", "2 (up to 3 attempts total)"] },
            { cells: ["Agent Loop: max steps", "6"] },
            { cells: ["Upload limit", "25 MB · 50,000 rows"] },
          ],
          footnote:
            "Timeouts use a ThreadPoolExecutor with future.result(timeout) — a heavy query never blocks the event loop. Remote databases get a larger budget: cross-network connect plus handshake takes seconds.",
        },
        {
          title: "What shipped — decisions from the loop",
          stacked: true,
          columns: ["Decision", "Measurement", "Why it shipped"],
          rows: [
            {
              cells: [
                "Who counts",
                "Python analytics layer",
                "Kept: the LLM writes prose, trends, percentages and z-score never come from the model",
              ],
              highlight: true,
            },
            {
              cells: [
                "Failed SQL",
                "Guard + 2 rewrites + honest error",
                "Kept: a failed query is never silently replaced with a fabricated result",
              ],
              highlight: true,
            },
            {
              cells: [
                "Agents",
                "Data Agent + Knowledge Agent + dual router",
                "Kept: one universal prompt blurred the role, the routing decision is in the trace",
              ],
              highlight: true,
            },
            {
              cells: [
                "Default model",
                "GLM-4.6",
                "Quality eval (~85%) ran on GLM-4.6. GLM-5.2 is faster here, GLM-5.3-flash is weaker at SQL",
              ],
            },
            {
              cells: [
                "SQL quality",
                "~85% normalized · ~98% executed",
                "Supporting, public test pack — not MTS production. Execution ≠ correctness",
              ],
            },
            {
              cells: [
                "Latency",
                "Full cycle ~16–30 s depending on model",
                "Provider floor on plan + answer. Streamed steps — not a sub-second dashboard",
              ],
            },
            {
              cells: [
                "Reliability",
                "174 pytest tests + CI",
                "Isolated temp DBs, fake providers, dirty-Excel parsers under tests",
              ],
            },
          ],
          footnote:
            "Highlighted rows are keep / reject decisions. Absolute scores below them are supporting measurements on the test pack, not the claim.",
        },
      ],
      calloutsTitle: "Key engineering decisions",
      calloutsIntro:
        "Three decisions underpin trust: Python computes business numbers, a failed SQL is never hidden, and two specialized agents beat one universal prompt.",
      deterministic: {
        title: "Deterministic analytics",
        lead: "The LLM never calculates business numbers.",
        steps: [
          "Database",
          "Raw data",
          "Python analytics layer",
          "Trends / percentages / top-N / z-score",
          "Structured highlights",
          "LLM",
          "Natural-language explanation",
        ],
        note: "This keeps numerical computation outside the LLM and makes analytical figures reproducible.",
      },
      selfCorrection: {
        title: "SQL self-correction",
        steps: [
          "Generate SQL",
          "SQL Guard",
          "Execute",
          "ERROR",
          "LLM receives error",
          "Rewrite SQL",
          "Retry ×2",
          "Result / Honest Error",
        ],
        note: "The system never silently substitutes a fabricated result after a SQL failure.",
      },
      evaluation: {
        title: "AI evaluation",
        currentStateTitle:
          "SQL / Agent evaluation — AI quality is measured separately from software-level tests",
        current: [
          "Held-out SQL eval (natural language → SQL) on the public test pack",
          "Normalized result correctness — same numbers after canonicalization (~85%, headline)",
          "Execution Accuracy — whether generated SQL ran (~98%, not correctness)",
          "Self-Correction Rate — how often failed SQL is repaired",
          "Full-cycle latency — tens of seconds, streamed steps",
        ],
      },
      findingsTitle: "Engineering findings",
      findings: [
        "LLMs are unreliable at arithmetic. Early versions produced plausible but incorrect percentages. Decision: all numerical computation moved into a deterministic Python layer.",
        "Silent fallbacks destroy trust. An answer without a mode badge looked like a real one. Decision: explicit ok / demo / partial / error statuses on every response.",
        "Dirty Excel files are the norm. A real upload broke on a merged header row and duplicate columns. Decision: resilient parsers that detect the header row, plus tests on dirty files.",
        "Keyword search without stemming is useless for Russian. «Затраты» did not match «расходы». Decision: Russian stemming for BM25 + a vector channel for semantics and multilinguality.",
        "Routing saves trust, not steps. A single universal prompt blurred the agent's role. Decision: two specialized agents + two-level routing with a visible decision in the trace.",
        "Model pick is a quality/latency trade-off, not a default from a blog. On the latency table (3 runs, one question) GLM-5.2 is ~16 s vs GLM-4.6 ~30 s. GLM-5.3-flash is faster still but weaker SQL. GLM-4.6 stays the default because the ~85% held-out eval ran on it.",
      ],

      production: {
        title: "Production & reliability",
        items: [
          {
            title: "MTS production",
            text: "Scale is in the numbers above. SQL eval and latency on this page are from the RideGo test pack, not production databases.",
          },
          {
            title: "SQL Guard",
            text: "SELECT-only, row limits, 8/30 s timeouts.",
          },
          {
            title: "Self-correction",
            text: "The agent sees the SQL error and rewrites the query (2 attempts), then reports an honest error status.",
          },
          {
            title: "Execution trace",
            text: "Multi-step agent work in real time via SSE.",
          },
          {
            title: "Testing",
            text: "174 pytest tests on isolated temporary databases + held-out SQL eval (scripts/evaluate.py).",
          },
          {
            title: "Status transparency",
            text: "ok / demo / partial / error status on every response.",
          },
        ],
      },
      conclusionLabel: "The takeaway",
      conclusionSteps: [
        "Python counts",
        "SQL failure is a contract",
        "Two agents, not one prompt",
      ],
      conclusion:
        "The result is three measured decisions — not the chatbot.\nPython computes business numbers, the LLM writes prose. A failed SQL is guarded, rewritten twice, then an honest error — never a silent fake. Two specialized agents plus a dual router beat one universal prompt.\n~85% normalized SQL and 174 tests are supporting scores on a public pack. ~98% only means the query ran. 2h → 2min is MTS production, not the demo.",
      footnote:
        "Tests are reproducible: cd backend && pytest — isolated temp DBs, fake providers, no API keys.",
    },
  },
  {
    id: "ai-agents",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Multi-agent system",
    portfolioDataTime: "",
    hrefNameList: "ai-agents",
    direction: "AI agents",
    wip: true,
    likeable: true,
    technologies: ["Python", "LangGraph", "function calling", "orchestration"],
    portfolioText:
      "Work in progress. A team of AI agents with orchestration for business scenarios: workflow, function / tool calling, error handling and recovery. Coming soon.",
  },
  {
    id: "prompt-engineering",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Prompt engineering & evaluation",
    portfolioDataTime: "",
    hrefNameList: "prompt-engineering",
    direction: "Prompt engineering",
    wip: true,
    likeable: true,
    technologies: ["prompt engineering", "evaluation", "Python"],
    portfolioText:
      "Work in progress. A framework for prompt scenarios and evaluation sets: accuracy, stability and edge-case tests, regression checks of answer quality. Coming soon.",
  },
  {
    id: "mlops",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Infrastructure for LLM apps",
    portfolioDataTime: "",
    hrefNameList: "mlops",
    direction: "MLOps",
    wip: true,
    likeable: true,
    technologies: ["Docker", "Kubernetes", "CI/CD", "monitoring"],
    portfolioText:
      "Work in progress. Infrastructure and deployment for LLM applications: containerization, orchestration, CI/CD and monitoring. Coming soon.",
  },
  {
    id: "llm-integration",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "LLM integration into a product",
    portfolioDataTime: "",
    hrefNameList: "llm-integration",
    direction: "LLM integration",
    wip: true,
    likeable: true,
    technologies: ["FastAPI", "LLM API", "Python", "Redis"],
    portfolioText:
      "Work in progress. Embedding large language models into a product via API: a reliable Python / FastAPI backend, caching, safe and predictable behavior. Coming soon.",
  },
  {
    id: "assistant",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "AI assistant / chatbot",
    portfolioDataTime: "",
    hrefNameList: "assistant",
    direction: "Assistants",
    wip: true,
    technologies: ["LLM", "RAG", "function calling", "React"],
    portfolioText:
      "Work in progress. An AI assistant / chatbot with access to a knowledge base (RAG) and tools (function calling) for specific tasks. Coming soon.",
  },
];
