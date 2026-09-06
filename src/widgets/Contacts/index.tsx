import React from "react";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";
import { Reveal } from "src/ui/Reveal";
import ContactForm from "src/components/ContactForm";
import RunBorder from "src/ui/RunBorder";
import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  CONTACT_MESSENGERS,
} from "src/common/constants/contacts";
import {
  MESSENGER_ICON,
  PhoneIcon,
} from "src/common/icon/socialIcons";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { usePressAnimation } from "src/common/lib/usePressAnimation";
import { AnalyticsEvent } from "src/common/constants/analytics";

import {
  HeroSection,
  HeroTitle,
  HeroRole,
  HeroText,
  HeroChips,
  HeroSubtitle,
  SectionHead,
  SectionIcon,
  SectionTitle,
  HelpSection,
  HelpGrid,
  HelpCard,
  HelpTitle,
  HelpText,
  HelpPipeline,
  HelpChip,
  PracticeSection,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  StatNote,
  DiscussSection,
  DiscussText,
  Intro,
  ContactBlock,
  Links,
  LinkItem,
  FormCard,
} from "./style";

const HelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M9.6 9a2.5 2.5 0 0 1 4.9.7c0 1.6-2.5 2.1-2.5 3.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 16.8h.01"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const PracticeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 20v-6M12 20V6M19 20v-9M3 20h18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const DiscussIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M4 6h16v12H4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Шапка секции: иконка в плашке + капс-заголовок.
const Head = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <SectionHead>
    <SectionIcon>{icon}</SectionIcon>
    <SectionTitle>{title}</SectionTitle>
  </SectionHead>
);

const MailIcon = () => (
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

// Ссылка-контакт с анимацией нажатия (как кнопки проекта): закраска
// доигрывает до конца при коротком тапе, при удержании — держится,
// плюс продавливание scale(0.94).
const PressableLinkItem: React.FC<{
  href: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}> = ({ href, onClick, target, rel, children }) => {
  const press = usePressAnimation();
  return (
    <LinkItem
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      $pressed={press.pressed}
      {...press.pressHandlers}
    >
      {children}
    </LinkItem>
  );
};

const Contacts = () => {
  const {
    lang: { propsHeaderTopMenu, contactsPage },
  } = useSelectorTyped(({ lang }) => lang);

  const title =
    propsHeaderTopMenu.find((item) => item.value === "contacts")?.label ?? "";

  return (
    <Article>
      <Reveal as="header">
        <ArticleTitle>{title}</ArticleTitle>
      </Reveal>

      {/* Hero: заголовок, роль, тезис, направления, подзаголовок */}
      <Reveal as={HeroSection} delay={60}>
        <HeroTitle>{contactsPage.hero.title}</HeroTitle>
        <HeroRole>{contactsPage.hero.role}</HeroRole>
        <HeroText>{contactsPage.hero.text}</HeroText>
        <HeroChips>{contactsPage.hero.chips}</HeroChips>
        <HeroSubtitle>{contactsPage.hero.subtitle}</HeroSubtitle>
      </Reveal>

      {/* What can I help with — сетка 2×3 */}
      <HelpSection>
        <Reveal>
          <Head icon={<HelpIcon />} title={contactsPage.helpTitle} />
        </Reveal>
        <HelpGrid>
          {contactsPage.help.map((item, i) => (
            <Reveal as={HelpCard} key={item.title} delay={i * 60}>
              <HelpTitle>{item.title}</HelpTitle>
              <HelpText>{item.text}</HelpText>
              {item.pipeline && item.pipeline.length > 0 && (
                <HelpPipeline>
                  {item.pipeline.map((step, j) => (
                    <React.Fragment key={step}>
                      <HelpChip>{step}</HelpChip>
                      {j < item.pipeline.length - 1 && (
                        <span className="arrow">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </HelpPipeline>
              )}
            </Reveal>
          ))}
        </HelpGrid>
      </HelpSection>

      {/* AI Engineering in practice — доказательства в одну строку */}
      <PracticeSection>
        <Reveal>
          <Head icon={<PracticeIcon />} title={contactsPage.practiceTitle} />
        </Reveal>
        <StatsGrid>
          {contactsPage.stats.map((stat, i) => (
            <Reveal as={StatCard} key={stat.label} delay={i * 60}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
              <StatNote>{stat.note}</StatNote>
            </Reveal>
          ))}
        </StatsGrid>
      </PracticeSection>

      {/* Let's discuss your task — подводка к контактам и форме */}
      <DiscussSection>
        <Reveal>
          <Head icon={<DiscussIcon />} title={contactsPage.discuss.title} />
        </Reveal>
        {contactsPage.discuss.texts.map((text, i) => (
          <Reveal key={i}>
            <DiscussText>{text}</DiscussText>
          </Reveal>
        ))}
      </DiscussSection>

      {/* Блок контактов и формы */}
      <Reveal>
        <Head icon={<SendIcon />} title={contactsPage.contactTitle} />
      </Reveal>

      <Reveal as={Intro} delay={90}>
        {contactsPage.intro}
      </Reveal>


      {/* Контакты — один ряд кнопок во всю ширину (на мобильных друг под другом) */}
      <Reveal as={ContactBlock} delay={180}>
        <Links>
          {CONTACT_PHONES.map((phone) => (
            <PressableLinkItem
              key={phone.href}
              href={phone.href}
              onClick={() =>
                trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                  channel: "phone",
                  placement: "contacts_page",
                })
              }
            >
              <PhoneIcon />
              {phone.label}
              <RunBorder radius={12} />
            </PressableLinkItem>
          ))}

          <PressableLinkItem
            href={CONTACT_EMAIL.href}
            onClick={() =>
              trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                channel: "email",
                placement: "contacts_page",
              })
            }
          >
            <MailIcon />
            {CONTACT_EMAIL.label}
            <RunBorder radius={12} />
          </PressableLinkItem>

          {CONTACT_MESSENGERS.map((item) => (
            <PressableLinkItem
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                  channel: item.label.toLowerCase(),
                  placement: "contacts_page",
                })
              }
            >
              {MESSENGER_ICON[item.label]}
              {item.label}
              <RunBorder radius={12} />
            </PressableLinkItem>
          ))}
        </Links>
      </Reveal>

      <Reveal as={FormCard} delay={80}>
        <ContactForm embedded />
      </Reveal>
    </Article>
  );
};

export default Contacts;
