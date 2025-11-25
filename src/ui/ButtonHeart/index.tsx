import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MOBILE_660 } from "src/common/lib/media";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { useSelectorTyped } from "src/store";

// Добавляем расширение глобального окна
declare global {
  interface Window {
    external?: {
      AddFavorite?: (url: string, title: string) => void;
    };
    sidebar?: {
      addPanel?: (title: string, url: string, description: string) => void;
    };
  }
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  position: relative;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #eee;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${MOBILE_660} {
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Label = styled.div`
  position: absolute;
  color: white;
  line-height: 17px;
  font-size: 10px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-left: 28px;
  margin-top: 30px;
`;

const ButtonHeart: React.FC = () => {
  const {
    lang: { toast },
  } = useSelectorTyped(({ lang }) => lang);
  const [counter, setCounter] = useState<number>(0);
  const toastNotify = useToastNotify();

  // Загружаем текущее количество лайков при монтировании
  useEffect(() => {
    const url = window.location.href;
    fetch(`/api/likes?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => setCounter(data.count))
      .catch(() => setCounter(0));
  }, []);

  const handleClick = async () => {
    const url = window.location.href;
    const title = document.title;

    // Увеличиваем локально
    setCounter((prev) => prev + 1);
    toastNotify({
      title: toast.textHeart || "Спасибо за лайк ❤️",
      type: "success",
    });

    // Отправляем на сервер
    try {
      await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
    } catch (err) {
      console.error("Ошибка при отправке лайка:", err);
    }

    // Добавление в избранное (старый IE/Firefox)
    try {
      if (window.external?.AddFavorite) {
        window.external.AddFavorite(url, title);
      } else if (window.sidebar?.addPanel) {
        window.sidebar.addPanel(title, url, "");
      } else {
        alert(
          "Чтобы добавить страницу в избранное, нажмите Ctrl+D (или Cmd+D на Mac)"
        );
      }
    } catch (e) {
      console.log("Добавление в избранное не поддерживается");
    }
  };

  return (
    <ButtonWrapper onClick={handleClick}>
      <HeartIcon />
      <Label>{counter}</Label>
    </ButtonWrapper>
  );
};

export default ButtonHeart;
