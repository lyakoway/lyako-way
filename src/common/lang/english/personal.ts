import { PersonalProps } from "src/common/types/lang";

export const personal: PersonalProps = {
  title: "AI Engineer",
  titleText: "More about me",
  text1: `AI Engineer with 7+ years of software engineering experience.

  Previously specialized in frontend development with React and Next.js.`,
  // Пустая строка внутри текста = разрыв абзаца при выводе.
  text2: `I build production-ready AI applications with Python and FastAPI.

  My frontend background lets me deliver complete end-to-end products — with
  a strong focus on usability, scalability, and real-world impact.`,
  text3: `Passionate about applying AI to solve practical business problems
  and continuously learning new technologies.`,
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
};
