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
  Skype,
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
import { ReactComponent as SkypeIcon } from "src/common/icon/contacts/SkypeHeaderIcon.svg";

import Button from "src/ui/Button";
import LampSwitch from "src/ui/LampSwitch";

import { showModal } from "src/reducers";
import ContactForm from "src/components/ContactForm";
import { isNewYearPeriod } from "src/common/utils/isNewYearPeriod";
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
          {/* Светлая — SSR-дефолт и LCP: priority => next вставит preload +
              fetchpriority=high. Тёмная — второй слой, кроссфейд по теме. */}
          <IconCompImage
            src={myIconComp}
            alt=""
            aria-hidden
            fill
            sizes="697px"
            priority
            fetchPriority="high"
            $show={themeLight}
          />
          <IconCompImage
            src={myIconCompn}
            alt=""
            aria-hidden
            fill
            sizes="697px"
            $show={!themeLight}
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
        <IconMap $themeLight={themeLight} />
        <Window themeLight={themeLight} />
        <Clock />
        <IconBook $themeLight={themeLight} />
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
                  <PhonesNumber href="tel:+79998121975">
                    +7 (999) 812-19-75
                  </PhonesNumber>
                  <PhonesNumber href="tel:+79772700930">
                    +7 (977) 270-09-30
                  </PhonesNumber>
                </PhonesConteiner>
              </Phones>
              <PhonesTextWrapper>
                <PhonesText href="https://t.me/amazurenk">Telegram</PhonesText>
                <PhonesTextDivide>/</PhonesTextDivide>
                <PhonesText href="https://api.whatsapp.com/send?phone=79772700930">
                  Whatsapp
                </PhonesText>
              </PhonesTextWrapper>
              <HeaderSectionLabel>{headerHouse.callText}</HeaderSectionLabel>
              <Emails>
                <EmailsIcon />
                <ContactsText href="mailto:mazurenko-alexey@mail.ru">
                  mazurenko-alexey@mail.ru
                </ContactsText>
              </Emails>
              <Skype>
                <SkypeIcon />
                <ContactsText href="skype:aleks10_0?chat">
                  aleks10_0
                </ContactsText>
              </Skype>
            </HeaderSectionConteiner>
          </HeaderSectionContacts>
        </HeaderContactWrapper>
      )}
    </HeaderSectionWrapper>
  );
};

export default HeaderSection;
