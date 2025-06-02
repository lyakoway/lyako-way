import { FC, useCallback, useEffect } from "react";

import { Overlay, IconClose, Content, ModalComponent } from "./style";

import { ReactComponent as CloseOutline } from "src/common/icon/close.svg";

import Button from "src/ui/Button";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { closeModal } from "src/reducers";

export const Modal: FC = () => {
  const { isOpened, content, width, backgroundOverlay } = useSelectorTyped(
    ({ modal }) => modal
  );
  const dispatch = useDispatchTyped();

  console.log("backgroundOverlay", backgroundOverlay);

  const onCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  useEffect(() => {
    if (isOpened) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [isOpened]);

  if (isOpened && content) {
    return (
      <Overlay onClick={onCloseModal} backgroundOverlay={backgroundOverlay}>
        <ModalComponent width={width} onClick={(e) => e.stopPropagation()}>
          <IconClose onClick={onCloseModal}>
            <CloseOutline width={24} height={24} />
          </IconClose>
          {content}
        </ModalComponent>
      </Overlay>
    );
  }
  return null;
};
