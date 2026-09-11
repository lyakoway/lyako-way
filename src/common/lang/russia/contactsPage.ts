import { ContactsPageProps } from "src/common/types/lang";

export const contactsPage: ContactsPageProps = {
  hero: {
    title: "Открыт к удалёнке, релокации и прикладным AI-задачам",
    role: "AI / LLM Engineer",
    text: "Создаю production-ready AI-системы для работы с данными, документами и инструментами.",
    chips: "RAG · AI Agents · Text-to-SQL · Evaluation",
    subtitle:
      "От AI-архитектуры и прототипа до оценки качества, интеграции и production.",
  },
  helpTitle: "Чем могу помочь?",
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
      pipeline: [
        "Natural Language",
        "SQL",
        "Database",
        "Analytics",
        "Answer",
      ],
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
  practiceTitle: "AI-инжиниринг на практике",
  stats: [
    {
      value: "2ч → 2мин",
      label: "подготовка отчёта",
      note: "Прод МТС · ~15 аналитиков · ~80 сценариев/неделю",
    },
    {
      value: "87%",
      label: "Recall@1",
      note: "МТС RAG · ~2 000 документов · ~12 команд · ~200 вопросов/день",
    },
    {
      value: "~85%",
      label: "нормализованный SQL",
      note: "МТС Data Pilot · held-out · не exact-match",
    },
    {
      value: "174",
      label: "pytest + CI",
      note: "Data Pilot · Agents · SQL Guard · Analytics",
    },
  ],
  discuss: {
    title: "Обсудим вашу задачу",
    texts: [
      "Расскажите, какой процесс вы хотите автоматизировать, с какими данными или системами должна работать AI-система и какой результат должен получить пользователь.",
      "Я помогу определить подход — RAG, AI Agent, Text-to-SQL, LLM integration или комбинация этих технологий — и предложу возможную архитектуру решения.",
    ],
  },
  contactTitle: "Свяжитесь со мной",
  intro:
    "Напишите удобным способом — отвечу и обсудим задачу. Можно написать в мессенджер, на почту или заполнить форму ниже.",
  profilesTitle: "Профили",
};
