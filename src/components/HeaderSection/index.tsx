import React, { useCallback } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import {
  HeaderSectionWrapper,
  HeaderContactWrapper,
  HeaderSectionFon,
  HeaderSectionGetsite,
  HeaderSectionContacts,
  HeaderSectionConteiner,
  HeaderSectionLabel,
  Phones,
  PhonesConteiner,
  PhonesNumber,
  PhonesText,
  PhonesTextDivide,
  PhonesTextWrapper,
  Emails,
  ContactsText,
  IconComp,
  IconMap,
  IconBook,
  NewYear,
  IconCompImage,
  CodeScreen,
  CodeLineRow,
  CodeToken,
  CodeCaret,
  CODE_LINES,
  CODE_COLORS,
  Steam,
  SteamWisp,
  MonitorScreen,
  MonitorGlare,
  MonitorLoader,
  MonitorLoaderFill,
} from "./style";

import Clock from "src/components/Clock";
import Window from "src/components/Window";

import myIconComp from "src/common/icon/icon-header/comp.png";
import myIconCompn from "src/common/icon/icon-header/compn.png";

import { ReactComponent as RocketGetsiteIcon } from "src/common/icon/rocket/RocketIcon.svg";
import { ReactComponent as PhonesIcon } from "src/common/icon/contacts/PhonesIcon.svg";
import { ReactComponent as EmailsIcon } from "src/common/icon/contacts/EmailsIcon.svg";

import Button from "src/ui/Button";
import LampSwitch from "src/ui/LampSwitch";

import { showModal } from "src/reducers";
import ContactForm from "src/components/ContactForm";
import { isNewYearPeriod } from "src/common/utils/isNewYearPeriod";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";
import { NewYearTree } from "src/components/NewYearTree";

// Анимированная сцена рабочего стола (стол, монитор, часы, окно, полка с
// книгами). Сайд-эффекты (лайки, погода→климат, гео→язык) вынесены в
// useAutoLocaleClimate (вызывается в Layout).
// hideContacts — режим «Дом» внутри оболочки vCard: контакты уже есть
// в сайдбаре, поэтому колонку контактов скрываем, оставляя только CTA.
const HeaderSection = ({ hideContacts = false }: { hideContacts?: boolean }) => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const {
    lang: { headerHouse },
  } = useSelectorTyped(({ lang }) => lang);
  const themeLight = name === "light";

  const dispatch = useDispatchTyped();

  const showTree = isNewYearPeriod();

  const handleClickModal = useCallback(() => {
    trackEvent(AnalyticsEvent.CTA_ORDER_CLICK);
    dispatch(
      showModal({
        content: <ContactForm />,
      })
    );
  }, [dispatch]);

  return (
    <HeaderSectionWrapper>
      <HeaderSectionFon>
        {showTree && (
          <NewYear>
            <NewYearTree themeLight={themeLight} />
          </NewYear>
        )}
        <IconComp>
          {/* Оба слоя рендерятся всегда; какой виден — решает html[data-theme]
              через CSS (верная тема с первой отрисовки, без ожидания JS).
              Светлая — LCP: priority => next вставит preload + fetchpriority. */}
          <IconCompImage
            src={myIconComp}
            alt=""
            aria-hidden
            fill
            sizes="697px"
            priority
            fetchPriority="high"
          />
          <IconCompImage
            src={myIconCompn}
            alt=""
            aria-hidden
            fill
            sizes="697px"
            $dark
          />
          <LampSwitch />
          <CodeScreen aria-hidden $themeLight={themeLight}>
            {CODE_LINES.map((line, i) => (
              <CodeLineRow
                key={i}
                $start={i * 5}
                $end={i * 5 + 4}
                $themeLight={themeLight}
                style={{ marginLeft: line.indent }}
              >
                {line.tokens.map(([color, w], j) => (
                  <CodeToken key={j} $color={CODE_COLORS[color]} $w={w} />
                ))}
                {line.caret && <CodeCaret />}
              </CodeLineRow>
            ))}
          </CodeScreen>
          <MonitorScreen aria-hidden $themeLight={themeLight}>
            <MonitorGlare $themeLight={themeLight} />
            <MonitorLoader>
              <MonitorLoaderFill $themeLight={themeLight} />
            </MonitorLoader>
          </MonitorScreen>
          <Steam aria-hidden $themeLight={themeLight}>
            <SteamWisp $left={8} $delay={0} $themeLight={themeLight} />
            <SteamWisp $left={50} $delay={1} $themeLight={themeLight} />
            <SteamWisp $left={92} $delay={2} $themeLight={themeLight} />
          </Steam>
        </IconComp>
        <IconMap />
        <Window themeLight={themeLight} />
        <Clock />
        <IconBook />
      </HeaderSectionFon>

      {!hideContacts && (
        <HeaderContactWrapper>
          <HeaderSectionGetsite>
            <HeaderSectionConteiner>
              <Button
                title={headerHouse.buttonText}
                toOrderHeader
                handleClick={handleClickModal}
              >
                <RocketGetsiteIcon />
              </Button>
              <HeaderSectionLabel>
                {headerHouse.buttonTextAddition}
              </HeaderSectionLabel>
            </HeaderSectionConteiner>
          </HeaderSectionGetsite>

          <HeaderSectionContacts>
            <HeaderSectionConteiner>
              <Phones>
                <PhonesIcon />
                <PhonesConteiner>
                  <PhonesNumber
                    href="tel:+79772700930"
                    onClick={() =>
                      trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                        channel: "phone",
                        placement: "header",
                      })
                    }
                  >
                    +7 (977) 270-09-30
                  </PhonesNumber>
                </PhonesConteiner>
              </Phones>
              <PhonesTextWrapper>
                <PhonesText
                  href="https://t.me/amazurenk"
                  onClick={() =>
                    trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                      channel: "telegram",
                      placement: "header",
                    })
                  }
                >
                  Telegram
                </PhonesText>
                <PhonesTextDivide>/</PhonesTextDivide>
                <PhonesText
                  href="https://api.whatsapp.com/send?phone=79772700930"
                  onClick={() =>
                    trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                      channel: "whatsapp",
                      placement: "header",
                    })
                  }
                >
                  Whatsapp
                </PhonesText>
              </PhonesTextWrapper>
              <HeaderSectionLabel>{headerHouse.callText}</HeaderSectionLabel>
              <Emails>
                <EmailsIcon />
                <ContactsText
                  href="mailto:mazurenko-alexey@mail.ru"
                  onClick={() =>
                    trackEvent(AnalyticsEvent.CONTACT_CLICK, {
                      channel: "email",
                      placement: "header",
                    })
                  }
                >
                  mazurenko-alexey@mail.ru
                </ContactsText>
              </Emails>
            </HeaderSectionConteiner>
          </HeaderSectionContacts>
        </HeaderContactWrapper>
      )}
    </HeaderSectionWrapper>
  );
};

export default HeaderSection;
