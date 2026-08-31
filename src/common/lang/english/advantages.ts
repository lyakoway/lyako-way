import { AdvantagesProps } from "src/common/types/lang";

// Иконки — ключи из ADVANTAGE_ICONS (src/common/lib/iconRegistry): словарь
// сериализуется в Redux/__NEXT_DATA__, React-элементы в JSON не переживают.

export const advantagesText = "What I do";

export const propsAdvantages: AdvantagesProps[] = [
  {
    id: "1",
    title: "AI agents & orchestration",
    label:
      "I design AI agents for real business scenarios: workflow, function / tool calling, multi-agent orchestration, error handling and recovery.",
    value: "Agents",
    icon: "agent",
  },
  {
    id: "2",
    title: "RAG & knowledge",
    label:
      "I build RAG systems: connecting knowledge bases and vector search so the model answers accurately and from your data — not out of thin air.",
    value: "Rag",
    icon: "rag",
  },
  {
    id: "3",
    title: "Prompt engineering & quality",
    label:
      "I develop and iteratively improve prompts, build evaluation sets and test solutions for accuracy, stability and edge cases.",
    value: "Quality",
    icon: "quality",
  },
  {
    id: "4",
    title: "LLM integration into your product",
    label:
      "I embed large language models into existing products via API: a reliable Python / FastAPI backend with safe and predictable behavior.",
    value: "Integration",
    icon: "integration",
  },
  {
    id: "5",
    title: "End-to-end development",
    label:
      "I build the whole thing — from the UI (React / Next) to backend and infrastructure (Docker, Kubernetes, CI/CD). My Senior Frontend background helps ship the product end to end.",
    value: "EndToEnd",
    icon: "endToEnd",
  },
  {
    id: "6",
    title: "Optimization & support",
    label:
      "I optimize latency and token budget, monitor answer quality in production and quickly iterate as load and requirements grow.",
    value: "Optimization",
    icon: "optimization",
  },
];
