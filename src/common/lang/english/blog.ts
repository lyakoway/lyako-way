import { BlogProps, PortfolioListBlogProps } from "src/common/types/lang";

export const blog: BlogProps = {
  title: "Blog",
  buttonText: "Open blog",
  blogTitle: "A few notes from shipping RAG and Text-to-SQL",
  blogText:
    "I write down the choices that actually stuck — not a course, not a recap of papers. If you want the full tables, the case studies are one click away.",
  blogDataTime: "2026",
  portfolioNameList: "Blog",
  portfolioTextTitle: "Welcome to the blog!",
  portfolioText:
    "Short notes from shipping AI at MTS — what I kept, what I dropped, and why.",
  blogTitleTag: "Tags",
  all: "All",
  filter: "Notes filter",
  readMore: "Read",
  readTimeUnit: "min read",
  searchPlaceholder: "Search in the article…",
  chips: "RAG · Agents · Evaluation · Production",
  caseLink: "Case study",
};

const ICON_META = { icon: "", widthIcon: "200px", heightIcon: "200px" };

export const propsPortfolioListBlog: PortfolioListBlogProps[] = [
  {
    id: "llm-in-product",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "llm-in-product",
    portfolioNameList: "A notebook demo is not a service yet",
    portfolioDataTime: "09.03.2026",
    technologies: ["Production"],
    textBlogHeader: "A demo on your laptop and a service at work are different jobs.",
    portfolioText:
      "The interface talks to my API, not to the vendor. You can see the steps, the errors and a thumbs-up. The default model is the one that measured well — not the one from a blog post.",
    related: [
      { label: "RAG Chat", href: "/portfolio/rag-chat" },
      { label: "AI Data Pilot", href: "/portfolio/ai-data-pilot" },
    ],
    body: [
      "I like to put the language model behind my own API. The screen talks to me, I talk to the vendor. Prompts, keys and logs live in one place — so I can switch GLM for OpenAI without touching the frontend.",
      "“It streams” is not enough. I want to see the steps, the errors, how long it took, and whether the person liked the answer. In the products I ship, that means a live trace, 👍/👎 saved in the database, and a clear status on every reply: all good, demo, partial, or error. If something fails, the user should see it — not a made-up result.",
      "The default model is a boring trade-off: quality, waiting time, cost. RAG Chat uses GLM-5.3-flash because the previous one, GLM-4.5-flash, took 25–50 seconds to start answering on the same pipeline. Data Pilot stays on GLM-4.6 because that is the model I evaluated SQL on. Faster and worse at SQL is not an upgrade.",
      "Real MTS traffic and production data stay under NDA. What you see on GitHub are personal projects of the same kind — not MTS source. There is also a demo mode without API keys, on scripts that always do the same thing. That split is part of shipping, not small print.",
    ],
  },
  {
    id: "llm-evaluation",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "llm-evaluation",
    portfolioNameList: "How I tell if it actually got better",
    portfolioDataTime: "23.02.2026",
    technologies: ["Evaluation"],
    textBlogHeader: "“Feels better” is a nice feeling. It is not a number I can defend.",
    portfolioText:
      "I decide what “good” means before I change the model. Then I run the same questions I did not use for tuning. Another model giving 5.0/5 is a hint, not a green light.",
    related: [
      { label: "RAG Chat", href: "/portfolio/rag-chat" },
      { label: "AI Data Pilot", href: "/portfolio/ai-data-pilot" },
    ],
    body: [
      "Before I swap a model, I write down what I care about: did it find the right place, how long did it take, what did it cost, did it stay up. Then I measure that on a held-out set — questions I did not use to tweak prompts or search. On the RAG Chat case, Recall@1, time-to-first-token and dollars per question are there because I measured them, not because they sound good.",
      "For document Q&A, the honest question is simple: did the right fragment land in the top results? For Text-to-SQL I do not celebrate an exact string match. I ask whether the numbers are the same once you ignore column aliases, row order and 1.0 vs 1.00. On the public Data Pilot pack that is about 85% with GLM-4.6. The 98% figure only means “the query ran”.",
      "Asking another model to grade the answer can help. I treat it as a second opinion. A perfect 5.0/5 from the same family of models is not why I would ship. I keep or drop a pipeline on the metric we agreed on first.",
      "If I cannot run it again tomorrow, it does not count. RAG Chat rebuilds the eval index from scratch every time — 63 tests and GitHub Actions. Data Pilot has 174 tests on throwaway databases and fake model providers. The LLM grading run is separate. I do that before I change a prompt or a model. The tables live on the cases.",
    ],
  },
  {
    id: "prompt-engineering",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "prompt-engineering",
    portfolioNameList: "A good prompt is not the product",
    portfolioDataTime: "09.02.2026",
    technologies: ["Evaluation"],
    textBlogHeader: "I treat prompts like code: save a version, then test it on questions I did not write it for.",
    portfolioText:
      "Role, format and an example help. They do not replace search, tools or a test set. “We improved the prompt” without numbers is just a story.",
    related: [
      { label: "RAG Chat", href: "/portfolio/rag-chat" },
      { label: "AI Data Pilot", href: "/portfolio/ai-data-pilot" },
    ],
    body: [
      "A prompt is how you talk to the model: who it is, what it knows, how it should answer, what it must not do. The clearer that is, the calmer the output. It is still only the interface — not the product.",
      "Showing an example and asking it to think step by step really does help — until you change the model. Then you need questions you did not tune on. I keep prompt versions and run them on a held-out set. Without that, “we improved the prompt” is the same move as swapping a model because it felt nicer.",
      "I also try not to hide routing inside a longer system prompt. In Data Pilot a small router picks who works: the Data Agent for SQL, the Knowledge Agent for documents. You can see that choice in the live trace. One giant prompt that pretends to do both is faster to write and slower to debug.",
      "If the user needs numbers, I do not ask the model to add them up. Trends, percentages and “top N” run in Python. Empty input and messy data belong in the test set — not in a Slack screenshot after launch.",
    ],
  },
  {
    id: "ai-agents",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "ai-agents",
    portfolioNameList: "Two specialists beat one clever prompt",
    portfolioDataTime: "26.01.2026",
    technologies: ["Agents"],
    textBlogHeader: "An agent is a loop with tools. The interesting part is what happens when a step fails.",
    portfolioText:
      "If SQL breaks, we rewrite it twice and then tell the truth. One agent does data, another does documents. Python does the counting.",
    related: [
      { label: "AI Data Pilot", href: "/portfolio/ai-data-pilot" },
      { label: "RAG Chat", href: "/portfolio/rag-chat" },
    ],
    body: [
      "A normal model answers once and stops. An agent keeps going: pick a tool, look at the result, decide the next step. That is how it reaches search, SQL or code — not by writing a longer paragraph.",
      "When SQL fails, I want that to be part of the design. In Data Pilot the query may only be a SELECT. If it breaks, the agent gets two tries to fix it. After that the user sees an honest error — never a quiet fake table. A refusal is better than a confident lie.",
      "Two narrow agents work better than one that claims to do everything. One handles SQL and analytics, the other handles documents. A router picks who and which data source. You can watch that choice in the live trace. It is less glamorous than a “god agent”, and much easier to live with.",
      "Python does the business math — trends, percentages, top-N, unusual spikes. The model writes the explanation. The document agent still searches with keywords and vectors together, with Russian stemming on the keyword side. How we compared search setups is on the RAG Chat case. The agent wiring and the ~85% SQL number are on AI Data Pilot.",
    ],
  },
  {
    id: "rag-prostymi-slovami",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "rag-prostymi-slovami",
    portfolioNameList: "RAG is more than a vector database",
    portfolioDataTime: "12.01.2026",
    technologies: ["RAG"],
    textBlogHeader: "Find the right snippet first, then let the model talk — and always show where it came from.",
    portfolioText:
      "Vectors alone missed the Russian/English twin of the same file. Mixing in keyword search lifted Recall@1 from 53% to 87%. A fancier reranker made it worse, so we dropped it.",
    related: [{ label: "RAG Chat", href: "/portfolio/rag-chat" }],
    body: [
      "A language model has never read your contracts. Asked anyway, it will invent. RAG is the simple idea: look up the relevant bits first, then let the model answer from those bits. One such pipeline can still power chat, an agent and a search box. The model behind it is easy to swap.",
      "Using only vectors looks modern — and still stumbles when the same document exists in Russian and English. The embeddings treat those twins as close, so the wrong language can win. On about 180 questions we kept aside (not used to tune prompts or search), vectors alone hit the right fragment first 53% of the time. Mixing in ordinary keyword search (BM25) with the vectors took that to 87%. The old-fashioned search is not a nice extra. It is how we stop the twin from winning.",
      "A reranker sounds like a free upgrade. In practice it scores “does this feel related?” — and a language twin feels related. We tried it and lost 45 percentage points of Recall@1, plus about three extra seconds. So we dropped it. Try it on the same held-out questions, then keep or throw away. A tutorial is not a test.",
      "I like to fix the numbers before I fall in love with a new model: did we find the right place, how long to the first token, what did it cost. GLM-5.3-flash is the default because GLM-4.5-flash took 25–50 seconds to start on the same pipeline. Each eval run rebuilds the index from scratch — 63 tests, GitHub Actions. And the answer still carries citations you can open. The tables are on the case study.",
    ],
  },
];
