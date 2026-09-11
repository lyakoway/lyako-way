import { PortfolioListProps, PortfolioProps } from "src/common/types/lang";

export const portfolio: PortfolioProps = {
  title: "Недавние проекты",
  buttonText: "Открыть портфолио",
  portfolioNameList: "Портфолио",
  portfolioTextTitle: "Добро пожаловать в портфолио!",
  portfolioText:
    "В портфолио — production-ориентированные AI-системы, которые я проектировал и собирал end-to-end: RAG, AI-агенты, Text-to-SQL и evaluation.\nПубличные демо — самостоятельные личные проекты того же класса задач, что внутренние системы МТС, не исходный код МТС.\nУ каждого кейса — задача, архитектура, стек и измеримые результаты.",
  all: "Все",
  filter: "Фильтр проектов",
  wip: "В разработке",
  likeLabel: "Оценить",
  hero: {
    role: "AI / LLM engineering",
    title:
      "Два продукта в production: RAG по документам и мультиагентная аналитика. Пайплайн выбираю по held-out оценке, а не по популярной статье.",
    chips: "RAG · AI Agents · Text-to-SQL · Evaluation",
  },
  intro:
    "Публичные GitHub-демо — самостоятельные личные проекты того же класса задач, не исходный код МТС. Продовые данные под NDA.",
  numbersTitle: "AI-инжиниринг в цифрах",
  stats: [
    {
      value: "87%",
      label: "Recall@1",
      note: "RAG Chat · held-out · ~180 запросов",
    },
    {
      value: "~85%",
      label: "нормализованный SQL",
      note: "AI Data Pilot · held-out точность результата",
    },
    {
      value: "174",
      label: "автотестов + LLM evaluation",
      note: "AI Data Pilot · Agents · SQL Guard · Analytics · Golden Set",
    },
    {
      value: "2h → 2min",
      label: "подготовка аналитики",
      note: "AI Data Pilot",
    },
  ],
  featuredTitle: "Проекты",
  caseLink: "Смотреть кейс",
  focusTitle: "Инженерный фокус",
  focus: [
    {
      title: "RAG & Retrieval",
      items:
        "Hybrid Search · BM25 · Vector Search · RRF · Embeddings · Citations",
    },
    {
      title: "Agentic Systems",
      items:
        "ReAct · Tool Calling · Multi-Agent · Self-Correction · Execution Trace",
    },
    {
      title: "AI Data",
      items: "Text-to-SQL · PostgreSQL · ClickHouse · Deterministic Analytics",
    },
    {
      title: "Evaluation",
      items: "Held-out Golden Sets · Recall@K · LLM-as-a-Judge · Regression Testing",
    },
  ],
  researchTitle: "Исследования и эксперименты",
};

const ICON_META = { icon: "", widthIcon: "285px", heightIcon: "500px" };

export const propsPortfolioList: PortfolioListProps[] = [
  {
    id: "rag-chat",
    ...ICON_META,
    hrefPortfolio: "https://lyakoway-rag-chat.hf.space",
    portfolioNameList: "RAG Chat",
    portfolioDataTime: "10.08.2026",
    hrefNameList: "rag-chat",
    likeable: true,
    thumbLight: "/static/portfolio/rag-chat-light.png",
    thumbDark: "/static/portfolio/rag-chat-dark.png",
    direction: "RAG и знания",
    cardDescription:
      "AI-система для поиска и работы с PDF, Word и Excel с ответами, привязанными к исходным источникам.",
    cardMetrics: ["Прод внутренний, МТС · на сайте тест", "87% Recall@1 · held-out"],
    tagline:
      "Чат по документам с цитатами. Внутренний прод в МТС. Эта страница — личное демо на публичном тестовом корпусе, не код МТС.",
    keyResultsTitle: "Масштаб и оценка",
    keyResultsColumns: 3,
    keyResults: [
      { value: "~2 000", label: "документов · МТС, production" },
      { value: "~12", label: "команд" },
      { value: "~200", label: "вопросов / день" },
      { value: "87%", label: "Recall@1 · held-out (~180)" },
      { value: "~20 тыс.", label: "чанков · МТС, production" },
      { value: "63", label: "pytest-тестов" },
    ],
    keyResultsNote:
      "Масштаб — прод МТС. Демо, латентность и judge на этой странице — публичный пак (6 файлов → 12 чанков), не код МТС и не продовые документы.",
    keyResultsLimitation:
      "Продовый корпус остаётся в МТС (NDA) и не публикуется.",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "AI-агенты",
      "ChromaDB",
      "fastembed",
      "SQLAlchemy",
      "SSE",
      "LLM API",
      "Ollama",
      "React",
      "TypeScript",
      "Vite",
    ],
    github: "https://github.com/lyakoway/ai-RAG-chat",
    portfolioText:
      "Чат по документам с тремя режимами рядом: классический RAG Chat, AI-агент и Векторный поиск — разница видна на одном и том же вопросе.\nРежим RAG: один поиск → ответ с цитатами.;Режим агента: свой цикл tools на FastAPI (список документов → поиск → уточнение) с лентой шагов в UI — без LangGraph.;Режим векторного поиска: семантический поиск fastembed по фрагментам без LLM — оценка релевантности и переход в документ с нужной страницы.\nЗагружаете PDF, Word или Excel и задаёте вопросы.;Ответы со ссылками на страницы-источники, кнопками 👍/👎 и follow-up подсказками в один клик.;Встроенный предпросмотр PDF, DOCX и Excel, скачивание из панели документов.;Мультиязычность: демо-пак RU/EN, файлы на любом языке — вопрос на своём, ответ на понятном.;Вопрос можно надиктовать голосом (Web Speech API) — в чате и в векторном поиске.;Демо-режим работает без ключей. GLM-5.3-flash — модель по умолчанию, OpenAI, Anthropic и локальный Ollama взаимозаменяемы.;Заголовки чатов формулирует LLM фоном, без задержки ответа.\nBackend — FastAPI, ChromaDB, fastembed, гибрид BM25 + RRF. Frontend — React 19 / TypeScript (Vite). 63 теста и CI. Живое демо на Hugging Face Spaces.",
    aiEngineering: {
      sectionTitle: "Инженерный подход",
      intro:
        "Сравниваю retrieval, модели и настройки пайплайна на held-out наборе — и оставляю или отклоняю. На этой странице три таких решения: гибрид против dense, реранкер, который проиграл, и модель по умолчанию из-за латентности — не из туториала.",
      useCasesTitle: "Для чего нужен проект",
      useCasesListTitle: "Несколько сценариев, где это уже работает",
      useCasesIntro:
        "Знания заперты в PDF, Word и Excel, и люди тратят часы на их перебор. Живое демо и латентность на этой странице — публичный тестовый пак (6 файлов), не продовый корпус МТС.",
      useCases: [
        {
          title: "База знаний компании",
          detail:
            "HR-политики, регламенты и инструкции: «сколько дней отпуска», «как компенсируют интернет» — ответ за секунды вместо поиска по папкам. Ровно это показывает демо-пак приложения.",
        },
        {
          title: "Поддержка клиентов по документации",
          detail:
            "Инструкции, тарифы и FAQ продукта — клиент спрашивает своими словами и получает ответ со ссылкой на раздел руководства. Служба поддержки — меньше однотипных тикетов.",
        },
        {
          title: "Юридические и финансовые документы",
          detail:
            "Найти формулировку, срок или цифру в договорах и отчётах: цитата ведёт на точную страницу, проверка ответа занимает секунды, а не отдельное расследование.",
        },
      ],
      diagramTitle: "Схема проекта",
      diagram: [
        {
          title: "Фронтенд",
          nodes: [
            {
              label: "React 19 + Vite",
              note: "SSE-стриминг, тема и язык RU/EN",
            },
            {
              label: "Цитаты и предпросмотр",
              note: "PDF / DOCX / XLSX в модалке",
            },
            { label: "Фидбек 👍/👎", note: "пишется в БД + аналитика" },
            {
              label: "Follow-up и автозаголовки",
              note: "подсказки из выдачи, LLM-заголовок фоном",
            },
          ],
        },
        {
          title: "API — FastAPI",
          nodes: [
            {
              label: "POST /api/chat (SSE)",
              note: "RAG и агент-режимы",
              accent: true,
            },
            { label: "GET /api/search", note: "векторный поиск со score" },
            { label: "/api/documents", note: "загрузка файлов и демо-пак" },
          ],
        },
        {
          title: "RAG-ядро",
          nodes: [
            { label: "Парсеры", note: "PDF · DOCX · XLSX + страницы" },
            { label: "Чанкинг", note: "tiktoken, 800 / 120 токенов" },
            { label: "Эмбеддинги", note: "fastembed, мультиязычная MiniLM" },
            {
              label: "Гибрид BM25 + RRF",
              note: "реранкер проверен и отклонён",
              accent: true,
            },
          ],
        },
        {
          title: "Хранилища",
          nodes: [
            { label: "ChromaDB", note: "вектора и фрагменты" },
            { label: "SQLite", note: "диалоги, сообщения, фидбек" },
            { label: "Файлы", note: "загруженные документы" },
          ],
        },
        {
          title: "Провайдеры LLM",
          nodes: [
            {
              label: "Z.ai (GLM)",
              note: "5.3-flash по умолчанию · 5.2 / 4.5-flash",
              accent: true,
            },
            { label: "OpenAI · Anthropic", note: "по API-ключам" },
            { label: "Ollama · offline demo", note: "локально и без ключей" },
          ],
        },
        {
          title: "Эксплуатация",
          nodes: [
            { label: "Evaluation", note: "Recall@k, MRR + LLM-as-judge" },
            { label: "Аналитика", note: "фидбек и сессия в демо-UI" },
            { label: "pytest + CI", note: "63 теста, GitHub Actions" },
          ],
        },
      ],
      diagramNote:
        "Сверху вниз: вопрос пользователя → стриминговый ответ с цитатами. Один RAG-пайплайн обслуживает все три режима — чат, агента и векторный поиск. Провайдеры LLM взаимозаменяемы, офлайн-режим работает без ключей.",
      principlesTitle: "Чек-лист AI-инженера",
      principles: [
        {
          title: "01 — Metrics before code",
          check:
            "Определяю quality, latency, cost и reliability до смены модели.",
          result:
            "Recall@1, TTFT, $/вопрос и покрытие pytest — замерены на этой странице, не заявлены.",
        },
        {
          title: "02 — Evaluation before optimization",
          check: "Golden set → Recall@K → эксперимент → оставить или отклонить.",
          result:
            "Held-out ~180 запросов. Гибрид стал default. Реранкер отклонён (−45 п.п., +~3 с).",
        },
        {
          title: "03 — Data-driven architecture",
          check:
            "Сравниваю retrieval, модели и конфигурацию пайплайна на одном evaluation-наборе.",
          result:
            "GLM-5.3-flash — модель по умолчанию: GLM-4.5-flash на том же пайплайне даёт TTFT 25–50 с.",
        },
        {
          title: "04 — Observable AI systems",
          check:
            "Tool-вызовы, шаги, ошибки, фидбек и латентность должны быть видимыми.",
          result:
            "SSE done/error, лента шагов агента, 👍/👎 в БД, латентность в логах.",
        },
        {
          title: "05 — Reproducible quality",
          check:
            "Тесты, CI, изолированное eval-хранилище и контроль регрессий.",
          result:
            "Eval-индекс пересобирается с нуля при каждом запуске. 63 pytest + GitHub Actions.",
        },
      ],
      metricsTitle: "Замеры",
      tables: [
        {
          title: "Why hybrid search? — held-out ~180 запросов, эксперимент с поиском",
          columns: ["Конфигурация", "Recall@1", "Recall@3", "MRR@5", "Поиск"],
          rows: [
            { cells: ["Векторный поиск", "53,2%", "91,5%", "0,727", "11 мс"] },
            {
              cells: [
                "Гибрид BM25 + RRF — по умолчанию",
                "87,2%",
                "97,9%",
                "0,926",
                "17 мс",
              ],
              highlight: true,
            },
            {
              cells: ["Гибрид + реранкер", "41,7%", "100%", "0,694", "~2,9 с"],
            },
          ],
          footnote:
            "Decision: гибрид BM25 + RRF стал стратегией поиска по умолчанию — на двуязычном held-out наборе (~180 запросов) он дал лучшее измеренное соотношение качества поиска и латентности. CPU, эмбеддинг paraphrase-multilingual-MiniLM. Индекс собирается с нуля при каждом запуске — числа воспроизводимы. Строка реранкера проверена и отклонена (−45 п.п., +~3 с).",
        },
        {
          title: "Разбивка по категориям — held-out гибрид (по умолчанию)",
          columns: ["Категория", "Вопросов", "Recall@1", "Recall@3"],
          rows: [
            { cells: ["fact — прямой факт", "~60", "100%", "100%"] },
            { cells: ["numeric — цифры и сроки", "~60", "87%", "100%"] },
            {
              cells: [
                "paraphrase — перефраз без дословных ключей",
                "~35",
                "89%",
                "100%",
              ],
            },
            {
              cells: ["cross-lingual — смешанный язык", "~25", "—", "—"],
            },
          ],
          footnote:
            "Held-out гибридный поиск: общий Recall@1 87%. Смешанные языковые запросы — известный следующий шаг (словарь синонимов RU/EN и мультиязычный реранкер), не headline-метрика.",
        },
        {
          title: "Системные замеры — живой прогон API",
          columns: ["Сценарий", "Результат"],
          rows: [
            {
              cells: [
                "Индексация демо-пака: 6 файлов → 12 чанков",
                "0,7 с (≈59 мс/чанк)",
              ],
            },
            { cells: ["Векторный поиск через API, p50 по серверу", "18 мс"] },
            {
              cells: [
                "RAG-ответ, GLM-5.3-flash: первый токен / полностью",
                "2,5–3,0 с / 3,3–3,9 с",
              ],
            },
            {
              cells: [
                "RAG-ответ, GLM-5.3: первый токен / полностью",
                "2,6 с / 3,0 с",
              ],
            },
            {
              cells: [
                "RAG-ответ, Llama 3.2 3B локально (Ollama, CPU): первый токен / полностью",
                "1,2–3,6 с / 2,5–5,4 с",
              ],
            },
            {
              cells: [
                "Llama 3.2 3B: холодный старт (загрузка 2 ГБ модели в RAM)",
                "+13,7 с к первому токену",
              ],
            },
            {
              cells: ["Агент-режим: tool-шаги в UI + два вызова LLM", "9,2 с"],
            },
            { cells: ["Демо-режим без ключей (mock): первый токен", "87 мс"] },
          ],
          footnote:
            "Публичный тестовый корпус. Индексация: 6 файлов → 12 чанков. TTFT — время до первого токена. GLM-4.5-flash (бесплатное поколение) на том же пайплайне даёт TTFT 25–50 с — в рекомендациях её нет.",
        },
        {
          title: "Качество ответов — LLM-as-judge, held-out набор",
          columns: ["Ось оценки", "Средний балл"],
          rows: [
            { cells: ["Faithfulness — нет галлюцинаций", "5.0 / 5"] },
            { cells: ["Relevance — отвечает на вопрос", "5.0 / 5"] },
            { cells: ["Citations — цитаты корректны", "5.0 / 5"] },
          ],
          footnote:
            "Это LLM-оценка — вспомогательный сигнал на held-out наборе (Faithfulness, Relevance, Citations). Для строгой валидации нужен независимый судья другой модели или ручная оценка. Ответы и судья — glm-4.5-flash, поиск гибридный.",
        },
        {
          title: "Что ушло в прод — решения по циклу",
          columns: ["Решение", "Замер", "Почему так"],
          rows: [
            {
              cells: [
                "Поиск",
                "Гибрид BM25 + RRF · +34 п.п. Recall@1 против dense",
                "Оставили: dense-only дал 53% на RU/EN-двойниках, лексический fusion обязателен",
              ],
              highlight: true,
            },
            {
              cells: [
                "Реранкер",
                "−45 п.п. Recall@1 · +~3 с",
                "Отклонили: cross-encoder поднимает языковых двойников и добавляет латентность",
              ],
              highlight: true,
            },
            {
              cells: [
                "Модель по умолчанию",
                "GLM-5.3-flash · TTFT ~2,5–3,0 с",
                "Взяли: GLM-4.5-flash на том же пайплайне — 25–50 с, сам пайплайн добавляет <1%",
              ],
              highlight: true,
            },
            {
              cells: [
                "Held-out поиск",
                "Recall@1 87,2% · Recall@3 97,9%",
                "Вспомогательное число на публичном паке — не качество прода МТС. Смешанный язык ещё открыт",
              ],
            },
            {
              cells: [
                "Judge ответов",
                "5.0/5 по трём осям, та же семья моделей",
                "Только поддержка. Для строгой оценки нужен независимый судья или человек",
              ],
            },
            {
              cells: [
                "Надёжность",
                "63 pytest-теста + CI",
                "Критические пути (ошибки, пустые документы, циклы агента) — под автотестами",
              ],
            },
          ],
          footnote:
            "Подсвеченные строки — решения оставить / отклонить. Абсолютные скоры ниже — вспомогательные замеры, не claim.",
        },
      ],
      production: {
        title: "Production и надёжность",
        items: [
          {
            title: "МТС, production",
            text: "Масштаб — в цифрах выше. Латентность и judge на этой странице — с публичного тестового пака, не с NDA-корпуса.",
          },
          {
            title: "Streaming",
            text: "SSE с явными событиями done / error.",
          },
          {
            title: "Failure handling",
            text: "Таймаут провайдера, ошибки tool-шагов и аккуратное восстановление.",
          },
          {
            title: "Observability",
            text: "Модель, источники, латентность, ошибки и фидбек пользователя.",
          },
          {
            title: "Testing",
            text: "63 pytest-теста: RAG pipeline · Hybrid Retrieval · Document Parsing · Citations · API/SSE · Error Handling. CI на GitHub Actions.",
          },
          {
            title: "Reproducibility",
            text: "Evaluation-индекс пересобирается с нуля при каждом запуске.",
          },
        ],
      },
      pipelinesTitle: "Пайплайны",
      pipelines: [
        {
          title: "RAG pipeline",
          steps: [
            "Documents",
            "Parsing",
            "Chunking",
            "Embeddings",
            "BM25 + Vector Search",
            "RRF",
            "Context",
            "LLM",
            "Grounded Answer",
            "Citations",
          ],
        },
        {
          title: "Agent pipeline",
          steps: [
            "User",
            "Agent Loop",
            "List Documents",
            "Search",
            "Refine",
            "Answer",
          ],
        },
      ],
      findingsTitle: "Что показали замеры",
      findings: [
        "Языковые «двойники» — главная ловушка мультиязычных корпусов. Эмбеддинги выравнивают RU и EN, и русский вопрос может поднять английский документ (vector-only Recall@1 53%). Лексический BM25 в fusion — не опция, а необходимость (+34 п.п. к Recall@1).",
        "Реранкер — не бесплатное улучшение. Cross-encoder оценивает семантическую релевантность, а «двойник» семантически так же релевантен — Recall@1 упал на −45 п.п. и добавил ~3 секунды. Проверили и обоснованно отказались.",
        "Поколение модели определяет латентность сильнее настроек пайплайна. GLM-4.5-flash с отключённым thinking отвечает 25–50 с, GLM-5.3-flash на том же пайплайне — ~3 с. Локальная Llama 3.2 3B на CPU отвечает за 2–5 с бесплатно, со всплесками под нагрузкой и более слабыми цитатами.",
        "Анти-галлюцинация проверена вопросом вне базы — модель отвечает отказом со ссылкой на контекст, а не выдумывает факт.",
        "Гипотеза «срезать контекст — быстрее первый токен» проверена и отклонена: top_k 5→4 и чанк 800→400 Recall не меняют, TTFT остаётся ~2,5 с. Латентность — пол провайдера, пайплайн добавляет ~20 мс (<1%).",
        "LLM-as-judge оценил held-out ответы на 5.0 по всем осям. Это вспомогательный сигнал — для строгой оценки нужен судья другой семьи.",
        "Критические пути под тестами: битые файлы, пустые документы, вопрос без контекста, зацикливание агента — 63 pytest на изолированных хранилищах и fake-провайдерах.",
      ],
      conclusionLabel: "Главный вывод",
      conclusionSteps: [
        "Гибрид оставляем",
        "Реранкер нет",
        "По умолчанию GLM-5.3-flash",
      ],
      conclusion:
        "Результат — три решения по замерам, не чат-бот.\nГибрид оставляем (+34 п.п. против dense на RU/EN-двойниках). Реранкер отклоняем (−45 п.п., +~3 с). GLM-5.3-flash по умолчанию (предыдущее поколение — 25–50 с TTFT).\n87% Recall@1 и 5.0/5 — вспомогательные скоры на публичном паке, не качество прода МТС.",
      footnote:
        "Все числа воспроизводимы: backend/scripts/evaluate.py в репозитории проекта.",
    },
    screenshots: [
      "/static/portfolio/rag-chat-dark.png",
      "/static/portfolio/rag-chat-light.png",
      "/static/portfolio/rag-chat-dark-pr-en.png",
      "/static/portfolio/agent-chat-light-pr-ru.png",
    ],
  },
  {
    id: "ai-data-pilot",
    ...ICON_META,
    hrefPortfolio: "https://lyakoway-ai-data-pilot.hf.space/",
    portfolioNameList: "AI Data Pilot",
    portfolioDataTime: "10.08.2026",
    hrefNameList: "ai-data-pilot",
    likeable: true,
    direction: "AI-агенты",
    cardDescription:
      "Мультиагентная аналитическая платформа, превращающая вопрос на естественном языке в SQL, анализ данных и готовый аналитический результат.",
    cardMetrics: [
      "Прод внутренний, МТС · на сайте тест",
      "~85% нормализованный SQL · 2ч → 2мин",
    ],
    tagline:
      "Аналитика на естественном языке: SQL, график и объяснение. Внутренний прод в МТС. Эта страница — личное демо на тестовых данных, не код МТС.",
    keyResultsTitle: "Масштаб и валидация",
    keyResults: [
      { value: "~15", label: "аналитиков · МТС, внутренний прод" },
      { value: "~80", label: "сценариев / неделю" },
      { value: "~85%", label: "нормализованный SQL · held-out" },
      { value: "2ч→2мин", label: "отчётность · МТС" },
      { value: "174", label: "pytest-тестов" },
      { value: "Python", label: "считает · LLM пишет текст" },
    ],
    keyResultsNote:
      "Масштаб — прод МТС. Демо и SQL-оценка на этой странице — тестовый набор (RideGo ~21 тыс. поездок), не код МТС и не продовые базы.",
    keyResultsLimitation:
      "Продовые базы остаются в МТС (NDA). Headline-качество SQL — held-out нормализованная точность результата (~85%), не strict exact-match.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Text-to-SQL",
      "Agent Loop (ReAct)",
      "Tool Calling",
      "RAG",
      "BM25 + Vector Search",
      "fastembed",
      "PostgreSQL",
      "ClickHouse",
      "SSE",
      "React 19",
      "TypeScript",
      "pytest",
    ],
    github: "https://github.com/lyakoway/ai-data-pilot",
    portfolioText:
      "Пользователь задаёт вопрос на естественном языке → система выбирает агента и источник данных → генерирует и выполняет SQL → при необходимости исправляет запрос → выполняет детерминированный анализ → возвращает таблицу, график и объяснение результата.\nПользователь видит работу агентов пошагово в реальном времени (execution trace через SSE) с self-correction: если SQL упал, агент сам переписывает запрос.\nИсточники данных: PostgreSQL, ClickHouse, загружаемые CSV/Excel/PDF/Word/TXT/MD с автосхемой и JOIN между файлами, виртуальный источник «Все загрузки».\nКаждая цифра в ответах считается детерминированным Python-слоем — LLM только оформляет текст. Поиск Ксюши — гибрид BM25 + векторные эмбеддинги (fastembed, 50+ языков).",
    descCaptions: ["Прозрачность", "Источники данных", "Доверие к цифрам"],
    deployCaption: "Валидация и деплой",
    deployLine:
      "174 теста + held-out SQL-оценка (~85% нормализованной точности, ~98% значит, что запрос выполнился). Self-correction и латентность замерены · Hugging Face Spaces.",
    features: [
      "Мультиагентная маршрутизация",
      "Text-to-SQL + Tool Calling",
      "Самокорректирующийся Agent Loop",
      "Детерминированная аналитика",
      "Гибридный RAG",
      "LLM Evaluation (Golden Set)",
    ],
    productFeaturesTitle: "Продуктовые возможности",
    featuresCaption: "Ключевые AI-возможности",
    productFeatures: [
      "Единая загрузка файла: SQL-таблица + поиск (обоим агентам)",
      "Execution trace через SSE",
      "Просмотрщик документов (PDF · DOCX · XLSX)",
      "Фидбек 👍/👎 и аналитика",
      "Параметризованные сценарии",
      "Статусы ok / demo / partial / error",
    ],
    aiEngineering: {
      sectionTitle: "Взгляд AI-инженера: агентность и надёжность",
      intro:
        "Сравниваю роутинг, починку SQL и то, кто считает цифры — и оставляю или отклоняю. На этой странице три таких решения: считает Python, упавший SQL не прячется, два узких агента лучше одного универсального промпта.",
      useCasesTitle: "Для чего нужен проект",
      useCasesListTitle: "Сценарии, где это уже работает",
      useCasesIntro:
        "Данные лежат в базах и Excel, а цифра обычно требует заявки аналитику. SQL-качество и латентность на этой странице — с тестового набора, не с продовых баз МТС.",
      useCases: [
        {
          title: "Self-service аналитика для бизнеса",
          detail:
            "Менеджер спрашивает «выручка по регионам за 90 дней» и получает таблицу с графиком — без постановки задачи аналитику и очереди. End-to-end латентность — десятки секунд (план и ответ LLM), не загрузка страницы.",
        },
        {
          title: "Разбор причин падения метрик",
          detail:
            "«Почему выручка упала в июле?» — агент сам сравнивает периоды, считает изменение, находит факторы через agent loop и показывает ход анализа шаг за шагом.",
        },
        {
          title: "Анализ загруженных Excel-выгрузок",
          detail:
            "Файл с данными перетаскивается в окно — и по нему можно задавать вопросы: Олег строит SQL по автосхеме, Ксюша ищет по содержимому, JOIN между файлами работает из коробки.",
        },
        {
          title: "Единая точка входа к разнородным БД",
          detail:
            "PostgreSQL для транзакций и ClickHouse для аналитики на миллиардах строк — под одним интерфейсом, с автоматической подстройкой SQL-диалекта под источник.",
        },
      ],
      diagramTitle: "Схема проекта",
      diagram: [
        {
          title: "Фронтенд",
          nodes: [
            {
              label: "React 19 + Vite",
              note: "SSE-стриминг, RU/EN, dark/light",
            },
            { label: "Execution trace", note: "пошаговая работа агентов live" },
            { label: "Просмотрщик документов", note: "PDF · DOCX · XLSX" },
          ],
        },
        {
          title: "Роутинг (два уровня)",
          nodes: [
            {
              label: "Агент-роутер",
              note: "данные → Олег, документация → Ксюша",
              accent: true,
            },
            {
              label: "Source-роутер",
              note: "вопрос → нужная БД (LLM + эвристика)",
              accent: true,
            },
            {
              label: "Ручной override",
              note: "чекбоксы и селектор источников",
            },
          ],
        },
        {
          title: "Олег — SQL-агент",
          nodes: [
            {
              label: "Agent Loop (ReAct)",
              note: "prompt-based tool calling, до 6 шагов",
            },
            {
              label: "Tools",
              note: "database_query · calculate · analyze · chart · finish",
            },
            {
              label: "Self-correction",
              note: "ошибка SQL → переписать (2 попытки)",
              accent: true,
            },
            {
              label: "Insights (Python)",
              note: "тренды · топ-N · z-score · LLM не считает",
              accent: true,
            },
          ],
        },
        {
          title: "Ксюша — RAG",
          nodes: [
            { label: "Гибрид BM25 + vector", note: "fastembed, 50+ языков" },
            {
              label: "Русский стемминг",
              note: "IDF-взвешивание, fallback-чанки",
            },
            {
              label: "Цитаты [1] + viewer",
              note: "PDF стр. N · DOCX · XLSX таблица",
            },
          ],
        },
        {
          title: "Источники данных",
          nodes: [
            {
              label: "RideGo (SQLite)",
              note: "только тестовый домен, ~21k поездок — не продовые данные МТС",
            },
            {
              label: "PostgreSQL · ClickHouse",
              note: "интроспекция схемы, диалект-промпты",
            },
            {
              label: "CSV / Excel",
              note: "SQL-таблица + текстовые чанки из одной загрузки",
            },
            {
              label: "«Все загрузки»",
              note: "виртуальный источник, JOIN между файлами",
            },
          ],
        },
        {
          title: "Эксплуатация",
          nodes: [
            {
              label: "SQL guard",
              note: "SELECT-only, row limit, таймауты 8/30 с",
            },
            { label: "Feedback", note: "👍/👎 в БД + витрина аналитики" },
            {
              label: "pytest + evaluation",
              note: "174 теста + golden set, temp-БД",
            },
          ],
        },
      ],
      diagramNote:
        "Сверху вниз: вопрос → двойная маршрутизация (агент + источник) → пошаговое выполнение с trace → ответ с цитатами и графиком. Провайдеры LLM взаимозаменяемы, demo-режим работает без ключей на детерминированных скриптах.",
      pipelinesTitle: "Два специализированных агента",
      routerLine: "Авто-роутер → Олег / Ксюша",
      pipelines: [
        {
          title: "Олег — Data Agent",
          steps: [
            "Natural Language",
            "Text-to-SQL",
            "Tool Calling",
            "Database",
            "Analytics",
            "Chart / Answer",
          ],
        },
        {
          title: "Ксюша — Knowledge Agent",
          steps: [
            "Question",
            "BM25 + Vector Search",
            "Relevant chunks",
            "LLM",
            "Citations",
          ],
        },
      ],
      principlesTitle: "Чек-лист AI-инженера",
      principles: [
        {
          title: "01 — Deterministic numbers",
          check: "LLM пишет текст, числа считает Python.",
          result:
            "Тренды, проценты, топ-N и z-score — в Python-слое. LLM не считает бизнес-цифры.",
        },
        {
          title: "02 — SQL failure is part of the contract",
          check: "Ошибка SQL → self-correction → повтор → честная ошибка.",
          result:
            "SQL Guard (SELECT-only) + две переписки. После упавшего запроса нет тихой подмены.",
        },
        {
          title: "03 — Specialized agents over universal prompts",
          check: "Роутинг выбирает нужного агента и источник данных.",
          result:
            "Олег — SQL, Ксюша — документы. Двухуровневый роутер, решение видно в trace.",
        },
        {
          title: "04 — Hybrid retrieval",
          check:
            "BM25 + векторный поиск закрывают точные термины, семантику и мультиязычные запросы.",
          result:
            "Только Ксюша. Русский стемминг в BM25. Ablation поиска — в кейсе RAG Chat.",
        },
        {
          title: "05 — Transparent execution",
          check:
            "SSE показывает маршрутизацию, вызовы инструментов, повторы и финальный статус.",
          result: "ok / demo / partial / error в каждом ответе. Без тихого fallback.",
        },
        {
          title: "06 — Reproducible verification",
          check:
            "174 теста, изолированные БД и fake-провайдеры. LLM evaluation на golden set — отдельным прогоном.",
          result:
            "Headline SQL-качества — ~85% нормализованной точности на GLM-4.6, не ~98% execution.",
        },
      ],
      metricsTitle: "Автоматическая верификация",
      tables: [
        {
          title: "Покрытие тестами — 174 pytest-теста",
          stacked: true,
          columns: ["Компонент", "Тестов", "Проверяет"],
          rows: [
            {
              cells: [
                "Agent Loop (ReAct)",
                "22",
                "tool-calling, self-correction, лимит шагов, fallback",
              ],
            },
            {
              cells: [
                "SQL guard",
                "18",
                "запреты DML, multi-statement, таймауты, row limit",
              ],
            },
            {
              cells: [
                "Аналитический слой",
                "16",
                "тренды, z-score порог, топ-N, RU/EN highlights",
              ],
            },
            {
              cells: [
                "Источники (CSV/Excel/PG/CH)",
                "27",
                "парсеры, интроспекция, дедуп имён, маскировка паролей",
              ],
            },
            {
              cells: [
                "Роутеры (агент + источник)",
                "26",
                "эвристика, LLM-fallback, честные ошибки",
              ],
            },
            {
              cells: [
                "RAG Ксюши + app.db",
                "20",
                "steps, sources, цитаты, feedback stats",
              ],
            },
            {
              cells: [
                "Параметризованные сценарии",
                "10",
                "подстановка, defaults, миграция",
              ],
            },
            {
              cells: [
                "Прочее (app_db, export)",
                "22",
                "CRUD, feedback, изоляция БД",
              ],
            },
            {
              cells: [
                "Retrieval quality + analytics contracts",
                "13",
                "Recall@1/5, MRR (BM25/Vector/Hybrid), числовые golden-контракты",
              ],
            },
          ],
          footnote:
            "Тесты выполняются на изолированных temp-SQLite базах и fake-провайдерах — не требуют API-ключей и не задевают боевые данные. Время прогона ~50 с.",
        },
        {
          title: "Качество SQL — held-out оценка, живой прогон GLM-4.6",
          columns: ["Метрика", "Результат"],
          rows: [
            {
              cells: [
                "Нормализованная точность результата — те же числа после канонизации",
                "~85%",
              ],
              highlight: true,
            },
            {
              cells: [
                "SQL Execution Accuracy — сгенерированный SQL выполнился (это не правильность)",
                "~98%",
              ],
            },
          ],
          footnote:
            "Held-out SQL-оценка на GLM-4.6 на публичном тестовом паке, не на продовых базах МТС. Headline-качество — нормализованная точность результата (~85%): те же числа без учёта алиасов колонок, порядка строк и формата чисел. Strict exact-match в заголовок не ставится. ~98% значит только, что запрос выполнился.",
        },
        {
          title: "Замеры латентности — медианы 3 прогонов по моделям",
          columns: [
            "Модель",
            "План (LLM)",
            "Выполнение (БД)",
            "Ответ (LLM)",
            "Итого",
            "SQL ok",
          ],
          rows: [
            {
              cells: [
                "GLM-4.6 (Z.ai) — по умолчанию",
                "13.5 с",
                "12 мс",
                "16.3 с",
                "~29.8 с",
                "2/3",
              ],
              highlight: true,
            },
            {
              cells: [
                "GLM-5.2 (Z.ai)",
                "7.0 с",
                "6 мс",
                "9.4 с",
                "~16.4 с",
                "3/3",
              ],
            },
            {
              cells: [
                "GLM-5.3-flash (Z.ai)",
                "7.0 с",
                "8 мс",
                "4.8 с",
                "~11.9 с",
                "2/3",
              ],
            },
            {
              cells: [
                "GLM-5.3 (Z.ai)",
                "13.8 с",
                "11 мс",
                "5.1 с",
                "~19.0 с",
                "1/3",
              ],
            },
          ],
          footnote:
            "Медианы 3 прогонов одного вопроса через полный цикл (план → БД → ответ). Латентность внешнего API варьируется. GLM-4.6 остаётся default: на ней снята SQL-оценка ~85%. GLM-5.2 на этом семпле быстрее. GLM-5.3-flash ещё быстрее, но SQL слабее (2/3 и 1/3). Скрипт: python scripts/latency_benchmark.py.",
        },
        {
          title: "Системные ограничения — защита от деградации",
          columns: ["Механизм", "Значение"],
          rows: [
            { cells: ["Таймаут SQL: локальные источники", "8 с"] },
            {
              cells: ["Таймаут SQL: PostgreSQL / ClickHouse (внешние)", "30 с"],
            },
            { cells: ["Row limit на запрос", "500 строк"] },
            { cells: ["Self-correction rounds", "2 (итого до 3 попыток)"] },
            { cells: ["Agent Loop: максимум шагов", "6"] },
            { cells: ["Лимит загрузки файла", "25 МБ · 50 000 строк"] },
          ],
          footnote:
            "Таймауты реализованы через ThreadPoolExecutor с future.result(timeout) — тяжёлый запрос не блокирует event loop. Внешние БД получают увеличенный бюджет: кросс-сетевое соединение с handshake занимает секунды.",
        },
        {
          title: "Что ушло в прод — решения по циклу",
          stacked: true,
          columns: ["Решение", "Замер", "Почему так"],
          rows: [
            {
              cells: [
                "Кто считает",
                "Python analytics layer",
                "Оставили: LLM пишет текст, тренды, проценты и z-score не из модели",
              ],
              highlight: true,
            },
            {
              cells: [
                "Упавший SQL",
                "Guard + 2 переписки + честная ошибка",
                "Оставили: упавший запрос никогда не подменяется выдуманным результатом",
              ],
              highlight: true,
            },
            {
              cells: [
                "Агенты",
                "Олег + Ксюша + двухуровневый роутер",
                "Оставили: один универсальный промпт размывал роль, решение роутера видно в trace",
              ],
              highlight: true,
            },
            {
              cells: [
                "Модель по умолчанию",
                "GLM-4.6",
                "SQL-оценка (~85%) снята на GLM-4.6. GLM-5.2 здесь быстрее, GLM-5.3-flash слабее в SQL",
              ],
            },
            {
              cells: [
                "Качество SQL",
                "~85% нормализованная · ~98% выполнилось",
                "Поддержка, публичный тестовый пак — не прод МТС. Execution ≠ правильность",
              ],
            },
            {
              cells: [
                "Латентность",
                "Полный цикл ~16–30 с в зависимости от модели",
                "Пол провайдера на плане и ответе. Шаги стримятся — это не дашборд за долю секунды",
              ],
            },
            {
              cells: [
                "Надёжность",
                "174 pytest-теста + CI",
                "Изолированные temp-БД, fake-провайдеры, парсеры грязного Excel под тестами",
              ],
            },
          ],
          footnote:
            "Подсвеченные строки — решения оставить / отклонить. Абсолютные скоры ниже — вспомогательные замеры на тестовом паке, не claim.",
        },
      ],
      calloutsTitle: "Ключевые инженерные решения",
      calloutsIntro:
        "Три решения, на которых держится доверие: цифры считает Python, упавший SQL не прячется, два узких агента лучше одного универсального промпта.",
      deterministic: {
        title: "Deterministic analytics",
        lead: "LLM никогда не считает бизнес-цифры.",
        steps: [
          "Database",
          "Raw data",
          "Python analytics layer",
          "Trends / percentages / top-N / z-score",
          "Structured highlights",
          "LLM",
          "Natural-language explanation",
        ],
        note: "Это выносит численные вычисления за пределы LLM и делает аналитические цифры воспроизводимыми.",
      },
      selfCorrection: {
        title: "SQL self-correction",
        steps: [
          "Generate SQL",
          "SQL Guard",
          "Execute",
          "ERROR",
          "LLM receives error",
          "Rewrite SQL",
          "Retry ×2",
          "Result / Honest Error",
        ],
        note: "Система никогда не подменяет результат выдуманным после ошибки SQL.",
      },
      evaluation: {
        title: "Оценка качества AI",
        currentStateTitle:
          "SQL / Agent evaluation — качество AI измеряется отдельно от software-тестов",
        current: [
          "Held-out SQL-оценка (естественный язык → SQL) на публичном тестовом паке",
          "Нормализованная точность результата — те же числа после канонизации (~85%, headline)",
          "Execution Accuracy — выполнился ли сгенерированный SQL (~98%, это не правильность)",
          "Self-Correction Rate — как часто упавший SQL успешно исправлен",
          "Латентность полного цикла — десятки секунд, шаги стримятся",
        ],
      },
      findingsTitle: "Инженерные находки",
      findings: [
        "LLM ненадёжна в арифметике. Ранние версии выдавали правдоподобные, но неверные проценты. Решение: все численные расчёты перенесены в детерминированный Python-слой.",
        "Молчаливые fallback-и разрушают доверие. Ответ без пометки режима выглядел как настоящий. Решение: явные статусы ok / demo / partial / error в каждом ответе.",
        "«Грязные» Excel-файлы — норма. Реальная выгрузка падала на merged-заголовке и дубликатах колонок. Решение: устойчивые парсеры, обученные находить строку заголовка, + тесты на «грязных» файлах.",
        "Поиск без стемминга бесполезен для русского. «Затраты» не находили «расходы». Решение: русский стемминг для BM25 + векторный канал для семантики и мультиязычности.",
        "Роутинг экономит доверие, а не шаги. Один «универсальный» промпт размывал роль агента. Решение: два специализированных агента + двухуровневый роутер с видимым решением в trace.",
        "Выбор модели — компромисс качества и латентности, не default из блога. В таблице латентности (3 прогона, один вопрос) GLM-5.2 ~16 с против GLM-4.6 ~30 с. GLM-5.3-flash ещё быстрее, но SQL слабее. GLM-4.6 остаётся default, потому что held-out оценка ~85% снята на ней.",
      ],

      production: {
        title: "Продакшн и надёжность",
        items: [
          {
            title: "МТС, production",
            text: "Масштаб — в цифрах выше. SQL-оценка и латентность на этой странице — с тестового пака RideGo, не с продовых баз.",
          },
          {
            title: "SQL Guard",
            text: "SELECT-only, лимит строк, таймауты 8/30 с.",
          },
          {
            title: "Self-correction",
            text: "Агент видит ошибку SQL и переписывает запрос (2 попытки), затем — честный статус error.",
          },
          {
            title: "Execution trace",
            text: "Пошаговая работа агентов в реальном времени через SSE.",
          },
          {
            title: "Testing",
            text: "174 pytest-теста на изолированных temp-БД + held-out SQL-оценка (scripts/evaluate.py).",
          },
          {
            title: "Status transparency",
            text: "Статусы ok / demo / partial / error в каждом ответе.",
          },
        ],
      },
      conclusionLabel: "Главный вывод",
      conclusionSteps: [
        "Считает Python",
        "Упавший SQL — контракт",
        "Два агента, не один промпт",
      ],
      conclusion:
        "Результат — три решения по замерам, не чат-бот.\nБизнес-цифры считает Python, LLM пишет текст. Упавший SQL проходит guard, две переписки и честную ошибку — никогда тихую подмену. Два узких агента плюс двухуровневый роутер лучше одного универсального промпта.\n~85% нормализованного SQL и 174 теста — вспомогательные скоры на публичном паке. ~98% значит только, что запрос выполнился. 2ч → 2мин — прод МТС, не демо.",
      footnote:
        "Тесты воспроизводимы: cd backend && pytest — изолированные temp-БД, fake-провайдеры, без API-ключей.",
    },
  },
  {
    id: "ai-agents",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Мультиагентная система",
    portfolioDataTime: "",
    hrefNameList: "ai-agents",
    direction: "AI-агенты",
    wip: true,
    likeable: true,
    technologies: ["Python", "LangGraph", "function calling", "оркестрация"],
    portfolioText:
      "Проект в разработке. Команда AI-агентов с оркестрацией под бизнес-сценарии: workflow, function / tool calling, обработка ошибок и восстановление после сбоев. Скоро опубликую.",
  },
  {
    id: "prompt-engineering",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Промпт-инжиниринг и evaluation",
    portfolioDataTime: "",
    hrefNameList: "prompt-engineering",
    direction: "Промпт-инжиниринг",
    wip: true,
    likeable: true,
    technologies: ["prompt engineering", "evaluation", "Python"],
    portfolioText:
      "Проект в разработке. Фреймворк для промпт-сценариев и evaluation-наборов: тесты на точность, стабильность и edge cases, регрессионная проверка качества ответов. Скоро опубликую.",
  },
  {
    id: "mlops",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Инфраструктура для LLM-приложений",
    portfolioDataTime: "",
    hrefNameList: "mlops",
    direction: "MLOps",
    wip: true,
    likeable: true,
    technologies: ["Docker", "Kubernetes", "CI/CD", "мониторинг"],
    portfolioText:
      "Проект в разработке. Инфраструктура и деплой LLM-приложений: контейнеризация, оркестрация, CI/CD и мониторинг. Скоро опубликую.",
  },
  {
    id: "llm-integration",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Интеграция LLM в продукт",
    portfolioDataTime: "",
    hrefNameList: "llm-integration",
    direction: "LLM-интеграция",
    wip: true,
    likeable: true,
    technologies: ["FastAPI", "LLM API", "Python", "Redis"],
    portfolioText:
      "Проект в разработке. Внедрение больших языковых моделей в продукт через API: надёжный backend на Python / FastAPI, кэширование, безопасная и предсказуемая работа. Скоро опубликую.",
  },
  {
    id: "assistant",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "AI-ассистент / чат-бот",
    portfolioDataTime: "",
    hrefNameList: "assistant",
    direction: "Ассистенты",
    wip: true,
    technologies: ["LLM", "RAG", "function calling", "React"],
    portfolioText:
      "Проект в разработке. AI-ассистент / чат-бот с доступом к базе знаний (RAG) и инструментам (function calling) под конкретные задачи. Скоро опубликую.",
  },
];
