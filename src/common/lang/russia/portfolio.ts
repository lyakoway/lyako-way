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
      value: "87%",
      label: "Recall@1",
      note: "RAG Chat · golden set · 47 сценариев",
    },
    {
      value: "5.0 / 5",
      label: "LLM-as-a-Judge",
      note: "Faithfulness · Relevance · Citations",
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
    cardMetrics: ["87% Recall@1", "5.0/5 LLM-as-a-Judge"],
    tagline:
      "Production-oriented RAG-система: вопросы по документам, оценка качества поиска и агентный режим.",
    metricsLine:
      "87% Recall@1 · 5.0/5 LLM-as-a-Judge · 47 golden scenarios · 63 pytest tests",
    keyResultsTitle: "Ключевые результаты",
    keyResults: [
      { value: "87%", label: "Recall@1" },
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
      "Чат по документам с тремя режимами рядом: классический RAG Chat, AI Агент и Векторный поиск — разница видна на одном и том же вопросе.\nРежим RAG: один поиск → ответ с цитатами.;Режим агента: свой цикл tools на FastAPI (список документов → поиск → уточнение) с лентой шагов в UI — без LangGraph.;Режим векторного поиска: семантический поиск fastembed по фрагментам без LLM — оценка релевантности и переход в документ с нужной страницы.\nЗагружаете PDF, Word или Excel и задаёте вопросы.;Ответы со ссылками на страницы-источники, кнопками 👍/👎 и follow-up подсказками в один клик.;Встроенный предпросмотр PDF, DOCX и Excel, скачивание из панели документов.;Мультиязычность: демо-пак RU/EN, файлы на любом языке — вопрос на своём, ответ на понятном.;Вопрос можно надиктовать голосом (Web Speech API) — в чате и в векторном поиске.;Демо-режим работает без ключей. Подключены GLM-5.x (Z.ai), OpenAI, Anthropic и локальный Ollama.;Заголовки чатов формулирует LLM (фоновой задачей, без задержки ответа).\nBackend — FastAPI, ChromaDB, fastembed, гибридный поиск, evaluation (Recall@1 87%, 47 сценариев) и LLM-as-judge (качество ответов 5.0/5).;Frontend — React 19 / TypeScript (Vite). Тесты и CI. Живое демо на Hugging Face Spaces.",
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
          title: "Why hybrid search? — 47 сценариев, эксперимент с поиском",
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
            "Decision: гибрид BM25 + RRF стал стратегией поиска по умолчанию — на двуязычном evaluation-наборе он дал лучшее измеренное соотношение качества поиска и латентности. Прогон 07.09.2026 на расширенном наборе (47 сценариев), CPU, эмбеддинг paraphrase-multilingual-MiniLM. Индекс собирается с нуля при каждом запуске — числа воспроизводимы. Строка реранкера — прогон на первой версии набора (24 вопроса).",
        },
        {
          title: "Разбивка по категориям — 47 сценариев, гибрид (по умолчанию)",
          columns: ["Категория", "Вопросов", "Recall@1", "Recall@3"],
          rows: [
            { cells: ["fact — прямой факт", "15", "100%", "100%"] },
            { cells: ["numeric — цифры и сроки", "15", "86,7%", "100%"] },
            { cells: ["paraphrase — перефраз без дословных ключей", "9", "88,9%", "100%"] },
            {
              cells: [
                "cross-lingual — смешанный язык",
                "8",
                "62,5%",
                "87,5%",
              ],
              highlight: true,
            },
          ],
          footnote:
            "Расширение набора с 24 до 47 сценариев вскрыло слабое место: смешанные языковые запросы (cross-lingual) — 62,5% Recall@1 против 100% у прямых фактов. BM25 не спасает, когда ключевые слова в другом языке. Следующий шаг: словарь синонимов RU/EN и мультиязычный реранкер.",
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
        "Языковые «двойники» — главная ловушка мультиязычных корпусов. Эмбеддинги выравнивают RU и EN, и русский вопрос поднимает английский документ (Recall@1 53,2%). Лексический сигнал BM25 в fusion — не опция, а необходимость (+34 п.п. к Recall@1).",
        "Расширенный golden set (24 → 47 сценариев, 4 категории) вскрыл слабое место: смешанные языковые запросы (cross-lingual) дают 62,5% Recall@1 против 100% у прямых фактов. BM25 не спасает, когда ключевые слова в другом языке, — следующий шаг: словарь синонимов RU/EN и мультиязычный реранкер.",
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
      "Мультиагентная аналитическая платформа, превращающая вопрос на естественном языке в SQL, анализ данных и готовый аналитический результат.",
    cardMetrics: ["2ч → 2мин · репрезентативный сценарий", "SQL Execution Accuracy 100% · Routing 100%"],
    tagline:
      "Мультиагентная аналитическая система для анализа данных на естественном языке — production-качество, проверено автотестами.",
    metricsLine:
      "174 теста · Execution 100% · Routing 100% · Result Accuracy 42% · p95 32s (GLM-4.6)",
    keyResultsTitle: "Текущая валидация",
    keyResults: [
      { value: "100%", label: "SQL Execution Accuracy · Golden Set 50" },
      { value: "100%", label: "Agent Routing Accuracy · Golden Set 20" },
      { value: "42%", label: "Result Accuracy (exact-match)" },
      { value: "174", label: "автотестов + LLM evaluation" },
      { value: "2", label: "специализированных агента" },
      { value: "4", label: "типа источников данных" },
    ],
    keyResultsNote: "Прогон GLM-4.6 (50 SQL + 20 routing): p95 32s · Self-Correction Rate измеряется отдельно · 0 необработанных ошибок",
    keyResultsLimitation:
      "Result Accuracy 42% — exact-set match строго к эталону; расширяю сопоставление (синонимы, формы, агрегаты) и покрытие Golden Set.",
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
    deployLine:
      "174 теста + LLM evaluation: golden set (30 SQL-сценариев, 20 routing), метрики Execution / Result Accuracy, Self-Correction Rate, p95 latency · деплой на Hugging Face Spaces.",
    features: [
      "Мультиагентная маршрутизация",
      "Text-to-SQL + Tool Calling",
      "Самокорректирующийся Agent Loop",
      "Детерминированная аналитика",
      "Гибридный RAG",
      "LLM Evaluation (Golden Set)",
    ],
    productFeaturesTitle: "Продуктовые возможности",
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
            { label: "pytest + evaluation", note: "174 теста + golden set, temp-БД" },
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
          check: "LLM пишет текст; числа считает Python.",
        },
        {
          title: "02 — SQL failure is part of the contract",
          check: "Ошибка SQL → self-correction → повтор → честная ошибка.",
        },
        {
          title: "03 — Specialized agents over universal prompts",
          check: "Роутинг выбирает нужного агента и источник данных.",
        },
        {
          title: "04 — Hybrid retrieval",
          check:
            "BM25 + векторный поиск закрывают точные термины, семантику и мультиязычные запросы.",
        },
        {
          title: "05 — Transparent execution",
          check:
            "SSE показывает маршрутизацию, вызовы инструментов, повторы и финальный статус.",
        },
        {
          title: "06 — Reproducible verification",
          check: "174 теста, изолированные БД и fake-провайдеры; LLM evaluation на golden set — отдельным прогоном.",
        },
      ],
      metricsTitle: "Автоматическая верификация",
      tables: [
        {
          title: "Покрытие тестами — 174 pytest-теста",
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
            { cells: ["Retrieval quality + analytics contracts", "13", "Recall@1/5, MRR (BM25/Vector/Hybrid), числовые golden-контракты"] },
          ],
          footnote:
            "Тесты выполняются на изолированных temp-SQLite базах и fake-провайдерах — не требуют API-ключей и не задевают боевые данные. Время прогона ~50 с.",
        },
        {
          title: "Качество SQL — Golden Set 50, живой прогон GLM-4.6",
          columns: ["Метрика", "Результат"],
          rows: [
            { cells: ["SQL Execution Accuracy — сгенерированный SQL выполнился", "100% (50/50)"], highlight: true },
            { cells: ["Agent Routing Accuracy — вопрос направлен правильному агенту", "100% (20/20)"] },
            { cells: ["Result Accuracy — точное совпадение множеств строк с эталоном", "42%"] },
            { cells: ["Task Completion Rate — вопрос доведён до результата", "100%"] },
          ],
          footnote:
            "Прогон GLM-4.6 по Golden Set (50 SQL-сценариев + 20 routing). Result Accuracy 42% — strict exact-match: LLM возвращает верные данные, но в другой форме (алиасы, округления, лишние ORDER BY) — сопоставление расширяется.",
        },
        {
          title: "Замеры латентности — медианы 3 прогонов по моделям",
          columns: ["Модель", "План (LLM)", "Выполнение (БД)", "Ответ (LLM)", "Итого", "SQL ok"],
          rows: [
            { cells: ["GLM-5.2 (Z.ai)", "7.0 с", "6 мс", "9.4 с", "~16.4 с", "3/3"], highlight: true },
            { cells: ["GLM-4.6 (Z.ai)", "13.5 с", "12 мс", "16.3 с", "~29.8 с", "2/3"] },
            { cells: ["GLM-5.3-flash (Z.ai)", "7.0 с", "8 мс", "4.8 с", "~11.9 с", "2/3"] },
            { cells: ["GLM-5.3 (Z.ai)", "13.8 с", "11 мс", "5.1 с", "~19.0 с", "1/3"] },
          ],
          footnote:
            "Медианы 3 прогонов одного вопроса через полный цикл (план → БД → ответ) — латентность внешнего API варьируется между запусками. GLM-5.3-поколение отвечает быстрее, но SQL генерирует слабее. Скрипт замера: python scripts/latency_benchmark.py.",
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
      calloutsTitle: "Ключевые инженерные решения",
      calloutsIntro:
        "Два архитектурных решения, на которых держится доверие к результатам: бизнес-цифры считает детерминированный код, а ошибки SQL не скрываются.",
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
        currentStateTitle: "SQL / Agent evaluation — качество AI измеряется отдельно от software-тестов",
        current: [
          "Golden Set из 30 SQL-сценариев (естественный язык → SQL)",
          "Execution Accuracy — выполняется ли сгенерированный SQL",
          "Result Accuracy — совпадает ли результат с эталонным",
          "Self-Correction Rate — как часто упавший SQL успешно исправлен",
          "p95 latency — скорость ответа end-to-end",
        ],
        nextTitle: "Retrieval / Analytics evaluation",
        next:
          "Recall@1 / Recall@5 · MRR · BM25 vs Vector vs Hybrid retrieval · числовые golden-контракты детерминированной аналитики. Software reliability проверяется отдельно: 174 pytest-теста (Agent Loop, SQL Guard, Analytics, Sources, Routers, RAG, app logic).",
      },
      findingsTitle: "Инженерные находки",
      findings: [
        "LLM ненадёжна в арифметике. Ранние версии выдавали правдоподобные, но неверные проценты. Решение: все численные расчёты перенесены в детерминированный Python-слой.",
        "Молчаливые fallback-и разрушают доверие. Ответ без пометки режима выглядел как настоящий. Решение: явные статусы ok / demo / partial / error в каждом ответе.",
        "«Грязные» Excel-файлы — норма. Реальная выгрузка падала на merged-заголовке и дубликатах колонок. Решение: устойчивые парсеры, обученные находить строку заголовка, + тесты на «грязных» файлах.",
        "Поиск без стемминга бесполезен для русского. «Затраты» не находили «расходы». Решение: русский стемминг для BM25 + векторный канал для семантики и мультиязычности.",
        "Роутинг экономит доверие, а не шаги. Один «универсальный» промпт размывал роль агента. Решение: два специализированных агента + двухуровневый роутер с видимым решением в trace.",
        "Замеры по моделям дали неожиданный разворот: GLM-5.2 быстрее флагмана GLM-4.6 (18.5 с против 22.4 с на полном цикле), а GLM-5.3-поколение генерирует быстрый ответ, но SQL выходит слабее. Решение — бенчмарк-скрипт: латентность любой модели замеряется одной командой, таблица идёт в README.",
      ],
      gapsTitle: "Ограничения и следующие инженерные шаги",
      gaps: [
        "SQL evaluation depth — расширить Golden Set сложными JOIN, неоднозначными вопросами и кросс-источниковыми сценариями.",
        "Persistent retrieval — перейти от пересборки индекса на каждый поиск к персистентному ChromaDB / Qdrant.",
        "Async ingestion — вынести обработку больших документов в фоновые задачи со статусами загрузки.",
        "Security & multi-tenancy — добавить аутентификацию, авторизацию и изоляцию данных по тенантам.",
      ],
      production: {
        title: "Продакшн и надёжность",
        items: [
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
            text: "174 pytest-теста на изолированных temp-БД + golden-set LLM evaluation (scripts/evaluate.py).",
          },
          {
            title: "Status transparency",
            text: "Статусы ok / demo / partial / error в каждом ответе.",
          },
        ],
      },
      conclusionLabel: "Главный вывод",
      conclusionSteps: [
        "Маршрутизация",
        "Tool calling",
        "Self-correction",
        "Детерминированные цифры",
        "Evaluation",
        "Прозрачность",
      ],
      conclusion:
        "AI Data Pilot — мультиагентный аналитический пайплайн: LLM отвечают за понимание языка, маршрутизацию и оркестрацию инструментов, а детерминированный код — за безопасность SQL и численные расчёты.\nРезультат — прозрачная и воспроизводимая система: каждый шаг агента наблюдаем, ошибки SQL восстановимы, аналитические цифры детерминированы, а работа проверена 174 автотестами и Golden Set из 30 SQL-сценариев.\nКачество SQL-генерации оценивается Golden Set из 30 кейсов — natural-language → SQL, выполнение и корректность результата, качество поиска измеряется Recall@K и MRR, self-correction учитывается отдельно.",
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
