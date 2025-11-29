import React, { useCallback, useEffect, useRef, useState } from "react";
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
import {
  generateConfetti,
  generateParticles,
} from "src/ui/ButtonHeart/animations";

const ButtonHeart: React.FC = () => {
  const {
    lang: { toast },
  } = useSelectorTyped(({ lang }) => lang);
  const { likes } = useSelectorTyped(({ likes }) => likes);
  const toastNotify = useToastNotify();
  const dispatch = useDispatchTyped();

  const [animateHeart, setAnimateHeart] = useState(false);
  const [shouldShowModal, setShouldShowModal] = useState(false);
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
      id: string | number;
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
  }, [dispatch]);

  // useEffect(() => {
  //   if (status === RequestLikes.SUCCESS_LIKES) {
  //     toastNotify({
  //       title: toast.textHeart || "Спасибо за лайк ❤️",
  //       type: "success",
  //     });
  //   }
  //   if (status === RequestLikes.ERROR_LIKES) {
  //     toastNotify({
  //       title: toast.textError,
  //       type: "error",
  //     });
  //   }
  // }, [status]);

  useEffect(() => {
    // if (shouldShowModal) {
    //   const timer = setTimeout(() => {
    //     dispatch(
    //       showModal({
    //         content: <AlertModal />,
    //         width: "auto",
    //         backgroundOverlay: "rgba(0, 0, 0, 0.4)",
    //       })
    //     );
    //     localStorage.setItem("fav-alert-shown", "true");
    //   }, 3000);
    //
    //   return () => clearTimeout(timer);
    // }
    dispatch(
      showModal({
        content: <AlertModal />,
        width: "auto",
        backgroundOverlay: "rgba(0, 0, 0, 0.4)",
      })
    );
  }, [dispatch, shouldShowModal]);

  const triggerAnimations = useCallback(() => {
    // --- Конфетти ---
    const confCount = 15;
    const newConfetti = generateConfetti(confCount);

    setConfetti((prev) => [...prev, ...newConfetti]);
    setTimeout(
      () =>
        setConfetti((prev) =>
          prev.filter((c) => !newConfetti.some((nc) => nc.id === c.id))
        ),
      1500
    );

    // --- Сердечки ---
    const count = Math.floor(Math.random() * 3) + 5;
    const newParticles = generateParticles(count);
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
  }, []);

  const handleClick = async () => {
    triggerAnimations();
    // Увеличиваем локальный счетчик и Redux

    const newCount = likes + 1;
    dispatch(setLikes(newCount));
    dispatch(setIdLikes("heart_button"));
    // Отправка на сервер
    dispatch(fetchSendLike({ idLikes: "heart_button", likes: newCount }))
      .unwrap()
      .catch(() => {
        // откат
        dispatch(setLikes(likes));
        // toastNotify({
        //   title: toast.textError,
        //   type: "error",
        // });
      });

    // Тост
    toastNotify({
      title: `${toast.textHeart} ❤️` || "Спасибо за лайк ❤️",
      type: "success",
    });

    // Проверка на мобильную платформу
    const ua = getMobileOperatingSystem();
    const mobile = isAndroid(ua) || isIos(ua);
    const shown = localStorage.getItem("fav-alert-shown");

    if (!shown && !mobile) setShouldShowModal(true);
  };

  return (
    <ButtonWrapper onClick={handleClick} $animate={animateHeart}>
      <HeartIcon />
      <Label>{likes}</Label>

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
