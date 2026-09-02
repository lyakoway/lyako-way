import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Experience",
  skillsTitle: "Key skills",
  educationTitle: "Education",
  demoTitle: "Demo",
  resultTitle: "Key results",
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
          text: "Upload PDF, Word or Excel and ask questions about the content, answers come with links to the source pages.\nRAG pipeline: document ingestion → chunking → embeddings → relevant-context retrieval → LLM answer generation → source citation.",
        },
        {
          title: "AI Data Pilot",
          text: "A multi-agent analytics platform with two AI agents: Oleg is a data analyst who turns natural-language questions into SQL, runs multi-step analysis and builds charted reports; Ksyusha is a RAG agent that answers questions over internal technical documentation.",
        },
      ],
      groups: [
        {
          title: "Core tasks",
          items: [
            "Designed and configured agent systems for business scenarios: workflows, function / tool calling, error handling and failure recovery.",
            "Built AI agents for content generation and development-process automation",
            "Researched and adopted multi-agent orchestration approaches, keeping up with current industry practices",
            "Developed and iteratively improved prompt scenarios, testing them for accuracy, stability and edge cases.",
            "Built evaluation sets for regression checks of answer quality.",
            "Optimized LLM context handling: compression, prioritization, token-budget management.",
            "Helped build the platform end-to-end: backend (Python, FastAPI), frontend (React / Next), infrastructure (Docker, Kubernetes, CI/CD).",
            "Wrote helper scripts and utilities in Python / Bash, maintained API documentation, worked with open-source projects.",
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
            "Company knowledge base: answers to questions about HR policies, regulations and instructions in seconds instead of digging through folders.",
            "Customer support on documentation: a customer asks in their own words and gets an answer with a link to the manual section — fewer routine tickets.",
            "Legal and financial documents: a clause or a figure in contracts and reports is found in seconds, not a separate investigation.",
          ],
        },
        {
          title: "AI Data Pilot",
          items: [
            "The product is finished and used across the company.",
            "Cuts an analyst's time from 2 hours to 2 minutes — a saved query, e.g. “sales by region per month”, runs as a one-click scenario.",
            "Agent loop (ReAct) with self-correction — the agent detects a failed SQL query and rewrites it on its own.",
            "SSE execution trace — agents work step by step in real time.",
            "Deterministic analytics — trends, top-N and anomalies are computed by a Python layer, not the LLM.",
          ],
        },
      ],
      stack: {
        title: "Stack",
        items: [
          "Python",
          "FastAPI",
          "LangChain",
          "LLM API",
          "RAG",
          "React / Next",
          "Docker",
          "Kubernetes",
          "CI/CD",
        ],
      },
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
