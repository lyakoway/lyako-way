import { FC, PropsWithChildren, useEffect } from "react";

import {
  Overlay,
  Header,
  HeaderText,
  IconClose,
  Content,
  Footer,
  ModalComponent,
} from "./style";

import { ReactComponent as CloseOutline } from "src/common/icon/close.svg";

import Button from "src/ui/Button";

interface IModalProps {
  contentScroll?: boolean;
  titleIcon?: boolean;
  titleText: string;
  buttonText: string;
  openedModal: boolean;
  onCloseModal: () => void;
  onApply: () => void;
}

export const Modal: FC<PropsWithChildren<IModalProps>> = ({
  contentScroll,
  titleIcon,
  titleText,
  buttonText,
  openedModal,
  onCloseModal,
  onApply,
  children,
}) => {
  useEffect(() => {
    if (openedModal) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [openedModal]);

  return (
    <Overlay $opened={openedModal} onClick={onCloseModal}>
      <ModalComponent
        $opened={openedModal}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          {/* {titleIcon && <i className="material-icons">shopping_cart</i>} */}
          <HeaderText>{titleText}</HeaderText>
          <IconClose onClick={onCloseModal}>
            <CloseOutline width={24} height={24} />
          </IconClose>
        </Header>
        <Content contentScroll={contentScroll}>{children}</Content>
        <Footer>
          <Button title={buttonText} handleClick={onApply} />
        </Footer>
      </ModalComponent>
    </Overlay>
  );
};
