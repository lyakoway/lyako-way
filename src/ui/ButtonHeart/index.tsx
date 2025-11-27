import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { fetchLikes, fetchSendLike, setIdLikes, setLikes } from "src/reducers";

// --- Анимации ---
const bounce = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  50% { transform: scale(1.1); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const heartFly = keyframes`
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-80px) scale(0.7); }
`;

const confettiFly = (x: number, y: number, rotate: number) => keyframes`
  0% { transform: translate(0,0) rotate(0deg); opacity: 1; }
  100% { transform: translate(${x}px, ${y}px) rotate(${rotate}deg); opacity: 0; }
`;

// --- Стили ---
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
    animation: ${({ $animate }) =>
      $animate
        ? css`
            ${bounce} 0.7s ease
          `
        : "none"};
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

// Частицы сердечек
const Particle = styled.div<{
  x: number;
  size: number;
  rotate: number;
  color: string;
  $fly?: boolean;
}>`
  position: absolute;
  top: -5px;
  left: 20px;
  pointer-events: none;
  transform: translateX(${(p) => p.x}px) rotate(${(p) => p.rotate}deg)
    scale(${(p) => p.size});
  color: ${(p) => p.color};
  font-size: 14px;
  animation: ${(p) =>
    p.$fly
      ? css`
          ${heartFly} 1.5s ease-out forwards
        `
      : css`
            none
          `};
`;

// Конфетти
const ConfettiPiece = styled.div<{
  x: number;
  y: number;
  size: number;
  rotate: number;
  color: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size * 0.4}px;
  background-color: ${(p) => p.color};
  border-radius: 2px;
  pointer-events: none;
  animation: ${(p) => confettiFly(p.x, p.y, p.rotate)} 1.5s ease-out forwards;
`;

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
  const { likes } = useSelectorTyped(({ likes }) => likes);
  const toastNotify = useToastNotify();
  const dispatch = useDispatchTyped();

  const [counter, setCounter] = useState(0);
  const [animateHeart, setAnimateHeart] = useState(false);
  const [particles, setParticles] = useState<
    {
      id: number;
      x: number;
      size: number;
      rotate: number;
      color: string;
      $fly?: boolean;
    }[]
  >([]);
  const [confetti, setConfetti] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      rotate: number;
      color: string;
    }[]
  >([]);
  const [showModal, setShowModal] = useState(false);

  // Загружаем лайки
  useEffect(() => {
    // const url = window.location.href;
    // fetch(`/api/likes?url=${encodeURIComponent(url)}`)
    //   .then((r) => r.json())
    //   .then((d) => setCounter(d.count ?? 0))
    //   .catch(() => {});

    dispatch(fetchLikes({ idLikes: "heart_button" }));
  }, []);

  const handleClick = async () => {
    const url = window.location.href;

    // --- Конфетти ---
    const confCount = 15;
    const newConfetti = Array.from({ length: confCount }).map(() => ({
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 120,
      y: -(Math.random() * 100 + 80),
      size: Math.random() * 6 + 4,
      rotate: Math.random() * 360,
      color: ["#FFD700", "#FF4500", "#1E90FF", "#32CD32", "#FF69B4"][
        Math.floor(Math.random() * 5)
      ],
    }));
    setConfetti((prev) => [...prev, ...newConfetti]);
    setTimeout(
      () =>
        setConfetti((prev) =>
          prev.filter((c) => !newConfetti.some((nc) => nc.id === c.id))
        ),
      1500
    );

    // --- Сердечки (одновременно с конфетти) ---
    const count = Math.floor(Math.random() * 3) + 5;
    const newParticles = Array.from({ length: count }).map(() => ({
      id: Date.now() + Math.random(),
      x: Math.random() * 60 - 30,
      size: Math.random() * 0.6 + 0.7,
      rotate: Math.random() * 360 - 180,
      color: ["#ff3d6e", "#ff6b9a", "#ff95b3"][Math.floor(Math.random() * 3)],
      $fly: true,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(
      () =>
        setParticles((prev) =>
          prev.filter((p) => !newParticles.some((np) => np.id === p.id))
        ),
      1500
    );

    // Анимация сердечка
    setAnimateHeart(true);
    setTimeout(() => setAnimateHeart(false), 700);

    // Локальный инкремент
    setCounter((prev) => {
      const newCount = prev + 1;
      dispatch(setLikes(newCount));
      dispatch(setIdLikes("heart_button"));
      // Отправка на сервер
      dispatch(fetchSendLike({ idLikes: "heart_button", likes: newCount }));
      return newCount;
    });

    // Тост
    toastNotify({
      title: toast.textHeart || "Спасибо за лайк ❤️",
      type: "success",
    });

    // alert один раз с задержкой 3 сек
    if (!localStorage.getItem("fav-alert-shown")) {
      setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("fav-alert-shown", "true");
      }, 3000);
    }
  };

  return (
    <>
      <ButtonWrapper onClick={handleClick} $animate={animateHeart}>
        <HeartIcon />
        <Label>{counter}</Label>

        {particles.map((p) => (
          <Particle
            key={p.id} // используем для React
            x={p.x}
            size={p.size}
            rotate={p.rotate}
            color={p.color}
            $fly={p.$fly}
          >
            ❤️
          </Particle>
        ))}

        {confetti.map((c) => (
          <ConfettiPiece
            key={c.id} // ключ для React
            x={c.x}
            y={c.y}
            size={c.size}
            rotate={c.rotate}
            color={c.color}
          />
        ))}
      </ButtonWrapper>

      {showModal && <AlertModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ButtonHeart;
