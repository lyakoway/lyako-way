import {
  AgentIcon,
  RagIcon,
  QualityIcon,
  IntegrationIcon,
  EndToEndIcon,
  OptimizationIcon,
} from "src/common/icon/advantages/serviceIcons";

import { AdvantagesProps } from "src/common/types/lang";

export const advantagesText = "Что я делаю";

export const propsAdvantages: AdvantagesProps[] = [
  {
    id: "1",
    title: "AI-агенты и оркестрация",
    label:
      "Проектирую AI-агентов под реальные бизнес-сценарии: workflow, function / tool calling, оркестрация мульти-агентных систем, обработка ошибок и восстановление после сбоев.",
    value: "Agents",
    icon: <AgentIcon />,
  },
  {
    id: "2",
    title: "RAG и работа со знаниями",
    label:
      "Строю RAG-системы: подключаю базы знаний и векторный поиск, чтобы модель отвечала точно и по вашим данным, а не «из головы».",
    value: "Rag",
    icon: <RagIcon />,
  },
  {
    id: "3",
    title: "Промпт-инжиниринг и качество",
    label:
      "Разрабатываю и итеративно улучшаю промпт-сценарии, формирую evaluation-наборы и тестирую решения на точность, стабильность и edge cases.",
    value: "Quality",
    icon: <QualityIcon />,
  },
  {
    id: "4",
    title: "Интеграция LLM в продукт",
    label:
      "Внедряю большие языковые модели в существующие продукты через API: надёжный backend на Python / FastAPI, безопасная и предсказуемая работа.",
    value: "Integration",
    icon: <IntegrationIcon />,
  },
  {
    id: "5",
    title: "End-to-end разработка",
    label:
      "Собираю решение целиком — от интерфейса (React / Next) до backend и инфраструктуры (Docker, Kubernetes, CI/CD). Бэкграунд Senior Frontend помогает довести продукт до конца.",
    value: "EndToEnd",
    icon: <EndToEndIcon />,
  },
  {
    id: "6",
    title: "Оптимизация и поддержка",
    label:
      "Оптимизирую задержки и токен-бюджет, слежу за качеством ответов в production и оперативно дорабатываю решение по мере роста нагрузки и задач.",
    value: "Optimization",
    icon: <OptimizationIcon />,
  },
];
