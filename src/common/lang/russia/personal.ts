import { PersonalProps } from "src/common/types/lang";

export const personal: PersonalProps = {
  title: "AI-инженер",
  titleText: "Подробнее обо мне",
  text1: `AI-инженер с 7+ годами опыта в разработке ПО.

  Ранее специализировался на фронтенд-разработке на React и Next.js.`,
  // Пустая строка внутри текста = разрыв абзаца при выводе.
  text2: `Создаю production-ready AI-приложения на Python и FastAPI.

  Опыт во фронтенде позволяет разрабатывать законченные end-to-end продукты —
  с упором на удобство, масштабируемость и реальную пользу для бизнеса.`,
  text3: `Увлечён применением AI для решения практических бизнес-задач и
  постоянно осваиваю новые технологии.`,
  stackTitle: "Работаю с",
  stack: [
    "Python",
    "TypeScript / JavaScript",
    "FastAPI",
    "LLM",
    "RAG",
    "AI-агенты",
    "LangGraph",
    "AI API",
  ],
};
