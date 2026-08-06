# События аналитики

События уходят одновременно в **Google Analytics 4** (`gtag('event', …)`) и **Яндекс.Метрику** (`ym(…, 'reachGoal', …)`).

Исходники:

- имена: `src/common/constants/analytics.ts`
- отправка: `src/common/utils/trackAnalytics.ts`

Переменные окружения:

- `NEXT_PUBLIC_YANDEX_METRIKA_ID`
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`

В Яндекс.Метрике для отчётов по целям создайте JavaScript-цели с теми же идентификаторами, что в колонке «Событие».

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
| `contact_click` | Телефон / email / Telegram / WhatsApp | `channel`, `placement` (`sidebar` \| `header` \| `contacts_page`) |
| `cta_order_click` | CTA «заказать» → модалка формы | — |
| `contact_form_view` | Форма появилась на экране | `source` (`modal` \| `contacts` \| `services`) |
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
| `blog_post_open` | Клик по карточке / «Читать» | `slug`, `name`, `tags`, `wip` |
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
| Контакты и заявка | 10 |
| Резюме | 2 |
| Портфолио | 5 |
| Блог | 6 |
| Настройки и погода | 8 |
| Ошибки | 3 |
| Pageview | 1 |
| **Всего** | **35 именованных + pageview** |
