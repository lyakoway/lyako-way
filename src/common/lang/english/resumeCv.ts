import { ResumeCvProps } from "src/common/types/lang";

export const resumeCv: ResumeCvProps = {
  experienceTitle: "Experience",
  skillsTitle: "Key skills",
  educationTitle: "Education",
  resultsTitle: "Outcome",
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
        "“MTS Profile” — a module for storing and visualizing customer data with access management across ecosystem products.\n“Ecosystem widgets” — an embeddable navigation and personalization module for b2c/b2b products.",
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
      projects: [
        {
          id: "1",
          portfolioId: "rag-chat",
          // Свой лид: в резюме разбиваем на два абзаца (в портфолио «\n»
          // отделяет уже не абзац, а карточку описания).
          lead: "An AI assistant with Retrieval-Augmented Generation.\nUpload PDF, Word or Excel and ask questions about the content, answers come with links to the source pages.",
          // Результат = практическое применение: тот же подход в стройке.
          resultsLead:
            "Practical application — an AI assistant for construction documentation.\nYou ask a question about the documents (cost estimates, SNiP/GOST standards, project documentation in PDF/Excel/Word), and the assistant answers with references to the sources, respecting access rights.",
          resultsNote:
            "A real construction project has hundreds of documents in different formats, scattered across mailboxes and drives — and making things up is not an option: a mistake in a concrete grade or in a standard costs money and safety.",
          results: [
            "Finds the answer in specific documents and shows the source. The wording can be checked against the original",
            "Looking up a clause in estimates and standards instead of digging through dozens of files in mailboxes and drives",
            "A single entry point to a site’s documentation: SNiP/GOST, cost estimates and working drawings in one query",
            "Access control: contractors and subcontractors only see their own documents",
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
