import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { closeModal } from "src/reducers";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { MOBILE_560 } from "src/common/lib/media";
import ButtonForm from "src/ui/ButtonForm";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: Inter;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.color.basic.borderModal};
  padding: 20px 60px 20px 20px;

  span {
    padding-right: 16px;
  }

  @media ${MOBILE_560} {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  padding: 0 20px;

  b {
    color: #ff8560;
    letter-spacing: 4px;
    font-size: 22px;
    font-weight: 400;
    text-shadow: 1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white,
      3px 3px 6px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 20px 20px 20px;
`;

// =========================
// основной компонент
// =========================

const AlertModal: React.FC = () => {
  const dispatch = useDispatchTyped();
  const {
    lang: { alertHeart },
  } = useSelectorTyped(({ lang }) => lang);

  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [isIos, setIsIos] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onClose = () => dispatch(closeModal());

  // detect platforms
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    const mobile = /iphone|ipad|ipod|android|mobile/.test(ua);
    const ios = /iphone|ipad|ipod/.test(ua);

    setIsMobile(mobile);
    setIsIos(ios);
  }, []);

  // catch PWA install event
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!promptEvent) return;

    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    setPromptEvent(null);
  };

  // =========================
  // RENDER LOGIC
  // =========================

  const renderContent = () => {
    // ---- Android (Chrome/Edge) PWA install available
    if (isMobile && promptEvent) {
      return (
        <>
          <Text>Добавь страницу на главный экран</Text>
          <Text>Чтобы получить быстрый доступ</Text>
          <ButtonWrapper>
            <ButtonForm title="Добавить" handleClick={handleInstall} />
          </ButtonWrapper>
        </>
      );
    }

    // ---- iOS Safari
    if (isIos) {
      return (
        <>
          <Text>
            На iPhone добавление работает через меню{" "}
            <b>Поделиться → На экран «Домой»</b>
          </Text>
          <Text>Используй эту функцию, чтобы сохранить страницу</Text>
        </>
      );
    }

    // ---- Desktop browsers
    return (
      <>
        <Text>
          Нажми <b>Ctrl+D</b> (или <b>Cmd+D</b> на Mac),
        </Text>
        <Text>чтобы сохранить страницу в избранное браузера</Text>
      </>
    );
  };

  return (
    <Wrapper>
      <Header>
        <span>⭐</span>
        Добавить в избранное
      </Header>

      {renderContent()}

      <ButtonWrapper>
        <ButtonForm title="ок" handleClick={onClose} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default AlertModal;
