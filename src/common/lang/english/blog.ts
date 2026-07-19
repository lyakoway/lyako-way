import { BlogProps, PortfolioListBlogProps } from "src/common/types/lang";

export const blog: BlogProps = {
  title: "Blog",
  buttonText: "Open blog",
  blogTitle: "Notes on AI engineering: LLM, RAG, agents and production",
  blogText:
    "Short, practical notes on how I build AI applications: working with large language models, RAG, agents, quality evaluation and shipping to production.",
  blogDataTime: "2026",
  portfolioNameList: "Blog",
  portfolioTextTitle: "Welcome to the blog!",
  portfolioText:
    "Practice and approaches from my work as an AI engineer — no fluff, to the point.",
  blogTitleTag: "Tags",
  all: "All",
  filter: "Notes filter",
  readMore: "Read",
  readTimeUnit: "min read",
};

const ICON_META = { icon: "", widthIcon: "200px", heightIcon: "200px" };

export const propsPortfolioListBlog: PortfolioListBlogProps[] = [
  {
    id: "rag-prostymi-slovami",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "rag-prostymi-slovami",
    portfolioNameList: "RAG in plain words",
    portfolioDataTime: "12.01.2026",
    technologies: ["RAG", "LLM"],
    textBlogHeader: "How to make a model answer from your data",
    portfolioText:
      "Retrieval-Augmented Generation is a way to give the model access to your documents so answers are accurate and cite their sources.",
    body: [
      "A large language model knows a lot, but it doesn't know your internal documents and often makes facts up. RAG fixes that: before answering, we find the relevant fragments in a knowledge base and pass them to the model as context.",
      "The pipeline is simple. Documents are split into chunks, each chunk is turned into a vector (embedding) and stored in a vector database. For a user's query we search for the closest fragments by meaning and add them to the prompt together with the question.",
      "What matters in practice: reasonable chunk size and overlap, embedding quality, and — always — citing sources so the answer can be verified. A good quality metric matters more here than the choice of a specific model.",
      "RAG shines where answers must rely on concrete data: support, an internal knowledge base, working with contracts and reports. It's cheaper and safer than fine-tuning a model for every task.",
    ],
  },
  {
    id: "ai-agents",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "ai-agents",
    portfolioNameList: "AI agents: how they work",
    portfolioDataTime: "26.01.2026",
    technologies: ["Agents", "LLM"],
    textBlogHeader: "Workflow, function calling and orchestration",
    portfolioText:
      "An agent is a model that doesn't just reply with text — it calls tools and takes steps to reach a goal.",
    body: [
      "A plain model answers with a single message. An agent is a loop: the model decides which tool to call, gets the result, evaluates it and takes the next step — until the task is solved.",
      "The key mechanism is function / tool calling: we describe the available functions to the model (search, an API request, running code), and it returns which one to call and with what arguments. Our code then performs the call and returns the result back into the conversation.",
      "The difficulty is not the model itself but the orchestration: error handling and retries, limiting the number of steps, managing context and the token budget, and — for complex scenarios — several specialized agents talking to each other.",
      "My main advice: start with a simple workflow and add autonomy only where it's truly needed. The more freedom an agent has, the more important observability and tests become.",
    ],
  },
  {
    id: "prompt-engineering",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "prompt-engineering",
    portfolioNameList: "Prompt engineering in practice",
    portfolioDataTime: "09.02.2026",
    technologies: ["Prompts", "Quality"],
    textBlogHeader: "How to get stable answers from a model",
    portfolioText:
      "A prompt is the interface to the model. Small wording changes shift the result a lot, so prompts are worth designing and testing.",
    body: [
      "A good prompt sets the role, the context, the output format and the constraints. The clearer you state what you need and in what shape, the more stable and predictable the answer.",
      "Simple techniques work: show an example of the desired answer (few-shot), ask the model to reason step by step where logic is needed, and explicitly list what it must not do. For machine processing — ask for a strict format (e.g. JSON) and validate it.",
      "A prompt can't be written once. I treat it like code: keep versions, run it against a set of examples and watch for regressions. Without such a set, any improvement is guesswork.",
      "And remember edge cases: empty input, contradictory data, attempts to steer the model off task. Better to bake them into tests up front.",
    ],
  },
  {
    id: "llm-evaluation",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "llm-evaluation",
    portfolioNameList: "How to evaluate LLM quality",
    portfolioDataTime: "23.02.2026",
    technologies: ["Evaluation", "Quality"],
    textBlogHeader: "Metrics, example sets and regressions",
    portfolioText:
      "“Feels better” is not a metric. To improve an LLM app you need a reproducible way to measure answer quality.",
    body: [
      "The first step is to collect a set of examples (an eval-set): real queries and expected answers or correctness criteria. Even a small but honest set already gives you something to base decisions on.",
      "Next, choose how to score. Somewhere exact comparison and rules fit; somewhere similarity metrics; and for free-form answers people often use LLM-as-a-judge: another model rates the answer against given criteria.",
      "The main value is regression runs. Before every prompt or model change we run the eval-set and compare: did anything get worse. That's how improvements stop being accidental.",
      "Don't chase a single number. Accuracy, stability, latency and cost are all parts of quality, and the balance between them depends on the task.",
    ],
  },
  {
    id: "llm-in-product",
    ...ICON_META,
    hrefPortfolio: "",
    hrefNameList: "llm-in-product",
    portfolioNameList: "Shipping LLM into a product",
    portfolioDataTime: "09.03.2026",
    technologies: ["Integration", "Backend"],
    textBlogHeader: "From prototype to a reliable service",
    portfolioText:
      "A laptop prototype and a working service are different things. Here's what matters when shipping LLM features to production.",
    body: [
      "It's convenient to hide the LLM behind your own API: the client talks to your backend, and the backend talks to the model. This gives control over prompts, keys and logging, and lets you switch providers without rewriting the frontend.",
      "In production, things you ignore in a prototype matter: timeouts and retries, rate limiting, caching frequent answers, streaming for a responsive UI, and careful handling of provider errors.",
      "Cost and observability deserve their own attention. Count tokens and latency, log requests and responses (with privacy in mind), watch quality on real traffic. Without this it's hard to understand what's going on and what it costs.",
      "And finally: plan a fallback. The model may be unavailable or answer poorly — the product should degrade gracefully, not crash.",
    ],
  },
];
