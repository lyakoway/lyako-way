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
};

const ICON_META = { icon: "", widthIcon: "285px", heightIcon: "500px" };

export const propsPortfolioList: PortfolioListProps[] = [
  {
    id: "rag-chat",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "RAG Chat — chat with your documents",
    portfolioDataTime: "2025",
    hrefNameList: "rag-chat",
    direction: "RAG & knowledge",
    technologies: ["Python", "FastAPI", "RAG", "ChromaDB", "React", "TypeScript"],
    github: "https://github.com/lyakoway/ai-RAG-chat",
    portfolioText:
      "An AI assistant with Retrieval-Augmented Generation: upload PDF, Word or Excel and ask questions about the content — answers come with citations to the source pages.\nBackend on FastAPI + ChromaDB (vector search) and embeddings; multiple LLM providers (OpenAI, Anthropic, Ollama). Frontend — React 19 + TypeScript (Vite).",
    screenshots: [
      "/static/portfolio/rag-chat-dark.png",
      "/static/portfolio/rag-chat-light.png",
    ],
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
