# События аналитики

События уходят одновременно в **Google Analytics 4** (`gtag('event', …)`) и **Яндекс.Метрику** (`ym(…, 'reachGoal', …)`).

Исходники:

- имена: `src/common/constants/analytics.ts`
- отправка: `src/common/utils/trackAnalytics.ts`

Переменные окружения:

- `NEXT_PUBLIC_YANDEX_METRIKA_ID`
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`

В Яндекс.Метрике для отчётов по целям создайте JavaScript-цели с теми же идентификаторами, что в колонке «Событие» / «Идентификатор» ниже.

Тип цели: **Целевое событие** (ex JS-событие). Условие: **совпадает**.  
Pageview целью не оформляется — это обычные просмотры.

### UserID после заявки

После `contact_form_success` в Метрику и GA4 уходит **UserID** = `SHA-256` от нормализованных `email|phone` (или одного из них). Сырые имя / почта / телефон в аналитику **не** отправляются.

В интерфейсе Метрики отдельный тумблер «включить UserID» обычно **не нужен**: достаточно вызовов `setUserID` + `userParams` в коде (уже есть). Смотреть хеш: **Отчёты → Параметры посетителей** (параметр `UserID`), данные появляются с задержкой до нескольких часов.

Чтобы сопоставить заявку из почты/Telegram с визитом: посчитайте тот же хеш от тех же данных (email lower-case, телефон только цифры) и ищите UserID в отчётах.

В заявках Telegram / Email также уходит **ClientID** Метрики: в Telegram — отдельной строкой `ClientID: …`, в письме — в конце текста сообщения. По этому id можно найти посетителя в разделе «Посетители».

---

## Цели для Яндекс.Метрики (все события)

| Идентификатор | Название цели (пример) | Зачем |
|---------------|------------------------|--------|
| `contact_click` | Клик по контакту | Тел / почта / мессенджер |
| `contact_form_view` | Просмотр формы | Форма на экране |
| `contact_form_start` | Начало заполнения формы | Первое взаимодействие |
| `contact_form_field_focus` | Фокус поля формы | Кликнули в поле |
| `contact_form_service_select` | Выбор услуг | Выбрали услуги в селекте |
| `contact_form_validation_error` | Ошибка валидации формы | Отправка без валидных данных |
| `contact_form_submit` | Отправка формы | Нажали «Отправить» (валидно) |
| `contact_form_success` | Заявка отправлена | Успешная отправка |
| `contact_form_error` | Ошибка отправки формы | Сбой Email/Telegram |
| `cv_view` | Просмотр CV | Открыли резюме |
| `cv_download` | Скачать CV | Скачали резюме |
| `portfolio_filter_click` | Фильтр портфолио | Сменили направление |
| `portfolio_project_open` | Открытие проекта | Клик по карточке |
| `portfolio_screenshot_open` | Скриншот проекта | Клик по картинке |
| `portfolio_demo_open` | Демо проекта | Открыли ссылку на сайт |
| `portfolio_github_open` | GitHub проекта | Открыли репозиторий |
| `blog_filter_click` | Фильтр блога | Сменили тег |
| `blog_post_open` | Открытие статьи | Клик по карточке / «Читать» |
| `blog_search_focus` | Фокус поиска в статье | Кликнули в поиск |
| `blog_search` | Поиск в статье | Ввели запрос |
| `blog_search_navigate` | Навигация по поиску | Enter / стрелки по совпадениям |
| `blog_search_clear` | Очистка поиска | Сбросили запрос |
| `settings_toggle` | Шестерёнка настроек | Открыли / закрыли попап |
| `language_toggle` | Смена языка | RU ↔ EN |
| `theme_toggle` | Смена темы | Светлая / тёмная |
| `like_click` | Лайк | Нажали сердце |
| `weather_open` | Открытие погоды | Модалка погоды |
| `weather_city_select` | Выбор города | Город из списка |
| `weather_search` | Поиск города | Кнопка «Найти» |
| `weather_select` | Выбор типа погоды | Иконка погоды |
| `error_screen_view` | Экран ошибки | Показали 404 / ошибку |
| `error_home_click` | С ошибки на главную | «На главную» |
| `error_reload_click` | Обновить после ошибки | «Обновить» |

**Приоритет (если не все сразу):** `contact_form_success` → `contact_click` → `cv_download` → `portfolio_demo_open` → `blog_post_open`.

---

## Навигация

| Событие | Когда | Параметры |
|---------|--------|-----------|
| *(pageview)* | Клиентский переход Next (`routeChangeComplete`) | `page_path` |

Первый pageview шлёт init счётчиков; повторные — через `trackPageView`.

---

## Контакты и заявка

| Событие | Когда | Параметры |
|---------|--------|-----------|
| `contact_click` | Телефон / email / Telegram / WhatsApp | `channel`, `placement` (`sidebar` \| `contacts_page`) |
| `contact_form_view` | Форма появилась на экране | `source` (`contacts` \| `services`) |
| `contact_form_start` | Первое взаимодействие с формой | `source` |
| `contact_form_field_focus` | Фокус поля (один раз на поле) | `source`, `field` (`name` \| `phone` \| `email` \| `services` \| `message`) |
| `contact_form_service_select` | Выбор услуг («Работа…») | `source`, `services`, `count` |
| `contact_form_validation_error` | Отправка при ошибках валидации | `source`, `fields` |
| `contact_form_submit` | Валидная отправка | `source`, `services?` |
| `contact_form_success` | Успешная отправка | `source`, `services?` |
| `contact_form_error` | Ошибка отправки | `source` |

---

## Резюме (CV)

| Событие | Когда | Параметры |
|---------|--------|-----------|
| `cv_view` | Просмотр CV | — |
| `cv_download` | Скачивание CV | — |

---

## Портфолио

| Событие | Когда | Параметры |
|---------|--------|-----------|
| `portfolio_filter_click` | Фильтр направлений | `filter` (`all` или название направления) |
| `portfolio_project_open` | Клик по карточке проекта | `slug`, `name`, `direction`, `wip` |
| `portfolio_screenshot_open` | Клик по скриншоту на странице проекта | `slug`, `index` |
| `portfolio_demo_open` | Ссылка на демо / сайт | `slug`, `placement` (`meta` \| `button`) |
| `portfolio_github_open` | Ссылка на GitHub | `slug`, `placement` (`meta` \| `button`) |

### Параметры карточки проекта

| Параметр | Описание | Пример |
|----------|----------|--------|
| `slug` | Id в URL (`/portfolio/…`) | `rag-chat` |
| `name` | Название на карточке | `RAG Chat` |
| `direction` | Категория фильтра | `RAG и знания` |
| `wip` | В разработке | `true` / `false` |

---

## Блог

| Событие | Когда | Параметры |
|---------|--------|-----------|
| `blog_filter_click` | Фильтр тегов | `filter` (`all` или тег) |
| `blog_post_open` | Клик по карточке / «Читать» | `slug`, `name`, `tags` |
| `blog_search_focus` | Фокус поиска в статье | `slug` |
| `blog_search` | Запрос (≥2 символа, debounce 600 мс) | `slug`, `query`, `results` |
| `blog_search_navigate` | Enter / стрелки по совпадениям | `slug`, `direction` (`enter` \| `prev` \| `next`), `match`, `results` |
| `blog_search_clear` | Очистка поиска (× или Esc) | `slug` |

---

## Настройки и погода

| Событие | Когда | Параметры |
|---------|--------|-----------|
| `settings_toggle` | Шестерёнка настроек | `open` (`true` \| `false`) |
| `language_toggle` | Переключение RU / EN | `to` (`ru` \| `en`) |
| `theme_toggle` | Переключение темы | `theme` (`light` \| `dark`) |
| `like_click` | Лайк | `likes` (новое значение) |
| `weather_open` | Открытие модалки погоды | `city`, `region`, `country`, `lat`, `lon` |
| `weather_city_select` | Выбор города из списка | `city` |
| `weather_search` | Кнопка «Найти» | `city` |
| `weather_select` | Выбор типа погоды вручную | `climate` |

Возможные значения `climate`: `sunnyMoon`, `cloudyWithSunMoon`, `cloudy`, `rainy`, `cloudyWithRainAndLightning`, `snowy`.

---

## Ошибки (404 / `_error` / ErrorBoundary)

| Событие | Когда | Параметры |
|---------|--------|-----------|
| `error_screen_view` | Показ экрана ошибки | `status_code`, `path`, `type` (`404` \| `error`) |
| `error_home_click` | «На главную» | `status_code`, `type` |
| `error_reload_click` | «Обновить» (не на 404) | `status_code` |

---

## Сводка

| Категория | Кол-во |
|-----------|--------|
| Контакты и заявка | 9 |
| Резюме | 2 |
| Портфолио | 5 |
| Блог | 6 |
| Настройки и погода | 8 |
| Ошибки | 3 |
| Pageview | 1 |
| **Всего** | **33 именованных + pageview** |
