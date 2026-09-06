import { ContactsPageProps } from "src/common/types/lang";

export const contactsPage: ContactsPageProps = {
  hero: {
    title: "Let's build something useful with AI",
    role: "AI / LLM Engineer",
    text: "Проектирую и разрабатываю production-ready AI-системы, которые работают с данными, документами и инструментами.",
    chips: "RAG · AI Agents · Text-to-SQL · AI Data · Evaluation",
    subtitle:
      "От AI-архитектуры и прототипа до измерения качества, интеграции и production.",
  },
  helpTitle: "What can I help with?",
  help: [
    {
      title: "AI Agents & Automation",
      text: "AI-агенты с ReAct, Tool Calling, self-correction и многошаговым выполнением задач.",
    },
    {
      title: "RAG & Enterprise Knowledge",
      text: "Поиск по документам и корпоративным знаниям: Hybrid Search, BM25 + Vector Search, RRF, embeddings и citations.",
    },
    {
      title: "AI Data & Text-to-SQL",
      text: "Анализ данных на естественном языке:",
      pipeline: ["Natural Language", "SQL", "Database", "Analytics", "Answer"],
    },
    {
      title: "Evaluation & AI Quality",
      text: "Golden Sets, Recall@K, LLM-as-a-Judge, regression testing и измерение качества AI-систем.",
    },
    {
      title: "AI Integration & Production",
      text: "Интеграция LLM и AI-логики с backend, базами данных, API, frontend и инфраструктурой.",
    },
    {
      title: "Optimization & Reliability",
      text: "Оптимизация latency, token budget, стоимости, retrieval quality, error handling и observability.",
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
      "Расскажите, какой процесс вы хотите автоматизировать, с какими данными или системами должна работать AI-система и какой результат должен получить пользователь.",
      "Я помогу определить подход — RAG, AI Agent, Text-to-SQL, LLM integration или комбинация этих технологий — и предложу возможную архитектуру решения.",
    ],
  },
  contactTitle: "Свяжитесь со мной",
  intro:
    "Свяжитесь со мной удобным способом — отвечу и обсудим задачу. Можно написать в мессенджер, на почту или заполнить форму ниже.",
  profilesTitle: "Профили",
};
