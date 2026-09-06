import type {
  MenuIconName,
  AdvantageIconName,
} from "src/common/lib/iconRegistry";

// Иконки хранятся строковыми ключами (см. src/common/lib/iconRegistry):
// словари сериализуются в __NEXT_DATA__ при SSR, React-элементы в JSON
// не переживают.
export interface HeaderTopMenuProps {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: MenuIconName;
}

export interface AdvantagesProps {
  id: string;
  title: string;
  label: string;
  value: string;
  icon: AdvantageIconName;
}

export interface BlogProps {
  title: string;
  buttonText: string;
  blogTitle: string;
  blogText: string;
  blogDataTime: string;
  portfolioNameList: string;
  portfolioTextTitle: string;
  portfolioText: string;
  blogTitleTag: string;
  all: string;
  filter: string;
  readMore: string;
  readTimeUnit: string;
  searchPlaceholder: string;
}

export interface PortfolioListBlogProps {
  id: string;
  hrefPortfolio: string;
  portfolioNameList: string;
  portfolioDataTime: string;
  icon: string;
  widthIcon: string;
  heightIcon: string;
  hrefNameList: string;
  technologies: string[];
  github?: string;
  portfolioText: string;
  textBlogHeader: string;
  body?: string[];
}

export interface CooperationProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

export interface FooterProps {
  text: string;
  buttonText: string;
  clock: string;
  telephone: string;
  headHunter: string;
}

export interface ContactFormProps {
  title: string;
  buttonText: string;
  fullName: string;
  placeholderName: string;
  phone: string;
  placeholderPhone: string;
  mail: string;
  placeholderMail: string;
  message: string;
  placeholderMessage: string;
  services: string;
  services1: string;
  services2: string;
  services3: string;
  services4: string;
  services5: string;
  formDescriptionName: string;
  formDescriptionEmail: string;
  formDescriptionPhone: string;
  errorDescriptionName: string;
  errorDescriptionPhoneLength: string;
  errorDescriptionPhoneOperator: string;
  errorDescriptionEmailLength: string;
  errorDescriptionEmailValidate: string;
  customValidityName: string;
  customValidityPhone: string;
  customValidityEmail: string;
}

export interface ModalProps {
  title: string;
  buttonText: string;
  fullName: string;
  fullNameLabel: string;
  phone: string;
  phoneLabel: string;
  services: string;
  servicesNull: string;
  services1: string;
  services2: string;
  services3: string;
  services4: string;
  services5: string;
  mail: string;
  mailLabel: string;
  time: string;
  timeValue1: string;
  timeValue2: string;
  timeValue3: string;
  exercise: string;
  exerciseValue2: string;
  exerciseValue1: string;
  money: string;
  cooperation: string;
  text: string;
  textLabel: string;
}

export interface OrderProps {
  text: string;
  buttonText: string;
  orderItems: string[];
}

// Карточка статистики на странице /profile.
export interface PersonalStatProps {
  value: string;
  label: string;
}

// Группа пунктов/чипов с заголовком (разделы страницы /profile).
export interface PersonalGroupProps {
  title: string;
  items: string[];
}

// Карточка «Что я создаю»: заголовок, описание, чипы или пайплайн, сноска.
export interface PersonalCreateCardProps {
  title: string;
  text: string;
  items?: string[];
  pipeline?: string[];
  footnote?: string;
}

// Продукт на странице /profile: краткая карточка — что делает, как устроен,
// главный результат и стек.
export interface PersonalProductProps {
  name: string;
  // Slug страницы портфолио: заголовок карточки становится ссылкой
  // на /portfolio/<href>.
  href?: string;
  tagline: string;
  paragraphs: string[];
  result: string;
  stack: { label: string; items: string[] };
}

// Принцип работы с номером.
export interface PersonalPrincipleProps {
  num: string;
  title: string;
  text: string;
}

// Страница /profile: секции и контент.
export interface PersonalProfilePageProps {
  hero: { role: string; tagline: string };
  stats: PersonalStatProps[];
  about: { title: string; items: string[] };
  create: { title: string; cards: PersonalCreateCardProps[] };
  products: { title: string; items: PersonalProductProps[] };
  approach: {
    title: string;
    intro: string;
    principles: {
      num: string;
      title: string;
      text: string;
      items?: string[];
    }[];
    // Инженерный цикл в конце раздела — цепочка шагов без пояснительного текста.
    cycle: { title: string; steps: string[] };
  };
  // End-to-End Engineering — одна строка-пайплайн и одно предложение.
  engineering: { title: string; steps: string[]; text: string };
  stack: { title: string; groups: PersonalGroupProps[] };
  growth: { title: string; chips: string[]; text: string };
}

export interface PersonalProps {
  title: string;
  titleText: string;
  text1: string;
  text2: string;
  text3: string;
  stackTitle: string;
  stack: string[];
  page: PersonalProfilePageProps;
}

export interface PortfolioProps {
  title: string;
  buttonText: string;
  portfolioNameList: string;
  portfolioTextTitle: string;
  portfolioText: string;
  all: string;
  filter: string;
  wip: string;
  likeLabel: string;
  // ——— Новые разделы /portfolio ———
  // Hero: роль, позиционирование, строка направлений.
  hero: { role: string; title: string; chips: string };
  // Короткое интро перед карточками.
  intro: string;
  // AI-инжиниринг в цифрах — trust-блок (те же цифры, что на /profile).
  numbersTitle: string;
  stats: { value: string; label: string; note: string }[];
  // Избранные проекты.
  featuredTitle: string;
  // Подпись ссылки на кейс в карточке.
  caseLink: string;
  // Engineering Focus — карта специализации.
  focusTitle: string;
  focus: { title: string; items: string }[];
  // Research & Experiments — проекты в разработке.
  researchTitle: string;
}

// ——— Инженерный разбор AI-проекта (секция «взгляд AI-инженера») ———
// Переиспользуемая структура: чек-лист принципов + таблицы замеров + выводы.
// Заполняется не для всех проектов — секция рендерится только если задана.

// Статус закрытия принципа в конкретном проекте.
export type AiEngineeringStatus = "done" | "partial" | "todo";

export interface AiEngineeringPrinciple {
  // Название принципа («Метрики успеха до кода»)
  title: string;
  // Что именно проверяем (формулировка принципа)
  check: string;
  // Как принцип закрыт (или не закрыт) в этом проекте — с числами.
  // Для кратких принципов (5 штук) может не заполняться.
  result?: string;
  status?: AiEngineeringStatus;
}

export interface AiEngineeringTable {
  // Заголовок таблицы («Качество поиска — 24 golden-вопроса»)
  title: string;
  columns: string[];
  // cells[0] — имя строки; highlight — подсветить как конфигурацию по умолчанию
  rows: { cells: string[]; highlight?: boolean }[];
  footnote?: string;
}

// ——— Схема проекта: вертикальный поток «дорожек» с нодами-компонентами ———
export interface AiDiagramNode {
  // Название компонента («Гибрид BM25 + RRF»)
  label: string;
  // Пояснение мелким текстом («опциональный реранкер»)
  note?: string;
  // Ключевой компонент — оранжевая рамка
  accent?: boolean;
}

export interface AiDiagramLane {
  // Слой схемы («API — FastAPI», «RAG-ядро»)
  title: string;
  nodes: AiDiagramNode[];
}

// ——— Сценарии применения: зачем проект нужен в реальных задачах ———
export interface AiUseCase {
  // Сценарий («База знаний компании», «Нормы СНиП / ГОСТ»)
  title: string;
  // Что приложение делает в этом сценарии и какой эффект даёт
  detail: string;
}

export interface AiEngineeringProps {
  // Заголовок всей секции («Взгляд AI-инженера»)
  sectionTitle: string;
  // Вводный абзац: зачем секция и что за методика
  intro: string;
  // Для чего нужен проект: ценность одним абзацем + сценарии применения
  useCasesTitle?: string;
  useCasesListTitle?: string;
  useCasesIntro?: string;
  useCases?: AiUseCase[];
  principlesTitle: string;
  principles: AiEngineeringPrinciple[];
  metricsTitle: string;
  tables: AiEngineeringTable[];
  // Схема системы: дорожки сверху вниз (фронтенд → API → ядро → хранилища…)
  diagramTitle?: string;
  diagram?: AiDiagramLane[];
  diagramNote?: string;
  // ASCII-схема архитектуры из README репозитория (клиент ↔ API ↔ модули)
  architectureTitle?: string;
  architecture?: string;
  // Находки, полученные из замеров (главные инженерные уроки)
  findingsTitle?: string;
  findings?: string[];
  // Честные пробелы — что осталось сделать
  gapsTitle?: string;
  gaps?: string[];
  // Итоговый вывод секции. Перенос строки \n = отдельная строка-акцент.
  conclusion?: string;
  // Подпись над выводом («Главный вывод») — помечает карточку как ключевую
  conclusionLabel?: string;
  // Этапы цикла — рендерятся цепочкой шагов со стрелками над текстом вывода
  conclusionSteps?: string[];
  // Примечание о воспроизводимости/условиях замеров
  footnote?: string;
  // Production & Reliability — надёжность и эксплуатация в проде
  production?: {
    title: string;
    items: { title: string; text: string }[];
  };
  // Пайплайны вертикальными цепочками шагов (агенты / RAG)
  pipelinesTitle?: string;
  // Строка над цепочками («Авто-роутер → Олег / Ксюша»)
  routerLine?: string;
  pipelines?: { title: string; steps: string[] }[];
  // Callout «Deterministic analytics»: цепочка + примечание
  deterministic?: {
    title: string;
    lead: string;
    steps: string[];
    note: string;
  };
  // Цепочка self-correction с примечанием
  selfCorrection?: {
    title: string;
    steps: string[];
    note: string;
  };
}

export interface PortfolioListProps {
  id: string;
  hrefPortfolio: string;
  portfolioNameList: string;
  portfolioDataTime: string;
  icon: string;
  widthIcon: string;
  heightIcon: string;
  hrefNameList: string;
  technologies: string[];
  github?: string;
  portfolioText: string;
  // Список ключевых возможностей — рендерится буллетами (компактнее сплошного
  // текста). Каждый пункт может начинаться с эмодзи.
  features?: string[];
  screenshots?: string[];
  // Инженерный разбор: чек-лист AI-инженера + замеры + выводы.
  aiEngineering?: AiEngineeringProps;
  // Тематическая обложка карточки в списке: в светлой теме — thumbLight,
  // в тёмной — thumbDark. Заданы оба или ни одного; без них — screenshots[0].
  thumbLight?: string;
  thumbDark?: string;
  // У проекта включены лайки (сердечко+число на карточке, кнопка на странице).
  likeable?: boolean;
  direction: string;
  wip?: boolean;
  // Короткое описание и ключевые метрики для карточки в списке /portfolio.
  cardDescription?: string;
  cardMetrics?: string[];
  // Первый экран страницы проекта: тизер и строка ключевых метрик.
  tagline?: string;
  metricsLine?: string;
  // Key results — стена цифр сразу после первого экрана.
  keyResultsTitle?: string;
  keyResults?: { value: string; label: string }[];
  // Расшифровка покрытия и честное ограничение под карточками.
  keyResultsNote?: string;
  keyResultsLimitation?: string;
  // Продуктовые возможности — вторым списком после AI-возможностей.
  productFeaturesTitle?: string;
  productFeatures?: string[];
}

export interface PortfolioHeaderProps {
  home: string;
  textPortfolio: string;
  textNotes: string;
  textValueBlog: string;
  date: string;
  technology: string;
  linkGithub: string;
  link: string;
  features: string;
}

export interface ResumeProps {
  title: string;
  headerStatus: string;
  status: string;
  headerFIO: string;
  FIO: string;
  headerSpecialization: string;
  specialization: string;
  headerSkills: string;
  headerWorkExperience: string;
  workExperience: string;
  headerEducation: string;
  education1: string;
  education2: string;
  headerQuality: string;
  quality: string;
}

// Страница /services: строка «направление → технологии» в карточке услуги.
export interface ServiceTechRowProps {
  label: string;
  value: string;
}

// Услуга — карточка с номером; все блоки кроме номера и заголовка опциональны,
// т.к. у каждой услуги свой состав (список, пайплайн, строки стека, сноски).
export interface ServiceItemProps {
  num: string;
  title: string;
  text: string;
  listTitle?: string;
  list?: string[];
  // Цепочка шагов (Natural Language → SQL → …) — рендерится чипами.
  pipeline?: string[];
  extraListTitle?: string;
  extraList?: string[];
  rows?: ServiceTechRowProps[];
  footnote?: string;
  footnote2?: string;
  techNote?: string;
}

// Шаг процесса «Как я работаю».
export interface ServiceStepProps {
  num: string;
  title: string;
  text: string;
}

// Пункт «Что получает заказчик».
export interface ServiceResultProps {
  title: string;
  text: string;
}

export interface ServiceProps {
  hero: { role: string; tagline: string; subtitle: string };
  services: ServiceItemProps[];
  process: { title: string; steps: ServiceStepProps[]; cycle: string[] };
  results: { title: string; items: ServiceResultProps[] };
  cta: {
    title: string;
    texts: string[];
    linkLabel: string;
    href: string;
    // Ссылки на кейсы-доказательства в CTA-карточке.
    casesLabel?: string;
    cases?: { name: string; href: string }[];
  };
}

export interface ToastProps {
  textHeart: string;
  messageText: string;
  textError: string;
}

export interface ListBlogSecondProps {
  id: string;
  portfolioButtonText: string;
  value: string;
}

export interface ListBlogProps {
  id: string;
  portfolioButtonText: string;
  value: string | ListBlogSecondProps[];
}

export interface ClimateProps {
  title: string;
  placeholder: string;
  buttonText: string;
  geoButtonTitle: string;
  geoDeniedToast: string;
  geoErrorToast: string;
  titleSelectWeather: string;
  titleToast: string;
  temperatureFeeling: string;
  humidity: string;
  wind: string;
  pressure: string;
  pressureValue: string;
  speed: string;
}

export interface AlertHeartProps {
  title: string;
  text: string;
  textSecondary: string;
  buttonText: string;
}

export interface HappyHolidaysProps {
  text: string;
}

export interface AboutHighlightProps {
  id: string;
  title: string;
  text: string;
}

export interface ResumeSkillGroupProps {
  id: string;
  category: string;
  items: string[];
}

export interface ResumeExperienceGroupProps {
  title?: string;
  items: string[];
}

/* Описание проекта внутри записи опыта: заголовок (название проекта, к нему
   рисуется оранжевая линия), определение (text) и подписанные строки деталей
   (details) — RAG pipeline, Архитектура, агенты и т.п. */
export interface ResumeProjectDetailProps {
  // Короткая метка строки — рендерится капсом, тоном тише текста.
  label: string;
  text: string;
}

export interface ResumeProjectDescriptionProps {
  title: string;
  // Определение проекта — первый абзац под заголовком.
  text: string;
  // Детали проекта — подписанные строки под определением.
  details?: ResumeProjectDetailProps[];
}

/* Внешняя ссылка демо записи опыта: название продукта и адрес сайта. */
export interface ResumeLinkProps {
  name: string;
  url: string;
}

/* Ключевые результаты записи по проекту: карточка внутри общей секции
   «Ключевые результаты» — заголовок с оранжевой линией и список пунктов. */
export interface ResumeResultGroupProps {
  title: string;
  items: string[];
}

export interface ResumeExperienceProps {
  id: string;
  role: string;
  company?: string;
  // Пояснение под компанией в шапке записи (кто такой работодатель).
  companyNote?: string;
  period?: string;
  meta?: string;
  summary?: string;
  // Описания проектов записи — отдельные блоки: заголовок с оранжевой
  // линией слева + абзацы описания через «\n». Описания соседних проектов
  // не смешиваются.
  projectDescriptions?: ResumeProjectDescriptionProps[];
  // Ключевые результаты по проектам — карточками внутри общей секции
  // с заголовком resultTitle.
  resultGroups?: ResumeResultGroupProps[];
  // Стек по проектам — карточками внутри общей секции со заголовком
  // stackTitle (название проекта + чипы технологий).
  stackGroups?: ResumeResultGroupProps[];
  // Демо записи: похожие проекты из портфолио. В конце карточки выводим
  // секцию «Демо» со списком ссылок на их страницы /portfolio/<hrefNameList>.
  portfolioIds?: string[];
  // Внешняя ссылка на просмотр проекта записи (в конце карточки, секция
  // «Демо»: название продукта — адрес сайта).
  link?: ResumeLinkProps;
  groups?: ResumeExperienceGroupProps[];
  // Стек и процессы записи опыта — подпись + список (рендерятся чипами).
  stack?: ResumeExperienceGroupProps;
  processes?: ResumeExperienceGroupProps;
}

export interface ResumeEducationProps {
  id: string;
  title: string;
  period: string;
  text?: string;
}

export interface ResumeCvProps {
  experienceTitle: string;
  skillsTitle: string;
  educationTitle: string;
  // Заголовок секции «Демо» — ссылки на проекты записи.
  demoTitle: string;
  // Общий заголовок секции ключевых результатов (карточки по проектам).
  resultTitle: string;
  // Общий заголовок секции стека (карточки по проектам).
  stackTitle: string;
  // Заголовок секции описаний проектов записи.
  projectsTitle: string;
  downloadName: string;
  downloadLabel: string;
  viewLabel: string;
  experience: ResumeExperienceProps[];
  skills: ResumeSkillGroupProps[];
  education: ResumeEducationProps[];
}

export interface SidebarProps {
  name: string;
  jobTitle: string;
  // Расшифровка названия сайта под знаком LYAK⊙WAY (подсказка при наведении).
  brandTagline: string;
  settings: string;
  emailTitle: string;
  phoneTitle: string;
  messengersTitle: string;
  locationTitle: string;
  location: string;
}

export interface ErrorPageProps {
  errorLabel: string;
  notFoundTitle: string;
  notFoundNote: string;
  genericTitle: string;
  genericNote: string;
  homeCta: string;
  reloadCta: string;
}

export interface LanguageProps {
  propsPortfolioListBlog: PortfolioListBlogProps[];
  portfolioDevelopment: ListBlogProps[];
  propsPortfolioList: PortfolioListProps[];
  propsHeaderTopMenu: HeaderTopMenuProps[];
  portfolioListBlog: ListBlogProps[];
  propsAdvantages: AdvantagesProps[];
  portfolioHeader: PortfolioHeaderProps;
  advantagesText: string;
  contactForm: ContactFormProps;
  happyHolidays: HappyHolidaysProps;
  sidebar: SidebarProps;
  aboutHighlightsTitle: string;
  aboutHighlights: AboutHighlightProps[];
  resumeCv: ResumeCvProps;
  cooperation: CooperationProps;
  portfolio: PortfolioProps;
  personal: PersonalProps;
  service: ServiceProps;
  climateLang: ClimateProps;
  alertHeart: AlertHeartProps;
  resume: ResumeProps;
  footer: FooterProps;
  toast: ToastProps;
  order: OrderProps;
  modal: ModalProps;
  blog: BlogProps;
  contactsPage: ContactsPageProps;
  error: ErrorPageProps;
  name: "russia" | "english";
}

export interface ContactsPageProps {
  // Новые разделы сверху страницы.
  hero: {
    title: string;
    role: string;
    text: string;
    chips: string;
    subtitle: string;
  };
  helpTitle: string;
  // Направления в одном-двух предложениях — без повторения /services.
  help: { title: string; text: string; pipeline?: string[] }[];
  practiceTitle: string;
  // Доказательства — те же цифры, что на /profile, коротким trust-блоком.
  stats: { value: string; label: string; note: string }[];
  // Подводка к существующему блоку контактов и форме.
  discuss: {
    title: string;
    texts: string[];
  };
  // Заголовок блока контактов и формы.
  contactTitle: string;
  // Существующий низ страницы — не меняем.
  intro: string;
  profilesTitle: string;
}
