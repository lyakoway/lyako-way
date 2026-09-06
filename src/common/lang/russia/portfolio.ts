import { PortfolioListProps, PortfolioProps } from "src/common/types/lang";

export const portfolio: PortfolioProps = {
  title: "Недавно разработаны",
  buttonText: "Открыть портфолио",
  portfolioNameList: "Портфолио",
  portfolioTextTitle: "Добро пожаловать в портфолио!",
  portfolioText:
    "В портфолио представлены проекты, которые я разработал в сотрудничестве с веб-студиями так и для частных клиентов, а также несколько личных проектов.\nОсновная масса проектов содержит индивидуальные функции предназначенные для реализации особенностей работы веб-сайта.\nВ моем портфолио веб-разработчика указано название сайта, ссылка на сайт, цель сайта и описание выполненной работы.",
  all: "Все",
  filter: "Фильтр проектов",
  wip: "В разработке",
  likeLabel: "Оценить",
  hero: {
    role: "AI Engineering Portfolio",
    title:
      "AI-системы для работы с корпоративными знаниями, данными и автоматизации процессов.",
    chips: "RAG · AI Agents · AI Data · Text-to-SQL · Evaluation",
  },
  intro:
    "Здесь собраны AI-системы, которые я проектировал и разрабатывал end-to-end — от архитектуры и LLM-интеграции до evaluation, backend, frontend и production.",
  numbersTitle: "AI-инжиниринг в цифрах",
  stats: [
    {
      value: "92%",
      label: "Recall@1",
      note: "RAG Chat · golden set · 24 вопроса",
    },
    {
      value: "5.0 / 5",
      label: "LLM-as-a-Judge",
      note: "Faithfulness · Relevance · Citations",
    },
    {
      value: "161",
      label: "автотестов",
      note: "AI Data Pilot · Agents · SQL Guard · Analytics",
    },
    {
      value: "2h → 2min",
      label: "подготовка аналитики",
      note: "AI Data Pilot",
    },
  ],
  featuredTitle: "Избранные проекты",
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
      items: "Golden Sets · Recall@K · LLM-as-a-Judge · Regression Testing",
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
    cardMetrics: ["92% Recall@1", "5.0/5 LLM-as-a-Judge"],
    tagline:
      "Production-oriented RAG-система: вопросы по документам, оценка качества поиска и агентный режим.",
    metricsLine:
      "92% Recall@1 · 5.0/5 LLM-as-a-Judge · 24 golden questions · 25 automated tests",
    keyResultsTitle: "Ключевые результаты",
    keyResults: [
      { value: "92%", label: "Recall@1" },
      { value: "5.0 / 5", label: "LLM-as-a-Judge" },
      { value: "24", label: "golden questions" },
      { value: "25", label: "automated tests" },
    ],
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
      "Чат по документам с тремя режимами рядом: классический RAG Chat, AI Агент и Векторный поиск — разница видна на одном и том же вопросе.\nРежим RAG: один поиск → ответ с цитатами.;Режим агента: свой цикл tools на FastAPI (список документов → поиск → уточнение) с лентой шагов в UI — без LangGraph.;Режим векторного поиска: семантический поиск fastembed по фрагментам без LLM — оценка релевантности и переход в документ с нужной страницы.\nЗагружаете PDF, Word или Excel и задаёте вопросы.;Ответы со ссылками на страницы-источники, кнопками 👍/👎 и follow-up подсказками в один клик.;Встроенный предпросмотр PDF, DOCX и Excel, скачивание из панели документов.;Мультиязычность: демо-пак RU/EN, файлы на любом языке — вопрос на своём, ответ на понятном.;Вопрос можно надиктовать голосом (Web Speech API) — в чате и в векторном поиске.;Демо-режим работает без ключей. Подключены GLM-5.x (Z.ai), OpenAI, Anthropic и локальный Ollama.;Заголовки чатов формулирует LLM (фоновой задачей, без задержки ответа).\nBackend — FastAPI, ChromaDB, fastembed, гибридный поиск, evaluation (Recall@1 92%) и LLM-as-judge (качество ответов 5.0/5).;Frontend — React 19 / TypeScript (Vite). Тесты и CI. Живое демо на Hugging Face Spaces.",
    aiEngineering: {
      sectionTitle: "Инженерный подход",
      intro:
        "Я не оцениваю AI-систему тем, что она работает на нескольких примерах. Я формулирую метрики, строю воспроизводимый evaluation-набор, сравниваю альтернативы и принимаю архитектурные решения на основании замеров.",
      useCasesTitle: "Для чего нужен проект",
      useCasesListTitle: "Несколько сценариев, где это уже работает",
      useCasesIntro:
        "RAG-чат закрывает типовую боль: знания заперты в десятках PDF, Word и Excel, и люди тратят часы на их ручной перебор. Приложение превращает документы в разговор — вопрос на естественном языке, ответ с точной ссылкой на файл и страницу.",
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
          title: "Строительная документация и нормы",
          detail:
            "Вопросы по сметам, нормам СНиП / ГОСТ и проектной документации (PDF / Excel / Word) с ответом со ссылкой на первоисточник — единая точка входа вместо ручного перебора десятков файлов.",
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
              note: "опциональный cross-encoder реранкер",
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
              note: "5.3 / 5.2 / 4.5-flash",
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
            { label: "Аналитика", note: "Яндекс.Метрика + GA4, 32 события" },
            { label: "pytest + CI", note: "25 тестов, GitHub Actions" },
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
            "Определяю quality, latency, cost и reliability до реализации.",
        },
        {
          title: "02 — Evaluation before optimization",
          check: "Golden Set → Recall@K → эксперименты → решение.",
        },
        {
          title: "03 — Data-driven architecture",
          check:
            "Сравниваю retrieval, модели и конфигурацию пайплайна на собственном evaluation-наборе.",
        },
        {
          title: "04 — Observable AI systems",
          check:
            "Tool-вызовы, шаги выполнения, ошибки, фидбек и латентность должны быть видимыми.",
        },
        {
          title: "05 — Reproducible quality",
          check:
            "Тесты, CI, изолированное eval-хранилище и контроль регрессий.",
        },
      ],
      metricsTitle: "Замеры",
      tables: [
        {
          title: "Why hybrid search? — эксперимент с поиском",
          columns: ["Конфигурация", "Recall@1", "Recall@3", "MRR@5", "Поиск"],
          rows: [
            { cells: ["Векторный поиск", "50,0%", "95,8%", "0,733", "11 мс"] },
            {
              cells: [
                "Гибрид BM25 + RRF — по умолчанию",
                "91,7%",
                "100%",
                "0,958",
                "18 мс",
              ],
              highlight: true,
            },
            {
              cells: ["Гибрид + реранкер", "41,7%", "100%", "0,694", "~2,9 с"],
            },
          ],
          footnote:
            "Decision: гибрид BM25 + RRF стал стратегией поиска по умолчанию — на двуязычном evaluation-наборе он дал лучшее измеренное соотношение качества поиска и латентности. Локальный прогон 28.08.2026, CPU, эмбеддинг paraphrase-multilingual-MiniLM. Индекс собирается с нуля при каждом запуске — числа воспроизводимы.",
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
            "TTFT — время до первого токена. GLM-4.5-flash (бесплатное поколение) на том же пайплайне даёт TTFT 25–50 с — поэтому в рекомендациях её нет.",
        },
        {
          title: "Качество ответов — LLM-as-judge, 24 вопроса",
          columns: ["Ось оценки", "Средний балл"],
          rows: [
            { cells: ["Faithfulness — нет галлюцинаций", "5.0 / 5"] },
            { cells: ["Relevance — отвечает на вопрос", "5.0 / 5"] },
            { cells: ["Citations — цитаты корректны", "5.0 / 5"] },
          ],
          footnote:
            "Это LLM-оценка — вспомогательный сигнал: 5.0/5 на 24 ответах по осям Faithfulness, Relevance и Citations. Для строгой валидации нужен независимый судья другой модели или ручная оценка. Ответы и судья — glm-4.5-flash, поиск гибридный. Ответов с оценкой ≤3: 0 из 24.",
        },
      ],
      production: {
        title: "Production и надёжность",
        items: [
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
            text: "25 pytest-тестов + CI на GitHub Actions.",
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
        "Языковые «двойники» — главная ловушка мультиязычных корпусов. Эмбеддинги выравнивают RU и EN, и русский вопрос поднимает английский документ (Recall@1 50%). Лексический сигнал BM25 в fusion — не опция, а необходимость (+41,7 п.п. к Recall@1).",
        "Реранкер — не бесплатное улучшение. Cross-encoder оценивает семантическую релевантность, а «двойник» семантически так же релевантен — Recall@1 падает до 42%, плюс ~3 секунды. Проверили — и обоснованно отказались.",
        "Поколение модели определяет латентность сильнее настроек. GLM-4.5-flash с отключённым thinking отвечает 25–50 с, GLM-5.3-flash на том же пайплайне — ~3 с. А локальная Llama 3.2 3B на CPU отвечает за 2–5 с бесплатно — быстрее бесплатной облачной. Плата за «бесплатность» — всплески до 8–15 с под нагрузкой и менее аккуратные ответы. Маленькая модель чаще теряет цитаты.",
        "Анти-галлюцинация проверена вопросом вне базы — модель отвечает отказом со ссылкой на содержимое контекста, а не выдумывает факт.",
        "Гипотезы «срезать контекст — быстрее первый токен» проверены и отклонены — top_k 5→4 и чанк 800→400 Recall не меняют, но TTFT остаётся ~2,5 с. На демо-корпусе страницы короче 400 токенов, резать нечего. Латентность — «пол» провайдера. Пайплайн добавляет ~20 мс (<1%).",
        "Автооценка качества ответов: LLM-as-judge оценил 24/24 ответов — 5.0 по всем осям (нет галлюцинаций, цитаты корректны). Для строгой оценки нужен судья другой семьи.",
      ],
      conclusionLabel: "Главный вывод",
      conclusionSteps: [
        "Гипотеза",
        "Golden set",
        "Замер",
        "Решение на числах",
        "Эксплуатация",
      ],
      conclusion:
        "Ключевой результат — не сам чат-бот, а воспроизводимый инженерный RAG-пайплайн, в котором retrieval, выбор модели, латентность и качество ответов измеряются и становятся основой архитектурных решений.",
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
      "Multi-agent аналитическая платформа, превращающая вопрос на естественном языке в SQL, анализ данных и готовый аналитический результат.",
    cardMetrics: ["2h → 2min", "161 automated tests"],
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
      "Мультиагентная аналитическая платформа: авто-роутер направляет вопрос нужному агенту — Олег (Text-to-SQL, agent loop с tool calling) или Ксюша (RAG с векторным поиском).;Пользователь видит работу агентов пошагово в реальном времени (execution trace через SSE) с self-correction: если SQL упал, агент сам переписывает запрос.;Источники данных: PostgreSQL, ClickHouse, загружаемые CSV/Excel/PDF/Word с автосхемой и JOIN между файлами, виртуальный источник «Все загрузки».;Каждая цифра в ответах считается детерминированным Python-слоем — LLM только оформляет текст. Поиск Ксюши — гибрид BM25 + векторные эмбеддинги (fastembed, 50+ языков).;161 автотест; деплой на Hugging Face Spaces.",
    features: [
      "Agent Loop (ReAct): Олег сам решает какие tools вызвать — database_query, calculate, analyze, chart, finish",
      "Авто-роутеры: агент (данные/документация) и источник данных по смыслу вопроса",
      "Мульти-источники: PostgreSQL, ClickHouse, CSV/Excel (с SQL + RAG pipeline), «Все загрузки» с JOIN",
      "Execution trace через SSE: пошаговая работа агентов в реальном времени",
      "Self-correction: агент видит ошибку SQL и переписывает запрос (2 попытки)",
      "Детерминированная аналитика: тренды, топ-N, аномалии (z-score) считает Python, не LLM",
      "RAG v2: загрузка PDF/Word/Excel/TXT, гибрид BM25 + vector (fastembed), кликабельные цитаты [1], просмотр документов",
      "Параметризованные сценарии: период, группировка, метрика — один шаблон, бесконечное переиспользование",
      "Витрина фидбека: аналитика 👍/👎 по агентам с фильтрами",
      "Прозрачные статусы: ok / demo / partial / error в каждом ответе",
    ],
    aiEngineering: {
      sectionTitle: "Взгляд AI-инженера: агентность и надёжность",
      intro:
        "Разбор по той же методике «взгляда AI-инженера»: не список фич, а инженерный цикл — от маршрутизации вопросов и доверия к цифрам до ошибок SQL и тестов. Ключевой вопрос проекта: как заставить LLM работать с базами данных так, чтобы ответу можно было доверять.",
      useCasesTitle: "Для чего нужен проект",
      useCasesListTitle: "Сценарии, где это уже работает",
      useCasesIntro:
        "Платформа закрывает типовую боль: данные лежат в базах и Excel-файлах, а получить цифру можно только через аналитика. Вопрос на естественном языке превращается в SQL, график и выгрузку — с проверяемой методологией.",
      useCases: [
        {
          title: "Self-service аналитика для бизнеса",
          detail:
            "Менеджер спрашивает «выручка по регионам за 90 дней» и получает таблицу с графиком за секунды — без постановки задачи аналитику и ожидания в очереди.",
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
            { label: "React 19 + Vite", note: "SSE-стриминг, RU/EN, dark/light" },
            { label: "Execution trace", note: "пошаговая работа агентов live" },
            { label: "Просмотрщик документов", note: "PDF · DOCX · XLSX" },
          ],
        },
        {
          title: "Роутинг (два уровня)",
          nodes: [
            { label: "Агент-роутер", note: "данные → Олег, документация → Ксюша", accent: true },
            { label: "Source-роутер", note: "вопрос → нужная БД (LLM + эвристика)", accent: true },
            { label: "Ручной override", note: "чекбоксы и селектор источников" },
          ],
        },
        {
          title: "Олег — SQL-агент",
          nodes: [
            { label: "Agent Loop (ReAct)", note: "prompt-based tool calling, до 6 шагов" },
            { label: "Tools", note: "database_query · calculate · analyze · chart · finish" },
            { label: "Self-correction", note: "ошибка SQL → переписать (2 попытки)" },
            { label: "Insights (Python)", note: "тренды · топ-N · z-score аномалии" },
          ],
        },
        {
          title: "Ксюша — RAG",
          nodes: [
            { label: "Гибрид BM25 + vector", note: "fastembed, 50+ языков" },
            { label: "Русский стемминг", note: "IDF-взвешивание, fallback-чанки" },
            { label: "Цитаты [1] + viewer", note: "PDF стр. N · DOCX · XLSX таблица" },
          ],
        },
        {
          title: "Источники данных",
          nodes: [
            { label: "RideGo (SQLite)", note: "встроенный демо-домен, ~21k поездок" },
            { label: "PostgreSQL · ClickHouse", note: "интроспекция схемы, диалект-промпты" },
            { label: "CSV / Excel", note: "SQL-таблица + текстовые чанки из одной загрузки" },
            { label: "«Все загрузки»", note: "виртуальный источник, JOIN между файлами" },
          ],
        },
        {
          title: "Эксплуатация",
          nodes: [
            { label: "SQL guard", note: "SELECT-only, row limit, таймауты 8/30 с" },
            { label: "Feedback", note: "👍/👎 в БД + витрина аналитики" },
            { label: "pytest", note: "161 тест, изолированные temp-БД" },
          ],
        },
      ],
      diagramNote:
        "Сверху вниз: вопрос → двойная маршрутизация (агент + источник) → пошаговое выполнение с trace → ответ с цитатами и графиком. Провайдеры LLM взаимозаменяемы, demo-режим работает без ключей на детерминированных скриптах.",
      principlesTitle: "Чек-лист AI-инженера",
      principles: [
        {
          title: "1. Метрики успеха до кода",
          check:
            "Зафиксировано ли, что такое «работает»: точность SQL, качество поиска, поведение при ошибках.",
          result:
            "Критерии: SQL выполняется или агент честно сообщает об ошибке (никаких молчаливых подмен данных), цифры в ответе совпадают с таблицей, поиск находит документ по синонимам. Каждый критерий закрыт тестами или фичей.",
          status: "done",
        },
        {
          title: "2. LLM не считает — считает код",
          check:
            "Не берутся ли цифры из «галлюцинаций» модели, а из детерминированных вычислений.",
          result:
            "Все метрики (суммы, проценты, тренды, z-score аномалии) считает Python-слой analytics.py. LLM получает готовые highlights и только оформляет текст — выдумать цифру она физически не может, в промпте прямой запрет.",
          status: "done",
        },
        {
          title: "3. Ошибки SQL — часть контракта",
          check:
            "Что происходит, когда сгенерированный SQL не выполнился.",
          result:
            "Трёхуровневая обработка: guard-ошибки (запрещённые операторы) — сразу пользователю; runtime-ошибки — self-correction, ошибку видит LLM и переписывает запрос (до 2 попыток); не исправилось — честный статус error. Прогресс виден в trace как отдельные шаги.",
          status: "done",
        },
        {
          title: "4. Маршрутизация вместо одного «универсального» промпта",
          check:
            "Как система решает, кто и с какими данными отвечает.",
          result:
            "Два роутера: агент (данные/документация) и источник (какая БД). Каждый — LLM-классификатор с fallback на детерминированную эвристику. В trace видно решение: «→ Олегу (данные)», «→ RideGo (демо)». Ручной override — селектором и чекбоксами.",
          status: "done",
        },
        {
          title: "5. Поиск: гибрид вместо одного метода",
          check:
            "Находит ли поиск документ по синонимам, опечаткам и на другом языке.",
          result:
            "Гибрид BM25-IDF (точные термины) + векторные эмбеддинги fastembed (семантика, 50+ языков), взвешивание 0.4/0.6. Проверено: англ. вопрос находит русский документ; «затраты» находит «расходы». Русский стемминг для BM25, fallback-чанки для расплывчатых вопросов.",
          status: "done",
        },
        {
          title: "6. Прозрачность режима для пользователя",
          check:
            "Понятно ли, реальный это ответ или заглушка, и что произошло внутри.",
          result:
            "Каждый ответ помечен статусом: ok / demo / partial (с самокоррекцией) / error. SSE-trace показывает шаги в реальном времени. Пароли источников — server-side, в UI не возвращаются. В demo-режиме ответ честно помечен «Демо-режим».",
          status: "done",
        },
        {
          title: "7. Мульти-источники без объединения данных",
          check:
            "Может ли агент работать с несколькими БД и файлами одновременно.",
          result:
            "Виртуальный источник «Все загрузки»: Олег видит схему всех загруженных таблиц и строит JOIN между файлами, не копируя данные. Source-роутер сам выбирает таблицу по вопросу. CSV/Excel попадают в оба pipeline: SQL-таблица + текстовые чанки.",
          status: "done",
        },
        {
          title: "8. Инженерная дисциплина",
          check:
            "Тесты, изоляция, воспроизводимость — система проверяется автоматически.",
          result:
            "161 pytest-тест: agent loop (с fake-провайдером), self-correction, SQL guard (таймауты, запреты), аналитика, все типы источников, парсеры «грязных» Excel. Тесты на изолированных temp-БД — боевые данные не задеваются.",
          status: "done",
        },
      ],
      metricsTitle: "Замеры",
      tables: [
        {
          title: "Покрытие тестами — 161 pytest-тест",
          columns: ["Компонент", "Тестов", "Что проверяется"],
          rows: [
            { cells: ["Agent Loop (ReAct)", "22", "tool-calling, self-correction, лимит шагов, fallback"] },
            { cells: ["SQL guard", "18", "запреты DML, multi-statement, таймауты, row limit"] },
            { cells: ["Аналитический слой", "16", "тренды, z-score порог, топ-N, RU/EN highlights"] },
            { cells: ["Источники (CSV/Excel/PG/CH)", "27", "парсеры, интроспекция, дедуп имён, маскировка паролей"] },
            { cells: ["Роутеры (агент + источник)", "26", "эвристика, LLM-fallback, честные ошибки"] },
            { cells: ["RAG Ксюши + app.db", "20", "steps, sources, цитаты, feedback stats"] },
            { cells: ["Параметризованные сценарии", "10", "подстановка, defaults, миграция"] },
            { cells: ["Прочее (app_db, export)", "22", "CRUD, feedback, изоляция БД"] },
          ],
          footnote:
            "Тесты выполняются на изолированных temp-SQLite базах и fake-провайдерах — не требуют API-ключей и не задевают боевые данные. Время прогона ~50 с.",
        },
        {
          title: "Системные ограничения — защита от деградации",
          columns: ["Механизм", "Значение"],
          rows: [
            { cells: ["Таймаут SQL: локальные источники", "8 с"] },
            { cells: ["Таймаут SQL: PostgreSQL / ClickHouse (внешние)", "30 с"] },
            { cells: ["Row limit на запрос", "500 строк"] },
            { cells: ["Self-correction rounds", "2 (итого до 3 попыток)"] },
            { cells: ["Agent Loop: максимум шагов", "6"] },
            { cells: ["Лимит загрузки файла", "25 МБ · 50 000 строк"] },
          ],
          footnote:
            "Таймауты реализованы через ThreadPoolExecutor с future.result(timeout) — тяжёлый запрос не блокирует event loop. Внешние БД получают увеличенный бюджет: кросс-сетевое соединение с handshake занимает секунды.",
        },
      ],
      findingsTitle: "Что показали замеры и эксплуатация",
      findings: [
        "LLM ненадёжна в арифметике — и это архитектурная проблема, а не проблема промпта. Первые версии считали проценты «в голове»: на демо всплывали выдуманные цифры. Решение — детерминированный Python-слой: LLM получает готовые highlights и физически не может вставить число, которого нет в данных.",
        "Молчаливые fallback'и убивают доверие. Ранняя версия при ошибке SQL тихо подставляла заглушку — пользователь видел правдоподобные неверные цифры. После рефакторинга: ошибка видна, self-correction показывает попытки исправления, а demo-режим честно помечается бейджем.",
        "«Грязные» Excel-файлы — норма, а не исключение. Реальный файл пользователя упал на трёх вещах сразу: merged-титульная строка вместо заголовка, пустые ячейки в шапке, дубликаты имён колонок. Пришлось научить парсер сам находить строку заголовка (по заполненности) и разруливать дубликаты (to_8 → to_8_2).",
        "Ключевой поиск без стемминга бесполезен для русского. «Регламенту» не находило «регламент», «масла» — «масло». Грубый стеммер (45+ окончаний) вернул поиск; векторный поиск fastembed добавил семантику — англ. вопрос находит русский документ.",
        "Роутинг экономит не шаги, а доверие. Один «универсальный» промпт размывал роль агента; два специализированных агента + авто-роутер дают лучшее качество ответов, а решение видно в trace — пользователь понимает, почему ответ именно такой.",
      ],
      gapsTitle: "Честные пробелы",
      gaps: [
        "Нет golden-set оценки качества SQL: правильность генерации проверяется тестами на фиксированных случаях, а не на размеченном наборе вопросов с эталонными запросами.",
        "Векторный индекс пересобирается на каждый поиск — для больших корпусов понадобится персистентное хранилище эмбеддингов (ChromaDB / Qdrant).",
        "Upload-документы обрабатываются синхронно — большие PDF упрутся в таймаут; нужен background ingestion со статусами.",
        "Нет аутентификации и мультитенантности — для реального продакшена потребуются пользователи, приватные источники и изоляция данных.",
      ],
      conclusionLabel: "Главный вывод",
      conclusionSteps: [
        "Маршрутизация",
        "Tool calling",
        "Self-correction",
        "Детерминированные цифры",
        "Прозрачность",
      ],
      conclusion:
        "Это не «чат-бот поверх SQL» — агентность здесь проверяется тестами, а доверие к цифрам построено архитектурно: LLM оформляет текст, но не производит вычислений.\nСистема честна в ошибках: покажет попытки исправления, а не подменит результат.",
      footnote:
        "Тесты воспроизводимы: cd backend && pytest — изолированные temp-БД, fake-провайдеры, без API-ключей.",
    },
  },
  {
    id: "ai-agents",
    ...ICON_META,
    hrefPortfolio: "",
    portfolioNameList: "Мульти-агентная система",
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
