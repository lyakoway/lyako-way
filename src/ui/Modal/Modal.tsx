import { FC, useCallback, useEffect } from "react";

import { Overlay, IconClose, Content, ModalComponent } from "./style";

import { ReactComponent as CloseOutline } from "src/common/icon/close.svg";

import Button from "src/ui/Button";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { closeModal } from "src/reducers";
import { renderModalContent } from "./registry";

export const Modal: FC = () => {
  const { isOpened, content, width, backgroundOverlay, background } =
    useSelectorTyped(({ modal }) => modal);
  const dispatch = useDispatchTyped();

  const onCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  useEffect(() => {
    const root = document.documentElement;

    const unlock = () => {
      root.style.overflow = "";
      root.style.paddingRight = "";
      document.body.style.overflow = "";
    };

    if (isOpened) {
      // Ширина контента до блокировки. После overflow:hidden пропадает
      // скроллбар, контент расширяется вправо на его ширину и страница
      // «дёргается». Замеряем реальную дельту и компенсируем её паддингом,
      // чтобы контент остался на месте (если браузер сам зарезервировал
      // место под скроллбар — дельта будет 0 и паддинг не добавится).
      const widthBefore = root.clientWidth;
      root.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      const delta = root.clientWidth - widthBefore;
      if (delta > 0) {
        root.style.paddingRight = `${delta}px`;
      }
    } else {
      unlock();
    }

    return unlock;
  }, [isOpened]);

  if (isOpened && content) {
    return (
      <Overlay onClick={onCloseModal} $backgroundOverlay={backgroundOverlay}>
        <ModalComponent
          width={width}
          $background={background}
          onClick={(e) => e.stopPropagation()}
        >
          <IconClose $bright={!!background} onClick={onCloseModal}>
            <CloseOutline width={24} height={24} />
          </IconClose>
          <Content>{content ? renderModalContent(content) : null}</Content>
        </ModalComponent>
      </Overlay>
    );
  }
  return null;
};
