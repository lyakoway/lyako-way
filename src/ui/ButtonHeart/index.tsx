import React, { useEffect, useState } from "react";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import {
  fetchLikes,
  fetchSendLike,
  setIdLikes,
  setLikes,
  showModal,
} from "src/reducers";
import { ButtonWrapper, Label, Particle, ConfettiPiece } from "./style";
import AlertModal from "src/components/AlertModal";
import { getMobileOperatingSystem, isAndroid, isIos } from "src/common/utils";

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

  // Загружаем лайки
  useEffect(() => {
    dispatch(fetchLikes({ idLikes: "heart_button" }));
  }, []);

  const handleClick = async () => {
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

    // Функция для определения "мобильности" браузера
    function getProductsHref() {
      const userAgent = getMobileOperatingSystem();
      return isAndroid(userAgent) || isIos(userAgent);
    }
    const productsHref = getProductsHref();

    // alert один раз с задержкой 3 сек
    if (localStorage.getItem("fav-alert-shown") && !productsHref) {
      setTimeout(() => {
        dispatch(
          showModal({
            content: <AlertModal />,
            width: "auto",
            backgroundOverlay: "rgba(0, 0, 0, 0.4)",
          })
        );
        localStorage.setItem("fav-alert-shown", "true");
      }, 3000);
    }
  };

  return (
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
  );
};

export default ButtonHeart;
