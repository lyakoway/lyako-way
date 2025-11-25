import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { useSelectorTyped } from "src/store";

// --- Анимации ---
const heartFly = keyframes`
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-40px) scale(0.7); }
`;

const bounce = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  50% { transform: scale(1.1); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

// --- Стили кнопки ---
const ButtonWrapper = styled.button<{ $animate?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 26px;
    height: 26px;
    animation: ${({ $animate }) => ($animate ? bounce : "none")} 0.5s ease;
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

const Particle = styled.div<{
  x: number;
  size: number;
  rotate: number;
  color: string;
}>`
  position: absolute;
  top: -5px;
  left: 20px;
  pointer-events: none;
  transform: translateX(${(p) => p.x}px) rotate(${(p) => p.rotate}deg)
    scale(${(p) => p.size});
  color: ${(p) => p.color};
  animation: ${heartFly} 0.9s ease-out forwards;
  font-size: 14px;
`;

// --- Модальный кастомный alert ---
const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalWindow = styled.div`
  background: #1d1d1d;
  border-radius: 14px;
  padding: 22px 26px;
  width: 280px;
  color: white;
  text-align: center;
  animation: pop 0.25s ease;
  @keyframes pop {
    0% {
      transform: scale(0.7);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  margin-top: 18px;
  padding: 8px 18px;
  border: none;
  background: #ff4d6d;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
    background: #ff6b85;
  }
`;

const AlertModal = ({ onClose }: { onClose: () => void }) => (
  <ModalBackdrop onClick={onClose}>
    <ModalWindow onClick={(e) => e.stopPropagation()}>
      <div style={{ fontSize: "16px", marginBottom: "10px" }}>
        ⭐ Добавить в избранное
      </div>
      <div style={{ opacity: 0.9 }}>
        Нажми <b>Ctrl+D</b> (или <b>Cmd+D</b> на Mac), чтобы сохранить страницу
      </div>
      <CloseButton onClick={onClose}>OK</CloseButton>
    </ModalWindow>
  </ModalBackdrop>
);

// =====================
// ===== COMPONENT =====
// =====================
const ButtonHeart: React.FC = () => {
  const {
    lang: { toast },
  } = useSelectorTyped(({ lang }) => lang);
  const toastNotify = useToastNotify();

  const [counter, setCounter] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; x: number; size: number; rotate: number; color: string }[]
  >([]);
  const [showModal, setShowModal] = useState(false);

  // Загружаем лайки при монтировании
  useEffect(() => {
    const url = window.location.href;
    fetch(`/api/likes?url=${encodeURIComponent(url)}`)
      .then((r) => r.json())
      .then((d) => setCounter(d.count ?? 0))
      .catch(() => {});
  }, []);

  // --- Обработка клика ---
  const handleClick = async () => {
    const url = window.location.href;
    const title = document.title;

    // Анимация сердца
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);

    // Генерация частиц
    const count = Math.floor(Math.random() * 3) + 5; // 5–8 шт
    const newParticles = Array.from({ length: count }).map(() => ({
      id: Date.now() + Math.random(),
      x: Math.random() * 60 - 30,
      size: Math.random() * 0.6 + 0.7,
      rotate: Math.random() * 360 - 180,
      color: ["#ff3d6e", "#ff6b9a", "#ff95b3"][Math.floor(Math.random() * 3)],
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 900);

    // Локально увеличиваем
    setCounter((prev) => prev + 1);

    // Тост
    toastNotify({
      title: toast.textHeart || "Спасибо за лайк ❤️",
      type: "success",
    });

    // Отправка на сервер
    try {
      await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
    } catch (err) {
      console.error("Ошибка при отправке лайка:", err);
    }

    // --- Кастомный alert один раз с задержкой ---
    if (!localStorage.getItem("fav-alert-shown")) {
      setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("fav-alert-shown", "true");
      }, 3000); // 3 секунды
    }
  };

  return (
    <>
      <ButtonWrapper onClick={handleClick} $animate={animate}>
        <HeartIcon />
        <Label>{counter}</Label>
        {particles.map((p) => (
          <Particle
            key={p.id}
            x={p.x}
            size={p.size}
            rotate={p.rotate}
            color={p.color}
          >
            ❤️
          </Particle>
        ))}
      </ButtonWrapper>

      {showModal && <AlertModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ButtonHeart;
