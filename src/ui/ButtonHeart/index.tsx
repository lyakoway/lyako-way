import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import {
  clearStatus,
  fetchLikes,
  fetchSendLike,
  setIdLikes,
  setLikes,
  setSantaShown,
} from "src/reducers";
import {
  ButtonWrapper,
  Label,
  Particle,
  ConfettiPiece,
  Loader,
  Loading,
} from "./style";
import {
  generateConfetti,
  generateParticles,
} from "src/ui/ButtonHeart/animations";
import { RequestLikes } from "src/common/enums/Likes/RequestLikes";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";

// hideCount — прячем счётчик у кнопки (в компактном попапе настроек он вылезал
// за границы). Полное число лайков показываем в тосте после оценки.
const ButtonHeart: React.FC<{ hideCount?: boolean }> = ({
  hideCount = false,
}) => {
  const {
    lang: { toast },
  } = useSelectorTyped(({ lang }) => lang);
  const { likes, status, loading } = useSelectorTyped(({ likes }) => likes);
  const toastNotify = useToastNotify();
  const dispatch = useDispatchTyped();

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
      id: string | number;
      x: number;
      y: number;
      size: number;
      rotate: number;
      color: string;
    }[]
  >([]);

  // likes в сторе инициализируются из localStorage (на клиенте), а на сервере
  // это 0 → рассинхрон гидрации. До монтирования показываем серверное значение
  // (0), после — реальное.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Загружаем лайки
  useEffect(() => {
    dispatch(fetchLikes({ idLikes: "heart_button" }));
  }, [dispatch]);

  useEffect(() => {
    if (status === RequestLikes.SUCCESS_LIKES) {
      // Полное число лайков (без ограничений) показываем здесь, в тосте.
      // Обычный пробел после фразы, затем число и сердце (nbsp между ними).
      toastNotify({
        title: `${toast.textHeart || "Спасибо за оценку!"} ${likes} ❤️`,
        type: "success",
      });
      dispatch(setSantaShown(false));
      dispatch(clearStatus());
    }
    if (status === RequestLikes.ERROR_LIKES) {
      toastNotify({
        title: toast.textError,
        type: "error",
      });
      dispatch(clearStatus());
    }
  }, [status]);

  const triggerAnimations = useCallback(() => {
    // --- Конфетти ---
    const confCount = 15;
    const newConfetti = generateConfetti(confCount);

    setConfetti((prev) => [...prev, ...newConfetti]);
    setTimeout(
      () =>
        setConfetti((prev) =>
          prev.filter((c) => !newConfetti.some((nc) => nc.id === c.id)),
        ),
      1500,
    );

    // --- Сердечки ---
    const count = Math.floor(Math.random() * 3) + 5;
    const newParticles = generateParticles(count);
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(
      () =>
        setParticles((prev) =>
          prev.filter((p) => !newParticles.some((np) => np.id === p.id)),
        ),
      1500,
    );

    // Анимация сердечка
    setAnimateHeart(true);
    setTimeout(() => setAnimateHeart(false), 700);
  }, []);

  const handleClick = async () => {
    if (loading) return; // запретить клик во время загрузки

    trackEvent(AnalyticsEvent.LIKE_CLICK, { likes: likes + 1 });
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
        toastNotify({
          title: toast.textError,
          type: "error",
        });
      });

    // Тост
    // toastNotify({
    //   title: `${toast.textHeart} ❤️` || "Спасибо за лайк ❤️",
    //   type: "success",
    // });
  };

  // Счётчик обрезаем до 7 символов, чтобы длинное число не ломало вёрстку.
  // Больше 3 знаков — показываем первые 3 и многоточие (напр. 211… ).
  const likesStr = String(likes);
  const shownLikes = !mounted
    ? "0"
    : likesStr.length > 3
      ? `${likesStr.slice(0, 3)}…`
      : likesStr;

  return (
    <ButtonWrapper onClick={handleClick} $animate={animateHeart}>
      <HeartIcon />
      {!hideCount && (
        <Label>
          {!loading && shownLikes}
          {loading && (
            <Loading>
              ❤️
              <Loader />
            </Loading>
          )}
        </Label>
      )}

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
