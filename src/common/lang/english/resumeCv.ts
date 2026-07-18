import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Experience",
  skillsTitle: "Key skills",
  educationTitle: "Education",
  pdfUrl: "/static/resume/resume-en.pdf",
  downloadLabel: "Download PDF",
  viewLabel: "View",

  experience: [
    {
      id: "1",
      role: "AI Engineer",
      company: "MTC Web Services (MWS AI)",
      period: "Apr 2024 — present",
      meta: "Moscow · Software development, AI solutions",
      groups: [
        {
          title: "Agents & orchestration",
          items: [
            "Designed and configured agent systems for business scenarios: workflow, function / tool calling, error handling and failure recovery.",
            "Built AI agents for content generation and development-process automation.",
            "Researched and applied multi-agent orchestration approaches, tracking current industry practices.",
          ],
        },
        {
          title: "Prompting & quality",
          items: [
            "Developed and iteratively improved prompt scenarios, testing them for accuracy, stability and edge cases.",
            "Built evaluation sets for regression testing of answer quality.",
            "Optimized work with LLM context: compression, prioritization, token-budget management.",
          ],
        },
        {
          title: "Development, infrastructure & R&D",
          items: [
            "Helped build the platform end-to-end: backend (Python, FastAPI), frontend (React / Next), infrastructure (Docker, Kubernetes, CI/CD).",
            "Created skills and helper scripts in Python / Bash, maintained API docs, worked with open-source projects.",
            "Explored new approaches, validated hypotheses and shipped best practices into the product.",
          ],
        },
      ],
    },
    {
      id: "2",
      role: "Senior Frontend Developer",
      company: "MTC Web Services",
      period: "Sep 2019 — Apr 2024",
      meta: "Moscow · “MTS Profile” and “Ecosystem widgets”",
      summary:
        "“MTS Profile” — a module for storing and visualizing customer data with access management across ecosystem products. “Ecosystem widgets” — an embeddable navigation and personalization module for b2c/b2b products.",
      groups: [
        {
          title: "Responsibilities",
          items: [
            "Enhanced existing functionality and built new features; analyzed requirements and prepared technical solutions.",
            "Designed internal architecture and integration scenarios; did refactoring and code review.",
            "Wrote reusable components (Storybook), unit and integration tests, maintained documentation.",
            "Handled incidents on 3rd-line support, mentored and onboarded colleagues.",
          ],
        },
        {
          title: "Results",
          items: [
            "Implemented profile ownership transfer and a linked-accounts management model.",
            "Implemented user data verification via Gosuslugi with biometrics.",
            "Implemented access recovery, sign-in methods and their history.",
            "Implemented payments and bank-card management.",
            "Integrated ecosystem widgets into all of the company’s digital products.",
          ],
        },
      ],
    },
  ],

  skills: [
    {
      id: "1",
      category: "Languages",
      items: ["Python", "TypeScript / JavaScript", "Bash"],
    },
    {
      id: "2",
      category: "LLM & agents",
      items: [
        "LLM API",
        "LangChain",
        "prompt engineering",
        "function / tool calling",
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
      items: ["React", "Next.js", "Redux Toolkit", "Svelte", "Storybook", "Jest"],
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
      title: "MSc in Mathematics",
      period: "MGSU",
      text: "Applied mathematics.",
    },
  ],
};
