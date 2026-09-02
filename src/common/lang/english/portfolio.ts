import { PortfolioListProps, PortfolioProps } from "src/common/types/lang";

export const portfolio: PortfolioProps = {
  title: "Newly developed",
  buttonText: "Open portfolio",
  portfolioNameList: "Portfolio",
  portfolioTextTitle: "Welcome to portfolio!",
  portfolioText:
    "The portfolio contains projects that I have developed in collaboration with web studios and for private clients, as well as several personal projects.\nMost of the projects contain individual functions designed to implement the features of the website.\nMy web developer portfolio indicates the name of the site, the link to the site, the purpose of the site and a description of the work performed.",
  all: "All",
  filter: "Project filter",
  wip: "In progress",
  likeLabel: "Like",
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
      "A document Q&A app with three modes side by side: classic RAG Chat, an AI Agent and Vector Search — so the difference is visible on the same question.\nRAG mode: one retrieve → grounded answer with citations.;Agent mode: a custom FastAPI tool loop (list documents → search → refine) with a live step timeline in the UI — no LangGraph.;Vector search mode: fastembed semantic search over chunks without an LLM — relevance scores and a jump to the exact document page.\nUpload PDF, Word or Excel and ask questions.;Answers link to source pages, with 👍/👎 feedback buttons and one-click follow-up suggestions.;In-browser preview for PDF, DOCX and Excel plus downloads from the documents panel.;Multilingual: RU/EN demo pack, files in any language — ask in yours, get the answer in the UI language.;Questions can be dictated by voice (Web Speech API) — in chat and vector search.;Demo mode works without keys. GLM-5.x (Z.ai), OpenAI, Anthropic and local Ollama are supported.;chat titles are named by the LLM (background task, no answer delay).\nBackend — FastAPI, ChromaDB, fastembed, hybrid retrieval, evaluation (Recall@1 92%) and LLM-as-judge (answer quality 5.0/5).;Frontend — React 19 / TypeScript (Vite). Tests and CI. Live demo on Hugging Face Spaces.",
    features: [
      "Mode switch: RAG Chat, AI Agent and Vector Search in one app",
      "Vector search (fastembed + ChromaDB): ranked chunks with relevance scores — no LLM, no keys",
      "Documents panel: preview, download, language filter, paired RU/EN deletion",
      "Cross-language Q&A: a file in one language, the answer in the UI language",
      "Retrieval evaluation: 24 golden questions, Recall@1 92% (see README)",
      "Agent steps timeline (tools: list / search documents)",
      "Custom agent loop on FastAPI (JSON tool-calling)",
      "Search across PDF, Word (.docx) and Excel (.xlsx)",
      "Clickable citations [1], [2] with in-app document preview",
      "PDF / DOCX / Excel preview in a modal",
      "👍/👎 answer feedback (stored in DB + analytics)",
      "Voice input: ask by voice in chat and vector search (Web Speech API)",
      "Follow-up suggestions under each answer: one click continues the dialog (built from retrieval)",
      "Auto chat titles: the LLM names the conversation (background task, no answer delay)",
      "LLM-as-judge: answer quality scored by a second model — 5.0 on every axis",
      "Category filter, conversation history, SSE streaming",
      "Multi-model: GLM-5.x / Z.ai / OpenAI / Anthropic / Ollama / offline demo",
      "Light/dark theme and language switching (RU/EN)",
      "Yandex Metrika + GA4 event markup, pytest + CI",
    ],
    aiEngineering: {
      sectionTitle: "AI engineering view: methodology & measurements",
      intro:
        "This review uses an AI engineer's lens: the app is judged not by a feature list but by the engineering loop — from problem framing and success metrics to quality measurements and operations. The eight-principle checklist below is my methodology for evaluating AI applications; it was applied to this project and will be applied to the next ones.",
      useCasesTitle: "What the project is for",
      useCasesListTitle: "Several scenarios where it already works",
      useCasesIntro:
        "A RAG chat solves a typical pain: knowledge is locked inside dozens of PDF, Word and Excel files, and people spend hours digging through them manually. The app turns documents into a conversation — a question in natural language, an answer with an exact link to the file and page.",
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
          title: "Construction documentation and codes",
          detail:
            "Questions about estimates, SNiP / GOST codes and design documentation (PDF / Excel / Word) with an answer linked to the primary source — a single point of entry instead of manually digging through dozens of files.",
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
              note: "optional cross-encoder reranker",
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
              note: "5.3 / 5.2 / 4.5-flash",
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
            { label: "Analytics", note: "Yandex Metrika + GA4, 32 events" },
            { label: "pytest + CI", note: "25 tests, GitHub Actions" },
          ],
        },
      ],
      diagramNote:
        "Top to bottom: a user question → a streamed answer with citations. One RAG pipeline serves all three modes — chat, agent and vector search. LLM providers are interchangeable, and the offline mode runs without keys.",
      principlesTitle: "AI engineer's checklist",
      principles: [
        {
          title: "1. Success metrics before code",
          check:
            "Is “works” defined up front: quality, latency, cost — and how to measure each.",
          result:
            "Criteria were set before implementation: the right document at the top of retrieval (Recall@k), an answer with a page-level citation, first token within seconds. Every criterion has a measurement in the tables below.",
          status: "done",
        },
        {
          title: "2. Retrieval evaluated on a golden set",
          check:
            "Is there a test set of questions with known sources and retrieval metrics, rather than eyeballing.",
          result:
            "24 golden questions (RU/EN) over the demo corpus. Recall@1/3/5 and MRR are computed by scripts/evaluate.py — the index is rebuilt from scratch on every run, so the numbers are reproducible with one command.",
          status: "done",
        },
        {
          title: "3. Decisions driven by measurements",
          check:
            "Is every architectural decision backed by a comparison of alternatives.",
          result:
            "Hybrid BM25+RRF was chosen because it lifts Recall@1 from 50% to 92% on the bilingual corpus. The cross-encoder reranker was tested and rejected: it hurts on this corpus (Recall@1 42%) and costs ~3 seconds.",
          status: "done",
        },
        {
          title: "4. Model choice driven by data",
          check:
            "Models compared on your own pipeline: quality, latency, price.",
          result:
            "Five providers switch in the UI (Z.ai GLM, OpenAI, Anthropic, Ollama, offline demo). TTFT measured: GLM-5.3-flash — 2.5–3 s, GLM-5.3 — 2.6 s, a local Llama 3.2 3B on CPU — 1.2–3.6 s, GLM-4.5-flash — 25–50 s. Even the free cloud model loses to a local 3B on latency.",
          status: "done",
        },
        {
          title: "5. Agent with an observable loop",
          check:
            "Are tool steps visible, are errors handled, are decisions logged.",
          result:
            "A custom tools loop on FastAPI, no frameworks: list documents → search → refine. Each step arrives in the UI as a separate event, and a step failure does not kill the stream (SSE error event).",
          status: "done",
        },
        {
          title: "6. Prompts as components",
          check:
            "Prompts separated from logic, changes verified against a test set.",
          result:
            "The system prompt is assembled separately from context, output contracts are fixed (JSON for conversation titles, JSON judge scores). The judge script supports model A/B (--answer-model / --judge-model). A prompt regression harness is on the roadmap.",
          status: "done",
        },
        {
          title: "7. Observability and feedback",
          check:
            "For every request you can see what happened: sources, model, errors, user rating.",
          result:
            "An SSE protocol with explicit done/error events and a 180 s provider timeout. 👍/👎 is stored in the DB. 32 analytics events are instrumented for Yandex Metrika and GA4.",
          status: "done",
        },
        {
          title: "8. Engineering discipline",
          check:
            "Tests, CI, reproducibility — the system is verified automatically.",
          result:
            "25 pytest tests (parsers, chunking, language, API), CI on GitHub Actions, an isolated eval store — measurements never touch the live base.",
          status: "done",
        },
      ],
      metricsTitle: "Measurements",
      tables: [
        {
          title: "Retrieval quality — 24 golden questions (RU + EN)",
          columns: ["Configuration", "Recall@1", "Recall@3", "MRR@5", "Search"],
          rows: [
            { cells: ["Vector search", "50.0%", "95.8%", "0.733", "11 ms"] },
            {
              cells: [
                "Hybrid BM25 + RRF — default",
                "91.7%",
                "100%",
                "0.958",
                "18 ms",
              ],
              highlight: true,
            },
            {
              cells: ["Hybrid + reranker", "41.7%", "100%", "0.694", "~2.9 s"],
            },
          ],
          footnote:
            "Local run Aug 28, 2026, CPU, paraphrase-multilingual-MiniLM embeddings. The index is rebuilt from scratch on every run — the numbers are reproducible.",
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
            "TTFT = time to first token. GLM-4.5-flash (the free generation) yields a 25–50 s TTFT on the same pipeline — hence it is not recommended.",
        },
        {
          title: "Answer quality — LLM-as-judge, 24 questions",
          columns: ["Evaluation axis", "Average score"],
          rows: [
            { cells: ["Faithfulness — no hallucinations", "5.0 / 5"] },
            { cells: ["Relevance — answers the question", "5.0 / 5"] },
            { cells: ["Citations — citations are correct", "5.0 / 5"] },
          ],
          footnote:
            "Answers and judge — glm-4.5-flash, hybrid retrieval. Answers scored ≤3: 0 of 24.",
        },
      ],
      findingsTitle: "What the measurements showed",
      findings: [
        "Language “twins” are the main trap of multilingual corpora. Embeddings align RU and EN, so a Russian question surfaces the English document (Recall@1 50%). Lexical BM25 signal in the fusion is not optional but a necessity (+41.7 pp to Recall@1).",
        "A reranker is not a free upgrade. The cross-encoder scores semantic relevance, and a “twin” is just as semantically relevant — Recall@1 drops to 42%, plus ~3 seconds of latency. Tested — and rejected with data.",
        "The model generation defines latency more than any tuning. GLM-4.5-flash with thinking disabled answers in 25–50 s, GLM-5.3-flash on the same pipeline — ~3 s. And a local Llama 3.2 3B on CPU answers in 2–5 s for free — faster than the free cloud model. The price of “free” — spikes up to 8–15 s under load and less polished answers. The small model drops citations more often.",
        "Anti-hallucination was probed with an out-of-corpus question — the model declines and points to the context contents instead of inventing a fact.",
        "The “trim the context, get a faster first token” hypotheses were tested and rejected — top_k 5→4 and chunk 800→400 leave Recall unchanged, yet TTFT stays ~2.5 s. Demo-corpus pages are shorter than 400 tokens, so there is nothing to trim. The latency is the provider's floor. The pipeline adds ~20 ms (<1%).",
        "Automated answer-quality checks: the LLM-as-judge scored 24/24 answers — 5.0 on every axis (no hallucinations, citations correct). A strict evaluation needs a judge from another family.",
      ],
      conclusionLabel: "The takeaway",
      conclusionSteps: [
        "Hypothesis",
        "Golden set",
        "Measurement",
        "Data-driven decision",
        "Operation",
      ],
      conclusion:
        "This is not just “a chatbot with an LLM” — every stage of the loop on this page is backed by a number.\nThe eight-principle checklist is a working methodology. RAG Chat was reviewed with it.",
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
      "A multi-agent analytics platform: an auto-router sends each question to the right agent — Oleg (Text-to-SQL, agent loop with tool calling) or Ksyusha (RAG with vector search).;Users watch agents work step-by-step in real time (SSE execution trace) with self-correction: if SQL fails, the agent rewrites the query itself.;Data sources: PostgreSQL, ClickHouse, uploaded CSV/Excel/PDF/Word with auto-schema and cross-file JOINs, plus a virtual 'All uploads' source.;Every figure is computed by a deterministic Python layer — the LLM only writes prose. Ksyusha's search is a hybrid of BM25 + vector embeddings (fastembed, 50+ languages).;161 automated tests; deployed on Hugging Face Spaces.",
    features: [
      "Agent Loop (ReAct): Oleg picks his own tools — database_query, calculate, analyze, chart, finish",
      "Auto-routers: agent (data/docs) and data source chosen from the question's meaning",
      "Multi-source: PostgreSQL, ClickHouse, CSV/Excel (SQL + RAG pipeline), 'All uploads' with JOINs",
      "SSE execution trace: agents' step-by-step work in real time",
      "Self-correction: the agent sees a failed SQL and rewrites it (2 retries)",
      "Deterministic analytics: trends, top-N, z-score anomalies computed in Python, not by the LLM",
      "RAG v2: upload PDF/Word/Excel/TXT, hybrid BM25 + vector search (fastembed), clickable [1] citations, document viewer",
      "Parameterized scenarios: period, grouping, metric — one template, endless reuse",
      "Feedback analytics panel: 👍/👎 breakdown per agent with filters",
      "Transparent statuses: ok / demo / partial / error on every answer",
    ],
    aiEngineering: {
      sectionTitle: "An AI engineer's view: agency and reliability",
      intro:
        "A breakdown in the same 'AI engineer's view' format: not a feature list, but an engineering loop — from question routing and trust in numbers to SQL failures and testing. The project's key question: how to make an LLM work with databases in a way the answer can be trusted.",
      useCasesTitle: "What the project is for",
      useCasesListTitle: "Scenarios where this already works",
      useCasesIntro:
        "The platform solves a typical pain: data lives in databases and Excel files, and getting a number requires an analyst. A natural-language question becomes SQL, a chart and an export — with a verifiable methodology.",
      useCases: [
        {
          title: "Self-service analytics for business",
          detail:
            "A manager asks 'revenue by region for 90 days' and gets a table with a chart in seconds — no analyst ticket, no queue.",
        },
        {
          title: "Root-cause analysis of metric drops",
          detail:
            "'Why did revenue drop in July?' — the agent compares periods, computes the change, finds contributing factors via an agent loop and shows the analysis step by step.",
        },
        {
          title: "Analyzing uploaded Excel exports",
          detail:
            "Drag a data file into the window and ask questions about it: Oleg builds SQL over the auto-generated schema, Ksyusha searches the content, cross-file JOINs work out of the box.",
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
            { label: "Agent router", note: "data → Oleg, docs → Ksyusha", accent: true },
            { label: "Source router", note: "question → the right DB (LLM + heuristic)", accent: true },
            { label: "Manual override", note: "checkboxes and the source selector" },
          ],
        },
        {
          title: "Oleg — SQL agent",
          nodes: [
            { label: "Agent Loop (ReAct)", note: "prompt-based tool calling, up to 6 steps" },
            { label: "Tools", note: "database_query · calculate · analyze · chart · finish" },
            { label: "Self-correction", note: "SQL error → rewrite (2 attempts)" },
            { label: "Insights (Python)", note: "trends · top-N · z-score anomalies" },
          ],
        },
        {
          title: "Ksyusha — RAG",
          nodes: [
            { label: "Hybrid BM25 + vector", note: "fastembed, 50+ languages" },
            { label: "Russian stemming", note: "IDF weighting, fallback chunks" },
            { label: "Citations [1] + viewer", note: "PDF page N · DOCX · XLSX table" },
          ],
        },
        {
          title: "Data sources",
          nodes: [
            { label: "RideGo (SQLite)", note: "built-in demo domain, ~21k rides" },
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
            { label: "pytest", note: "161 tests, isolated temp DBs" },
          ],
        },
      ],
      diagramNote:
        "Top to bottom: a question → dual routing (agent + source) → step-by-step execution with trace → an answer with citations and a chart. LLM providers are interchangeable; the demo mode runs without keys on deterministic scripts.",
      principlesTitle: "AI engineer's checklist",
      principles: [
        {
          title: "1. Success metrics before code",
          check:
            "Is 'works' defined: SQL accuracy, search quality, failure behavior.",
          result:
            "Criteria: SQL either executes or the agent honestly reports the failure (no silent data substitution); figures in the answer match the table; search finds a document by synonyms. Each criterion is covered by tests or a feature.",
          status: "done",
        },
        {
          title: "2. The LLM doesn't compute — code does",
          check:
            "Do the numbers come from model hallucinations or from deterministic computation.",
          result:
            "All metrics (sums, percentages, trends, z-score anomalies) are computed by a Python analytics layer. The LLM receives ready-made highlights and only writes prose — it physically cannot invent a number; the prompt forbids it outright.",
          status: "done",
        },
        {
          title: "3. SQL failures are part of the contract",
          check:
            "What happens when generated SQL fails to execute.",
          result:
            "Three-level handling: guard errors (forbidden statements) go straight to the user; runtime errors trigger self-correction — the error is fed to the LLM which rewrites the query (up to 2 attempts); if that fails, an honest error status. Progress shows as separate trace steps.",
          status: "done",
        },
        {
          title: "4. Routing instead of one 'universal' prompt",
          check:
            "How the system decides which agent and which data answer.",
          result:
            "Two routers: agent (data/docs) and source (which DB). Each is an LLM classifier with a deterministic heuristic fallback. The decision shows in the trace: '→ Oleg (data)', '→ RideGo (demo)'. Manual override via selectors and checkboxes.",
          status: "done",
        },
        {
          title: "5. Hybrid search instead of a single method",
          check:
            "Does search find documents by synonyms, typos and other languages.",
          result:
            "Hybrid BM25-IDF (exact terms) + fastembed vector embeddings (semantics, 50+ languages), weighted 0.4/0.6. Verified: an English question finds a Russian document; 'expenses' finds 'затраты'. Russian stemming for BM25, fallback chunks for vague questions.",
          status: "done",
        },
        {
          title: "6. Mode transparency for the user",
          check:
            "Is it clear whether an answer is real or a stub, and what happened inside.",
          result:
            "Every answer carries a status: ok / demo / partial (self-corrected) / error. The SSE trace shows steps in real time. Source passwords stay server-side and are never returned to the UI. Demo answers are honestly labeled.",
          status: "done",
        },
        {
          title: "7. Multi-source without moving data",
          check:
            "Can the agent work with several databases and files at once.",
          result:
            "The virtual 'All uploads' source: Oleg sees the schema of every uploaded table and builds JOINs across files without copying data. The source router picks the table from the question. CSV/Excel feed both pipelines: an SQL table plus text chunks.",
          status: "done",
        },
        {
          title: "8. Engineering discipline",
          check:
            "Tests, isolation, reproducibility — the system is verified automatically.",
          result:
            "161 pytest tests: agent loop (with a fake provider), self-correction, SQL guard (timeouts, forbidden statements), analytics, every source type, 'messy' Excel parsers. Tests run on isolated temp DBs — production data is never touched.",
          status: "done",
        },
      ],
      metricsTitle: "Measurements",
      tables: [
        {
          title: "Test coverage — 161 pytest tests",
          columns: ["Component", "Tests", "What is verified"],
          rows: [
            { cells: ["Agent Loop (ReAct)", "22", "tool calling, self-correction, step limit, fallback"] },
            { cells: ["SQL guard", "18", "DML bans, multi-statement, timeouts, row limit"] },
            { cells: ["Analytics layer", "16", "trends, z-score threshold, top-N, RU/EN highlights"] },
            { cells: ["Sources (CSV/Excel/PG/CH)", "27", "parsers, introspection, name dedup, password masking"] },
            { cells: ["Routers (agent + source)", "26", "heuristic, LLM fallback, honest errors"] },
            { cells: ["Ksyusha RAG + app.db", "20", "steps, sources, citations, feedback stats"] },
            { cells: ["Parameterized scenarios", "10", "substitution, defaults, migration"] },
            { cells: ["Other (app_db, export)", "22", "CRUD, feedback, DB isolation"] },
          ],
          footnote:
            "Tests run on isolated temp SQLite databases with fake providers — no API keys required, production data untouched. Full run ~50 s.",
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
      ],
      findingsTitle: "What the measurements and operation showed",
      findings: [
        "LLMs are unreliable at arithmetic — an architectural problem, not a prompt problem. Early versions computed percentages 'in their head': plausible invented figures appeared in demos. The fix is a deterministic Python layer: the LLM receives ready-made highlights and physically cannot insert a number absent from the data.",
        "Silent fallbacks destroy trust. An early version quietly substituted a stub on SQL failure — the user saw plausible but wrong figures. After refactoring: the error is visible, self-correction shows its attempts, and demo mode is honestly labeled with a badge.",
        "'Dirty' Excel files are the norm, not the exception. A real user file failed on three things at once: a merged title row instead of a header, blank header cells, duplicate column names. The parser had to learn to locate the header row (by fill ratio) and resolve duplicates (to_8 → to_8_2).",
        "Keyword search without stemming is useless for Russian. 'Регламенту' didn't match 'регламент', 'масла' didn't match 'масло'. A crude stemmer (45+ endings) restored search; fastembed vector search added semantics — an English question finds a Russian document.",
        "Routing saves trust, not steps. A single 'universal' prompt blurred the agent's role; two specialized agents plus an auto-router give better answer quality, and the decision is visible in the trace — the user understands why the answer looks the way it does.",
      ],
      gapsTitle: "Honest gaps",
      gaps: [
        "No golden-set evaluation of SQL quality: correctness is covered by fixed-case tests, not a labeled set of questions with reference queries.",
        "The vector index is rebuilt on every search — larger corpora will need a persistent embedding store (ChromaDB / Qdrant).",
        "Uploaded documents are processed synchronously — large PDFs will hit the timeout; background ingestion with statuses is needed.",
        "No authentication or multi-tenancy — real production would require users, private sources and data isolation.",
      ],
      conclusionLabel: "Main takeaway",
      conclusionSteps: [
        "Routing",
        "Tool calling",
        "Self-correction",
        "Deterministic figures",
        "Transparency",
      ],
      conclusion:
        "This is not a 'chat bot over SQL' — the agency here is verified by tests, and trust in the numbers is built architecturally: the LLM writes prose but performs no computation.\nThe system is honest about failures: it shows its repair attempts instead of substituting the result.",
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
