import ErrorScreen from "src/widgets/ErrorScreen";

// Кастомная 404 в стиле сайта (вместо дефолтной белой страницы Next).
export default function NotFoundPage() {
  return <ErrorScreen statusCode={404} />;
}
