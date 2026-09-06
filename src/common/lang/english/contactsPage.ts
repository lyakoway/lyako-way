import { ContactsPageProps } from "src/common/types/lang";

export const contactsPage: ContactsPageProps = {
  hero: {
    title: "Let's build something useful with AI",
    role: "AI / LLM Engineer",
    text: "I design and build production-ready AI systems that work with data, documents and tools.",
    chips: "RAG · AI Agents · Text-to-SQL · AI Data · Evaluation",
    subtitle:
      "From AI architecture and prototype to quality measurement, integration and production.",
  },
  helpTitle: "What can I help with?",
  help: [
    {
      title: "AI Agents & Automation",
      text: "AI agents with ReAct, Tool Calling, self-correction and multi-step task execution.",
    },
    {
      title: "RAG & Enterprise Knowledge",
      text: "Search over documents and corporate knowledge: Hybrid Search, BM25 + Vector Search, RRF, embeddings and citations.",
    },
    {
      title: "AI Data & Text-to-SQL",
      text: "Natural-language data analysis:",
      pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
    },
    {
      title: "Evaluation & AI Quality",
      text: "Golden Sets, Recall@K, LLM-as-a-Judge, regression testing and measuring AI system quality.",
    },
    {
      title: "AI Integration & Production",
      text: "Integrating LLMs and AI logic with backend, databases, APIs, frontend and infrastructure.",
    },
    {
      title: "Optimization & Reliability",
      text: "Optimizing latency, token budget, cost, retrieval quality, error handling and observability.",
    },
  ],
  practiceTitle: "AI Engineering in practice",
  stats: [
    {
      value: "92%",
      label: "Recall@1",
      note: "RAG Chat · golden set · 24 questions",
    },
    {
      value: "5.0 / 5",
      label: "LLM-as-a-Judge",
      note: "Faithfulness · Relevance · Citations",
    },
    {
      value: "161",
      label: "automated tests",
      note: "AI Data Pilot · Agents · SQL Guard · Analytics",
    },
    {
      value: "2h → 2min",
      label: "analytical result preparation",
      note: "AI Data Pilot",
    },
  ],
  discuss: {
    title: "Let's discuss your task",
    texts: [
      "Tell me which process you want to automate, which data or systems the AI should work with, and what result the user should get.",
      "I will help determine the approach — RAG, AI Agent, Text-to-SQL, LLM integration or a combination of these technologies — and propose a possible solution architecture.",
    ],
  },
  contactTitle: "Get in touch",
  intro:
    "Get in touch in any convenient way — I'll reply and we'll discuss your task. Message me on a messenger, by email, or fill in the form below.",
  profilesTitle: "Profiles",
};
