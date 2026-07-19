import React from "react";

// Фирменные иконки мессенджеров и профилей (fill/stroke: currentColor —
// красятся цветом родителя). Переиспользуются в сайдбаре и разделе «Контакты».

export const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M21.9 4.3 3.3 11.5c-1.1.4-1.1 1.6-.1 1.9l4.7 1.5 1.8 5.6c.2.5.4.8.9.8.3 0 .6-.2.9-.5l2.4-2.3 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.4-1.8-1.4-1.4Zm-3.4 3.4-8.3 7.6c-.1.1-.2.3-.2.4l-.3 2.8c0 .1-.2.1-.2 0l-1.4-4.6 9.9-6.4c.4-.3.9.2.5.5v.1Z" />
  </svg>
);

export const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.4-3c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.1-.4 3.4a11 11 0 0 0 4.9 4.6c1.7.7 2.4.8 3.3.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3Z" />
  </svg>
);

export const SkypeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.6 13.6a8.9 8.9 0 0 0 .1-5.4 6 6 0 0 0-6.9-6.9 8.9 8.9 0 0 0-8.6 1 6 6 0 0 0-1.9 8 8.9 8.9 0 0 0-.1 5.4 6 6 0 0 0 6.9 6.9 8.9 8.9 0 0 0 8.6-1 6 6 0 0 0 1.9-8Zm-8.5 5c-2.9 0-4.9-1.5-4.9-3.1 0-.7.5-1.1 1.1-1.1 1.4 0 1.4 2 3.9 2 1.2 0 2-.6 2-1.3 0-.8-.7-1-1.9-1.3l-1.7-.4c-2-.5-2.9-1.5-2.9-3.1 0-2 1.9-3.3 4.5-3.3 2.5 0 4.6 1.1 4.6 2.7 0 .7-.5 1.1-1.2 1.1-1.2 0-1.2-1.6-3.6-1.6-1.3 0-1.9.5-1.9 1.2 0 .7.8 1 1.7 1.2l1.3.3c2.2.5 3.4 1.4 3.4 3.2 0 2.1-1.9 3.5-4.7 3.5Z" />
  </svg>
);

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" />
  </svg>
);

export const HhIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <text
      x="12"
      y="15.5"
      textAnchor="middle"
      fontSize="9"
      fontWeight="700"
      fill="currentColor"
    >
      hh
    </text>
  </svg>
);

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="m4 7 8 6 8-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MESSENGER_ICON: Record<string, JSX.Element> = {
  Telegram: <TelegramIcon />,
  WhatsApp: <WhatsAppIcon />,
  Skype: <SkypeIcon />,
};

export const PROFILE_ICON: Record<string, JSX.Element> = {
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
  "hh.ru": <HhIcon />,
};
