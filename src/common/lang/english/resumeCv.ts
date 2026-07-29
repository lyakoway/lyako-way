import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Experience",
  skillsTitle: "Key skills",
  educationTitle: "Education",
  downloadName: "Alexey-Mazurenko-en.pdf",
  downloadLabel: "Download PDF",
  viewLabel: "View",

  experience: [
    {
      id: "1",
      role: "Senior Frontend Developer",
      company: "MTC Web Services",
      period: "Apr 2020 — present",
      meta: "Moscow · “MTS Profile” and “Ecosystem widgets”",
      summary:
        "“MTS Profile” — a module for storing and visualizing customer data with access management across ecosystem products. “Ecosystem widgets” — an embeddable navigation and personalization module for b2c/b2b products.",
      groups: [
        {
          title: "Responsibilities",
          items: [
            "Enhancing existing functionality and building new features.",
            "Analyzing client requirements and preparing technical solutions.",
            "Designing internal architecture, including integration scenarios.",
            "Preparing documentation for the delivered functionality.",
            "Analyzing and fixing incidents as part of 3rd-line support.",
            "Refactoring existing code, running code reviews.",
            "Building in-house components with Storybook.",
            "Writing unit and integration tests.",
            "Mentoring and onboarding colleagues.",
          ],
        },
        {
          title: "Results",
          items: [
            "Delivered a profile ownership transfer model.",
            "Delivered user data verification via Gosuslugi with biometrics.",
            "Delivered access recovery, sign-in methods and their history in the profile.",
            "Delivered payments and bank-card management.",
            "Rolled out a linked-accounts management model.",
            "Integrated ecosystem widgets into all of the company’s digital products.",
          ],
        },
      ],
    },
    {
      id: "2",
      role: "AI Engineer",
      projectId: "rag-chat",
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
      items: [
        "React + Next",
        "Redux Toolkit",
        "Svelte",
        "Styled-Components",
        "Webpack",
        "Jest",
        "Node + Express",
        "Storybook",
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
